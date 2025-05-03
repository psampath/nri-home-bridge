
// API route for sending emails via SendGrid
const sgMail = require('@sendgrid/mail');

exports.handler = async function(event, context) {
  // Set SendGrid API key
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
  try {
    // Parse request body
    const body = JSON.parse(event.body);
    const { name, email, phone, serviceType, location, message, to } = body;
    
    // Format service type for readability
    const formattedServiceType = serviceType
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Prepare email content
    const msg = {
      to,
      from: 'no-reply@nrihomeconnect.com', // Change to your verified sender
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service Type: ${formattedServiceType}
Property Location: ${location}
Message: ${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
<p><strong>Service Type:</strong> ${formattedServiceType}</p>
<p><strong>Property Location:</strong> ${location}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };
    
    // Send email
    await sgMail.send(msg);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
