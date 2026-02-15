'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

export const TermsCard = () => {
    const [showCard, setShowCard] = useState(false);
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [googleLoaded, setGoogleLoaded] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);

    // ✅ Google Sign-In Callback
    const handleGoogleSignIn = async (response) => {
        try {
            console.log('✅ Google Sign-In response received');
            
            if (!response.credential) {
                throw new Error('No credential in response');
            }

            // Decode JWT token to get email
            const base64Url = response.credential.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(
                atob(base64)
                    .split('')
                    .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                    .join('')
            );
            
            const decoded = JSON.parse(jsonPayload);
            const userEmail = decoded.email;
            
            console.log('✅ Email extracted:', userEmail);
            
            // Send to API
            await sendToAPI(userEmail);
        } catch (error) {
            console.error('❌ Google error:', error);
            setMessage('❌ Error decoding email: ' + error.message);
        }
    };

    // ✅ Send Email to API
    const sendToAPI = async (userEmail) => {
        setLoading(true);
        setMessage('📤 Sending...');
        
        try {
            console.log('📤 Sending email to API:', userEmail);
            
            const response = await fetch('/api/emails', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: userEmail }),
            });

            console.log('📊 Response status:', response.status);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `API error: ${response.status}`);
            }

            const data = await response.json();
            console.log('✅ API Success:', data);

            // ✅ Set email state first
            setEmail(userEmail);
            
            // ✅ Save to localStorage
            localStorage.setItem('termsAccepted', 'true');
            localStorage.setItem('userEmail', userEmail);
            
            setMessage('✅ Terms accepted!');
            
            // ✅ Close modal after delay
            setTimeout(() => {
                console.log('🔄 Closing modal...');
                setShowCard(false);
                document.body.style.overflow = 'auto';
            }, 2000);
        } catch (error) {
            console.error('❌ API Error:', error);
            setMessage('❌ ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    // ✅ Check localStorage on mount
    useEffect(() => {
        console.log('🔍 Checking localStorage...');
        const hasAccepted = localStorage.getItem('termsAccepted');
        const savedEmail = localStorage.getItem('userEmail');
        
        console.log('hasAccepted:', hasAccepted, 'savedEmail:', savedEmail);
        
        if (!hasAccepted) {
            setShowCard(true);
            document.body.style.overflow = 'hidden';
        } else {
            setShowCard(false);
            if (savedEmail) {
                setEmail(savedEmail);
            }
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    // ✅ Render Google Button when ready
    useEffect(() => {
        if (termsAccepted && googleLoaded && showCard) {
            console.log('📌 Rendering Google button...');
            
            const timer = setTimeout(() => {
                try {
                    const buttonContainer = document.getElementById('google-signin-button');
                    
                    if (buttonContainer && window.google) {
                        // Clear previous content
                        buttonContainer.innerHTML = '';
                        
                        window.google.accounts.id.renderButton(buttonContainer, {
                            theme: 'outline',
                            size: 'large',
                            width: '100%',
                            text: 'signin_with',
                        });
                        
                        console.log('✅ Google button rendered successfully');
                    } else {
                        console.warn('⚠️ Button container or google not found');
                    }
                } catch (err) {
                    console.error('❌ Error rendering Google button:', err);
                }
            }, 200);

            return () => clearTimeout(timer);
        }
    }, [termsAccepted, googleLoaded, showCard]);

    const handleAccept = () => {
        console.log('✅ Accept clicked');
        setMessage('');
        setTermsAccepted(true);
    };

    const handleReject = () => {
        console.log('❌ Reject clicked');
        setMessage('⚠️ You must accept to continue');
    };

    if (!showCard) return null;

    return (
        <>
            {/* GOOGLE SCRIPT */}
            <Script 
                src="https://accounts.google.com/gsi/client" 
                async 
                defer
                onLoad={() => {
                    console.log('✅ Google SDK loaded');
                    
                    if (window.google) {
                        window.google.accounts.id.initialize({
                            client_id: "187941006675-vr6onea84ka6lg9ca5s0llelhkgv8ae0.apps.googleusercontent.com",
                            callback: handleGoogleSignIn,
                            ux_mode: 'popup',
                        });
                        setGoogleLoaded(true);
                        console.log('✅ Google initialized');
                    }
                }}
            />

            {/* OVERLAY */}
            <div className="fixed inset-0 bg-black/70 backdrop-blur-xl z-40" />

            {/* MODAL */}
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl shadow-black/60">
                    
                    {/* Glass Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 via-black/85 to-zinc-950/95 backdrop-blur-2xl" />
                    
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-600/20 via-transparent to-red-900/20 pointer-events-none" />
                    
                    {/* Border */}
                    <div className="absolute inset-0 rounded-3xl border border-red-900/40 pointer-events-none" />

                    {/* Content */}
                    <div className="relative p-6 sm:p-8 z-10">
                        
                        {/* Header */}
                        <div className="mb-6 text-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/40 border border-red-900/60 mb-4 backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                <span className="text-xs text-red-300 font-bold tracking-wider">VERIFICATION</span>
                            </div>
                            
                            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                                Terms & Conditions
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-400 font-light tracking-wide">
                                Please read and accept our terms
                            </p>
                        </div>
                        
                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent mb-6" />

                        {/* Description */}
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                            By using this website, you agree to our terms and conditions. 
                            We respect your privacy and will use your information responsibly.
                        </p>

                        {/* STEP 1: Accept/Reject Terms */}
                        {!termsAccepted && (
                            <>
                                {message && (
                                    <div className="mb-6 p-3 rounded-xl bg-yellow-900/30 border border-yellow-700/60 backdrop-blur-md">
                                        <p className="text-center text-xs sm:text-sm font-semibold text-yellow-300">
                                            ⚠️ {message}
                                        </p>
                                    </div>
                                )}
                                
                                <div className="flex gap-3">
                                    <button
                                        onClick={handleReject}
                                        disabled={loading}
                                        className="flex-1 px-4 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base bg-zinc-800/60 border border-zinc-700/60 text-gray-300 hover:bg-zinc-700/60 hover:border-red-900/40 transition-all duration-300 backdrop-blur-md shadow-lg disabled:opacity-50"
                                    >
                                        Reject
                                    </button>
                                    <button
                                        onClick={handleAccept}
                                        disabled={loading}
                                        className="flex-1 px-4 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-600/40 hover:shadow-red-500/60 active:scale-95 disabled:opacity-50"
                                    >
                                        Accept
                                    </button>
                                </div>
                            </>
                        )}

                        {/* STEP 2: Google Sign-In */}
                        {termsAccepted && !email && (
                            <>
                                <div className="mb-6 p-4 rounded-xl bg-blue-950/30 border border-blue-900/40 backdrop-blur-md">
                                    <p className="text-center text-sm text-blue-300 font-light">
                                        👇 Sign in with Google to verify your email
                                    </p>
                                </div>
                                
                                <div className="mb-6 flex justify-center min-h-[50px]">
                                    <div 
                                        id="google-signin-button" 
                                        className="w-full flex justify-center"
                                    />
                                </div>

                                {message && (
                                    <div className={`p-3 rounded-xl backdrop-blur-md border ${
                                        message.includes('✅') 
                                            ? 'bg-green-900/30 border-green-700/60' 
                                            : 'bg-red-900/30 border-red-700/60'
                                    }`}>
                                        <p className={`text-center text-xs sm:text-sm font-semibold ${
                                            message.includes('✅') ? 'text-green-300' : 'text-red-300'
                                        }`}>
                                            {message}
                                        </p>
                                    </div>
                                )}

                                {loading && (
                                    <div className="mt-4 flex justify-center">
                                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-red-500"></div>
                                    </div>
                                )}
                            </>
                        )}

                        {/* STEP 3: Success */}
                        {email && (
                            <div className="space-y-4 text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                                        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 rounded-full opacity-20 animate-pulse" />
                                        <div className="absolute inset-2 bg-gradient-to-r from-green-600 to-green-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '0.2s' }} />
                                        <div className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl">
                                            ✅
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-gradient-to-br from-green-950/40 to-green-900/20 border border-green-700/60 backdrop-blur-md shadow-lg shadow-green-600/10">
                                    <p className="text-xs text-green-400 font-bold tracking-wider uppercase mb-1">
                                        ✓ Email Verified
                                    </p>
                                    <p className="font-bold text-white text-base sm:text-lg">{email}</p>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-green-300 font-bold text-base sm:text-lg">
                                        🎉 Terms Accepted!
                                    </p>
                                    <p className="text-gray-400 text-xs sm:text-sm font-light">
                                        Redirecting you to the platform...
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Custom Styles for Google Button */}
            <style jsx global>{`
                #google-signin-button {
                    display: flex !important;
                    justify-content: center !important;
                    width: 100% !important;
                }

                #google-signin-button > div {
                    filter: brightness(1.1) contrast(1.1) !important;
                }

                #google-signin-button button {
                    background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,248,248,0.95) 100%) !important;
                    border: 1px solid rgba(220, 38, 38, 0.3) !important;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2) !important;
                    transition: all 0.3s ease !important;
                    width: 100% !important;
                }

                #google-signin-button button:hover {
                    background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 100%) !important;
                    box-shadow: 0 12px 40px rgba(220, 38, 38, 0.25) !important;
                }
            `}</style>
        </>
    );
};

export default TermsCard;