"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../ui/login/login.module.css';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  
  // Login State
  const [loginIdNumber, setLoginIdNumber] = useState('');
  const [loginPhoneNumber, setLoginPhoneNumber] = useState('');
  const [loginOtp, setLoginOtp] = useState('');
  const [loginOtpSent, setLoginOtpSent] = useState(false);
  const [loginOtpError, setLoginOtpError] = useState(false);

  // Registration State
  const [regFirstName, setRegFirstName] = useState('');
  const [regLastName, setRegLastName] = useState('');
  const [regIdNumber, setRegIdNumber] = useState('');
  const [regPhoneNumber, setRegPhoneNumber] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLoginSendOtp = (e) => {
    e.preventDefault();
    if (loginPhoneNumber.length === 10) {
      console.log('OTP sent to', loginPhoneNumber);
      setLoginOtpSent(true);
      setLoginOtpError(false);
    } else {
      setLoginOtpError(true);
    }
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (regPassword !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    // Clear any previous password errors
    setPasswordError('');

    // Registration logic
    const registrationData = {
      firstName: regFirstName,
      lastName: regLastName,
      idNumber: regIdNumber,
      phoneNumber: regPhoneNumber,
      email: regEmail
    };

    console.log('Registration submitted:', registrationData);
    // Add actual registration logic here
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundOverlay}>
        <div className={styles.loginCard}>
          <div className={styles.toggleSection}>
            <button 
              className={`${styles.toggleButton} ${isLogin ? styles.active : ''}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button 
              className={`${styles.toggleButton} ${!isLogin ? styles.active : ''}`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>

          {isLogin ? (
            <form onSubmit={loginOtpSent ? handleLoginSendOtp : handleLoginSendOtp} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="loginIdNumber" className={styles.label}>ID Number</label>
                <input 
                  type="text"
                  id="loginIdNumber"
                  placeholder="Enter your ID number"
                  value={loginIdNumber}
                  onChange={(e) => setLoginIdNumber(e.target.value)}
                  className={styles.input}
                  required
                  disabled={loginOtpSent}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="loginPhoneNumber" className={styles.label}>Phone Number</label>
                <div className={styles.inputWrapper}>
                  <input 
                    type="tel"
                    id="loginPhoneNumber"
                    placeholder="10-digit phone number"
                    value={loginPhoneNumber}
                    onChange={(e) => setLoginPhoneNumber(e.target.value)}
                    className={styles.input}
                    maxLength="10"
                    required
                    disabled={loginOtpSent}
                  />
                </div>
                {loginOtpError && (
                  <p className={styles.errorMessage}>Please enter a valid 10-digit phone number</p>
                )}
              </div>

              {loginOtpSent && (
                <div className={styles.formGroup}>
                  <label htmlFor="loginOtp" className={styles.label}>OTP</label>
                  <input 
                    type="text"
                    id="loginOtp"
                    placeholder="Enter 6-digit OTP"
                    value={loginOtp}
                    onChange={(e) => setLoginOtp(e.target.value)}
                    className={styles.input}
                    maxLength="6"
                    required
                  />
                  <div className={styles.otpHelper}>
                    <span>OTP sent to {loginPhoneNumber}</span>
                    <button 
                      type="button" 
                      className={styles.resendOtp}
                      onClick={() => setLoginOtpSent(false)}
                    >
                      Resend OTP
                    </button>
                  </div>
                </div>
              )}

              {loginOtpSent ? (
                <Link href="/dashboard" className={styles.submitButtonLink}>
                  <button 
                    type="button" 
                    className={styles.submitButton}
                  >
                    Verify OTP
                  </button>
                </Link>
              ) : (
                <button 
                  type="submit" 
                  className={styles.submitButton}
                >
                  Send OTP
                </button>
              )}
            </form>
          ) : (
            <form onSubmit={handleRegistration} className={styles.form}>
              <div className={styles.nameRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="regFirstName" className={styles.label}>First Name</label>
                  <input 
                    type="text"
                    id="regFirstName"
                    placeholder="Enter first name"
                    value={regFirstName}
                    onChange={(e) => setRegFirstName(e.target.value)}
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="regLastName" className={styles.label}>Last Name</label>
                  <input 
                    type="text"
                    id="regLastName"
                    placeholder="Enter last name"
                    value={regLastName}
                    onChange={(e) => setRegLastName(e.target.value)}
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="regIdNumber" className={styles.label}>ID Number</label>
                <input 
                  type="text"
                  id="regIdNumber"
                  placeholder="Enter ID number"
                  value={regIdNumber}
                  onChange={(e) => setRegIdNumber(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="regPhoneNumber" className={styles.label}>Phone Number</label>
                <input 
                  type="tel"
                  id="regPhoneNumber"
                  placeholder="10-digit phone number"
                  value={regPhoneNumber}
                  onChange={(e) => setRegPhoneNumber(e.target.value)}
                  className={styles.input}
                  maxLength="10"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="regEmail" className={styles.label}>Email</label>
                <input 
                  type="email"
                  id="regEmail"
                  placeholder="Enter email address"
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="regPassword" className={styles.label}>Password</label>
                <input 
                  type="password"
                  id="regPassword"
                  placeholder="Create password"
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
                <input 
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>

              {passwordError && (
                <p className={styles.errorMessage}>{passwordError}</p>
              )}

              <button 
                type="submit" 
                className={styles.submitButton}
              >
                Register
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}