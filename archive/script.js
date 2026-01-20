// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Diamond Builder Functionality
const builderTabs = document.querySelectorAll(".builder-tab")
const tabContents = document.querySelectorAll(".tab-content")

// Tab switching
builderTabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    const tabName = this.getAttribute("data-tab")

    // Remove active class from all tabs
    builderTabs.forEach((t) => t.classList.remove("active"))
    // Add active class to clicked tab
    this.classList.add("active")

    // Hide all tab contents
    tabContents.forEach((content) => content.classList.remove("active"))
    // Show selected tab content
    const activeContent = document.querySelector(`[data-content="${tabName}"]`)
    if (activeContent) {
      activeContent.classList.add("active")
    }
  })
})

const attributeButtons = document.querySelectorAll(".attribute-btn, .shape-option")

attributeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const parent = this.closest(".attribute-options, .shape-options")

    parent.querySelectorAll(".attribute-btn, .shape-option").forEach((btn) => {
      btn.classList.remove("active")
    })

    this.classList.add("active")

    // Update visualization for current tab only
    if (this.hasAttribute("data-shape")) {
      updateShapeVisualization(this.getAttribute("data-shape"))
    }
    if (this.hasAttribute("data-carat")) {
      updateCaratVisualization(this.getAttribute("data-carat"))
    }
    if (this.hasAttribute("data-color")) {
      updateColorVisualization(this.getAttribute("data-color"))
    }
    if (this.hasAttribute("data-clarity")) {
      updateClarityVisualization(this.getAttribute("data-clarity"))
    }
    if (this.hasAttribute("data-cut")) {
      updateCutVisualization(this.getAttribute("data-cut"))
    }
  })
})

function updateShapeVisualization(shape) {
  const label = document.getElementById("shapeLabel")
  const image = document.getElementById("shapeImage")
  
  const shapeNames = {
    round: "Round Brilliant",
    princess: "Princess Cut",
    emerald: "Emerald Cut",
    oval: "Oval Cut",
    cushion: "Cushion Cut",
    pear: "Pear Shape",
    marquise: "Marquise Cut",
    heart: "Heart Shape",
  }
  
  const shapeImages = {
    round: "/public/diamond-round.jpg",
    princess: "/public/diamond-princess.jpg",
    emerald: "/public/diamond-emerald.jpg",
    oval: "/public/diamond-oval.jpg",
    cushion: "/public/diamond-cushion.jpg",
    pear: "/public/diamond-pear.jpg",
    marquise: "/public/diamond-marquise.jpg",
    heart: "/public/diamond-heart.jpg",
  }
  
  label.textContent = shapeNames[shape] || "Select a Shape"
  image.src = shapeImages[shape] || "/public/diamond-round.jpg"
}

function updateCaratVisualization(carat) {
  const label = document.getElementById("caratLabel")
  const image = document.getElementById("caratImage")
  const display = image.closest(".diamond-display")

  label.textContent = `${carat} Carat`

  // Map carat sizes to Ring images
  const caratImageMap = {
    0.25: "Ring-01.png",
    0.33: "Ring-02.png",
    "0.50": "Ring-03.png",
    0.75: "Ring-04.png",
    "1.00": "Ring-05.png",
    "1.50": "Ring-06.png",
    "2.00": "Ring-08.png",
    "3.00": "Ring-08.png",
  }

  image.src = caratImageMap[carat] || "Ring-05.png"

  // Update size class
  display.className = "diamond-display"
  const sizeClass = `size-${carat.replace(".", "")}`
  // display.classList.add(sizeClass)
}

function updateColorVisualization(color) {
  const label = document.getElementById("colorLabel")
  const image = document.getElementById("colorImage")
  const display = image.closest(".diamond-display")

  const colorNames = {
    M: "Faint Yellow",
    L: "Faint Yellow",
    K: "Faint Yellow",
    J: "Near Colorless",
    I: "Near Colorless",
    H: "Near Colorless",
    G: "Near Colorless",
    F: "Colorless",
    E: "Colorless",
    D: "Colorless",
  }

  label.textContent = `${color} - ${colorNames[color]}`

  image.src = `${color.toLowerCase()}.png`

  // Update color class
  display.className = "diamond-display"
  const colorClass = `color-${color}`
  // display.classList.add(colorClass)
}

function updateClarityVisualization(clarity) {
  const label = document.getElementById("clarityLabel")
  const image = document.getElementById("clarityImage")
  const display = image.closest(".diamond-display")

  const clarityNames = {
    I2: "Included",
    I1: "Included",
    SI2: "Slightly Included",
    SI1: "Slightly Included",
    VS2: "Very Slightly Included",
    VS1: "Very Slightly Included",
    VVS2: "Very Very Slightly Included",
    VVS1: "Very Very Slightly Included",
    IF: "Internally Flawless",
    FL: "Flawless",
  }

  label.textContent = `${clarity} - ${clarityNames[clarity]}`

  const clarityImageMap = {
    FL: "ClarityArtboard-1.png",
    IF: "ClarityArtboard-1-copy.png",
    VVS1: "ClarityArtboard-1-copy-3.png",
    VVS2: "ClarityArtboard-1-copy-3.png",
    VS1: "ClarityArtboard-1-copy-5_1.png",
    VS2: "ClarityArtboard-1-copy-5_2.png",
    SI1: "ClarityArtboard-1-copy-5_3.png",
    SI2: "ClarityArtboard-1-copy-5_4.png",
    I1: "ClarityArtboard-1-copy-5_4.png",
    I2: "ClarityArtboard-1-copy-5_4.png",
  }

  image.src = clarityImageMap[clarity] || "ClarityArtboard-1.png"

  // Update clarity class
  display.className = "diamond-display"
  const clarityClass = `clarity-${clarity}`
  display.classList.add(clarityClass)
}

function updateCutVisualization(cut) {
  const label = document.getElementById("cutLabel")
  const image = document.getElementById("cutImage")
  const display = image.closest(".diamond-display")

  const cutDescriptions = {
    Good: "Good Light Return",
    "Very Good": "Excellent Light Return",
    Excellent: "Superior Light Return",
    Ideal: "Maximum Light Return",
  }

  label.textContent = `${cut} Cut - ${cutDescriptions[cut]}`

  const cutImageMap = {
    Good: "cut very good-01.png",
    "Very Good": "cut very good-02.png",
    Excellent: "cut very good-03.png",
    Ideal: "cut very good-04.png",
  }

  image.src = cutImageMap[cut] || "cut very good-01.png"

  // Update cut class
  display.className = "diamond-display"
  const cutClass = `cut-${cut.toLowerCase().replace(" ", "-")}`
  display.classList.add(cutClass)
}

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".shape-card, .education-card, .feature-card, .step-item").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "all 0.6s ease"
  observer.observe(el)
})

// Mobile menu close on link click
const navLinks = document.querySelectorAll(".navbar-nav .nav-link")
const navbarCollapse = document.querySelector(".navbar-collapse")

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show")
    }
  })
})
