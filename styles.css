:root {
  --navy: #081a42;
  --navy-2: #102e66;
  --orange: #ff5b1a;
  --orange-2: #ff7a2b;
  --cream: #fbf8f3;
  --soft: #f4f6fb;
  --white: #ffffff;
  --text: #121d33;
  --muted: #647087;
  --border: #e7ecf5;
  --shadow: 0 18px 45px rgba(8, 26, 66, 0.12);
  --shadow-strong: 0 28px 70px rgba(8, 26, 66, 0.2);
  --radius: 24px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  color: var(--text);
  background: var(--white);
  font-size: 18px;
  line-height: 1.65;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  background:
    radial-gradient(circle at 10% 20%, rgba(255, 91, 26, 0.08), transparent 25%),
    radial-gradient(circle at 90% 35%, rgba(8, 26, 66, 0.08), transparent 24%);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

img {
  width: 100%;
  display: block;
}

.top-line {
  height: 6px;
  background: linear-gradient(90deg, var(--orange), var(--orange-2), var(--navy));
}

.container {
  width: min(1140px, calc(100% - 36px));
  margin: 0 auto;
}

.header {
  position: sticky;
  top: 0;
  z-index: 90;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  padding: 14px clamp(18px, 5vw, 58px);
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  box-shadow: 0 10px 30px rgba(8, 26, 66, 0.05);
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--navy);
  font-weight: 900;
  font-size: 1.1rem;
}

.logo span {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  color: white;
  background: linear-gradient(135deg, var(--orange), var(--orange-2));
  box-shadow: 0 10px 20px rgba(255, 91, 26, 0.25);
}

.nav {
  display: flex;
  align-items: center;
  gap: 23px;
  color: #536176;
  font-weight: 800;
  font-size: 0.98rem;
}

.nav a {
  position: relative;
  padding: 8px 0;
}

.nav a::after {
  content: "";
  position: absolute;
  height: 2px;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--orange);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}

.nav a:hover,
.nav a.active {
  color: var(--orange);
}

.nav a:hover::after,
.nav a.active::after {
  transform: scaleX(1);
}

.header-btn,
.btn,
.filter,
.expand-btn,
.floating-btn {
  border: 0;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  font-weight: 900;
  transition: 0.25s ease;
}

.header-btn {
  padding: 11px 18px;
  color: white;
  background: var(--orange);
  font-size: 0.95rem;
}

.header-btn:hover,
.primary:hover,
.floating-btn:hover {
  transform: translateY(-3px);
  background: #e84e12;
  box-shadow: 0 18px 34px rgba(255, 91, 26, 0.3);
}

.menu-btn {
  display: none;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 13px;
  background: var(--navy);
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}

.section {
  padding: 92px 0;
}

.hero,
.dark {
  color: white;
  background:
    radial-gradient(circle at 18% 18%, rgba(255, 91, 26, 0.24), transparent 26%),
    radial-gradient(circle at 85% 70%, rgba(255, 122, 43, 0.14), transparent 28%),
    linear-gradient(135deg, var(--navy), #07132f 72%);
}

.light {
  background: rgba(255, 255, 255, 0.94);
}

.soft {
  background: linear-gradient(180deg, #f8f9fc, #f1f4fa);
}

.hero {
  padding: 104px 0 92px;
  overflow: hidden;
}

.hero-grid,
.contact-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 58px;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 15px;
  color: #ffd2c2;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 900;
  font-size: 0.95rem;
}

.orange {
  color: var(--orange);
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 22px;
  font-size: clamp(2.7rem, 6vw, 5.3rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
}

h1 span {
  color: var(--orange);
}

h2 {
  margin-bottom: 16px;
  font-size: clamp(2rem, 4vw, 3.25rem);
  line-height: 1.06;
  letter-spacing: -0.045em;
}

h3 {
  font-size: 1.35rem;
  line-height: 1.25;
}

p {
  color: var(--muted);
  font-size: 1.08rem;
}

.dark p,
.hero p {
  color: rgba(255, 255, 255, 0.78);
}

.hero-content p {
  max-width: 660px;
  font-size: 1.2rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.btn {
  min-height: 52px;
  padding: 13px 22px;
  font-size: 1rem;
}

.primary {
  background: var(--orange);
  color: white;
}

.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.28);
}

.secondary:hover {
  background: rgba(255, 255, 255, 0.18);
  transform: translateY(-3px);
}

.hero-mini {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 26px;
}

.mini-tab {
  padding: 9px 13px;
  border: 1px solid rgba(255, 255, 255, 0.26);
  border-radius: 999px;
  color: white;
  background: rgba(255, 255, 255, 0.08);
  cursor: pointer;
  font-weight: 800;
}

.mini-tab.active {
  background: var(--orange);
  border-color: var(--orange);
}

.mini-result {
  min-height: 32px;
  margin: 10px 0 0;
  font-weight: 800;
}

.hero-image {
  position: relative;
  overflow: hidden;
  border-radius: 26px;
  border: 8px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 34px 80px rgba(0, 0, 0, 0.3);
}

.hero-image img {
  height: 430px;
  object-fit: cover;
}

.hero-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 45%, rgba(8, 26, 66, 0.36));
}

.floating-stat {
  position: absolute;
  left: 18px;
  bottom: 18px;
  z-index: 2;
  width: 180px;
  padding: 18px;
  border-radius: 18px;
  background: white;
  color: var(--navy);
  box-shadow: var(--shadow);
}

.floating-stat strong {
  display: block;
  color: var(--orange);
  font-size: 2.1rem;
  line-height: 1;
}

.floating-stat span {
  display: block;
  font-size: 0.98rem;
  line-height: 1.3;
}

.floating-label {
  position: absolute;
  right: 18px;
  top: 18px;
  z-index: 2;
  padding: 9px 13px;
  border-radius: 999px;
  background: var(--orange);
  color: white;
  font-weight: 900;
  font-size: 0.95rem;
}

.section-heading {
  max-width: 780px;
  margin-bottom: 38px;
}

.center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.mission-grid,
.value-grid,
.team-grid,
.stats-grid,
.pricing-grid {
  display: grid;
  gap: 22px;
}

.mission-grid {
  grid-template-columns: repeat(2, 1fr);
}

.team-grid,
.stats-grid,
.pricing-grid {
  grid-template-columns: repeat(4, 1fr);
}

.value-grid {
  grid-template-columns: repeat(3, 1fr);
}

.mission-card,
.team-card,
.value-card,
.price-card,
.selector-panel,
.business-note,
.process-output {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: white;
  box-shadow: var(--shadow);
}

.mission-card,
.team-card,
.value-card {
  padding: 28px;
}

.icon,
.number,
.avatar {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  margin-bottom: 16px;
  border-radius: 14px;
  color: var(--orange);
  background: #fff0e8;
  font-weight: 900;
}

.mission-card h3,
.team-card h3,
.value-card h3,
.price-card h3 {
  color: var(--navy);
  margin-bottom: 10px;
}

.team-card {
  text-align: center;
}

.avatar {
  width: 66px;
  height: 66px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--navy), var(--navy-2));
  color: white;
  font-size: 1.1rem;
}

.stats-grid .stat-card {
  padding: 28px;
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.13);
}

.stat-card span {
  display: inline-grid;
  place-items: center;
  min-width: 44px;
  height: 44px;
  padding: 0 10px;
  border-radius: 14px;
  color: white;
  background: var(--orange);
  font-weight: 900;
}

.stat-card strong {
  display: block;
  margin: 16px 0 8px;
  color: var(--orange);
  font-size: 1.85rem;
  line-height: 1.1;
}

.accordion {
  max-width: 850px;
  margin: 34px auto 0;
  border-radius: var(--radius);
  overflow: hidden;
  background: white;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.accordion-btn {
  width: 100%;
  padding: 18px 22px;
  border: 0;
  border-bottom: 1px solid var(--border);
  background: white;
  color: var(--navy);
  text-align: left;
  cursor: pointer;
  font-weight: 900;
}

.accordion-btn.active {
  background: var(--navy);
  color: white;
}

.accordion-content {
  display: none;
  padding: 20px 22px;
  border-bottom: 1px solid var(--border);
}

.accordion-content.open {
  display: block;
}

.accordion-content p {
  margin: 0;
}

.filter-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: -8px 0 28px;
}

.filter {
  padding: 10px 16px;
  background: white;
  color: var(--navy);
  border: 1px solid var(--border);
}

.filter:hover,
.filter.active {
  color: white;
  background: var(--orange);
  border-color: var(--orange);
  transform: translateY(-2px);
}

.price-card {
  position: relative;
  padding: 28px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: 0.25s ease;
  cursor: pointer;
}

.price-card:hover,
.price-card.active {
  transform: translateY(-8px);
  border-color: rgba(255, 91, 26, 0.5);
  box-shadow: var(--shadow-strong);
}

.price-card.featured {
  border: 2px solid var(--orange);
}

.price-card.hide {
  display: none;
}

.ribbon {
  position: absolute;
  top: 20px;
  right: -42px;
  width: 160px;
  padding: 6px;
  rotate: 35deg;
  text-align: center;
  color: white;
  background: var(--orange);
  font-weight: 900;
  font-size: 0.8rem;
}

.tag {
  width: fit-content;
  display: inline-flex;
  margin-bottom: 13px;
  padding: 7px 12px;
  border-radius: 999px;
  color: var(--orange);
  background: #fff0e8;
  font-weight: 900;
  font-size: 0.92rem;
}

.expand-btn {
  width: 100%;
  margin: 12px 0;
  padding: 12px 14px;
  color: var(--navy);
  background: #fafbfe;
  border: 1px solid var(--border);
}

.expand-btn:hover {
  color: var(--orange);
  border-color: var(--orange);
}

.details {
  display: grid;
  grid-template-rows: 0fr;
  transition: 0.28s ease;
}

.details ul {
  overflow: hidden;
  margin: 0;
  padding-left: 20px;
  color: #46536a;
  font-size: 1.02rem;
}

.price-card.active .details {
  grid-template-rows: 1fr;
}

.price {
  margin-top: auto;
  padding-top: 18px;
  border-top: 1px solid var(--border);
}

.price strong {
  display: block;
  color: var(--navy);
  font-size: 1.75rem;
  line-height: 1.1;
}

.price span {
  color: var(--muted);
  font-weight: 800;
}

.selector-panel {
  margin-top: 30px;
  padding: 28px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  align-items: center;
  border-left: 6px solid var(--orange);
}

.selector-panel h3 {
  margin-bottom: 6px;
  color: var(--navy);
}

.selector-panel label {
  display: grid;
  gap: 12px;
  color: var(--navy);
  font-weight: 900;
}

input[type="range"] {
  accent-color: var(--orange);
}

.recommendation {
  padding: 18px;
  border-radius: 16px;
  background: var(--navy);
  color: white;
  font-weight: 900;
}

.business-note {
  margin-top: 28px;
  padding: 28px;
  border-left: 6px solid var(--orange);
}

.business-note strong {
  display: block;
  margin-bottom: 8px;
  color: var(--navy);
  font-size: 1.25rem;
}

.business-note p {
  margin: 0;
}

.process {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
}

.process-step {
  padding: 18px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: white;
  color: var(--navy);
  cursor: pointer;
  font-weight: 900;
  transition: 0.25s ease;
  box-shadow: var(--shadow);
}

.process-step span {
  display: block;
  margin-bottom: 8px;
  color: var(--orange);
}

.process-step:hover,
.process-step.active {
  color: white;
  background: var(--navy);
  transform: translateY(-5px);
}

.process-step:hover span,
.process-step.active span {
  color: var(--orange);
}

.process-output {
  margin-top: 24px;
  padding: 24px;
  color: var(--navy);
  font-weight: 900;
  border-left: 6px solid var(--orange);
}

.contact-grid {
  align-items: start;
}

.contact-info {
  margin-top: 24px;
  padding: 24px;
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
}

.contact-info p {
  margin-bottom: 8px;
}

.form {
  display: grid;
  gap: 16px;
  padding: 30px;
  border-radius: var(--radius);
  background: white;
  box-shadow: var(--shadow-strong);
}

.form label {
  display: grid;
  gap: 7px;
  color: var(--navy);
  font-weight: 900;
}

input,
textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 13px;
  padding: 13px 14px;
  outline: none;
}

input:focus,
textarea:focus {
  border-color: var(--orange);
  box-shadow: 0 0 0 4px rgba(255, 91, 26, 0.13);
}

.form-message {
  margin: 0;
  color: var(--orange);
  font-weight: 900;
}

.footer {
  padding: 52px 0;
  color: white;
  background: var(--navy);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 1fr;
  gap: 36px;
}

.footer p,
.footer a {
  display: block;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.75);
}

.footer h3 {
  color: white;
}

.footer-logo {
  color: white;
  margin-bottom: 14px;
}

.floating-btn {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 80;
  padding: 13px 18px;
  color: white;
  background: var(--orange);
  box-shadow: 0 18px 34px rgba(255, 91, 26, 0.32);
}

.floating-panel {
  position: fixed;
  right: 18px;
  bottom: 76px;
  z-index: 79;
  width: min(310px, calc(100% - 36px));
  padding: 18px;
  border-radius: 18px;
  background: white;
  box-shadow: var(--shadow-strong);
  border: 1px solid var(--border);
  transform: translateY(10px) scale(0.96);
  opacity: 0;
  pointer-events: none;
  transition: 0.22s ease;
}

.floating-panel.open {
  transform: translateY(0) scale(1);
  opacity: 1;
  pointer-events: auto;
}

.floating-panel strong {
  color: var(--navy);
}

.floating-panel a {
  display: block;
  margin-top: 10px;
  padding: 10px 12px;
  border-radius: 12px;
  color: var(--navy);
  background: #fff0e8;
  font-weight: 900;
}

.floating-panel a:hover {
  color: white;
  background: var(--orange);
}

.tilt-card {
  transform-style: preserve-3d;
}

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}

.reveal.show {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 1100px) {
  .team-grid,
  .stats-grid,
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .selector-panel {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .menu-btn {
    display: grid;
    place-items: center;
  }

  .header-btn {
    display: none;
  }

  .nav {
    position: absolute;
    top: 100%;
    left: 18px;
    right: 18px;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 12px;
    border-radius: 18px;
    background: white;
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
  }

  .nav.open {
    display: flex;
  }

  .nav a {
    padding: 12px;
  }

  .hero-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .mission-grid,
  .value-grid,
  .process {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 72px 0;
  }

  .hero {
    padding-top: 78px;
  }
}

@media (max-width: 580px) {
  body {
    font-size: 17px;
  }

  .team-grid,
  .stats-grid,
  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .hero-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .hero-image img {
    height: 320px;
  }

  .floating-btn {
    left: 18px;
    right: 18px;
  }

  .floating-panel {
    left: 18px;
    right: 18px;
    width: auto;
  }
}
