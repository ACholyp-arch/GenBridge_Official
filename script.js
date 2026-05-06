const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("#nav");
const navLinks = document.querySelectorAll(".nav a");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuBtn.textContent = nav.classList.contains("open") ? "×" : "☰";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const miniTabs = document.querySelectorAll(".mini-tab");
const miniResult = document.querySelector("#miniResult");

miniTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    miniTabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    miniResult.textContent = tab.dataset.text;
  });
});

const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const isOpen = content.classList.contains("open");

    document.querySelectorAll(".accordion-content").forEach((item) => {
      item.classList.remove("open");
    });

    accordionButtons.forEach((item) => {
      item.classList.remove("active");
    });

    if (!isOpen) {
      content.classList.add("open");
      button.classList.add("active");
    }
  });
});

const priceCards = document.querySelectorAll(".price-card");

priceCards.forEach((card) => {
  const button = card.querySelector(".expand-btn");

  const toggleCard = () => {
    card.classList.toggle("active");
    button.textContent = card.classList.contains("active") ? "Ocultar detalles" : "Ver detalles";
  };

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleCard();
  });

  card.addEventListener("click", (event) => {
    if (!event.target.closest("button")) {
      toggleCard();
    }
  });
});

const filters = document.querySelectorAll(".filter");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const selected = filter.dataset.filter;

    filters.forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");

    priceCards.forEach((card) => {
      const category = card.dataset.category;
      const shouldHide = selected !== "all" && category !== selected;
      card.classList.toggle("hide", shouldHide);
    });
  });
});

const range = document.querySelector("#range");
const rangeValue = document.querySelector("#rangeValue");
const recommendation = document.querySelector("#recommendation");

function updateRecommendation() {
  const value = Number(range.value);
  rangeValue.textContent = `${value}%`;

  if (value < 8) {
    recommendation.textContent = "Diagnóstico GenBridge: primero conviene entender las causas.";
  } else if (value <= 15) {
    recommendation.textContent = "Plan Base: ideal para rotación moderada.";
  } else if (value <= 23) {
    recommendation.textContent = "Plan Growth: recomendado para rotación alta.";
  } else {
    recommendation.textContent = "Plan Enterprise: ideal para empresas grandes o con varias sedes.";
  }
}

range.addEventListener("input", updateRecommendation);
updateRecommendation();

const funnelButtons = document.querySelectorAll(".funnel-bar button");
const funnelInfo = document.querySelector("#funnelInfo");

funnelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    funnelInfo.textContent = button.dataset.info;
  });
});

const processButtons = document.querySelectorAll(".process-step");
const processOutput = document.querySelector("#processOutput");

processButtons.forEach((button) => {
  button.addEventListener("click", () => {
    processButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    processOutput.textContent = button.dataset.process;
  });
});

const sections = document.querySelectorAll("section[id]");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", isActive);
      });
    });
  },
  {
    rootMargin: "-40% 0px -55% 0px"
  }
);

sections.forEach((section) => {
  navObserver.observe(section);
});

const form = document.querySelector("#form");
const formMessage = document.querySelector("#formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "¡Gracias! Tu solicitud fue registrada. GenBridge te contactará pronto.";
  form.reset();
});

const floatingBtn = document.querySelector("#floatingBtn");
const floatingPanel = document.querySelector("#floatingPanel");

floatingBtn.addEventListener("click", () => {
  floatingPanel.classList.toggle("open");
});

floatingPanel.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    floatingPanel.classList.remove("open");
  });
});

const canHover = window.matchMedia("(hover: hover)").matches;

if (canHover) {
  document.querySelectorAll(".tilt-card").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * -8;

      card.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}
