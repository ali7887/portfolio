import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Log the submission (in production, you'd send this to an email service)
    console.log('Contact form submission:', { name, email, subject, message });

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In production, you would:
    // 1. Send email using a service like Resend, SendGrid, or Nodemailer
    // 2. Store submission in a database
    // 3. Send notification to admin

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

