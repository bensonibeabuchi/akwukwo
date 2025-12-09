'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export default function Spinner({show = false, message='Loading', onClose,}) {

  useEffect(() => {
    if (!show) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-6 md:p-12 rounded-xl shadow-lg md:w-[400px] max-w-[500px] text-center relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
        

            <div className='flex flex-col items-center'>
              <div className="flex flex-col gap-4 justify-center items-center w-full py-10">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#276E6B]"></div>
                <p className='font-medium text-black text-lg'>{message}</p>
              </div>
            </div>


          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
