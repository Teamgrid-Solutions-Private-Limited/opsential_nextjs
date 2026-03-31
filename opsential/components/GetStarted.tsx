export default async function GetStarted({ data }: { data: any }) {

 const formattedGsTitle = data?.gs_title
  ? data.gs_title
      .replace(/\r\n|\n/g, "<br />")
      .replace(/<span>/g, '<span class="text-gradient">')
  : "";
  return (
    <>
    <section id="how-it-works" className="py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20 reveal ">
          <div className="pill inline-flex items-center gap-2 text-[#0EA5E9] border border-[#0EA5E9]/20 bg-[rgba(14,165,233,0.10)] mb-5 px-3 py-1 rounded-full">
  <span data-lang="en">{data.gs_tagline}</span>
</div>
     <h2
  className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] mb-4"
  dangerouslySetInnerHTML={{ __html: formattedGsTitle }}
/>
        </div>
 
        {/* Three Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto stagger">
          {data.gs_three_column_box.map((step: any) => (
            <div
              key={step.gs_step}
              className="card p-8 text-center reveal"
            >
              <div
                className="step-num mx-auto mb-6"
                style={{
                  backgroundColor: step.gs_theme_color,
                  border: `1px solid ${step.gs_theme_color}`,
                  color: step.gs_theme_color.replace(/0\.1\)/, "1)"), // make text visible
                }}
              >
                {step.gs_step.toString().padStart(2, "0")}
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-2">
                {step.gs_title}
              </h3>
              <p className="text-[#9ca3af] text-[15px] leading-relaxed font-normal">
                {step.gs_content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
      <div className="section-line"></div>
          </>
  );
}