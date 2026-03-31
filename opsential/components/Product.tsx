import ProductTabs from "./ProductTabs";
 
export default async function Product({ data }: { data: any }) {

  return (
    <>
      <section id="product" className="py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            
            <div className="pill text-[#0EA5E9] border border-[#0EA5E9]/20 bg-[rgba(14,165,233,0.10)] mb-5">
              <span>{data.product_tagline}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] mb-4">
              {data.product_title}
            </h2>

            <p className="text-[#9ca3af] text-lg font-normal">
              {data.product_sub_title}
            </p>

          </div>
 
          <ProductTabs data={data} />
        </div>
      </section>

      <div className="section-line"></div>
    </>
  );
}