export async function getTrustSecurityData() {
  const res = await fetch("https://headlesswp.teamgrid.co.in//wp-json/wp/v2/pages/56", {
  cache: "force-cache" 
  });
 
if (!res.ok) {
  console.error("Fetch failed");
  return null;
}
 
  // Parse JSON first
  const data = await res.json();
 
  // Find the hero layout from ACF flexible content
  const trustSecurityLayout = data.acf.page_layout.find(
    (layout: any) => layout.acf_fc_layout === "trust_and_security"
  );
 
  if (!trustSecurityLayout) return null;
 
  return trustSecurityLayout;
}