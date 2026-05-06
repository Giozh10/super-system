const data = {
  all: [
    {
      name: "Paris, France",
      img: "images/Paris.jpeg",
      info: "Paris is one of the most visited cities in the world and a global center of culture, art, and history. Millions of tourists visit every year to see the Eiffel Tower, the Louvre Museum, and historic neighborhoods. The city is also famous for its cafés, architecture, and romantic atmosphere."
    },
    {
      name: "New York City, USA",
      img: "images/nyc.jpeg",
      info: "New York City is a major global destination known for its skyline, Times Square, and Central Park. It attracts visitors because of its museums, entertainment, shopping, and cultural diversity. The city represents modern urban life and opportunity."
    },
    {
      name: "Tokyo, Japan",
      img: "images/tokyo.jpeg",
      info: "Tokyo combines modern technology with traditional culture. Visitors experience temples, advanced transportation, and world-famous cuisine. It is known for its organization, safety, and innovation."
    },
    {
      name: "London, UK",
      img: "images/london.jpeg",
      info: "London is known for its historical landmarks, royal heritage, and museums. Tourists visit Big Ben, Buckingham Palace, and cultural institutions. The city has a long and influential history."
    }
  ],

  beaches: [
    {
      name: "Bali, Indonesia",
      img: "images/Bali beach.jpeg",
      info: "Bali is a tropical destination famous for beaches, surfing, and cultural traditions. Visitors enjoy nature, temples, and a relaxed lifestyle."
    },
    {
      name: "Maldives",
      img: "images/Maldives beaches.jpeg",
      info: "The Maldives is known for crystal-clear waters, white sand beaches, and luxury resorts. It is a popular destination for relaxation and snorkeling."
    },
    {
      name: "Cancún, Mexico",
      img: "images/cancun beaches.jpeg",
      info: "Cancún offers turquoise waters, resorts, and nightlife. It is one of the most popular beach destinations in the Americas."
    },
    {
      name: "Phuket, Thailand",
      img: "images/phuket beaches.jpeg",
      info: "Phuket is Thailand’s main beach destination, combining natural beauty with tourism and culture."
    }
  ],

  museums: [
    {
      name: "Louvre Museum, Paris",
      img: "images/Paris museum.jpeg",
      info: "The Louvre is the most visited museum in the world and home to the Mona Lisa. It represents centuries of global art and history."
    },
    {
      name: "British Museum, London",
      img: "images/london museum.jpeg",
      info: "The British Museum showcases artifacts from ancient civilizations and human history."
    },
    {
      name: "MET Museum, New York",
      img: "images/nyc museum.jpeg",
      info: "The MET is one of the largest art museums in the world, attracting millions of visitors every year."
    },
    {
      name: "Vatican Museums, Rome",
      img: "images/vatican museum.jpeg",
      info: "The Vatican Museums are famous for Renaissance art and the Sistine Chapel."
    }
  ],

  food: [
    {
      name: "Rome, Italy",
      img: "images/rome food.jpeg",
      info: "Rome is known for traditional Italian cuisine such as pasta and pizza. Food is deeply connected to the city’s culture."
    },
    {
      name: "Bangkok, Thailand",
      img: "images/bangkok food.jpeg",
      info: "Bangkok is famous for street food and bold flavors. It is considered one of the best food cities in the world."
    },
    {
      name: "Barcelona, Spain",
      img: "images/barcelona food.jpeg",
      info: "Barcelona offers Mediterranean cuisine with seafood and tapas, strongly connected to social life."
    },
    {
      name: "Tokyo, Japan",
      img: "images/tokyo food.jpeg",
      info: "Tokyo offers everything from street food to fine dining, with strong emphasis on quality and tradition."
    }
  ]
};

function showCategory(category, btn) {
  const cards = document.getElementById("cards");
  cards.innerHTML = "";

  document.querySelectorAll("button").forEach(b =>
    b.classList.remove("active")
  );
  btn.classList.add("active");

  data[category].forEach(place => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => showInfo(place);

    card.innerHTML = `
      <img src="${place.img}" alt="${place.name}">
      <h3>${place.name}</h3>
    `;

    cards.appendChild(card);
  });
}

function showInfo(place) {
  document.getElementById("modal-title").textContent = place.name;

  const paragraphs = place.info.split(". ");
  document.getElementById("modal-text").innerHTML =
    paragraphs.map(p => `<p>${p}.</p>`).join("");

  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

showCategory("all", document.querySelector("button"));