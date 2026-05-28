import { useState, useEffect } from "react";

const COURSES = [
  { icon: "👗", title: "Fashion Designing", category: "Creative Arts", desc: "Sketch, drape, and design garments with industry-level skills in pattern making and styling." },
  { icon: "🎬", title: "Animation", category: "Creative Arts", desc: "2D/3D character animation, motion graphics, and storytelling for film and digital media." },
  { icon: "✨", title: "Visual Effects (VFX)", category: "Creative Arts", desc: "Compositing, CGI, green screen, and post-production effects for cinema & OTT." },
  { icon: "🎨", title: "Graphic Designing", category: "Creative Arts", desc: "Brand identity, print and digital media design using industry-standard tools." },
  { icon: "🔐", title: "Cyber Security", category: "Technology", desc: "Ethical hacking, network security, threat analysis and digital safety practices." },
  { icon: "💻", title: "IT Education", category: "Technology", desc: "Programming fundamentals, hardware, networking, and software applications." },
  { icon: "🌍", title: "Language Learning", category: "Soft Skills", desc: "English communication, foreign languages, business language, and spoken proficiency." },
  { icon: "🏨", title: "Hotel Management", category: "Hospitality", desc: "Certification in hospitality operations, guest relations, and hotel administration." },
  { icon: "🛎️", title: "Front Desk Operations", category: "Hospitality", desc: "Reservation handling, check-in/out protocols, and superior guest experience management." },
  { icon: "🛏️", title: "Housekeeping", category: "Hospitality", desc: "Room maintenance standards, hygiene protocols, and laundry operations." },
  { icon: "❄️", title: "Refrigeration & AC", category: "Technical Trades", desc: "Installation, servicing, and troubleshooting of refrigeration and air-conditioning systems." },
  { icon: "🍽️", title: "Food & Beverage Services", category: "Hospitality", desc: "Table service, bar operations, menu knowledge, and restaurant floor management." },
  { icon: "👨‍🍳", title: "Cooking – Continental", category: "Hospitality", desc: "French, Italian & European cuisines, kitchen operations, plating and food safety." },
];

const PLACEMENT_SECTORS = [
  { icon: "👗", title: "Fashion Designing", roles: ["Fashion Designer","Textile Designer","Costume Designer","Stylist","Pattern Maker"], employers: "Boutiques, Fashion Houses, Export Units, Retail Brands" },
  { icon: "🎬", title: "Animation & VFX", roles: ["2D/3D Animator","VFX Artist","Motion Graphics Designer","Compositor","Game Designer"], employers: "Studios, OTT Platforms, Ad Agencies, Gaming Companies" },
  { icon: "🎨", title: "Graphic Designing", roles: ["Graphic Designer","UI/UX Designer","Brand Designer","Digital Marketer","Content Creator"], employers: "Agencies, Startups, Media Houses, Corporate Firms" },
  { icon: "🔐", title: "Cyber Security", roles: ["Security Analyst","Ethical Hacker","Network Engineer","SOC Analyst","IT Auditor"], employers: "IT Firms, Banks, Govt. Departments, MNCs" },
  { icon: "💻", title: "IT Education", roles: ["Data Entry Operator","IT Support Executive","Hardware Technician","Network Admin","Help Desk"], employers: "BPOs, IT Companies, Govt. Offices, Banks" },
  { icon: "🌍", title: "Language Learning", roles: ["Language Trainer","Translator","Customer Service","BPO Executive","Tour Guide"], employers: "MNCs, Tourism, BPOs, Embassies, Schools" },
  { icon: "🏨", title: "Hotel Management", roles: ["Hotel Manager","Guest Relations Officer","F&B Manager","Front Office Manager","Events Coordinator"], employers: "5-Star Hotels, Resorts, Airlines, Cruise Lines" },
  { icon: "🛎️", title: "Front Desk Operations", roles: ["Receptionist","Front Desk Executive","Concierge","Reservation Agent","Guest Service Associate"], employers: "Hotels, Hospitals, Corporate Offices, Airlines" },
  { icon: "🛏️", title: "Housekeeping", roles: ["Housekeeping Supervisor","Room Attendant","Laundry Supervisor","Facility Executive","Floor Manager"], employers: "Hotels, Hospitals, Facility Management Firms" },
  { icon: "❄️", title: "Refrigeration & AC", roles: ["AC Technician","Refrigeration Mechanic","HVAC Engineer","Service Engineer","Installation Technician"], employers: "HVAC Companies, Real Estate, Manufacturing, Govt." },
  { icon: "🍽️", title: "Food & Beverage", roles: ["F&B Steward","Bartender","Banquet Supervisor","Restaurant Captain","Catering Executive"], employers: "Hotels, Restaurants, Airlines, Event Companies" },
  { icon: "👨‍🍳", title: "Cooking – Continental", roles: ["Chef de Partie","Commis Chef","Sous Chef","Catering Cook","Food Production Trainee"], employers: "5-Star Hotels, Restaurants, Cloud Kitchens, Cruise Ships" },
];

const COMPANIES = [
  { name: "NTT Data", color: "#003087", abbr: "NTT" },
  { name: "Wipro", color: "#344D6B", abbr: "WIP" },
  { name: "Bajaj Finance", color: "#003F8B", abbr: "BAJ" },
  { name: "Blue Star", color: "#0057A8", abbr: "BLS" },
  { name: "Radisson Blu", color: "#1A1A5E", abbr: "RAD" },
  { name: "Taj Hotels", color: "#8B1A1A", abbr: "TAJ" },
  { name: "Marriott", color: "#8B0000", abbr: "MAR" },
  { name: "TCS", color: "#0049AB", abbr: "TCS" },
  { name: "Infosys", color: "#007CC2", abbr: "INF" },
  { name: "HCL Tech", color: "#005EB8", abbr: "HCL" },
  { name: "Hyatt", color: "#832D22", abbr: "HYA" },
  { name: "ITC Hotels", color: "#3B5E26", abbr: "ITC" },
  { name: "Godrej", color: "#004B23", abbr: "GOD" },
  { name: "L&T", color: "#E31837", abbr: "L&T" },
  { name: "Oberoi", color: "#8B6914", abbr: "OBR" },
  { name: "Tech Mahindra", color: "#C8102E", abbr: "TEM" },
  { name: "Amazon", color: "#FF9900", abbr: "AMZ" },
  { name: "Hilton", color: "#003580", abbr: "HIL" },
];

const CATEGORIES = ["All", "Creative Arts", "Technology", "Hospitality", "Technical Trades", "Soft Skills"];

const SERVICES = [
  { icon: "🎓", title: "Free Certified Training", desc: "All programmes are completely free of cost — no registration fees, no hidden charges, ever." },
  { icon: "💄", title: "Grooming Sessions", desc: "Professional etiquette, personal presentation, and workplace conduct development." },
  { icon: "🤝", title: "Interview Preparation", desc: "Mock interviews, resume building, HR round coaching, and job-readiness workshops." },
  { icon: "💪", title: "Confidence Building", desc: "Personality development, public speaking, and leadership mindset programmes." },
  { icon: "🏢", title: "Placement Assistance", desc: "Active industry partnerships to connect you with verified job opportunities." },
  { icon: "🔬", title: "Internship & Apprenticeship", desc: "Real-world industry exposure through structured internship and apprenticeship programmes." },
];

const tagMap = {
  "Creative Arts": { bg: "#FFF3E0", color: "#E65100" },
  "Technology": { bg: "#E3F2FD", color: "#0D47A1" },
  "Hospitality": { bg: "#E8F5E9", color: "#1B5E20" },
  "Technical Trades": { bg: "#FFF8E1", color: "#F57F17" },
  "Soft Skills": { bg: "#EDE7F6", color: "#4527A0" },
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePlacementCategory, setActivePlacementCategory] = useState("All");
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showPlacement, setShowPlacement] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });
  const [placementForm, setPlacementForm] = useState({ name: "", phone: "", email: "", course: "", experience: "", location: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [placementSubmitted, setPlacementSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const filteredCourses = activeCategory === "All" ? COURSES : COURSES.filter(c => c.category === activeCategory);

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
  const handlePlacementSubmit = (e) => { e.preventDefault(); setPlacementSubmitted(true); };
  const openPlacementForm = (courseTitle = "") => {
    setPlacementForm(f => ({ ...f, course: courseTitle }));
    setShowPlacement(true);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#1a2340", background: "#F5F6FA", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow-x: hidden; }
        :root {
          --navy: #0B1F4B; --navy-light: #16305E; --navy-mid: #1E3A70;
          --gold: #C8960C; --gold-light: #F0B429; --gold-pale: #FEF3C7;
          --saffron: #E8870A; --white: #FFFFFF; --off-white: #F5F6FA;
          --text-muted: #5C6B8A; --border: #DDE3F0;
        }
        .tricolor { height: 4px; background: linear-gradient(90deg, #FF9933 33.3%, #FFFFFF 33.3% 66.6%, #138808 66.6%); }
        .nav-link { cursor: pointer; font-weight: 500; color: var(--navy); padding: 6px 2px; border-bottom: 2px solid transparent; transition: all .2s; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; }
        .nav-link:hover { color: var(--gold); border-bottom-color: var(--gold); }
        .btn-primary { background: var(--navy); color: #fff; border: none; padding: 12px 28px; border-radius: 4px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all .2s; letter-spacing: .5px; text-transform: uppercase; font-family: 'DM Sans', sans-serif; }
        .btn-primary:hover { background: var(--navy-mid); box-shadow: 0 6px 20px rgba(11,31,75,.25); transform: translateY(-1px); }
        .btn-gold { background: var(--gold); color: #fff; border: none; padding: 12px 28px; border-radius: 4px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all .2s; letter-spacing: .5px; text-transform: uppercase; font-family: 'DM Sans', sans-serif; }
        .btn-gold:hover { background: var(--saffron); box-shadow: 0 6px 20px rgba(200,150,12,.3); transform: translateY(-1px); }
        .btn-outline { background: transparent; color: var(--navy); border: 1.5px solid var(--navy); padding: 10px 24px; border-radius: 4px; font-size: 12px; font-weight: 600; cursor: pointer; transition: all .2s; letter-spacing: .5px; text-transform: uppercase; font-family: 'DM Sans', sans-serif; }
        .btn-outline:hover { background: var(--navy); color: #fff; }
        .card { background: #fff; border-radius: 6px; padding: 28px 24px; border: 1px solid var(--border); transition: all .2s; }
        .card:hover { border-color: var(--gold); box-shadow: 0 8px 32px rgba(11,31,75,.1); transform: translateY(-3px); }
        .placement-card { background: #fff; border-radius: 6px; padding: 24px; border: 1px solid var(--border); border-left: 4px solid var(--navy); transition: all .2s; }
        .placement-card:hover { border-left-color: var(--gold); box-shadow: 0 8px 32px rgba(11,31,75,.1); transform: translateY(-3px); }
        .filter-btn { padding: 8px 20px; border-radius: 3px; border: 1.5px solid var(--border); background: #fff; cursor: pointer; font-size: 11px; font-weight: 600; transition: all .2s; color: var(--text-muted); letter-spacing: .8px; text-transform: uppercase; font-family: 'DM Sans', sans-serif; }
        .filter-btn.active, .filter-btn:hover { background: var(--navy); color: #fff; border-color: var(--navy); }
        .section-eyebrow { font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; color: var(--gold); margin-bottom: 10px; }
        .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(30px, 4vw, 46px); font-weight: 700; color: var(--navy); line-height: 1.15; }
        .section-sub { font-size: 16px; color: var(--text-muted); line-height: 1.75; }
        .title-rule { width: 52px; height: 3px; background: linear-gradient(90deg, var(--gold), var(--saffron)); border-radius: 2px; margin: 16px 0 20px; }
        .form-label { font-size: 12px; font-weight: 600; color: var(--navy); letter-spacing: .5px; text-transform: uppercase; display: block; margin-bottom: 6px; }
        .form-input { width: 100%; padding: 11px 14px; border: 1.5px solid var(--border); border-radius: 4px; font-size: 14px; font-family: 'DM Sans', sans-serif; outline: none; transition: border .2s; background: #fafbfe; color: var(--navy); }
        .form-input:focus { border-color: var(--navy); background: #fff; }
        .form-row { margin-bottom: 16px; }
        .overlay { position: fixed; inset: 0; background: rgba(11,31,75,.6); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 16px; backdrop-filter: blur(6px); }
        .modal { background: #fff; border-radius: 8px; padding: 40px 36px; max-width: 520px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative; border-top: 4px solid var(--gold); }
        .seal-badge { display: flex; align-items: center; gap: 10px; padding: 10px 16px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.15); border-radius: 6px; }
        .footer-link { font-size: 14px; color: #8FA0C0; cursor: pointer; transition: color .15s; margin-bottom: 9px; display: block; }
        .footer-link:hover { color: var(--gold-light); }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee2 { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
        .marquee-inner { display: inline-block; animation: marquee2 30s linear infinite; white-space: nowrap; }
        .company-scroll-track { display: flex; animation: marquee 35s linear infinite; width: max-content; }
        .company-scroll-track:hover { animation-play-state: paused; }
        .check-item { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 14px; }
        .check-icon { width: 20px; height: 20px; border-radius: 50%; background: var(--gold-pale); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
        .role-tag { font-size: 11px; padding: 4px 10px; background: #EEF2FF; color: #0B1F4B; border-radius: 3px; font-weight: 600; display: inline-block; margin: 3px 3px 3px 0; }
        @media (max-width: 768px) {
          .hero-flex { flex-direction: column !important; }
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .two-col { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) { .stats-row { grid-template-columns: 1fr 1fr !important; } }
        .mobile-menu-btn { display: none; }
      `}</style>

      <div className="tricolor" />

      {/* TICKER */}
      <div style={{ background: "#0B1F4B", padding: "8px 0", overflow: "hidden" }}>
        <div className="marquee-inner" style={{ fontSize: 12, color: "#F0B429", fontWeight: 500, letterSpacing: .5 }}>
          &nbsp;&nbsp;&nbsp;🔔 Admissions Open for 2026–27 Batch &nbsp;|&nbsp; All Courses 100% Free of Cost &nbsp;|&nbsp; NSDC Certified Programmes &nbsp;|&nbsp; CII Associated Organisation &nbsp;|&nbsp; Placements & Internships Provided &nbsp;|&nbsp; Apply Now — Limited Seats Available &nbsp;|&nbsp;
        </div>
      </div>

      {/* NAVBAR */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #DDE3F0", position: "sticky", top: 0, zIndex: 100, boxShadow: scrolled ? "0 2px 20px rgba(11,31,75,.08)" : "none", transition: "box-shadow .3s" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 66 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 44, height: 44, background: "#0B1F4B", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 1 }}>
              <div style={{ width: 28, height: 3, background: "#FF9933", borderRadius: 2 }} />
              <div style={{ width: 28, height: 3, background: "#fff", borderRadius: 2 }} />
              <div style={{ width: 28, height: 3, background: "#138808", borderRadius: 2 }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 18, color: "#0B1F4B", letterSpacing: .3, lineHeight: 1.1 }}>ATAL BIHARI VAJPAYEE</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 14, color: "#0B1F4B", lineHeight: 1.1 }}>KAUSHALYA VIKAS KENDRA</div>
              <div style={{ fontSize: 9, color: "#C8960C", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}>National Skill Development Initiative</div>
            </div>
          </div>
          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {[["home","Home"],["courses","Programmes"],["services","Services"],["placement","Placements"],["about","About Us"],["contact","Contact"]].map(([id, label]) => (
              <span key={id} className="nav-link" onClick={() => scrollTo(id)}>{label}</span>
            ))}
          </div>
          <div className="desktop-nav" style={{ display: "flex", gap: 10 }}>
            <button className="btn-gold" onClick={() => setShowEnquiry(true)}>Apply Now</button>
          </div>
          <button className="mobile-menu-btn" style={{ background: "none", border: "none", cursor: "pointer", fontSize: 24, color: "#0B1F4B" }} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
        {menuOpen && (
          <div style={{ background: "#fff", borderTop: "1px solid #DDE3F0", padding: "12px 24px 20px" }}>
            {[["home","Home"],["courses","Programmes"],["services","Services"],["placement","Placements"],["about","About Us"],["contact","Contact"]].map(([id, label]) => (
              <div key={id} style={{ padding: "12px 0", cursor: "pointer", fontWeight: 600, fontSize: 14, borderBottom: "1px solid #f0f2f8", color: "#0B1F4B" }} onClick={() => scrollTo(id)}>{label}</div>
            ))}
            <button className="btn-gold" style={{ marginTop: 16, width: "100%" }} onClick={() => { setShowEnquiry(true); setMenuOpen(false); }}>Apply Now</button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" style={{ background: "linear-gradient(120deg, #041742 0%, #110232 60%, #011130 100%)", color: "#fff", padding: "72px 24px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 80% 20%, rgba(200,150,12,.12) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(19,136,8,.08) 0%, transparent 40%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="hero-flex" style={{ display: "flex", alignItems: "center", gap: 64, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
                {[["🏅","NSDC Partner"],["🤝","CII Associated"],["🇮🇳","Govt. Initiative"]].map(([ic, l]) => (
                  <div key={l} className="seal-badge">
                    <span style={{ fontSize: 16 }}>{ic}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "#F0B429", letterSpacing: 1, textTransform: "uppercase" }}>{l}</span>
                  </div>
                ))}
              </div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(34px, 5vw, 62px)", fontWeight: 700, lineHeight: 1.12, marginBottom: 20, color: "#fff" }}>
                Empowering India's<br /><span style={{ color: "#F0B429" }}>Youth Through</span><br />Skill Development
              </h1>
              <div style={{ width: 56, height: 3, background: "linear-gradient(90deg, #FF9933, #F0B429)", borderRadius: 2, marginBottom: 20 }} />
              <p style={{ fontSize: 16, color: "#99baee", lineHeight: 1.85, marginBottom: 32, maxWidth: 520 }}>
                A government-backed initiative offering free, NSDC-certified vocational training across 13 disciplines with career support, grooming, and end-to-end placement for every student.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <button className="btn-gold" style={{ fontSize: 14, padding: "14px 34px" }} onClick={() => setShowEnquiry(true)}>Apply for Free Admission</button>
                <button className="btn-outline" style={{ borderColor: "rgba(255,255,255,.4)", color: "#fff", fontSize: 14 }} onClick={() => scrollTo("courses")}>View Programmes</button>
              </div>
              <div className="stats-row" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 44, paddingTop: 36, borderTop: "1px solid rgba(255,255,255,.1)" }}>
                {[["10,000+","Students Trained"],["13+","Skill Programmes"],["95%","Placement Rate"],["Free","Lifetime Certification"]].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 700, color: "#F0B429" }}>{n}</div>
                    <div style={{ fontSize: 15, color: "#8FA0C0", marginTop: 2, lineHeight: 1.4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: "0 0 300px", minWidth: 260 }}>
              <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 8, overflow: "hidden" }}>
                <div style={{ background: "#C8960C", padding: "14px 20px" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: 2, textTransform: "uppercase" }}>Official Affiliations</div>
                </div>
                <div style={{ padding: "20px" }}>
                  {[
                    { abbr: "NSDC", full: "National Skill Development Corporation", color: "#37baf7" },
                    { abbr: "CII", full: "Confederation of Indian Industry", color: "#4db252" },
                    { abbr: "MoSDE", full: "Ministry of Skill Development & Entrepreneurship", color: "#FFB74D" },
                  ].map(a => (
                    <div key={a.abbr} style={{ padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,.07)", display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{ minWidth: 52, height: 32, background: "rgba(255,255,255,.08)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: a.color }}>{a.abbr}</div>
                      <div style={{ fontSize: 13, color: "#9ebff4", lineHeight: 1.5 }}>{a.full}</div>
                    </div>
                  ))}
                  <div style={{ marginTop: 16 }}>
                    <div style={{ fontSize: 13, color: "#94b2e9", letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>Admissions Open</div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#fff", marginBottom: 6 }}>
                      <span>Session</span><span style={{ color: "#F0B429", fontWeight: 600 }}>2026–27</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#fff", marginBottom: 6 }}>
                      <span>Registration</span><span style={{ color: "#81C784", fontWeight: 600 }}>Open</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#fff" }}>
                      <span>Course Fee</span><span style={{ color: "#F0B429", fontWeight: 700 }}>₹ 0 — Free</span>
                    </div>
                    <button className="btn-gold" style={{ width: "100%", marginTop: 16 }} onClick={() => setShowEnquiry(true)}>Register Now →</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" style={{ padding: "80px 24px", background: "#F5F6FA" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 50 }}>
            <div>
              <div className="section-eyebrow">Our Programmes</div>
              <h2 className="section-title">Skill Development<br />Courses</h2>
              <div className="title-rule" />
              <p className="section-sub" style={{ maxWidth: 620 }}>13 industry-aligned vocational programmes certified by NSDC — all free of cost.</p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {CATEGORIES.map(c => (
                <button key={c} className={`filter-btn ${activeCategory === c ? "active" : ""}`} onClick={() => setActiveCategory(c)}>{c}</button>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 20 }}>
            {filteredCourses.map(course => {
              const tag = tagMap[course.category];
              return (
                <div key={course.title} className="card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                    <div style={{ fontSize: 36 }}>{course.icon}</div>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", padding: "4px 10px", borderRadius: 3, background: tag.bg, color: tag.color }}>{course.category}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 19, color: "#0B1F4B", marginBottom: 8 }}>{course.title}</h3>
                  <p style={{ fontSize: 13, color: "#5C6B8A", lineHeight: 1.65, marginBottom: 18 }}>{course.desc}</p>
                  <div style={{ borderTop: "1px solid #EEF0F8", paddingTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#138808", letterSpacing: .5 }}>✓ FREE CERTIFICATION</span>
                    <button className="btn-outline" style={{ padding: "6px 16px", fontSize: 11 }} onClick={() => setShowEnquiry(true)}>Apply →</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-eyebrow">End-to-End Support</div>
            <h2 className="section-title">Beyond Classroom Training</h2>
            <div className="title-rule" style={{ margin: "16px auto 20px" }} />
            <p className="section-sub" style={{ maxWidth: 540, margin: "0 auto" }}>Our support doesn't end after training. We walk with every student — from learning to livelihood.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
            {SERVICES.map(s => (
              <div key={s.title} style={{ display: "flex", gap: 18, padding: "24px", border: "1px solid #DDE3F0", borderRadius: 6, background: "#FAFBFE", borderLeft: "4px solid #C8960C", transition: "all .2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(11,31,75,.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#FAFBFE"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ fontSize: 32, flexShrink: 0 }}>{s.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: "#0B1F4B", marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: "#5C6B8A", lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLACEMENT */}
      <section id="placement" style={{ padding: "80px 24px", background: "#F5F6FA" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-eyebrow">Career & Employment Cell</div>
            <h2 className="section-title">Placement Support<br />Programme</h2>
            <div className="title-rule" style={{ margin: "16px auto 20px" }} />
            <p className="section-sub" style={{ maxWidth: 620, margin: "0 auto" }}>Whether you've completed training with us or already have a skill — apply directly for free placement support. We connect you to verified employers across all sectors.</p>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, marginBottom: 56 }}>
            {[{ n: "95%", l: "Placement Rate", icon: "📈" },{ n: "50+", l: "Industry Partners", icon: "🏢" },{ n: "500+", l: "Jobs Per Year", icon: "💼" },{ n: "30", l: "Days Avg. Placement", icon: "📅" },{ n: "₹0", l: "Zero Cost Ever", icon: "✅" }].map(s => (
              <div key={s.l} style={{ background: "#fff", border: "1px solid #DDE3F0", borderTop: "3px solid #C8960C", borderRadius: 6, padding: "22px 16px", textAlign: "center" }}>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 700, color: "#0B1F4B" }}>{s.n}</div>
                <div style={{ fontSize: 12, color: "#5C6B8A", marginTop: 4, fontWeight: 500 }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Company Scroller */}
          <div style={{ marginBottom: 56 }}>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div className="section-eyebrow">Our Hiring Partners</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700, color: "#0B1F4B" }}>Trusted by India's Top Employers</h3>
            </div>
            <div style={{ background: "#fff", border: "1px solid #DDE3F0", borderRadius: 8, padding: "28px 0", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(90deg, #fff, transparent)", zIndex: 2 }} />
              <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(-90deg, #fff, transparent)", zIndex: 2 }} />
              <div style={{ overflow: "hidden" }}>
                <div className="company-scroll-track">
                  {[...COMPANIES, ...COMPANIES].map((c, i) => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minWidth: 130, marginRight: 16, padding: "12px 16px", border: "1px solid #EEF0F8", borderRadius: 8, background: "#FAFBFE", transition: "all .2s", cursor: "default" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "#C8960C"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(11,31,75,.08)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "#EEF0F8"; e.currentTarget.style.boxShadow = "none"; }}>
                      <div style={{ width: 48, height: 48, borderRadius: 8, background: c.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#fff", letterSpacing: .5, marginBottom: 8 }}>{c.abbr}</div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#1a2340", textAlign: "center", lineHeight: 1.3 }}>{c.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Placement Cards */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 32 }}>
              <div>
                <div className="section-eyebrow">Sector-wise Opportunities</div>
                <h3 className="section-title" style={{ fontSize: "clamp(24px, 3vw, 36px)" }}>Placement by Programme</h3>
                <div className="title-rule" />
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {CATEGORIES.map(c => (
                  <button key={c} className={`filter-btn ${activePlacementCategory === c ? "active" : ""}`} onClick={() => setActivePlacementCategory(c)}>{c}</button>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
              {PLACEMENT_SECTORS.map(p => (
                <div key={p.title} className="placement-card">
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <span style={{ fontSize: 30 }}>{p.icon}</span>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 18, color: "#0B1F4B" }}>{p.title}</h3>
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#C8960C", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>Job Roles</div>
                    <div>{p.roles.map(r => <span key={r} className="role-tag">{r}</span>)}</div>
                  </div>
                  <div style={{ borderTop: "1px solid #EEF0F8", paddingTop: 12, marginBottom: 16 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#5C6B8A", letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>Top Employers</div>
                    <div style={{ fontSize: 12, color: "#5C6B8A", lineHeight: 1.5 }}>{p.employers}</div>
                  </div>
                  <button className="btn-gold" style={{ width: "100%", fontSize: 12, padding: "10px" }} onClick={() => openPlacementForm(p.title)}>Apply for Placement — Free →</button>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div style={{ background: "#fff", border: "1px solid #DDE3F0", borderRadius: 8, overflow: "hidden", marginBottom: 48 }}>
            <div style={{ background: "#0B1F4B", padding: "20px 28px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#F0B429", letterSpacing: 2, textTransform: "uppercase" }}>How It Works</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: "#fff", marginTop: 4 }}>6-Step Placement Process</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
              {[{ step: "01", icon: "📝", title: "Submit Application", desc: "Fill the placement form with your details and preferred sector." },{ step: "02", icon: "📞", title: "Counsellor Call", desc: "Our placement officer contacts you within 24 hours." },{ step: "03", icon: "📄", title: "Resume Building", desc: "We help craft a professional resume for your target role." },{ step: "04", icon: "🎯", title: "Interview Prep", desc: "Mock interviews, HR coaching and grooming sessions." },{ step: "05", icon: "🏢", title: "Job Matching", desc: "We match your profile with 50+ industry partners." },{ step: "06", icon: "✅", title: "Placement Confirmed", desc: "Offer letter received — we follow up till you join." }].map((s, i) => (
                <div key={s.step} style={{ padding: "24px 18px", borderRight: i < 5 ? "1px solid #EEF0F8" : "none", textAlign: "center" }}>
                  <div style={{ width: 34, height: 34, background: "#0B1F4B", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#F0B429", margin: "0 auto 10px", letterSpacing: 1 }}>{s.step}</div>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{s.icon}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 15, color: "#0B1F4B", marginBottom: 6 }}>{s.title}</div>
                  <div style={{ fontSize: 12, color: "#5C6B8A", lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ background: "linear-gradient(135deg, #0B1F4B, #1E3A70)", borderRadius: 10, padding: "48px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 28 }}>
            <div>
              <div style={{ fontSize: 11, color: "#F0B429", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Career & Employment Cell — ABVVK</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 700, color: "#fff", marginBottom: 10 }}>Already Have a Skill? Start Your Career Today.</h3>
              <p style={{ fontSize: 14, color: "#A8BBDA", maxWidth: 520, lineHeight: 1.7 }}>No training needed — apply directly for placement support. Our placement officers will match you with the right employer, completely free of cost.</p>
            </div>
            <button className="btn-gold" style={{ fontSize: 14, padding: "15px 36px", whiteSpace: "nowrap" }} onClick={() => openPlacementForm("")}>Apply for Placement — Free →</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              <div className="section-eyebrow">About the Initiative</div>
              <h2 className="section-title">A National Mission<br />for Skill India</h2>
              <div className="title-rule" />
              <p style={{ fontSize: 15, color: "#5C6B8A", lineHeight: 1.85, marginBottom: 16 }}>Atal Bihari Vajpayee Kaushalya Vikas Kendra is a government-backed skill development initiative operating in partnership with the National Skill Development Corporation (NSDC) and the Confederation of Indian Industry (CII). Our mission is to eliminate barriers between talent and opportunity.</p>
              <p style={{ fontSize: 15, color: "#5C6B8A", lineHeight: 1.85, marginBottom: 28 }}>We deliver industry-grade vocational training across 13 disciplines — completely free of cost — to youth from all socioeconomic backgrounds, ensuring that no financial constraint impedes a student's growth.</p>
              {["NSDC-certified courses recognised nationwide","Industry expert faculty and mentors","Dedicated placement cell with live industry connections","Post-training grooming and confidence development","Internship, apprenticeship and job placement","Certificate valid across all Indian employers"].map(p => (
                <div key={p} className="check-item">
                  <div className="check-icon"><span style={{ color: "#C8960C", fontSize: 12, fontWeight: 700 }}>✓</span></div>
                  <span style={{ fontSize: 14, color: "#1a2340", lineHeight: 1.55 }}>{p}</span>
                </div>
              ))}
            </div>
            <div>
              <div style={{ background: "#0B1F4B", borderRadius: 8, overflow: "hidden" }}>
                <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#F0B429", letterSpacing: 2, textTransform: "uppercase" }}>Programme Overview</div>
                </div>
                <div style={{ padding: "24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(255,255,255,.04)" }}>
                  {[["10,000+","Students Trained"],["13+","Active Programmes"],["95%","Placement Rate"],["100%","Free of Cost"],["3","Batch Intakes / Year"],["50+","Industry Partners"]].map(([n,l]) => (
                    <div key={l} style={{ padding: "20px 16px", background: "#0B1F4B", textAlign: "center" }}>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, fontWeight: 700, color: "#F0B429" }}>{n}</div>
                      <div style={{ fontSize: 11, color: "#8FA0C0", marginTop: 4, letterSpacing: .5, textTransform: "uppercase" }}>{l}</div>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "20px 24px", display: "flex", gap: 12 }}>
                  <button className="btn-gold" style={{ flex: 1 }} onClick={() => setShowEnquiry(true)}>Apply Now</button>
                  <button className="btn-outline" style={{ flex: 1, borderColor: "rgba(255,255,255,.3)", color: "#fff" }} onClick={() => scrollTo("contact")}>Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: "#C8960C", padding: "52px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,.7)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Limited Seats — 2026–27 Batch</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>Begin Your Skill Journey Today.<br />It Costs Absolutely Nothing.</h2>
          </div>
          <button style={{ background: "#0B1F4B", color: "#fff", border: "none", padding: "15px 36px", borderRadius: 4, fontSize: 13, fontWeight: 700, cursor: "pointer", letterSpacing: 1, textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif", transition: "all .2s", whiteSpace: "nowrap" }}
            onClick={() => setShowEnquiry(true)}
            onMouseEnter={e => e.currentTarget.style.background = "#16305E"}
            onMouseLeave={e => e.currentTarget.style.background = "#0B1F4B"}>
            Apply for Free Admission →
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-eyebrow">Get In Touch</div>
            <h2 className="section-title">Contact & Address</h2>
            <div className="title-rule" style={{ margin: "16px auto 20px" }} />
            <p className="section-sub" style={{ maxWidth: 480, margin: "0 auto" }}>Our counsellors are available to guide you through the enrolment process.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 24 }}>
            {[
              { icon: "📍", title: "Registered Address", lines: ["Atal Bihari Vajpayee Kaushalya Vikas Kendra", "6V34+8CX, Akurli Cross Rd Number 3, Kandivali", "Akurli Industry Estate, Kandivali East, Mumbai, Maharashtra 400101"] },
              { icon: "📞", title: "Mobile Numbers", lines: ["Toll-Free: 1800-XXX-XXXX", "084529 46439 (Admissions)", "084529 46439 (Placements)"] },
              { icon: "✉️", title: "Official Email", lines: ["info@northmumbaiskillcentre.com"] },
              { icon: "🕐", title: "Office Hours", lines: ["Monday – Friday: 9:00 AM – 6:00 PM", "Saturday: 9:00 AM – 2:00 PM", "Sunday & Public Holidays: Closed"] },
            ].map(c => (
              <div key={c.title} style={{ padding: "28px 24px", border: "1px solid #DDE3F0", borderRadius: 6, borderTop: "3px solid #0B1F4B", background: "#FAFBFE" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 17, color: "#0B1F4B", marginBottom: 10 }}>{c.title}</h3>
                {c.lines.map(l => <p key={l} style={{ fontSize: 13, color: "#5C6B8A", lineHeight: 1.7 }}>{l}</p>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0A1838", padding: "60px 24px 0" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2.2fr 1fr 1fr 1fr", gap: 40, paddingBottom: 48 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ width: 44, height: 44, background: "#16305E", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 1 }}>
                  <div style={{ width: 28, height: 3, background: "#FF9933", borderRadius: 2 }} />
                  <div style={{ width: 28, height: 3, background: "#fff", borderRadius: 2 }} />
                  <div style={{ width: 28, height: 3, background: "#138808", borderRadius: 2 }} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 16, color: "#fff", lineHeight: 1.2 }}>ATAL BIHARI VAJPAYEE<br />KAUSHALYA VIKAS KENDRA</div>
                  <div style={{ fontSize: 9, color: "#C8960C", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", marginTop: 2 }}>Mumbai — Skill Development Initiative</div>
                </div>
              </div>
              <p style={{ fontSize: 13, color: "#8FA0C0", lineHeight: 1.8, maxWidth: 320, marginBottom: 20 }}>A government-backed initiative empowering India's youth through free, NSDC-certified vocational training, grooming, and guaranteed placement support.</p>
              <div style={{ display: "flex", gap: 8 }}>
                {["F","T","in","▶"].map((s, i) => (
                  <div key={i} style={{ width: 34, height: 34, borderRadius: 4, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 13, color: "#8FA0C0", fontWeight: 700, transition: "all .2s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#C8960C"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.06)"; e.currentTarget.style.color = "#8FA0C0"; }}>
                    {s}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#F0B429", letterSpacing: 2, textTransform: "uppercase", marginBottom: 18 }}>Programmes</div>
              {["Fashion Designing","Animation & VFX","Graphic Design","Cyber Security","IT Education","Hotel Management","Continental Cooking"].map(c => (
                <span key={c} className="footer-link" onClick={() => scrollTo("courses")}>{c}</span>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#F0B429", letterSpacing: 2, textTransform: "uppercase", marginBottom: 18 }}>Placements</div>
              {["Apply for Placement","Fashion & Design Jobs","Technology Jobs","Hospitality Jobs","Technical Trade Jobs","Internships","Apprenticeships"].map(s => (
                <span key={s} className="footer-link" onClick={() => s === "Apply for Placement" ? openPlacementForm("") : scrollTo("placement")}>{s}</span>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#F0B429", letterSpacing: 2, textTransform: "uppercase", marginBottom: 18 }}>Quick Links</div>
              {[["About Us","about"],["Our Courses","courses"],["Services","services"],["Placements","placement"],["Admissions","home"],["Contact Us","contact"]].map(([l, id]) => (
                <span key={l} className="footer-link" onClick={() => scrollTo(id)}>{l}</span>
              ))}
            </div>
          </div>
          <div className="tricolor" />
          <div style={{ padding: "16px 0", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, fontSize: 12, color: "#8FA0C0" }}>
            <span>Crbix Solutions © 2026 ATAL BIHARI VAJPAYEE KAUSHALYA VIKAS KENDRA, Mumbai, India. All rights reserved.</span>
            <div style={{ display: "flex", gap: 20 }}>
              {["Privacy Policy","Terms of Use","RTI","Disclaimer"].map(l => (
                <span key={l} style={{ cursor: "pointer", transition: "color .15s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#F0B429"}
                  onMouseLeave={e => e.currentTarget.style.color = "#8FA0C0"}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ADMISSION MODAL */}
      {showEnquiry && (
        <div className="overlay" onClick={e => { if (e.target === e.currentTarget) { setShowEnquiry(false); setSubmitted(false); } }}>
          <div className="modal">
            <button onClick={() => { setShowEnquiry(false); setSubmitted(false); }} style={{ position: "absolute", top: 14, right: 18, background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#999" }}>×</button>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <div style={{ width: 64, height: 64, background: "#E8F5E9", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, margin: "0 auto 20px" }}>✅</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 700, color: "#0B1F4B", marginBottom: 10 }}>Application Submitted</h2>
                <p style={{ color: "#5C6B8A", fontSize: 14, lineHeight: 1.75, marginBottom: 24 }}>Thank you. Our admissions team will contact you within 24 working hours.</p>
                <div style={{ background: "#FEF3C7", border: "1px solid #F0B429", borderRadius: 6, padding: "12px 16px", fontSize: 13, color: "#92400E", marginBottom: 24, textAlign: "left" }}>
                  <strong>Reference ID:</strong> ADM-{Math.random().toString(36).slice(2,8).toUpperCase()}<br />Please save this for your records.
                </div>
                <button className="btn-primary" onClick={() => { setShowEnquiry(false); setSubmitted(false); }}>Close Window</button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#C8960C", letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>ABVVK — Official Admission Enquiry</div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 700, color: "#0B1F4B", marginBottom: 4 }}>Apply for Free Admission</h2>
                  <p style={{ color: "#5C6B8A", fontSize: 13 }}>Fill in your details below. Our counsellor will contact you within 24 hours.</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <div className="form-row" style={{ marginBottom: 0 }}>
                      <label className="form-label">Full Name *</label>
                      <input required className="form-input" placeholder="As per Aadhar card" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="form-row" style={{ marginBottom: 0 }}>
                      <label className="form-label">Mobile Number *</label>
                      <input required className="form-input" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-row" style={{ marginTop: 14 }}>
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-input" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div className="form-row">
                    <label className="form-label">Preferred Programme *</label>
                    <select required className="form-input" value={form.course} onChange={e => setForm({ ...form, course: e.target.value })}>
                      <option value="">— Select a Programme —</option>
                      {COURSES.map(c => <option key={c.title} value={c.title}>{c.title}</option>)}
                    </select>
                  </div>
                  <div className="form-row">
                    <label className="form-label">Query / Message</label>
                    <textarea rows={3} className="form-input" placeholder="Any specific requirements or questions..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: "vertical" }} />
                  </div>
                  <div style={{ background: "#F0F4FF", border: "1px solid #C5D0E8", borderRadius: 4, padding: "10px 14px", fontSize: 12, color: "#3A4F7A", marginBottom: 18 }}>
                    ℹ️ Your information is handled in accordance with Government of India data protection guidelines.
                  </div>
                  <button className="btn-primary" type="submit" style={{ width: "100%", padding: "14px", fontSize: 14 }}>Submit Application →</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* PLACEMENT MODAL */}
      {showPlacement && (
        <div className="overlay" onClick={e => { if (e.target === e.currentTarget) { setShowPlacement(false); setPlacementSubmitted(false); } }}>
          <div className="modal">
            <button onClick={() => { setShowPlacement(false); setPlacementSubmitted(false); }} style={{ position: "absolute", top: 14, right: 18, background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#999" }}>×</button>
            {placementSubmitted ? (
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <div style={{ width: 64, height: 64, background: "#E8F5E9", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, margin: "0 auto 20px" }}>✅</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 700, color: "#0B1F4B", marginBottom: 10 }}>Placement Application Received</h2>
                <p style={{ color: "#5C6B8A", fontSize: 14, lineHeight: 1.75, marginBottom: 24 }}>Our placement officer will contact you within 24 working hours.</p>
                <div style={{ background: "#FEF3C7", border: "1px solid #F0B429", borderRadius: 6, padding: "12px 16px", fontSize: 13, color: "#92400E", marginBottom: 24, textAlign: "left" }}>
                  <strong>Reference ID:</strong> PLT-{Math.random().toString(36).slice(2,8).toUpperCase()}<br />Please save this for your records.
                </div>
                <button className="btn-primary" onClick={() => { setShowPlacement(false); setPlacementSubmitted(false); }}>Close Window</button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#C8960C", letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>ABVVK — Career & Employment Cell</div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 700, color: "#0B1F4B", marginBottom: 4 }}>Apply for Placement Support</h2>
                  <p style={{ color: "#5C6B8A", fontSize: 13 }}>Free placement assistance — our officer will contact you within 24 hours.</p>
                </div>
                <form onSubmit={handlePlacementSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <div className="form-row" style={{ marginBottom: 0 }}>
                      <label className="form-label">Full Name *</label>
                      <input required className="form-input" placeholder="As per Aadhar card" value={placementForm.name} onChange={e => setPlacementForm({ ...placementForm, name: e.target.value })} />
                    </div>
                    <div className="form-row" style={{ marginBottom: 0 }}>
                      <label className="form-label">Mobile Number *</label>
                      <input required className="form-input" placeholder="+91 XXXXX XXXXX" value={placementForm.phone} onChange={e => setPlacementForm({ ...placementForm, phone: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-row" style={{ marginTop: 14 }}>
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-input" placeholder="your@email.com" value={placementForm.email} onChange={e => setPlacementForm({ ...placementForm, email: e.target.value })} />
                  </div>
                  <div className="form-row">
                    <label className="form-label">Skill / Sector *</label>
                    <select required className="form-input" value={placementForm.course} onChange={e => setPlacementForm({ ...placementForm, course: e.target.value })}>
                      <option value="">— Select your skill area —</option>
                      {PLACEMENT_SECTORS.map(p => <option key={p.title} value={p.title}>{p.title}</option>)}
                    </select>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <div className="form-row" style={{ marginBottom: 0 }}>
                      <label className="form-label">Experience *</label>
                      <select required className="form-input" value={placementForm.experience} onChange={e => setPlacementForm({ ...placementForm, experience: e.target.value })}>
                        <option value="">— Select —</option>
                        <option>Fresher</option>
                        <option>Less than 1 Year</option>
                        <option>1–2 Years</option>
                        <option>2–5 Years</option>
                        <option>5+ Years</option>
                      </select>
                    </div>
                    <div className="form-row" style={{ marginBottom: 0 }}>
                      <label className="form-label">Preferred Location</label>
                      <input className="form-input" placeholder="e.g. Mumbai" value={placementForm.location} onChange={e => setPlacementForm({ ...placementForm, location: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-row" style={{ marginTop: 14 }}>
                    <label className="form-label">Additional Information</label>
                    <textarea rows={3} className="form-input" placeholder="Mention qualifications, certifications, or specific job preferences..." value={placementForm.message} onChange={e => setPlacementForm({ ...placementForm, message: e.target.value })} style={{ resize: "vertical" }} />
                  </div>
                  <div style={{ background: "#F0F4FF", border: "1px solid #C5D0E8", borderRadius: 4, padding: "10px 14px", fontSize: 12, color: "#3A4F7A", marginBottom: 18 }}>
                    ℹ️ Placement support is 100% free. Your profile will only be shared with our verified industry partners.
                  </div>
                  <button className="btn-gold" type="submit" style={{ width: "100%", padding: "14px", fontSize: 14 }}>Submit Placement Application →</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}