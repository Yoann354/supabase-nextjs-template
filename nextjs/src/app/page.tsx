export default function Home() {
  return (
    <main style={{ maxWidth: 720, margin: "40px auto", padding: 16 }}>
      <h1>Bienvenue 👋</h1>
      <p>Portail de gestion de mes biens immobiliers.</p>
      <a
        href="/auth"
        style={{
          display: "inline-block",
          marginTop: 24,
          padding: "10px 16px",
          borderRadius: 8,
          border: "1px solid #1e40af",
          textDecoration: "none",
          color: "#1e40af"
        }}
      >
        Se connecter
      </a>
    </main>
  );
}
