document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

let topAboutTL = gsap.timeline({
    scrollTrigger:{
      trigger: '.topAbout',
      start: 'top center',
      end: 'bottom center',
      scrub: false,
      markers: false,
      toggleActions: 'play complete'
    }
  })


  topAboutTL.from('.topAboutInfo', {opacity: 0, y: 50, duration: 1});
  topAboutTL.from('#lakeCabin', {opacity: 0, duration: 1});
  topAboutTL.from('#canoe', {opacity: 0, duration: 1});

  let areaAboutTL = gsap.timeline({
    scrollTrigger:{
      trigger: '.areaAbout',
      start: 'top center',
      end: 'bottom center',
      scrub: false,
      markers: false,
      toggleActions: 'play complete'
    }
  })

  areaAboutTL.from('.areaAboutInfo', {opacity: 0, y: 50, duration: 1});
  areaAboutTL.from('#bedroom', {opacity: 0, duration: 1});
  areaAboutTL.from('#bathroom', {opacity: 0, duration: 1});
  areaAboutTL.from('#masterBed', {opacity: 0, duration: 1});

  let amenitiesTL = gsap.timeline({
    scrollTrigger:{
      trigger: '.amenities',
      start: 'top center',
      end: 'bottom center',
      scrub: false,
      markers: false,
      toggleActions: 'play complete'
    }
  })

  amenitiesTL.from('.amenitiesInfo', {opacity: 0, y: 50, duration: 1});
  amenitiesTL.from('#boating', {opacity: 0, duration: 1});
  amenitiesTL.from('#skiing', {opacity: 0, duration: 1});
  amenitiesTL.from('#fishing', {opacity: 0, duration: 1});

  let testimonialsTL = gsap.timeline({
    scrollTrigger:{
      trigger: '.testimonials',
      start: 'top center',
      end: 'bottom center',
      scrub: false,
      markers: false,
      toggleActions: 'play complete'
    }
  })

  testimonialsTL.from('.message', {opacity: 0, x: "random(-100, 100)", stagger: 0.5});
