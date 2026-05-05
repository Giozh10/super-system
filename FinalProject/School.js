const data = {
  all: [
    {
      name: "Paris, France",
      img: "images/Paris.jpeg",
      info: "Paris is one of the most visited cities in the world and is widely considered a global center of culture, art, fashion, and history. Millions of tourists travel to Paris every year to see iconic landmarks such as the Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral. The city is also famous for its historic neighborhoods, cafés, and unique architecture. Visitors often describe Paris as a romantic city with a strong cultural identity that has influenced Europe and the world for centuries."
    },
    {
      name: "New York City, USA",
      img: "images/nyc.jpeg",
      info: "New York City is one of the most important and influential cities in the world. It is known for its impressive skyline, Times Square, Central Park, and Broadway theaters. Tourists are attracted by its museums, shopping areas, diverse food culture, and entertainment options. The city is also a major economic and cultural center that represents diversity, opportunity, and modern urban life."
    },
    {
      name: "Tokyo, Japan",
      img: "images/tokyo.jpeg",
      info: "Tokyo is a unique city that successfully combines modern technology with traditional Japanese culture. Visitors experience advanced transportation systems, modern buildings, historic temples, and traditional markets. Tokyo is also famous for its cleanliness, safety, and efficiency. The city attracts tourists interested in innovation, history, cuisine, and cultural experiences."
    },
    {
      name: "London, UK",
      img: "images/london.jpeg",
      info: "London is one of the most visited cities in Europe and has a long and influential history. Tourists often visit landmarks such as Buckingham Palace, Big Ben, and the Tower of London. The city is also famous for its museums, many of which are free to the public. London’s multicultural population, historical significance, and global influence make it a major tourist destination."
    }
  ],

  beaches: [
    {
      name: "Bali, Indonesia",
      img: "images/Bali beach.jpeg",
      info: "Bali is one of the most popular beach destinations in the world, known for its tropical climate and scenic landscapes. Visitors enjoy sandy beaches, surfing locations, and clear ocean waters. Bali is also famous for its temples, traditional ceremonies, and strong cultural identity. Many tourists choose Bali for relaxation, nature exploration, and cultural experiences."
    },
    {
      name: "Maldives",
      img: "images/Maldives beaches.jpeg",
      info: "The Maldives is a world-famous beach destination known for its crystal-clear waters and white sand beaches. It is especially popular for luxury tourism, honeymoon trips, and snorkeling activities. Visitors enjoy staying in overwater resorts and exploring coral reefs. The Maldives is often considered one of the most beautiful and peaceful beach destinations on Earth."
    },
    {
      name: "Cancún, Mexico",
      img: "images/cancun beaches.jpeg",
      info: "Cancún is one of the most visited beach destinations in the Americas. It is known for its turquoise waters, long beaches, and modern resorts. Tourists also enjoy its nightlife and nearby cultural attractions. Cancún attracts visitors looking for both relaxation and entertainment."
    },
    {
      name: "Phuket, Thailand",
      img: "images/phuket beaches.jpeg",
      info: "Phuket is Thailands largest island and a major international beach destination. Visitors are attracted by its tropical climate, beaches, and water activities. The island also offers cultural attractions, local markets, and historical areas. Phuket combines relaxation, adventure, and cultural discovery."
    }
  ],

  museums: [
    {
      name: "Louvre Museum, Paris",
      img: "images/Paris museum.jpeg",
      info: "The Louvre Museum is the most visited museum in the world and one of the most important cultural institutions. It contains thousands of artworks from different historical periods, including the famous Mona Lisa. Visitors can explore ancient civilizations, classical sculptures, and famous paintings. The Louvre represents the importance of preserving world history and art."
    },
    {
      name: "British Museum, London",
      img: "images/london museum.jpeg",
      info: "The British Museum is dedicated to human history and culture from around the world. It contains artifacts from ancient civilizations, including Egypt, Greece, and Mesopotamia. Visitors can learn about the development of societies over time. The museum plays an important role in education and historical preservation."
    },
    {
      name: "MET Museum, New York",
      img: "images/nyc museum.jpeg",
      info: "The Metropolitan Museum of Art is one of the largest art museums in the world. It displays art from many cultures and historical periods. Visitors explore collections ranging from ancient artifacts to modern art. The museum attracts millions of visitors interested in art, history, and learning."
    },
    {
      name: "Vatican Museums, Rome",
      img: "images/vatican museum.jpeg",
      info: "The Vatican Museums contain a large collection of Renaissance art and religious artifacts. Many tourists visit to see the Sistine Chapel and its famous ceiling painted by Michelangelo. The museums highlight the artistic and religious influence of the Catholic Church. They are considered one of the most important museum complexes in the world."
    }
  ],

  food: [
    {
      name: "Rome, Italy",
      img: "images/rome food.jpeg",
      info: "Rome is famous for its traditional Italian cuisine, including pasta dishes, pizza, and desserts. Food is an important part of Roman daily life and culture. Visitors enjoy eating in local restaurants while experiencing the city’s historic environment. Roman cuisine reflects history, tradition, and regional ingredients."
    },
    {
      name: "Bangkok, Thailand",
      img: "images/bangkok food.jpeg",
      info: "Bangkok is internationally known for its street food and vibrant food culture. Tourists can find food markets offering a wide range of flavors and spices. Thai food is known for balancing sweet, spicy, and sour tastes. Bangkok is considered one of the best cities in the world for street food."
    },
    {
      name: "Barcelona, Spain",
      img: "images/barcelona food.jpeg",
      info: "Barcelona offers a rich Mediterranean food culture with fresh seafood and local dishes. Visitors enjoy tapas, regional recipes, and coastal flavors. Food is closely connected to social life and tradition in the city. Barcelona combines culinary experiences with cultural exploration."
    },
    {
      name: "Tokyo, Japan",
      img: "images/tokyo food.jpeg",
      info: "Tokyo is considered one of the best food cities in the world. It offers a wide variety of options, from street food to high-end restaurants. Tourists enjoy sushi, ramen, and traditional Japanese dishes. Tokyo’s food culture emphasizes quality, precision, and tradition."
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
      <img src="${place.img}">
      <h3>${place.name}</h3>
    `;

    cards.appendChild(card);
  });
}

function showInfo(place) {
  document.getElementById("modal-title").textContent = place.name;
  document.getElementById("modal-text").textContent = place.info;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

showCategory("all", document.querySelector("button"));