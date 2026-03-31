import { API_URL } from "./api/api";

export async function getData() {
  const res = await fetch(
    `${API_URL}pages/56`,
    { cache: "force-cache" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const allData = data.acf.page_layout;

  const getLayout = (key: string) =>
    allData.find((layout: any) => layout.acf_fc_layout === key);

  const getImageById = async (id: any) => {
    if (!id) return null;

    const res = await fetch(
      `${API_URL}media/${id}`
    );

    if (!res.ok) return null;

    const imgData = await res.json();
    return imgData.source_url;
  };


  const heroLayout = getLayout("hero");

  let heroData = null;

  if (heroLayout) {
    let heroImageUrl = null;

    if (heroLayout.hero_image) {
      heroImageUrl = await getImageById(heroLayout.hero_image);
    }

    heroData = {
      ...heroLayout,
      hero_image_url: heroImageUrl,
    };
  }


  const productLayout = getLayout("product");

  let productData = null;

  if (productLayout) {
    const updatedTabs = await Promise.all(
      productLayout.product_tab_content.map(async (item: any) => {
        if (!item.product_image) return item;

        const imageUrl = await getImageById(item.product_image);

        return {
          ...item,
          product_image_url: imageUrl,
        };
      })
    );

    productData = {
      ...productLayout,
      product_tab_content: updatedTabs,
    };
  }


  const featuresData = getLayout("features");
  const getStartedData = getLayout("get_started");
  const trustSecurityData = getLayout("trust_and_security");
  const earlyAccessData = getLayout("limited_spots");


  return {
    heroData,
    featuresData,
    productData,
    getStartedData,
    trustSecurityData,
    earlyAccessData,
  };
}