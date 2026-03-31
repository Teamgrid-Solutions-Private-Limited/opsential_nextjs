export default async function Features({ data }: { data: any }) {


  // ✅ Title formatting
  const formattedFeaturesTitle = data?.features_title
    ? data.features_title
        .replace(/\r\n/g, "<br />")
        .replace("<span>", '<span class="text-gradient">')
    : "";

  const finalFeaturesTitle = `
    <span data-lang="en">${formattedFeaturesTitle}</span>
  `;

  return (
    <>
      <section id="features" className="pt-28 pb-0 md:pt-40 md:pb-0">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">

            {/* Badge */}
            <div className="pill inline-flex items-center gap-2 text-[#0EA5E9] border border-[#0EA5E9]/20 bg-[rgba(14,165,233,0.10)] mb-5 px-3 py-1 rounded-full">
              {data.features_tagline}
            </div>

            {/* Title */}
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] mb-4"
              dangerouslySetInnerHTML={{ __html: finalFeaturesTitle }}
            />

            <p className="text-[#9ca3af] text-lg font-normal">
              {data.features_subtitle}
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
            {data.features_repeater.map((feat: any, idx: number) => {

              // ✅ Convert rgba(…,0.1) → solid color
              const solidColor = feat.tcb_theme_color.replace(/0\.1/, "1");

              // ✅ Inject color into SVG (BEST METHOD)
              const iconWithColor = feat.tcb_icon
                .replace(/text-[^\s"]+/g, "") // remove tailwind text class
                .replace("<svg", `<svg stroke="${solidColor}"`);

              return (
                <div key={idx} className="card p-6 md:p-8 ">

                  {/* Icon */}
                  <div
                    className="feat-icon mb-4 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5"
                    style={{ backgroundColor: feat.tcb_theme_color }}
                    dangerouslySetInnerHTML={{ __html: iconWithColor }}
                  />

                  {/* Tagline */}
                  <span
                    className="inline-flex items-center text-[12px] py-0.5 px-2.5 mb-2 rounded-full border"
                    style={{
                      color: solidColor,
                      borderColor: feat.tcb_theme_color.replace(/0\.1/, "0.2"),
                      backgroundColor: feat.tcb_theme_color,
                    }}
                  >
                    {feat.tcb_tagline_box}
                  </span>

                  {/* Title */}
                  <h3 className="text-[17px] font-bold tracking-tight mb-2">
                    <span data-lang="en">{feat.tcb_title_box}</span>
                    <span data-lang="de">{feat.tcb_title_box}</span>
                  </h3>

                  {/* Content */}
                  <p className="text-[#9ca3af] text-[15px] leading-relaxed font-normal">
                    <span data-lang="en">{feat.tcb_content}</span>
                    <span data-lang="de">{feat.tcb_content}</span>
                  </p>

                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          {data.features_bottom_content && (
            <div className="mt-10 py-10 border-t border-[rgba(255,255,255,0.04)] text-center">

              <div
                className="
                  flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-6
                  [&>img]:!w-10 [&>img]:!h-10
                  [&>svg]:!w-10 [&>svg]:!h-10
                "
                dangerouslySetInnerHTML={{
                  __html: data.features_bottom_content.fbc_content,
                }}
              />

              <a
                href={data.features_bottom_content.fbc_cta.url || "#"}
                target={data.features_bottom_content.fbc_cta.target || "_self"}
                className="inline-flex items-center gap-2 border border-[#0EA5E9]/30 hover:border-[#0EA5E9]/60 hover:bg-[rgba(14,165,233,0.05)] text-[#0EA5E9] font-semibold rounded-full px-6 py-2.5 transition-all duration-200 text-sm"
              >
                {data.features_bottom_content.fbc_cta.title}
              </a>
            </div>
          )}
        </div>
      </section>

      <div className="section-line"></div>
    </>
  );
}