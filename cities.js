const cities = [
  {
    "id": "1",
    "img": "https://images.pexels.com/photos/2438323/pexels-photo-2438323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description":
    "Buenos Aires, a vibrant metropolis in Argentina, pulses with rich cultural diversity. Iconic architecture, like the Teatro Colon, complements bustling street markets and lush parks. Tango rhythms echo in its soul, as art, gastronomy, and history intertwine. From historic neighborhoods like San Telmo to modern skyscrapers in Puerto Madero, Buenos Aires thrives as a passionate blend of tradition and innovation.",
    "city": "Buenos Aires",
    "country": "Argentina",
    "language": "Spanish",
    "currency": "Argentine Peso (ARS)",
    "flag": "https://proyectoviajero.com/wp-content/uploads/2021/03/Bandera-de-Argentina.svg",
    "continent": "South America"
  },
  {
    "id": "2",
    "img": "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description":
      "Paris, the enchanting capital of France, captivates with timeless elegance. Its iconic landmarks, like the Eiffel Tower and Louvre Museum, narrate a rich history of art, culture, and romance. Cobblestone streets wind through charming neighborhoods, offering patisseries, bistros, and haute couture boutiques. The Seine River's gentle flow under historic bridges sets a poetic backdrop. From bohemian Montmartre to stately Champs-Élysées, Paris embodies sophistication, culinary excellence, and a fusion of old-world charm with modern vitalit",
    "city": "Paris",
    "country": "France",
    "language": "French",
    "currency": "Euro (EUR)",
    "flag": "https://proyectoviajero.com/wp-content/uploads/2021/03/Bandera-de-Francia.svg",
    "continent": "Europe"
  },
  {
    "id": "3",
    "img": "https://images.pexels.com/photos/164988/pexels-photo-164988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description":
      "New York City, a bustling metropolis of iconic skyscrapers and diverse cultures. Its vibrant streets echo with the hustle of taxis, the aroma of world-class cuisine, and the rhythm of life. From the neon lights of Times Square to the serenity of Central Park, it's a city that never sleeps, offering Broadway shows, art galleries, and historic landmarks like the Statue of Liberty. A melting pot of people and ideas, New York embodies the American spirit of ambition and innovation.",
    "city": "New York",
    "country": "United States",
    "language": "English",
    "currency": "United States Dollar (USD)",
    "flag": "https://proyectoviajero.com/wp-content/uploads/2021/03/Bandera-de-Estados-Unidos.svg",
    "continent": "North America"
  },
  {
    "id": "4",
    "img": "https://images.pexels.com/photos/6114840/pexels-photo-6114840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description":
      "Is a mesmerizing blend of modernity and tradition. Skyscrapers and neon lights paint the skyline, while serene temples and lush parks provide tranquil respites. The bustling streets offer an array of culinary delights, from sushi to street food. High-tech innovations coexist with timeless rituals, creating a city that embodies both futuristic energy and rich cultural heritage. Explore fashion-forward districts like Shibuya and historic neighborhoods like Asakusa. Tokyo's dynamic essence and unique juxtapositions make it an exhilarating destination for every traveler.",
    "city": "Tokyo",
    "country": "Japan",
    "language": "Japanese",
    "currency": "Japanese Yen (JPY)",
    "flag": "https://proyectoviajero.com/wp-content/uploads/2021/03/Bandera-de-Japon.svg",
    "continent": "Asia"
  },
  {
    "id": "5",
    "img": "https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description":
      "Rio de Janeiro, Brazil's iconic coastal city, captivates with its stunning blend of natural beauty and vibrant culture. Nestled between lush mountains and turquoise waters, Rio boasts the world-famous Copacabana and Ipanema beaches, where locals and visitors alike bask in the sun's warmth. The Christ the Redeemer statue overlooks the city from Corcovado Mountain, a symbol of both faith and panoramic vistas. Samba rhythms pulse through the streets during Carnival, a colorful celebration of music and dance. Rio's energetic neighborhoods, such as Lapa and Santa Teresa, offer eclectic art scenes and lively nightlife. Yet, the city also faces challenges like inequality. In all its complexity, Rio de Janeiro remains a breathtaking destination where nature and urban life entwine harmoniously.",
    "city": "Rio de Janeiro",
    "country": "Brazil",
    "language": "Portuguese",
    "currency": "Brazilian Real (BRL)",
    "flag": "https://proyectoviajero.com/wp-content/uploads/2021/03/Bandera-de-Brasil.svg",
    "continent": "South America"
  },
  {
    "id": "6",
    "img": "https://images.pexels.com/photos/753639/pexels-photo-753639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description":
      "Rome, the eternal city, boasts a rich blend of history, art, and culture. Iconic landmarks like the Colosseum and Vatican City captivate with their grandeur. Cobblestone streets lead to charming piazzas and exquisite fountains. The aroma of Italian cuisine fills the air, inviting you to indulge in pasta, gelato, and espresso. Rome's vibrant atmosphere, steeped in ancient ruins and Renaissance masterpieces, offers a timeless journey through human heritage.",
    "city": "Rome",
    "country": "Italy",
    "language": "Italian",
    "currency": "Euro (EUR)",
    "flag": "https://proyectoviajero.com/wp-content/uploads/2021/03/Italia.svg",
    "continent": "Europe"
  },
  {
    "id": "7",
    "img": "https://images.pexels.com/photos/4388159/pexels-photo-4388159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description":
      "Cairo, the dynamic capital of Egypt enchants through a fusion of ancient wonders and modern energy. Nestled along the Nile River, its bustling streets and markets buzz with life. Iconic landmarks like the Giza Pyramids and Sphinx stand as testimony to its rich history. The city's vibrant culture is showcased in its aromatic bazaars, where spices and textiles mingle. As the heart of Arab cinema and music, Cairo pulsates with creativity. From the medieval Islamic architecture of Old Cairo to the cosmopolitan flair of Zamalek, this city of contrasts invites exploration and reveals a tapestry of traditions woven into its urban fabric.",
    "city": "Cairo",
    "country": "Egypt",
    "language": "Arabic",
    "currency": "Egyptian Pound (EGP)",
    "flag": "https://proyectoviajero.com/wp-content/uploads/2021/03/Bandera-de-Egipto.svg",
    "continent": "Africa"
  },
  {
    "id": "8",
    "img": "https://images.pexels.com/photos/315403/pexels-photo-315403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description":
      "Bangkok, the capital of Thailand, is a sprawling city known for its ornate shrines and lively street life. The Chao Phraya River, bustling with boats, feeds its network of canals and flows through the royal district of Rattanakosin, where the Grand Palace and its sacred temple Wat Phra Kaew are located. Nearby, the Wat Pho temple houses a massive reclining Buddha, and on the opposite bank, the Wat Arun temple stands with its steep steps and Khmer-style spire.",
    "city": "Bangkok",
    "country": "Thailand",
    "language": "Thai",
    "currency": "Thai Baht (THB)",
    "flag": "https://proyectoviajero.com/wp-content/uploads/2021/03/Bandera-de-Tailandia.svg",
    "continent": "Asia"
  },
  {
    "id": "9",
    "img": "https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description":
      "Bangkok, capital of Thailand, dazzles with its bustling street life, ornate temples like Wat Arun and Wat Phra Kaew, and modern skyscrapers. The city's aromatic street food stalls, lively markets, and vibrant nightlife offer a sensory feast. The Chao Phraya River winds through the city, lined with traditional houses and luxury hotels. Traffic buzzes around the city's labyrinthine streets, contrasting with serene pockets like Lumpini Park. Rich in culture and history, Bangkok seamlessly blends ancient traditions with contemporary energy, making it a captivating destination for travelers worldwide.",
    "city": "Sydney",
    "country": "Australia",
    "language": "English",
    "currency": "Australian Dollar (AUD)",
    "flag": "https://proyectoviajero.com/wp-content/uploads/2021/03/Bandera-de-Australia.svg",
    "continent": "Oceania"
  },
  {
    "id": "10",
    "img": "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description":
      "Istanbul, a mesmerizing blend of East and West, stands as Turkey's vibrant cultural epicenter. Its skyline, a tapestry of minarets and modern skyscrapers, overlooks the Bosporus Strait. The city boasts iconic landmarks like Hagia Sophia and the Blue Mosque, each a testament to its rich history as Byzantium and Constantinople. Bustling bazaars, such as the Grand Bazaar, exude an air of tradition amidst the bustling urban energy. Culinary delights beckon, with aromatic street food and sumptuous Turkish cuisine. From its dynamic street life to its historical marvels, Istanbul is an enchanting fusion of ancient heritage and contemporary allure.",
    "city": "Istanbul",
    "country": "Turkey",
    "language": "Turkish",
    "currency": "Turkish Lira (TRY)",
    "flag": "https://proyectoviajero.com/wp-content/uploads/2021/03/Bandera-de-Turquia.svg",
    "continent": "Europe/Asia (Transcontinental)"
  },
  {
    "id": "11",
    "img": "https://images.pexels.com/photos/4873261/pexels-photo-4873261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description":
      "Cape Town, a coastal gem in South Africa, captivates with its stunning landscapes and diverse culture. Nestled beneath the iconic Table Mountain, it boasts golden beaches, vibrant markets, and a mix of historical and modern architecture. The city's rich history and multicultural essence are evident in its cuisine, music, and festivals. From the bustling V&A Waterfront to the breathtaking Cape Point, Cape Town offers a dynamic blend of urban sophistication and natural beauty, making it a must-visit destination for adventurers and culture enthusiasts alike.",
    "city": "Cape Town",
    "country": "South Africa",
    "language": "Afrikaans, English, Xhosa, and others",
    "currency": "South African Rand (ZAR)",
    "flag": "https://proyectoviajero.com/wp-content/uploads/2021/03/Bandera-de-Sudafrica.svg",
    "continent": "Africa"
  },
  {
    "id": "12",
    "img": "https://images.pexels.com/photos/2773578/pexels-photo-2773578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description":
      "Vancouver, an energetic Canadian seaside metropolis, boasts a captivating blend of natural beauty and urban sophistication. Nestled between the Pacific Ocean and majestic mountains, its skyline is a juxtaposition of sleek skyscrapers against lush greenery. Known for its mild climate, the city offers outdoor enthusiasts diverse activities from hiking to kayaking. The multicultural fabric is woven into its culinary scene and vibrant neighborhoods. Stanley Park's seawall, Granville Island's markets, and the historic Gastown district are iconic landmarks. Vancouver is a harmonious fusion of nature and cosmopolitan charm.",
    "city": "Vancouver",
    "country": "Canada",
    "language": "English, French",
    "currency": "Canadian Dollar (CAD)",
    "flag": "https://proyectoviajero.com/wp-content/uploads/2021/03/Bandera-de-Canada.svg",
    "continent": "North America"
  },
  {
    "id": "13",
    "img": "https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description":
      "Amsterdam, the capital of the Netherlands, is a charming city known for its picturesque canals, historic architecture, and vibrant cultural scene. With its iconic narrow houses lining waterways, it exudes a unique atmosphere. Renowned for its museums like the Van Gogh Museum and Anne Frank House, Amsterdam offers a rich blend of art, history, and innovation. Bicycles are the preferred mode of transport, reflecting its eco-friendly ethos. Coffeeshops and a diverse culinary landscape add to its allure. Amsterdam's liberal attitude and cosmopolitan charm make it a captivating destination for travelers worldwide.",
    "city": "Amsterdam",
    "country": "Netherlands",
    "language": "Dutch",
    "currency": "Euro (EUR)",
    "flag": "https://proyectoviajero.com/wp-content/uploads/2021/03/Bandera-de-Paises-Bajos.svg",
    "continent": "Europe"
  },
  {
    "id": "14",
    "img": "https://images.pexels.com/photos/1089645/pexels-photo-1089645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description":
      "Dubai, a dazzling metropolis in the United Arab Emirates, juxtaposes modern extravagance with desert charm. Towering skyscrapers, notably the iconic Burj Khalifa, pierce the skyline, while luxury shopping destinations like the Dubai Mall beckon. Its artificial Palm Jumeirah island and opulent resorts redefine coastal elegance. A cultural mosaic emerges in the historic Al Fahidi district, home to wind-tower architecture and museums. With its futuristic ambitions, tax-free allure, and fusion of traditions, Dubai is a magnetic blend of innovation and tradition.",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "language": "Arabic",
    "currency": "United Arab Emirates Dirham (AED)",
    "flag": "https://proyectoviajero.com/wp-content/uploads/2021/03/Bandera-de-Emiratos-Arabes-Unidos.svgs",
    "continent": "Asia"
  },
  {
    "id": "15",
    "img": "https://images.pexels.com/photos/2830460/pexels-photo-2830460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description":
      "Marrakech is an ancient imperial city in western Morocco and a significant economic center with mosques, palaces, and gardens. The medina is a walled medieval city, densely populated, dating back to the Berber Empire period, with passages that resemble mazes and lively souks (markets) selling ceramics, jewelry, and traditional textiles. The Moorish minaret of the 12th-century Koutoubia Mosque is a symbol of the city, visible from miles away.",
    "city": "Marrakech",
    "country": "Morocco",
    "language": "Arabic, Berber",
    "currency": "Moroccan Dirham (MAD)",
    "flag": "https://proyectoviajero.com/wp-content/uploads/2021/03/Bandera-de-Marruecos.svg",
    "continent": "Africa"
  },
];

export default cities;