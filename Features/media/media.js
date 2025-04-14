// media.js
const mediaItems = [
    // 🇮🇳 India - Images
    { type: "image", src: "pictures/tajmahal.jpg", alt: "Taj Mahal, Agra" },
    { type: "image", src: "pictures/hampi.jpg", alt: "Hampi Temples, Karnataka" },
    { type: "image", src: "pictures/ladakh.jpg", alt: "Pangong Lake, Ladakh" },
    { type: "image", src: "pictures/kathakali.jpg", alt: "Kathakali Dance, Kerala" },
    { type: "image", src: "pictures/jaipur.jpg", alt: "City Palace, Jaipur" },
  
    // 🇮🇳 India - Videos
    { type: "video", src: "videos/india_festival.mp4", alt: "Indian Festival Highlights" },
    { type: "video", src: "videos/varanasi_ghats.mp4", alt: "Evening Aarti at Varanasi Ghats" },
  
    // 🌍 International - Images
    { type: "image", src: "pictures/eiffel.jpg", alt: "Eiffel Tower, Paris" },
    { type: "image", src: "pictures/colosseum.jpg", alt: "Colosseum, Rome" },
    { type: "image", src: "pictures/greatwall.jpg", alt: "Great Wall of China" },
    { type: "image", src: "pictures/machu_picchu.jpg", alt: "Machu Picchu, Peru" },
    { type: "image", src: "pictures/santorini.jpg", alt: "Santorini, Greece" },
  
    // 🌍 International - Videos
    { type: "video", src: "videos/japan_tradition.mp4", alt: "Japanese Traditions and Temples" },
    { type: "video", src: "videos/african_safari.mp4", alt: "African Safari Adventure" },
    { type: "video", src: "videos/newyork_city.mp4", alt: "Timelapse of New York City" }
  ];
  
  const gallery = document.getElementById("media-gallery");
  const modal = document.getElementById("media-modal");
  const mediaContent = document.getElementById("media-content");
  const closeBtn = document.getElementById("close-modal");
  
  mediaItems.forEach(item => {
    const wrapper = document.createElement("div");
    wrapper.className = "overflow-hidden rounded-lg shadow-md";
  
    if (item.type === "image") {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt;
      img.className = "w-full h-64 object-cover";
      img.addEventListener("click", () => openModal("image", item.src, item.alt));
      wrapper.appendChild(img);
    } else if (item.type === "video") {
      const vid = document.createElement("video");
      vid.src = item.src;
      vid.controls = false;
      vid.muted = true;
      vid.loop = true;
      vid.className = "w-full h-64 object-cover";
      vid.addEventListener("mouseenter", () => vid.play());
      vid.addEventListener("mouseleave", () => vid.pause());
      vid.addEventListener("click", () => openModal("video", item.src, item.alt));
      wrapper.appendChild(vid);
    }
  
    gallery.appendChild(wrapper);
  });
  
  function openModal(type, src, alt) {
    modal.classList.remove("hidden");
    mediaContent.innerHTML = "";
  
    if (type === "image") {
      const img = document.createElement("img");
      img.src = src;
      img.alt = alt;
      mediaContent.appendChild(img);
    } else if (type === "video") {
      const vid = document.createElement("video");
      vid.src = src;
      vid.controls = true;
      vid.autoplay = true;
      vid.className = "rounded-lg";
      mediaContent.appendChild(vid);
    }
  }
  
  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    mediaContent.innerHTML = "";
  });
  