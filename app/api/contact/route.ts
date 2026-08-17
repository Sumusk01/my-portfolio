import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // TODO: Connect this route to a real email or form service such as Formspree, Resend, or a custom backend.
  return NextResponse.json({ status: 'queued' }, { status: 200 });
}
