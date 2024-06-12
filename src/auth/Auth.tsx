import { useState, FormEvent, SetStateAction } from 'react';
import { useAuthSession } from './AuthSessionContext';
import { Navigate } from 'react-router-dom';
import styles from '../utils.module.css';
import { supabase } from '../supabaseClient';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const { session } = useAuthSession();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  if (session) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.centeredFlex}>
      <div>
        <div className={styles.authWrapper}>
          <h1>NebulaNotes App</h1>
          <p>Sign in via magic link with your email below</p>
          {loading ? (
            'Sending magic link...'
          ) : (
            <form onSubmit={handleLogin}>
              {/* <label htmlFor="email">Email: </label> */}
              {/* <input
								type="email"
								id="email"
								value={email}
								onChange={e => setEmail(e.target.value)}
								placeholder="Your email"
							/> */}
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e: {
                    target: { value: SetStateAction<string> };
                  }) => setEmail(e.target.value)}
                />
                <Button>
                  <ChevronRight />
                </Button>
              </div>
            </form>
          )}
        </div>
        <img className={styles.landerImage} src="/assets/img/lander.png"></img>
      </div>
    </div>
  );
};
