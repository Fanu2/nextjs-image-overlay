import { useRouter } from "next/router";
import { mockData } from "../../data/mockData";

export default function DetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const data = mockData.find((item) => item.slug === slug);

  if (!data) return <p style={{ padding: 20 }}>Not found</p>;

  return (
    <div style={{ padding: 20 }}>
      <button
        onClick={() => router.back()}
        style={{
          marginBottom: 20,
          padding: "10px 16px",
          fontSize: "0.95rem",
          backgroundColor: "#444",
          color: "white",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        ← Back
      </button>
      <h1>{data.title}</h1>
      <img
        src={data.image}
        alt={data.title}
        style={{ maxWidth: "100%", borderRadius: 8 }}
      />
      <p style={{ marginTop: 20 }}>{data.description}</p>
    </div>
  );
}

