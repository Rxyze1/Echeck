'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SocialProofNotifications() {
  const [notifications, setNotifications] = useState([]);

  // Indian names database
  const indianNames = [
    { name: 'Rahul Sharma', city: 'Jaipur' },
    { name: 'Pramod Patel', city: 'Jaipur' },
    { name: 'Amit Kumar', city: 'Jaipur' },
    { name: 'Shivam Singh', city: 'Jaipur' },
    { name: 'Vikram Reddy', city: 'Jaipur' },
    { name: 'Anjun Gupta', city: 'Jaipur' },
    { name: 'Ayush Mehta', city: 'Jaipur' },
    { name: 'Dhruv Iyer', city: 'Jaipur' },
    { name: 'Rohan Verma', city: 'Jaipur' },
    { name: 'Rahul Sharma', city: 'Jaipur' },
    { name: 'Siddharth Joshi', city: 'Jaipur' },
    { name: 'Palash Desai', city: 'Jaipur' },
    { name: 'Karan Malhotra', city: 'Jaipur' },
    { name: 'Ashutosh Kapoor', city: 'Jaipur' },
    { name: 'Aditya Rao', city: 'Jaipur' },
    { name: 'Neeten Pillai', city: 'Jaipur' },
    { name: 'Nikhil Agarwal', city: 'Jaipur' },
    { name: 'Ritu Bhatt', city: 'Jaipur' },
    { name: 'Varun Chopra', city: 'Jaipur' },
    { name: 'Tanver Shah', city: 'Jaipur' },
  ];

  // Services
  const services = [
    'Premium Companionship',
    'VIP Experience Package',
    'Elite Service Booking',
    'Exclusive Night Service',
    'Premium Call Service',
    'Luxury Companion Package',
    'Special Event Booking',
    'Private Session Service',
  ];

  // Reviews
  const reviews = [
    'Absolutely amazing experience! 🔥',
    'Best service in Jaipur! Highly recommended ⭐',
    'Professional and discreet. Will book again! 💯',
    'Exceeded all my expectations! 😍',
    'Top-notch service! Worth every penny 🌟',
    'Incredible experience! Thank you! ❤️',
    'Very professional and elegant 👌',
    'Outstanding quality! Simply the best! 🎯',
  ];

  // Get initials for avatar
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  // Get random gradient for avatar
  const getAvatarGradient = (name) => {
    const gradients = [
      'bg-gradient-to-br from-red-500 to-pink-600',
      'bg-gradient-to-br from-purple-500 to-pink-600',
      'bg-gradient-to-br from-orange-500 to-red-600',
      'bg-gradient-to-br from-rose-500 to-red-600',
      'bg-gradient-to-br from-fuchsia-500 to-pink-600',
      'bg-gradient-to-br from-red-600 to-rose-600',
      'bg-gradient-to-br from-pink-500 to-red-600',
      'bg-gradient-to-br from-violet-500 to-fuchsia-600',
    ];
    const index = name.length % gradients.length;
    return gradients[index];
  };

  // Get random time (minutes ago)
  const getRandomTime = () => {
    const minutes = Math.floor(Math.random() * 30) + 1;
    if (minutes === 1) return 'Just now';
    if (minutes < 5) return `${minutes} minutes ago`;
    return `${minutes} min ago`;
  };

  // Generate notification
  const generateNotification = () => {
    const person = indianNames[Math.floor(Math.random() * indianNames.length)];
    const type = Math.random() < 0.5 ? 'booking' : 'review';
    
    const notification = {
      id: Date.now() + Math.random(),
      person,
      type,
      time: getRandomTime(),
      service: services[Math.floor(Math.random() * services.length)],
      review: reviews[Math.floor(Math.random() * reviews.length)],
    };

    return notification;
  };

  // Add notification
  const addNotification = () => {
    const newNotification = generateNotification();
    
    setNotifications(prev => {
      // Keep max 3 notifications
      const updated = [newNotification, ...prev].slice(0, 3);
      return updated;
    });

    // Auto remove after 6 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
    }, 6000);
  };

  // Close notification manually
  const closeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Start generating notifications
  useEffect(() => {
    // First notification after 3 seconds
    const firstTimeout = setTimeout(() => {
      addNotification();
    }, 3000);

    // Then every 8-15 seconds
    const interval = setInterval(() => {
      addNotification();
    }, Math.random() * 7000 + 8000); // 8-15 seconds

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed top-24 right-4 z-[998] flex flex-col gap-3 pointer-events-none max-w-[90vw] sm:max-w-md">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="pointer-events-auto"
          >
            {notification.type === 'booking' ? (
              // Booking Notification - Dark Theme with Red Accent
              <motion.div 
                className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl shadow-2xl border border-red-500/30 p-4 backdrop-blur-sm overflow-hidden"
                whileHover={{ scale: 1.02, borderColor: 'rgba(239, 68, 68, 0.6)' }}
                transition={{ duration: 0.2 }}
              >
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-pink-600/10 to-red-600/10 animate-pulse" />
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                
                {/* Close Button */}
                <motion.button
                  onClick={() => closeNotification(notification.id)}
                  className="absolute top-2 right-2 z-20 bg-red-500/20 hover:bg-red-500/40 backdrop-blur-sm rounded-full p-1.5 transition-all group"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close notification"
                >
                  <svg 
                    className="w-3.5 h-3.5 text-red-400 group-hover:text-red-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
                
                <div className="relative flex items-start gap-3">
                  {/* Avatar with glow */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-500/30 blur-xl rounded-full" />
                    <div className={`${getAvatarGradient(notification.person.name)} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg relative z-10 ring-2 ring-red-500/50`}>
                      {getInitials(notification.person.name)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pr-6">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-white text-sm">
                        {notification.person.name}
                      </p>
                      <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-0.5 rounded-full">
                        {notification.person.city}
                      </span>
                    </div>
                    
                    <p className="text-xs text-gray-300 mb-2">
                      Just booked <span className="font-semibold text-red-400">{notification.service}</span>
                    </p>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">
                        {notification.time}
                      </span>
                      <div className="flex items-center gap-1 bg-green-500/10 px-2 py-0.5 rounded-full">
                        <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs text-green-400 font-semibold">Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Icon with glow */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-500/20 blur-lg rounded-full" />
                    <div className="relative text-red-400 bg-red-500/10 p-2 rounded-full">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom shine effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
              </motion.div>
            ) : (
              // Review Notification - Golden/Yellow Theme
              <motion.div 
                className="relative bg-gradient-to-br from-amber-950 via-orange-950 to-red-950 rounded-xl shadow-2xl border border-yellow-500/40 p-4 backdrop-blur-sm overflow-hidden"
                whileHover={{ scale: 1.02, borderColor: 'rgba(234, 179, 8, 0.7)' }}
                transition={{ duration: 0.2 }}
              >
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 via-orange-600/10 to-yellow-600/10 animate-pulse" />
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
                
                {/* Close Button */}
                <motion.button
                  onClick={() => closeNotification(notification.id)}
                  className="absolute top-2 right-2 z-20 bg-yellow-500/20 hover:bg-yellow-500/40 backdrop-blur-sm rounded-full p-1.5 transition-all group"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close notification"
                >
                  <svg 
                    className="w-3.5 h-3.5 text-yellow-400 group-hover:text-yellow-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
                
                <div className="relative flex items-start gap-3">
                  {/* Avatar with glow */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-500/30 blur-xl rounded-full" />
                    <div className={`${getAvatarGradient(notification.person.name)} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg relative z-10 ring-2 ring-yellow-500/50`}>
                      {getInitials(notification.person.name)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pr-6">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-white text-sm">
                        {notification.person.name}
                      </p>
                      <span className="text-xs text-yellow-300 bg-yellow-900/30 px-2 py-0.5 rounded-full">
                        {notification.person.city}
                      </span>
                    </div>
                    
                    {/* 5 Stars with glow */}
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <motion.svg
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                          className="w-4 h-4 text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </div>

                    <p className="text-xs text-gray-200 italic mb-2 leading-relaxed">
                      {notification.review}
                    </p>

                    <span className="text-xs text-gray-400">
                      {notification.time}
                    </span>
                  </div>

                  {/* Icon with glow */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-500/20 blur-lg rounded-full" />
                    <div className="relative text-yellow-400 bg-yellow-500/10 p-2 rounded-full">
                      <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom shine effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes float-notification {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
}