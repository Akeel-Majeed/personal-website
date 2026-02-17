import Image from "next/image";

export default function Home() {
  return (
    <main style={{ padding: "48px 40px", fontSize: "1.2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 8 }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", margin: 0 }}>
          Akeel Majeed
        </h1>
        <Image
          src="/cutecat.jpg"
          alt="cute cat"
          width={120}
          height={120}
        />
      </div>
      <hr style={{ marginBottom: 24 }} />

      <p>
        Neuroscience and mathematics student at{" "}
        <a href="https://www.ucl.ac.uk/">UCL</a>. Interested in AI,
        reinforcement learning, and building things on the web.
      </p>
      <hr style={{ marginTop: 24, marginBottom: 24 }} />

      <ul style={{ paddingLeft: 20, margin: 0 }}>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/Akeel%20Majeed%20CV.pdf">Curriculum Vitae (pdf)</a> — updated September 2025</li>
      </ul>

      <h2 style={{ fontSize: "1.4rem", fontWeight: "bold", marginTop: 32, marginBottom: 8 }}>
        Contact me!
      </h2>
      <p>email: <a href="mailto:akeel.majeed.25@ucl.ac.uk">akeel.majeed.25@ucl.ac.uk</a></p>
      <p>github: <a href="https://github.com/Akeel-Majeed">https://github.com/Akeel-Majeed</a></p>
      <p>linkedin: <a href="https://www.linkedin.com/in/akeel-majeed-1618g">https://www.linkedin.com/in/akeel-majeed-1618g</a></p>
    </main>
  );
}
/*claude --resume 4133c728-a3ab-4bb1-9104-1e430f219c8c  */