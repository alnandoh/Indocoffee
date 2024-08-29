const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebSite", "Store"],
    name: "NusaBean",
    url: "https://indocofee.id",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
