'use client';

import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AuthPage() {
  return (
    <main style={{ maxWidth: 420, margin: '40px auto', padding: 16 }}>
      <h1 style={{ marginBottom: 12 }}>Connexion</h1>
      <p style={{ marginBottom: 24 }}>
        Connectez-vous pour accéder au portail immobilier.
      </p>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={[]}
        localization={{
          variables: {
            sign_in: { email_label: 'Email', password_label: 'Mot de passe' },
            sign_up: { email_label: 'Email', password_label: 'Mot de passe' }
          }
        }}
      />
    </main>
  );
}
