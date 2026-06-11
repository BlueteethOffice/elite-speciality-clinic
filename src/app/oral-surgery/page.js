import Link from "next/link";

export default function ServicePage() {
  return (
    <main style={{ padding: '100px 0', minHeight: '80vh', backgroundColor: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '15px' }}>Oral Surgery</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
            Comprehensive information about our Oral Surgery service.
          </p>
        </div>
        <div style={{ background: 'var(--light-bg)', padding: '40px', borderRadius: '20px', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-color)', marginBottom: '30px' }}>Details and full service information coming soon.</p>
          <Link href="/contact" style={{ background: 'var(--primary-color)', color: 'white', padding: '15px 30px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' }}>
            Book Consultation
          </Link>
        </div>
      </div>
    </main>
  );
}
