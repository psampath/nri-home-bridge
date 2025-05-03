
import type { SendEmailProps } from '../types/email';

export const sendEmail = async ({ name, email, phone, serviceType, location, message, to }: SendEmailProps) => {
  // In a production environment, you would use server-side code to protect your API key
  // This is a fallback method for demo/development purposes only
  const API_KEY = process.env.SENDGRID_API_KEY || 'YOUR_SENDGRID_API_KEY';
  
  const formattedServiceType = serviceType
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    
  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: to }],
          subject: `New Contact Form Submission from ${name}`,
        },
      ],
      from: { email: 'no-reply@nrihomeconnect.com', name: 'NRI Home Connect' },
      content: [
        {
          type: 'text/html',
          value: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Service Type:</strong> ${formattedServiceType}</p>
            <p><strong>Property Location:</strong> ${location}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        },
      ],
    }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to send email');
  }
  
  return await response.json();
};
