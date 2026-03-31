 export default async function EarlyAccess({ data }: { data: any }) {

 
  return (
    <section id="early-access" className="py-28 md:py-40 relative">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(14,165,233,0.04) 0%, transparent 60%)",
        }}
      />
 
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="card p-10 md:p-20 text-center max-w-3xl mx-auto rounded-[24px]">
          {/* Tagline */}
          <div className="pill text-[#0EA5E9] border border-[#0EA5E9]/20 bg-[rgba(14,165,233,0.10)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] animate-pulse"></span>
            <span>{data.ls_tagline}</span>
          </div>
 
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {data.ls_title}
          </h2>
 
          {/* Subtitle */}
          <p className="text-[#9ca3af] text-lg mb-10 max-w-xl mx-auto">
            {data.ls_sub_title}
          </p>
 
          {/* FORM */}
          <form className="text-left max-w-lg mx-auto">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-[13px] text-[#9ca3af] font-medium mb-1.5 block">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/20 rounded-full px-5 py-3 text-white text-sm"
                />
              </div>
 
              <div>
                <label className="text-[13px] text-[#9ca3af] font-medium mb-1.5 block">
                  Work Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/20 rounded-full px-5 py-3 text-white text-sm"
                />
              </div>
            </div>
 
            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-[13px] text-[#9ca3af] font-medium mb-1.5 block">
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="Acme Corp"
                  className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/20 rounded-full px-5 py-3 text-white text-sm"
                />
              </div>
 
              <div>
                <label className="text-[13px] text-[#9ca3af] font-medium mb-1.5 block">
                  Job Title *
                </label>
                <select
                  name="title"
                  defaultValue=""
                  required
                  className="form-select w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/20 rounded-full px-5 py-3 text-white text-sm font-mono transition-all duration-200 cursor-pointer"
                >
                  <option value="" disabled className="bg-[#141416] text-[#8891a0]">—</option>
                <option value="devops-engineer" className="bg-[#141416]">DevOps Engineer</option>
                <option value="sre" className="bg-[#141416]" >Site Reliability Engineer</option>
                <option value="platform-engineer" className="bg-[#141416]" >Platform Engineer</option>
                <option value="cloud-engineer" className="bg-[#141416]" >Cloud Engineer</option>
                <option value="cloud-architect" className="bg-[#141416]" >Cloud Architect</option>
                <option value="infrastructure-engineer" className="bg-[#141416]" >Infrastructure Engineer</option>
                <option value="software-engineer" className="bg-[#141416]" >Software Engineer</option>
                <option value="engineering-manager" className="bg-[#141416]" >Engineering Manager</option>
                <option value="vp-engineering" className="bg-[#141416]" >VP of Engineering</option>
                <option value="cto" className="bg-[#141416]" >CTO / Technical Lead</option>
                <option value="ceo" className="bg-[#141416]" >CEO / Managing Director</option>
                <option value="sysadmin" className="bg-[#141416]" >System Administrator</option>
                <option value="other" className="bg-[#141416]" >Other</option>
                </select>
              </div>
            </div>
 
            {/* Company Size */}
            <div className="mb-4">
              <label className="text-[13px] text-[#9ca3af] font-medium mb-1.5 block">
                Company Size *
              </label>
               <select name="companySize" required defaultValue=""  className="form-select w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/20 rounded-full px-5 py-3 text-white text-sm font-mono transition-all duration-200 cursor-pointer">
              <option value="" disabled  className="bg-[#141416] text-[#8891a0]">—</option>
              <option value="1-10" className="bg-[#141416]" >1–10 employees</option>
              <option value="11-50" className="bg-[#141416]" >11–50 employees</option>
              <option value="51-200" className="bg-[#141416]" >51–200 employees</option>
              <option value="201-1000" className="bg-[#141416]" >201–1,000 employees</option>
              <option value="1000+" className="bg-[#141416]" >1,000+ employees</option>
            </select>
            </div>
 
            {/* Cloud */}
            <div className="mb-4">
              <label className="text-[13px] text-[#9ca3af] font-medium mb-1.5 block">
                Cloud Providers (optional)
              </label>
 
              <div className="flex flex-wrap gap-x-6 gap-y-2">
              <label className="flex items-center gap-2 text-sm text-[#9ca3af] cursor-pointer"><input type="checkbox" name="cloud" value="aws" className="custom-check" /> AWS</label>
              <label className="flex items-center gap-2 text-sm text-[#9ca3af] cursor-pointer"><input type="checkbox" name="cloud" value="gcp" className="custom-check" /> Google Cloud</label>
              <label className="flex items-center gap-2 text-sm text-[#9ca3af] cursor-pointer"><input type="checkbox" name="cloud" value="azure" className="custom-check" /> Microsoft Azure</label>
              <label className="flex items-center gap-2 text-sm text-[#9ca3af] cursor-pointer"><input type="checkbox" name="cloud" value="other" className="custom-check" /> <span >Other</span></label>
            </div>
            </div>
 
            {/* Submit */}
            <button className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold rounded-full px-7 py-3 transition-colors duration-200 text-sm pointer">
              Request Access
            </button>
          </form>
 
          {/* Footer text */}
          <p className="text-[13px] text-[#7a8291] mt-6 text-center">
            No spam. No credit card. Just early access to the future of DevOps.
          </p>
        </div>
      </div>
    </section>
  );
}
 
 