# EmailJS Integration Guide

This guide explains how to set up EmailJS for the Tonmoy Infrastructure Vision contact and appointment forms.

## What is EmailJS?

EmailJS allows you to send emails directly from client-side JavaScript code without needing a server. It's perfect for contact forms and appointment requests.

## Setting Up EmailJS

### Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for an account
2. The free tier includes 200 emails per month, which is sufficient for most small to medium websites

### Step 2: Set Up an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Give your service a name (e.g., "TonmoyIV Service")
6. Note down the **Service ID**

### Step 3: Create Email Templates

#### Contact Form Template

1. In your EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Design your contact form email with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{company}}` - Sender's company
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
4. Save the template and note down the **Template ID**

#### Appointment Form Template

1. Click "Create New Template" again
2. Design your appointment request email with the following variables:
   - `{{from_name}}` - Client's name
   - `{{from_email}}` - Client's email
   - `{{company}}` - Client's company
   - `{{phone}}` - Client's phone number
   - `{{meeting_date}}` - Requested meeting date
   - `{{meeting_time}}` - Requested time slot
   - `{{meeting_topic}}` - Topic of the meeting
   - `{{message}}` - Additional details
   - `{{to_name}}` - Your name (Tonmoy Talukdar)
3. Save the template and note down the **Template ID**

### Step 4: Configure Environment Variables

Create a `.env.local` file in the root of your project and add the following variables:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
NEXT_PUBLIC_EMAILJS_APPOINTMENT_TEMPLATE_ID=your_appointment_template_id
```

Replace the placeholders with your actual EmailJS credentials.

## How It Works

The website uses EmailJS in two key places:

1. **Contact Form** (`components/forms/contact-form.tsx`)
   - Users can send general inquiries
   - Form collects name, email, company, subject, and message

2. **Appointment Form** (`components/forms/appointment-form.tsx`)
   - Users can request a meeting with Tonmoy
   - Form collects name, email, company, phone, preferred date/time, topic, and additional details

When a user submits either form, the data is sent to EmailJS, which uses your configured email service to deliver the message according to the specified template.

## Testing

To test your EmailJS integration:

1. Fill out and submit the contact form
2. Check the inbox of the email account you configured in your EmailJS service
3. Ensure all variables are correctly populated in the received email
4. Repeat the process with the appointment form

## Troubleshooting

- If emails aren't being sent, check your EmailJS dashboard for error messages
- Verify that all environment variables are correctly set
- Make sure your email service is properly authenticated
- Check that the template variables match those used in the form components

## Production Deployment

When deploying to production:

1. Set up the same environment variables on your hosting provider
2. Consider upgrading to a paid EmailJS plan if you expect more than 200 emails per month
3. Monitor your EmailJS dashboard to track usage and ensure reliable delivery 