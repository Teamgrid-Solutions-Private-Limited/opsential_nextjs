export default async function TrustSecurity({ data }: { data: any }) {
  const formattedTaglineTitle = data?.tagline_title
    ? data.tagline_title
        .replace(/\r\n|\n/g, "<br />")
        .replace(/<span>/g, '<span class="text-gradient">')
    : "";

  const getIconData = (icon: string) => {
    let color = "#3ecf8e"; // default

    if (icon.includes("text-accent")) color = "#0EA5E9";
    else if (icon.includes("text-ok")) color = "#3ecf8e";
    else if (icon.includes("text-danger")) color = "#ef5350";
    else if (icon.includes("text-info")) color = "#5b8def";
    else if (icon.includes("text-[#")) {
      const match = icon.match(/text-\[(#.*?)\]/);
      if (match) color = match[1];
    }

    const cleanedIcon = icon
      .replace(/class=".*?"/, 'class="w-5 h-5"')
      .replace(/text-[^"\s]+/g, "")
      .replace("<svg", `<svg stroke="${color}" fill="none"`);

    return {
      icon: cleanedIcon,
      color,
      bg: `${color}1A`, // 🔥 10% opacity
    };
  };
  return (
    <>
      <section id="security" className="py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16 ">
            <div className="pill text-[#3ecf8e] border border-[#3ecf8e]/20 bg-[#3ecf8e]/10 mb-5">
              {data.tagline_tagline}
            </div>

            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] mb-4"
              dangerouslySetInnerHTML={{ __html: formattedTaglineTitle }}
            />

            <p className="text-[#9ca3af] text-lg font-normal">
              {data.tagline_sub_title}
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto stagger">
            {data.tagline_content_box.map((item: any, idx: number) => {
              const { icon, color, bg } = getIconData(item.tagline_icon);

              return (
                <div key={idx} className="card p-6 text-center">
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{
                      backgroundColor: item.tagline_icon_bg || bg,
                    }}
                    dangerouslySetInnerHTML={{ __html: icon }}
                  />

                  {/* Title */}
                  <h3 className="font-bold mb-1 text-sm">
                    {item._tagline_title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#8891a0] text-[13px] leading-relaxed font-normal">
                    {item.tagline_description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="section-line"></div>
    </>
  );
}
