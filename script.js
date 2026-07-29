/* =========================================================
   CAIRIN — SCRIPT.JS
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- ICONS (inline line SVG, 24x24) ---------- */
  const icons = {
    upload: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4M12 4l-4 4M12 4l4 4"/><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/></svg>',
    layers: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5Z"/><path d="M3 13l9 5 9-5"/></svg>',
    bell: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>',
    history: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/><path d="M12 7v5l3 3"/></svg>',
    filecheck: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5"/><path d="M9.5 14.5l2 2 4-4"/></svg>',
    grid: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  };

  /* ---------- DATA: FEATURES ---------- */
  const features = [
    { icon: icons.upload, title: 'Pengajuan Digital', desc: 'Isi formulir anggaran lengkap dengan rincian item, tanpa cetak dan tanda tangan basah lebih dulu.' },
    { icon: icons.layers, title: 'Verifikasi Berjenjang', desc: 'Proposal berjalan otomatis dari bendahara ormawa ke Wadek Kemahasiswaan lalu ke bagian keuangan.' },
    { icon: icons.bell, title: 'Notifikasi Real-time', desc: 'Setiap perubahan status masuk ke email dan WhatsApp pengaju, jadi tidak perlu menanyakan lagi.' },
    { icon: icons.history, title: 'Riwayat & Jejak Audit', desc: 'Semua revisi, catatan, dan tanda tangan digital tersimpan dan bisa ditelusuri kapan saja.' },
    { icon: icons.filecheck, title: 'Laporan Pertanggungjawaban', desc: 'Setelah dana cair, susun LPJ langsung dari data proposal — bukan dari nol.' },
    { icon: icons.grid, title: 'Dashboard Bendahara', desc: 'Lihat semua proposal yang pernah diajukan beserta statusnya dalam satu layar.' },
  ];

  const featureGrid = document.getElementById('featureGrid');
  featureGrid.innerHTML = features.map(f => `
    <div class="feature-card reveal">
      <div class="feature-card__icon">${f.icon}</div>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    </div>
  `).join('');

  /* ---------- DATA: CARA KERJA ---------- */
  const steps = [
    { num: '01', title: 'Diajukan', desc: 'Bendahara ormawa mengisi proposal dan mengunggah rincian anggaran kegiatan.' },
    { num: '02', title: 'Diverifikasi', desc: 'Tim kemahasiswaan mengecek kelengkapan berkas dan kewajaran anggaran.' },
    { num: '03', title: 'Disetujui', desc: 'Pejabat berwenang menandatangani persetujuan secara digital.' },
    { num: '04', title: 'Dicairkan', desc: 'Dana ditransfer, dan status proposal otomatis berubah menjadi selesai.' },
  ];
  const howGrid = document.getElementById('howGrid');
  howGrid.innerHTML = steps.map(s => `
    <div class="how-card reveal">
      <span class="how-card__num">${s.num}</span>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join('');

  /* ---------- DATA: DASHBOARD ROWS ---------- */
  const proposals = [
    { id: '#0143', org: 'BEM FIKOM', kegiatan: 'Lomba Debat Nasional', amount: 12500000, status: 'pending' },
    { id: '#0142', org: 'HMJ Informatika', kegiatan: 'Workshop Keamanan Siber', amount: 8200000, status: 'done' },
    { id: '#0141', org: 'UKM Musik', kegiatan: 'Konser Amal Kampus', amount: 15750000, status: 'done' },
    { id: '#0140', org: 'HMJ Akuntansi', kegiatan: 'Seminar Pajak UMKM', amount: 5400000, status: 'pending' },
    { id: '#0139', org: 'BEM Fakultas Hukum', kegiatan: 'Simulasi Sidang Semu', amount: 6100000, status: 'done' },
  ];

  const dashRows = document.getElementById('dashRows');
  dashRows.innerHTML = proposals.map(p => `
    <div class="dash-row">
      <span>${p.id}</span>
      <span>${p.org}</span>
      <span>${p.kegiatan}</span>
      <span class="dash-row__amount">Rp ${p.amount.toLocaleString('id-ID')}</span>
      <span class="status-badge status-badge--${p.status}">${p.status === 'done' ? 'Cair' : 'Diproses'}</span>
    </div>
  `).join('');

  const chartValues = [40, 65, 50, 80, 60, 95];
  document.getElementById('dashChart').innerHTML = chartValues.map(v => `<span style="height:${v}%"></span>`).join('');

  /* ---------- DATA: TESTIMONIALS ---------- */
  const testimonials = [
    { quote: 'Dulu proposal sering nyangkut di satu meja tanpa kabar. Sekarang semua pengurus tahu proposal ada di tahap mana.', name: 'Raka Pradipta', role: 'Bendahara, BEM Fakultas Teknik' },
    { quote: 'Laporan pertanggungjawaban jadi lebih cepat karena datanya sudah ada dari saat pengajuan.', name: 'Sinta Amelia', role: 'Ketua, HMJ Manajemen' },
    { quote: 'Notifikasi WhatsApp membantu kami tidak harus bolak-balik ke ruang keuangan setiap minggu.', name: 'Fajar Nugroho', role: 'Bendahara, UKM Pecinta Alam' },
  ];
  const testimonialGrid = document.getElementById('testimonialGrid');
  testimonialGrid.innerHTML = testimonials.map(t => `
    <div class="testimonial-card reveal">
      <p class="testimonial-card__quote">${t.quote}</p>
      <div class="testimonial-card__person">
        <div class="testimonial-card__avatar">${t.name.charAt(0)}</div>
        <div>
          <div class="testimonial-card__name">${t.name}</div>
          <div class="testimonial-card__role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');

  /* ---------- DATA: FAQ ---------- */
  const faqs = [
    { q: 'Apakah semua jenis ormawa bisa memakai Cairin?', a: 'Bisa. Cairin dipakai oleh BEM, HMJ, dan UKM — selama kampus memiliki alur verifikasi dan pencairan anggaran yang perlu dilacak.' },
    { q: 'Berapa lama proses verifikasi biasanya berjalan?', a: 'Rata-rata 3,2 hari dari proposal diajukan sampai disetujui, tergantung kelengkapan berkas dan jadwal pihak yang menyetujui.' },
    { q: 'Apakah data proposal bisa diekspor untuk LPJ?', a: 'Bisa. Rincian anggaran dan riwayat status pada setiap proposal dapat diunduh sebagai dasar laporan pertanggungjawaban.' },
    { q: 'Apakah kampus kami perlu memasang server sendiri?', a: 'Tidak perlu. Cairin berjalan sepenuhnya di browser, tanpa instalasi tambahan di sisi kampus.' },
    { q: 'Bagaimana jika proposal kami ditolak?', a: 'Catatan penolakan beserta alasannya muncul langsung di riwayat proposal, sehingga ormawa bisa merevisi dan mengajukan ulang.' },
  ];
  const faqList = document.getElementById('faqList');
  faqList.innerHTML = faqs.map((f, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-item__question" data-index="${i}">
        <span>${f.q}</span>
        <span class="faq-item__icon">+</span>
      </button>
      <div class="faq-item__answer">
        <p>${f.a}</p>
      </div>
    </div>
  `).join('');

  faqList.querySelectorAll('.faq-item__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-item__answer');
      const isOpen = item.classList.contains('open');

      faqList.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-item__answer').style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ---------- NAVBAR ON SCROLL ---------- */
  const navbar = document.getElementById('navbar');
  function handleNavbarScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }
  handleNavbarScroll();
  window.addEventListener('scroll', handleNavbarScroll);

  /* ---------- MOBILE MENU ---------- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  /* ---------- SCROLL REVEAL ---------- */
  function observeReveals() {
    const revealEls = document.querySelectorAll('.reveal:not(.is-visible)');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  }
  observeReveals();

  /* ---------- ANIMATED STAT COUNTERS ---------- */
  const statNumbers = document.querySelectorAll('.stat-card__number[data-count]');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statNumbers.forEach(el => statObserver.observe(el));

  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const decimalFactor = el.dataset.decimal ? parseInt(el.dataset.decimal, 10) : null;
    const duration = 1200;
    const start = performance.now();

    function format(value) {
      if (decimalFactor) {
        return (value / decimalFactor).toFixed(1).replace('.', ',');
      }
      return value.toLocaleString('id-ID');
    }

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = format(value) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = format(target) + suffix;
    }
    requestAnimationFrame(tick);
  }

  /* ---------- LIVE TRACKING STEPPER (hero signature element) ---------- */
  const stepperSteps = document.querySelectorAll('#stepper .stepper__step');
  const trackBadge = document.getElementById('trackBadge');
  let currentStage = 2; // starts at "Disetujui" in progress

  function renderStepper(stage) {
    stepperSteps.forEach((step, i) => {
      step.classList.remove('is-complete', 'is-current');
      if (i < stage) step.classList.add('is-complete');
      else if (i === stage) step.classList.add('is-current');
    });
    const isFinal = stage >= stepperSteps.length - 1;
    trackBadge.textContent = isFinal ? 'Selesai' : 'Diproses';
    trackBadge.classList.toggle('is-done', isFinal);
  }
  renderStepper(currentStage);

  setInterval(() => {
    currentStage = currentStage >= stepperSteps.length - 1 ? 0 : currentStage + 1;
    renderStepper(currentStage);
  }, 3200);

  /* ---------- SMOOTH SCROLL ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length <= 1) return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const top = targetEl.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ---------- BACK TO TOP ---------- */
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- FOOTER YEAR ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* re-observe reveals added dynamically after initial render */
  observeReveals();
});
