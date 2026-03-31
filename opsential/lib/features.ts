export async function getFaeturesData() {
  const res = await fetch("https://headlesswp.teamgrid.co.in/wp-json/wp/v2/pages/56", {
   cache: "force-cache" 
  });
 
  if (!res.ok) {
    throw new Error("Failed to fetch features data");
  }
 
  // Parse JSON first
  const data = await res.json();
 
  // Find the hero layout from ACF flexible content
  const featuresLayout = data.acf.page_layout.find(
    (layout: any) => layout.acf_fc_layout === "features"
  );
 
  if (!featuresLayout) return null;
 
  return featuresLayout;
}