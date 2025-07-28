import ImageOverlay from "../components/ImageOverlay";
import { mockData } from "../data/mockData";

export default function Home() {
  return (
    <main style={{ display: "grid", gap: "20px", padding: "20px" }}>
      {mockData.map((item, idx) => (
        <ImageOverlay
          key={idx}
          title={item.title}
          description={item.description}
          image={item.image}
          slug={item.slug}
          overlayColor="linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3))"
          height={300}
          buttonText="Learn More"
        />
      ))}
    </main>
  );
}
