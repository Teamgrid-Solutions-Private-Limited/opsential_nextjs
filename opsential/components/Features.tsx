import { getFaeturesData } from "@/lib/features";
 
 
export default async function Features() {
  const data = await getFaeturesData();
 
 
  return (
    <section id="features" className="pt-28 pb-0 md:pt-40 md:pb-0">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
       
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-accent border-accent/20 bg-accent-soft mb-5">
            {data.features_tagline}
          </div>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] mb-4"
            dangerouslySetInnerHTML={{ __html: data.features_title }}
          />
          <p className="text-[#9ca3af] text-lg font-normal">
            {data.features_subtitle}
          </p>
        </div>
 
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
          {data.features_repeater.map((feat: any, idx: number) => (
            <div key={idx} className="card p-6 md:p-8 ">
             
              {/* Icon */}
              <div
                className="feat-icon mb-4"
                style={{ backgroundColor: feat.tcb_theme_color }}
                dangerouslySetInnerHTML={{ __html: feat.tcb_icon }}
              />
 
              {/* Tagline */}
              <span
                className={`pill text-[12px] py-0.5 px-2.5 mb-2 border`}
                style={{
                  color: feat.tcb_theme_color.replace(/0\.1/, "1"), // solid color for text
                  borderColor: feat.tcb_theme_color.replace(/0\.1/, "0.2"),
                  backgroundColor: feat.tcb_theme_color,
                }}
              >
                {feat.tcb_tagline_box}
              </span>
 
              {/* Title */}
              <h3 className="text-[17px] font-bold tracking-tight mb-2">
                {feat.tcb_title_box}
              </h3>
 
              {/* Content */}
              <p className="text-[#9ca3af] text-[15px] leading-relaxed font-normal">
                {feat.tcb_content}
              </p>
            </div>
          ))}
        </div>
 
        {/* Bottom CTA */}
        {data.features_bottom_content && (
          <div className="mt-10 py-10 border-t border-[rgba(255,255,255,0.04)] text-center ">
            {/* Optional icon or SVG */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-6"
              dangerouslySetInnerHTML={{
                __html: data.features_bottom_content.fbc_content,
              }}
            />
            <a
              href={data.features_bottom_content.fbc_cta.url || "#"}
              target={data.features_bottom_content.fbc_cta.target || "_self"}
              className="inline-flex items-center gap-2 border border-accent/30 hover:border-accent/60 hover:bg-accent/5 text-accent font-semibold rounded-full px-6 py-2.5 transition-all duration-200 text-sm"
            >
              {data.features_bottom_content.fbc_cta.title}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}