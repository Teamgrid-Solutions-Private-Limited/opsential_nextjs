export async function getHeroData() {
  const res = await fetch("https://headlesswp.teamgrid.co.in//wp-json/wp/v2/pages/56", {
    cache: "no-store",
  });
 
  if (!res.ok) {
    throw new Error("Failed to fetch hero data");
  }
 
  // Parse JSON first
  const data = await res.json();
 
  // Find the hero layout from ACF flexible content
  const heroLayout = data.acf.page_layout.find(
    (layout: any) => layout.acf_fc_layout === "hero"
  );
 
  if (!heroLayout) return null;
 
  return heroLayout;
}
