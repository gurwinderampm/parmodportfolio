gsap.registerPlugin(ScrollTrigger);

// Hero animation
gsap.from(".hero h2", {
  y: 100,
  opacity: 0,
  duration: 1
});

gsap.from(".hero p", {
  y: 50,
  opacity: 0,
  delay: 0.3,
  duration: 1
});

// Scroll reveal
gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
    },
    y: 80,
    opacity: 0,
    duration: 1
  });
});