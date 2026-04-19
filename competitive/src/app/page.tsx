export default function Home() {
  return (
    <>
      {/* Main Content Area */}
      <main className="pt-16 pb-24 md:pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <header className="relative mt-4 sm:mt-8 group">
          <div className="aspect-[16/10] sm:aspect-[21/9] w-full rounded-xl sm:rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-lg sm:shadow-2xl relative">
            <img alt="Competition Hero" className="w-full h-full object-cover" data-alt="Close up of diverse youth athletes preparing for a race at an athletics stadium under bright afternoon sun" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1wFTILrjZdChMqxgCe82Zcle5Ce8exVP20Vb0RLALXAqqLtbUkKzLNoFQ7Yb4b0XqpDhIwU52kNcnwtpFsyoTn3bWz_sAFOd5Xd4oY_a7xljeI00Rd9yXQLXu-9f6x36efg6V6T-HdPOfqFVQz78Pq2OLYznFDMRUeW266sVTTUefs16WvUF3PUCtU5MHvpns3IGVfeNVCDg2QhM9k3ykDtnrIDqbRcF7W2NfyNGvSnVrDnOgEnnqsppiBTfn0l4CPIEgpgudhDyR" />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 lg:p-12 w-full">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
                <div className="space-y-2 sm:space-y-3">
                  <span className="inline-block bg-tertiary-container text-on-tertiary-container px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">State Finals 2024</span>
                  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-headline font-extrabold text-white leading-tight">A web post competition find your team</h1>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 text-white/90 text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-container text-[20px]" data-icon="calendar_today">calendar_today</span>
                      <span className="font-medium">October 12-14, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-container text-[20px]" data-icon="location_on">location_on</span>
                      <span className="font-medium">Tech Center Plaza, San Jose</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full md:w-auto">
                  <button className="bg-gradient-to-r from-primary to-primary-container text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all text-sm sm:text-base">Join Competition</button>
                  <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full hover:bg-white/30 active:scale-95 transition-all text-sm sm:text-base">Create Teammate Request</button>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Detailed Info Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {/* Information Column */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* About Section */}
            <section className="bg-surface-container-lowest p-6 sm:p-8 rounded-lg sm:rounded-xl">
              <h2 className="text-xl sm:text-2xl font-headline font-bold mb-4 flex items-center gap-3">
                <span className="w-2 h-6 sm:h-8 bg-primary rounded-full"></span>
                About the Competition
              </h2>
              <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed font-body">
                Post a competition to find your Teammate! is the premier event for young innovators aged 8-14. This year's theme, "Sustainable Cities," challenges teams to design and build autonomous robots that can solve real-world environmental problems. Participants will engage in three days of intense collaboration, learning, and friendly competition.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 sm:mt-8">
                <div className="bg-surface-container-low p-4 sm:p-6 rounded-lg sm:rounded-xl">
                  <span className="material-symbols-outlined text-primary mb-2 text-[28px]" data-icon="groups">groups</span>
                  <h3 className="font-headline font-bold text-on-surface text-sm sm:text-base">Team Size</h3>
                  <p className="text-on-surface-variant text-sm">2 to 4 members per team</p>
                </div>
                <div className="bg-surface-container-low p-4 sm:p-6 rounded-lg sm:rounded-xl">
                  <span className="material-symbols-outlined text-primary mb-2 text-[28px]" data-icon="military_tech">military_tech</span>
                  <h3 className="font-headline font-bold text-on-surface text-sm sm:text-base">Skill Level</h3>
                  <p className="text-on-surface-variant text-sm">Beginner to Intermediate</p>
                </div>
              </div>
            </section>
            {/* Teammates Search */}
            <section>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-headline font-bold">Parents Looking for Teammates</h2>
                <button className="text-primary font-bold hover:underline text-sm sm:text-base w-fit">View All</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* User Card 1 */}
                <div className="bg-surface-container-lowest p-4 sm:p-6 rounded-lg sm:rounded-xl hover:shadow-xl transition-shadow border-b-4 border-primary-container">
                  <div className="flex items-center gap-4 mb-4">
                    <img alt="Sarah J." className="w-12 sm:w-14 h-12 sm:h-14 rounded-lg object-cover flex-shrink-0" data-alt="Close up portrait of a middle-aged father smiling warmly, wearing a casual sweater in a bright modern home office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0RqRg8JYrEK_7WNr842kkqMnGHcP9foaJpZQ-d20fuAq41toLcm6OBWf6oJEoPNbzaYsNI28HGuuiXNv6Iz_xIBkM1PH8WnaYOcrkiZNKKtTN3kVa9hevORRP5caPcobJCINhyWAsqLVMmwVCs5MVUlgRTKKO8E4hvwWVvhp7E2EZBAi6W3z8qROFdofr5YUoumcEBJVzU3QyJ9Ag_CIczDPg_VD2sqIeSMaGNiHwxb5lWpwlWZ6GwplHH77MWy1Kd5FLDySqjbcu" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-headline font-bold text-sm sm:text-base truncate">David Miller</h4>
                      <p className="text-xs text-on-surface-variant flex items-center gap-1 mt-1">
                        <span className="material-symbols-outlined text-[14px] flex-shrink-0" data-icon="schedule">schedule</span>
                        <span className="truncate">Posted 2h ago</span>
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4 sm:mb-6">
                    <div className="flex justify-between items-center bg-surface-container p-2.5 sm:p-3 rounded-lg">
                      <span className="text-xs sm:text-sm font-medium">Child Age</span>
                      <span className="text-xs sm:text-sm text-primary font-bold">11 years</span>
                    </div>
                    <div className="flex justify-between items-center bg-surface-container p-2.5 sm:p-3 rounded-lg">
                      <span className="text-xs sm:text-sm font-medium">Skill Level</span>
                      <span className="text-xs sm:text-sm text-primary font-bold">Lego Mindstorms Expert</span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-xs sm:text-sm mb-4 sm:mb-6 italic">"Leo is super excited about the environmental theme. We're looking for someone who loves coding!"</p>
                  <button className="w-full bg-secondary-container text-on-secondary-container font-bold py-2.5 sm:py-3 rounded-full hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                    <span className="material-symbols-outlined text-[18px] sm:text-[20px]" data-icon="mail">mail</span>
                    Message David
                  </button>
                </div>
                {/* User Card 2 */}
                <div className="bg-surface-container-lowest p-4 sm:p-6 rounded-lg sm:rounded-xl hover:shadow-xl transition-shadow border-b-4 border-tertiary-container">
                  <div className="flex items-center gap-4 mb-4">
                    <img alt="Elena R." className="w-12 sm:w-14 h-12 sm:h-14 rounded-lg object-cover flex-shrink-0" data-alt="Candid portrait of a mother with eyeglasses smiling cheerfully, natural light with soft foliage in background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8w0JjWK2qxqkNDrUwZsMSzh0_2Fsg1IKhoJNA2wwhp6n0GL9Qrs1dkDtIzp-073A1d0CIEp3YeHTUMGtmmp8fTESriw0WujtWpIJrzW6iEunqw6P2xjqRrMnCUXrEFGfyi9hxfSM6vG4UKg_BhU_45JpyKWkhgUXDCVWEMlkmBMb_u5fMnPUS5LvbK4W5JT75kLcKoMvO_epWqj4vTUDVKGKenqg9SFuxxHhQqQg5ThJVPUC2S-bQLx1_lf8YHH6i-GrLaHeD34UH" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-headline font-bold text-sm sm:text-base truncate">Elena Rodriguez</h4>
                      <p className="text-xs text-on-surface-variant flex items-center gap-1 mt-1">
                        <span className="material-symbols-outlined text-[14px] flex-shrink-0" data-icon="schedule">schedule</span>
                        <span className="truncate">Posted 5h ago</span>
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4 sm:mb-6">
                    <div className="flex justify-between items-center bg-surface-container p-2.5 sm:p-3 rounded-lg">
                      <span className="text-xs sm:text-sm font-medium">Child Age</span>
                      <span className="text-xs sm:text-sm text-primary font-bold">9 years</span>
                    </div>
                    <div className="flex justify-between items-center bg-surface-container p-2.5 sm:p-3 rounded-lg">
                      <span className="text-xs sm:text-sm font-medium">Skill Level</span>
                      <span className="text-xs sm:text-sm text-primary font-bold">VEX IQ Beginner</span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-xs sm:text-sm mb-4 sm:mb-6 italic">"Sofia wants to join her first competition. We have all the parts but need a partner to brainstorm ideas."</p>
                  <button className="w-full bg-secondary-container text-on-secondary-container font-bold py-2.5 sm:py-3 rounded-full hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                    <span className="material-symbols-outlined text-[18px] sm:text-[20px]" data-icon="mail">mail</span>
                    Message Elena
                  </button>
                </div>
              </div>
            </section>
          </div>
          {/* Sidebar Column */}
          <aside className="space-y-6 sm:space-y-8">
            {/* Location Map */}
            <section className="bg-surface-container-lowest rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
              <div className="h-40 sm:h-48 w-full bg-surface-container-high relative group">
                <img alt="Map Location" className="w-full h-full object-cover" data-alt="Bird's eye view of a modern city grid with clean architecture and green parks in soft daylight" data-location="San Jose" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM1d9QHkiGVtdOEyCzVEPNcdXTQoMxCIxwhRA7i8cU8yAv7IuJQxiVzxy1f3xx3pvPcLY43swRmn_hn9ye_qGtpThC3xG_FBB4KDZOXzCZVsHG-f8i6lQSX4IE5Xu8xqGiSQwuahRdIVAqJ1X-m4tvV55edZZTm84Zv6oWdJstsI5M6_6d8PwpSFlUoxo0-5mxby2wPaiaPLOrJv6qXU8tH5gifyG9Com23kIk6ZoOKWndSyJBYNisOXsvZqeut-4Dva4wRDCjN2__" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-primary text-white p-2 sm:p-3 rounded-full shadow-2xl scale-100 sm:scale-110">
                    <span className="material-symbols-outlined text-[24px] sm:text-[28px]" data-icon="location_on" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-headline font-bold text-base sm:text-lg mb-2">Competition Venue</h3>
                <p className="text-on-surface-variant text-xs sm:text-sm mb-3 sm:mb-4">Tech Center Plaza, 150 Innovation Way, San Jose, CA</p>
                <button className="text-primary font-bold text-xs sm:text-sm flex items-center gap-2 group">
                  Get Directions
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </div>
            </section>
            {/* Requirements & Details */}
            <section className="bg-surface-container-low p-6 sm:p-8 rounded-lg sm:rounded-xl space-y-6">
              <h3 className="font-headline font-bold text-lg sm:text-xl">Quick Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0 text-[20px]" data-icon="verified">verified</span>
                  <div className="min-w-0">
                    <p className="font-bold text-xs sm:text-sm">Entry Fee</p>
                    <p className="text-xs sm:text-sm text-on-surface-variant">$45.00 per team</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0 text-[20px]" data-icon="inventory_2">inventory_2</span>
                  <div className="min-w-0">
                    <p className="font-bold text-xs sm:text-sm">Equipment Provided</p>
                    <p className="text-xs sm:text-sm text-on-surface-variant">Tables, Wi-Fi, Power Supply</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0 text-[20px]" data-icon="event_available">event_available</span>
                  <div className="min-w-0">
                    <p className="font-bold text-xs sm:text-sm">Deadline</p>
                    <p className="text-xs sm:text-sm text-error font-semibold">Sept 30, 2024</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant/15">
                <p className="text-xs text-on-surface-variant mb-4">Organized by San Jose Youth Tech Council</p>
                <button className="w-full bg-primary text-white font-bold py-3 sm:py-4 rounded-full shadow-lg hover:opacity-90 transition-all text-sm sm:text-base">Download Rulebook</button>
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
