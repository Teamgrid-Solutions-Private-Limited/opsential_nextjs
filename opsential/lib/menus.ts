export async function getMenuData() {
  try {
    const res = await fetch(
  "http://headlesswp.teamgrid.co.in/wp-json/wp/v2/menu-items?menus=11",
  { cache: "force-cache" } // completely static
);

    if (!res.ok) throw new Error("Failed to fetch");

    const data = await res.json();

    return data || []; // ✅ return array directly
  } catch (err) {
    console.error("Menu fetch error:", err);
    return [];
  }
}