import { cache } from "next/dist/server/use-cache/use-cache-wrapper";

export async function getProductData() {
  const res = await fetch(
    "https://headlesswp.teamgrid.co.in/wp-json/wp/v2/pages/56",{
    cache: "force-cache" 
    }
  );

  if (!res.ok) {
    console.error("Fetch failed");
    return null;
  }

  const data = await res.json();

  const productLayout = data.acf.page_layout.find(
    (layout: any) => layout.acf_fc_layout === "product"
  );

  if (!productLayout) return null;

  // 🔥 Fetch image URLs from IDs
  const updatedTabs = await Promise.all(
    productLayout.product_tab_content.map(async (item: any) => {
      if (!item.product_image) return item;

      const imgRes = await fetch(
        `https://headlesswp.teamgrid.co.in/wp-json/wp/v2/media/${item.product_image}`
      );
      const imgData = await imgRes.json();

      return {
        ...item,
        product_image_url: imgData.source_url,
      };
    })
  );

  return {
    ...productLayout,
    product_tab_content: updatedTabs,
  };
}