import { getHeroData, getImageById } from "@/lib/hero";

export default async function Hero() {
  const data = await getHeroData();
  const formattedTitle = data.hero_title
    ?.replace(/\r\n/g, "<br />") // line break fix
    ?.replace("<span>", '<span class="text-gradient">'); // add gradient class
  const imageUrl = await getImageById(data.hero_image);
  return (
    <>
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(14,165,233,0.05) 0%, transparent 55%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            {/* Badge */}
            <div className="pill text-[#0EA5E9] border-[#0EA5E9]/20 bg-[rgba(14,165,233,0.10)] mb-6 anim">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] animate-pulse"></span>
              <span>{data.hero_tagline}</span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-[3.5rem] font-extrabold tracking-[-0.035em] leading-[1.08] mb-6 anim anim-d1"
              dangerouslySetInnerHTML={{ __html: formattedTitle }}
            />

            {/* Subline */}
            <p className="text-lg md:text-xl text-[#9ca3af] leading-relaxed mb-10 max-w-2xl mx-auto font-normal anim anim-d2">
              {data.hero_subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center anim anim-d3">
              <a
                href={data.hero_button_1.url || "#"}
                className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold rounded-full px-8 py-3.5 transition-colors duration-200 text-center text-[15px]"
                target={data.hero_button_1.target || "_self"}
              >
                {data.hero_button_1.title}
              </a>

              <a
                href={data.hero_button_2.url || "#"}
                className="bg-transparent hover:bg-[#141416] text-[#ededef] border border-[rgba(255,255,255,0.10)] hover:border-[rgba(255,255,255,0.16)] rounded-full px-8 py-3.5 font-semibold transition-all duration-200 text-center text-[15px]"
                target={data.hero_button_2.target || "_self"}
              >
                {data.hero_button_2.title}
              </a>
            </div>
          </div>

          {/* Dashboard Mock */}
          <div className="relative max-w-5xl mx-auto anim anim-d4">
            <div className="card overflow-hidden rounded-[20px]">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(255,255,255,0.05)] bg-[#0c0c0e]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>

                <div className="flex-1 text-center">
                  <span className="text-[11px] font-mono text-[#7a8291]">
                    opsential.com / dashboard
                  </span>
                </div>
              </div>

              <div className="h-[420px] overflow-hidden">
                <img
                  src={imageUrl}
                  alt="Dashboard"
                  className="screenshot-scroll w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-line"></div>
    </>
  );
}
