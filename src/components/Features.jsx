const features = [
  { title: "Fast", text: "Powered by Vite for instant dev server startup and hot reload." },
  { title: "Simple", text: "A small number of well-organized components you can extend." },
  { title: "Responsive", text: "Looks good on phones, tablets, and desktops out of the box." }
];

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <h2>Features</h2>
        <div className="grid">
          {features.map((f) => (
            <div key={f.title} className="card">
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
