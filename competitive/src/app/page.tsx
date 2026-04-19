export default function Home() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#f6faf8]/70 backdrop-blur-xl flex justify-between items-center px-6 h-16 w-full shadow-[0px_4px_24px_rgba(42,52,51,0.06)]">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold text-[#0d9488] tracking-tight font-headline">The Nurturing Atelier</span>
          <div className="hidden md:flex items-center gap-6">
            <a className="text-[#2a3433]/60 font-['Plus_Jakarta_Sans'] font-semibold hover:bg-[#e7f0ed] transition-colors px-3 py-2 rounded-lg" href="#">Home</a>
            <a className="text-[#0d9488] font-bold border-b-2 border-[#0d9488] font-['Plus_Jakarta_Sans'] px-3 py-2" href="#">Post Competition</a>
            <a className="text-[#2a3433]/60 font-['Plus_Jakarta_Sans'] font-semibold hover:bg-[#e7f0ed] transition-colors px-3 py-2 rounded-lg" href="#">Find Teammates</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-[#e7f0ed] active:scale-95 duration-200 text-[#0d9488]">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
          <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-surface shadow-sm">
            <img alt="User profile avatar" className="w-full h-full object-cover" data-alt="Portrait of a friendly smiling woman with warm lighting and a soft blurred park background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQAAf2cr5yfc6-4CJUpAGQqBncVpLjRk6sF22VLUW12nWWj2zHhDnfH1yywAqkM6twWZiZFd39ZIJPsO0Hs1Px3Nryy5pJL10xmjE7-vlUjjL_GqCpL9bT9jnVV1kyeu5bUgFIQ2vxIFea9gDgL1yCPkBsZRk67Lz6LlF2Es8bI_YLdjHYbe3ULuFEvs-iyGip49kADJTC_0rgQ2h6bVeMCS8T9OdEs-c9K1hFgdxwPULH2Bwtw9uVupchjAzYlYzHpcaONtqjb_XB" />
          </div>
        </div>
      </nav>
      {/* Main Content Area */}
      <main className="pt-16 pb-24 md:pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <header className="relative mt-8 group">
          <div className="aspect-[21/9] w-full rounded-[2rem] overflow-hidden shadow-2xl relative">
            <img alt="Competition Hero" className="w-full h-full object-cover" data-alt="Close up of diverse youth athletes preparing for a race at an athletics stadium under bright afternoon sun" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1wFTILrjZdChMqxgCe82Zcle5Ce8exVP20Vb0RLALXAqqLtbUkKzLNoFQ7Yb4b0XqpDhIwU52kNcnwtpFsyoTn3bWz_sAFOd5Xd4oY_a7xljeI00Rd9yXQLXu-9f6x36efg6V6T-HdPOfqFVQz78Pq2OLYznFDMRUeW266sVTTUefs16WvUF3PUCtU5MHvpns3IGVfeNVCDg2QhM9k3ykDtnrIDqbRcF7W2NfyNGvSnVrDnOgEnnqsppiBTfn0l4CPIEgpgudhDyR" />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-3">
                  <span className="bg-tertiary-container text-on-tertiary-container px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">State Finals 2024</span>
                  <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-white leading-tight">The Junior Robotics World Challenge</h1>
                  <div className="flex flex-wrap gap-4 text-white/90">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-container" data-icon="calendar_today">calendar_today</span>
                      <span className="font-medium">October 12-14, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-container" data-icon="location_on">location_on</span>
                      <span className="font-medium">Tech Center Plaza, San Jose</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-primary to-primary-container text-white font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all">Join Competition</button>
                  <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-8 rounded-full hover:bg-white/30 active:scale-95 transition-all">Create Teammate Request</button>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Detailed Info Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Information Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <section className="bg-surface-container-lowest p-8 rounded-xl">
              <h2 className="text-2xl font-headline font-bold mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                About the Competition
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed font-body">
                The Junior Robotics World Challenge is the premier event for young innovators aged 8-14. This year's theme, "Sustainable Cities," challenges teams to design and build autonomous robots that can solve real-world environmental problems. Participants will engage in three days of intense collaboration, learning, and friendly competition.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-surface-container-low p-6 rounded-xl">
                  <span className="material-symbols-outlined text-primary mb-2" data-icon="groups">groups</span>
                  <h3 className="font-headline font-bold text-on-surface">Team Size</h3>
                  <p className="text-on-surface-variant">2 to 4 members per team</p>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl">
                  <span className="material-symbols-outlined text-primary mb-2" data-icon="military_tech">military_tech</span>
                  <h3 className="font-headline font-bold text-on-surface">Skill Level</h3>
                  <p className="text-on-surface-variant">Beginner to Intermediate</p>
                </div>
              </div>
            </section>
            {/* Teammates Search */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-headline font-bold">Parents Looking for Teammates</h2>
                <button className="text-primary font-bold hover:underline">View All</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* User Card 1 */}
                <div className="bg-surface-container-lowest p-6 rounded-xl hover:shadow-xl transition-shadow border-b-4 border-primary-container">
                  <div className="flex items-center gap-4 mb-4">
                    <img alt="Sarah J." className="w-14 h-14 rounded-lg object-cover" data-alt="Close up portrait of a middle-aged father smiling warmly, wearing a casual sweater in a bright modern home office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0RqRg8JYrEK_7WNr842kkqMnGHcP9foaJpZQ-d20fuAq41toLcm6OBWf6oJEoPNbzaYsNI28HGuuiXNv6Iz_xIBkM1PH8WnaYOcrkiZNKKtTN3kVa9hevORRP5caPcobJCINhyWAsqLVMmwVCs5MVUlgRTKKO8E4hvwWVvhp7E2EZBAi6W3z8qROFdofr5YUoumcEBJVzU3QyJ9Ag_CIczDPg_VD2sqIeSMaGNiHwxb5lWpwlWZ6GwplHH77MWy1Kd5FLDySqjbcu" />
                    <div>
                      <h4 className="font-headline font-bold">David Miller</h4>
                      <p className="text-xs text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]" data-icon="schedule">schedule</span>
                        Posted 2h ago
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-center bg-surface-container p-3 rounded-lg">
                      <span className="text-sm font-medium">Child Age</span>
                      <span className="text-sm text-primary font-bold">11 years</span>
                    </div>
                    <div className="flex justify-between items-center bg-surface-container p-3 rounded-lg">
                      <span className="text-sm font-medium">Skill Level</span>
                      <span className="text-sm text-primary font-bold">Lego Mindstorms Expert</span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm mb-6 italic">"Leo is super excited about the environmental theme. We're looking for someone who loves coding!"</p>
                  <button className="w-full bg-secondary-container text-on-secondary-container font-bold py-3 rounded-full hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[20px]" data-icon="mail">mail</span>
                    Message David
                  </button>
                </div>
                {/* User Card 2 */}
                <div className="bg-surface-container-lowest p-6 rounded-xl hover:shadow-xl transition-shadow border-b-4 border-tertiary-container">
                  <div className="flex items-center gap-4 mb-4">
                    <img alt="Elena R." className="w-14 h-14 rounded-lg object-cover" data-alt="Candid portrait of a mother with eyeglasses smiling cheerfully, natural light with soft foliage in background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8w0JjWK2qxqkNDrUwZsMSzh0_2Fsg1IKhoJNA2wwhp6n0GL9Qrs1dkDtIzp-073A1d0CIEp3YeHTUMGtmmp8fTESriw0WujtWpIJrzW6iEunqw6P2xjqRrMnCUXrEFGfyi9hxfSM6vG4UKg_BhU_45JpyKWkhgUXDCVWEMlkmBMb_u5fMnPUS5LvbK4W5JT75kLcKoMvO_epWqj4vTUDVKGKenqg9SFuxxHhQqQg5ThJVPUC2S-bQLx1_lf8YHH6i-GrLaHeD34UH" />
                    <div>
                      <h4 className="font-headline font-bold">Elena Rodriguez</h4>
                      <p className="text-xs text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]" data-icon="schedule">schedule</span>
                        Posted 5h ago
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-center bg-surface-container p-3 rounded-lg">
                      <span className="text-sm font-medium">Child Age</span>
                      <span className="text-sm text-primary font-bold">9 years</span>
                    </div>
                    <div className="flex justify-between items-center bg-surface-container p-3 rounded-lg">
                      <span className="text-sm font-medium">Skill Level</span>
                      <span className="text-sm text-primary font-bold">VEX IQ Beginner</span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm mb-6 italic">"Sofia wants to join her first competition. We have all the parts but need a partner to brainstorm ideas."</p>
                  <button className="w-full bg-secondary-container text-on-secondary-container font-bold py-3 rounded-full hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[20px]" data-icon="mail">mail</span>
                    Message Elena
                  </button>
                </div>
              </div>
            </section>
          </div>
          {/* Sidebar Column */}
          <aside className="space-y-8">
            {/* Location Map */}
            <section className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 w-full bg-surface-container-high relative group">
                <img alt="Map Location" className="w-full h-full object-cover" data-alt="Bird's eye view of a modern city grid with clean architecture and green parks in soft daylight" data-location="San Jose" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM1d9QHkiGVtdOEyCzVEPNcdXTQoMxCIxwhRA7i8cU8yAv7IuJQxiVzxy1f3xx3pvPcLY43swRmn_hn9ye_qGtpThC3xG_FBB4KDZOXzCZVsHG-f8i6lQSX4IE5Xu8xqGiSQwuahRdIVAqJ1X-m4tvV55edZZTm84Zv6oWdJstsI5M6_6d8PwpSFlUoxo0-5mxby2wPaiaPLOrJv6qXU8tH5gifyG9Com23kIk6ZoOKWndSyJBYNisOXsvZqeut-4Dva4wRDCjN2__" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-primary text-white p-3 rounded-full shadow-2xl scale-110">
                    <span className="material-symbols-outlined" data-icon="location_on" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline font-bold text-lg mb-2">Competition Venue</h3>
                <p className="text-on-surface-variant text-sm mb-4">Tech Center Plaza, 150 Innovation Way, San Jose, CA</p>
                <button className="text-primary font-bold text-sm flex items-center gap-2 group">
                  Get Directions
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </div>
            </section>
            {/* Requirements & Details */}
            <section className="bg-surface-container-low p-8 rounded-xl space-y-6">
              <h3 className="font-headline font-bold text-xl">Quick Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1" data-icon="verified">verified</span>
                  <div>
                    <p className="font-bold text-sm">Entry Fee</p>
                    <p className="text-sm text-on-surface-variant">$45.00 per team</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1" data-icon="inventory_2">inventory_2</span>
                  <div>
                    <p className="font-bold text-sm">Equipment Provided</p>
                    <p className="text-sm text-on-surface-variant">Tables, Wi-Fi, Power Supply</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1" data-icon="event_available">event_available</span>
                  <div>
                    <p className="font-bold text-sm">Deadline</p>
                    <p className="text-sm text-on-surface-variant text-error font-semibold">Sept 30, 2024</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant/15">
                <p className="text-xs text-on-surface-variant mb-4">Organized by San Jose Youth Tech Council</p>
                <button className="w-full bg-primary text-white font-bold py-4 rounded-full shadow-lg hover:opacity-90 transition-all">Download Rulebook</button>
              </div>
            </section>
          </aside>
        </div>
      </main>
      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-[#f6faf8]/90 backdrop-blur-md rounded-t-3xl border-t border-[#a9b4b1]/15 shadow-2xl">
        <div className="flex flex-col items-center justify-center text-[#2a3433]/50 p-2 hover:opacity-80">
          <span className="material-symbols-outlined" data-icon="dynamic_feed">dynamic_feed</span>
          <span className="text-[10px] font-medium font-['Inter']">Feed</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#e7f0ed] text-[#0d9488] rounded-xl p-2 scale-90 duration-150">
          <span className="material-symbols-outlined" data-icon="add_box" style={{ fontVariationSettings: "'FILL' 1" }}>add_box</span>
          <span className="text-[10px] font-medium font-['Inter']">Post</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#2a3433]/50 p-2 hover:opacity-80">
          <span className="material-symbols-outlined" data-icon="person_search">person_search</span>
          <span className="text-[10px] font-medium font-['Inter']">Search</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#2a3433]/50 p-2 hover:opacity-80">
          <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
          <span className="text-[10px] font-medium font-['Inter']">Profile</span>
        </div>
      </nav>
    </>
  );
}
