"use client";

import { useState } from "react";

export default function SignInCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [accountId, setAccountId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberAccount, setRememberAccount] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signin-card">
      {/* Card Header */}
      <div className="signin-header">
        <h1 className="signin-title">IAM user sign in</h1>
        <button
          type="button"
          className="info-icon-btn"
          title="IAM user sign in info"
          aria-label="Information about IAM user sign in"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="7" stroke="#0073bb" strokeWidth="1.5" />
            <text
              x="8"
              y="11.5"
              textAnchor="middle"
              fontSize="10"
              fontFamily="sans-serif"
              fontWeight="bold"
              fill="#0073bb"
            >
              i
            </text>
          </svg>
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="signin-form" noValidate>
        {/* Account ID / Alias */}
        <div className="form-group">
          <div className="label-row">
            <label htmlFor="accountId" className="form-label">
              Account ID or alias{" "}
              <a href="#dont-have" className="dotted-link">
                (Don&apos;t have?)
              </a>
            </label>
          </div>
          <input
            id="accountId"
            type="text"
            className="form-input"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            autoComplete="organization"
          />
        </div>

        {/* Remember this account */}
        <div className="checkbox-row remember-row">
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="custom-checkbox"
              checked={rememberAccount}
              onChange={(e) => setRememberAccount(e.target.checked)}
            />
            <span className="checkbox-text">Remember this account</span>
          </label>
        </div>

        {/* IAM Username */}
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            IAM username
          </label>
          <input
            id="username"
            type="text"
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>

        {/* Show Password & Having Trouble */}
        <div className="password-options-row">
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="custom-checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            <span className="checkbox-text">Show Password</span>
          </label>
          <a href="#trouble" className="dotted-link trouble-link">
            Having trouble?
          </a>
        </div>

        {/* Sign In Primary Button */}
        <button type="submit" className="btn-primary-signin">
          Sign in
        </button>

        {/* Sign in using root user email Secondary Button */}
        <button type="button" className="btn-secondary-root">
          Sign in using root user email
        </button>

        {/* Create a new AWS account */}
        <div className="create-account-wrapper">
          <a href="#create-account" className="create-account-link">
            Create a new AWS account
          </a>
        </div>
      </form>
    </div>
  );
}
