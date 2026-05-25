import { useState } from 'react';
import { api } from '../services/api';

export default function Settings() {
  const [plan] = useState(localStorage.getItem('tk_plan') || 'Free');
  const [status] = useState(localStorage.getItem('tk_subscription_status') || 'Not linked');

  const manage = async () => {
    const data = await api.createPortalSession();
    if (data?.url) window.location.href = data.url;
    else alert(data?.error || 'Billing portal unavailable.');
  };

  return (
    <section className="page">
      <h2>Settings</h2>
      <div className="setting-card"><h3>Current Plan</h3><p>{plan}</p></div>
      <div className="setting-card"><h3>Subscription Status</h3><p>{status}</p></div>
      <button onClick={manage}>Manage Subscription</button>
    </section>
  );
}
