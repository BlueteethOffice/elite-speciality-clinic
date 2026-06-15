"use client";

import { useState, useEffect } from "react";
import AdminDashboard from "./AdminDashboard";
import styles from "./admin.module.css";

// Temporary local password — Firebase add karne ke baad replace karna
const LOCAL_PASSWORD = "elite@admin2024";
const SESSION_KEY = "elite_admin_auth";

export default function AdminPage() {
  const [authed, setAuthed]     = useState(false);
  const [loading, setLoading]   = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");

  useEffect(() => {
    // Check if already logged in this session
    if (sessionStorage.getItem(SESSION_KEY) === "true") {
      setAuthed(true);
    }
    setLoading(false);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === LOCAL_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setAuthed(true);
    } else {
      setError("Galat password. Dobara try karo.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthed(false);
  };

  if (loading) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.spinner} />
        <p>Loading Admin Panel...</p>
      </div>
    );
  }

  if (authed) {
    return <AdminDashboard user={{ email: "admin@elitespecialityclinic.com" }} onLogout={handleLogout} />;
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <img src="/images/admin-logo.png" alt="Elite Clinic Logo" className={styles.loginLogoImg} />
        <h1 className={styles.loginTitle}>Admin Panel</h1>
        <p className={styles.loginSub}>Elite Speciality Clinic</p>
        <div className={styles.loginBadge}>🔒 Secure Access · Dwarka, Delhi</div>
        <div className={styles.loginDivider} />

        {error && <div className={styles.loginError}>⚠️ {error}</div>}

        <form onSubmit={handleLogin} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label>Admin Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={e => { setPassword(e.target.value); setError(""); }}
              placeholder="Enter your password"
              className={styles.input}
              autoFocus
            />
          </div>
          <button type="submit" className={styles.loginBtn}>
            Sign In →
          </button>
        </form>

        <p className={styles.loginSecure}>🔐 Protected admin area — authorized access only</p>
      </div>
    </div>
  );
}
