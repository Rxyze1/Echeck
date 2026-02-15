const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';

export const POST = async (request) => {
    try {
        const { email } = await request.json();

        const response = await fetch(`${BACKEND_URL}/api/emails/accept-terms`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();
        return Response.json(data);
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
};

export const GET = async (request) => {
    try {
        const response = await fetch(`${BACKEND_URL}/api/emails/emails`);
        const data = await response.json();
        return Response.json(data);
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
};

// ✅ ADD THIS EXPORT - Client-side helper
export const acceptTermsAPI = async (email) => {
    const response = await fetch('/api/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    });

    if (!response.ok) throw new Error('Failed to accept terms');
    return response.json();
};