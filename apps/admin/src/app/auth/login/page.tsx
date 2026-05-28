'use client';

import { useState } from 'react';
import { Container, Input, Label, Button } from '@sarkimota/ui';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-sm mx-auto p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold-400 mx-auto mb-4">
            <span className="text-sarkimota-black font-bold text-lg">S</span>
          </div>
          <h1 className="text-xl font-bold">SarkiMota Admin</h1>
          <p className="text-sm text-muted-foreground mt-1">Sign in to your account</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@sarkimota.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
          </div>
          <Button type="submit" variant="gold" className="w-full">Sign In</Button>
        </form>
      </div>
    </div>
  );
}
