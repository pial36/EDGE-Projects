import React from 'react';
import { Lock, Mail } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const LoginPage: React.FC = () => {
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     console.log('Login attempted');
   };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body p-4">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Welcome back</h2>
            <p className="text-muted">Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <Mail size={18} />
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <Lock size={18} />
                </span>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember"
                />
                <label className="form-check-label text-muted" htmlFor="remember">
                  Remember me
                </label>
              </div>
              <button type="button" className="btn btn-link p-0">
                Forgot password?
              </button>
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-3">
              Sign in
            </button>
          </form>

          <div className="text-center">
            <p className="text-muted mb-0">
              Don't have an account?{' '}
              <button type="button" className="btn btn-link p-0">
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;