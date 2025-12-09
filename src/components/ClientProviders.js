'use client'
import React, { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { Provider, useDispatch } from 'react-redux';
import { store } from '@/redux/store';
import { supabase } from "@/lib/supabaseClient";
import { setSession, clearSession } from "@/redux/features/slices/authSlice";
import { loadUserProfile } from "@/redux/features/slices/profileSlice";


/**
 * Inner component attaches auth listener and dispatches changes into store
 */
function SupabaseListener({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // initialize with current session
    (async () => {
      const { data } = await supabase.auth.getSession();
      dispatch(setSession(data.session ?? null));

      if (data.session?.user?.id) {
        dispatch(loadUserProfile(data.session.user.id));
      }
    })();

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      // session may be null on sign out
      if (session) dispatch(setSession(session));
      else dispatch(clearSession());
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [dispatch]);

  return children;
}


export default function ClientProviders({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
      >
        <SupabaseListener>
          {children}
        </SupabaseListener>
        
      </ThemeProvider>
    </Provider>
  );
}
