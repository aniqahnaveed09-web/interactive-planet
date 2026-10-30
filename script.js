
const planets = {
    1: {
        img: "image 01.jpg",
        name: "Mercury",
        info: "Mercury is the smallest planet in our solar system and the closest to the Sun. It completes an orbit around the Sun in just 88 days, which is why it is named after the swift Roman messenger god. Because it has almost no atmosphere, its surface temperatures swing wildly, from about 430C during the day to -180C at night. Despite being closest to the Sun, it is not the hottest planet - that title belongs to Venus."
    },
    2: {
        img: "image 02.jpg",
        name: "Venus",
        info: "Venus is the second planet from the Sun and is almost the same size as Earth, which is why it is often called Earth's twin. It is the hottest planet in the solar system, with an average temperature of around 465C, because its thick atmosphere of carbon dioxide traps heat in a runaway greenhouse effect. Venus rotates backwards compared to most planets, so on Venus the Sun rises in the west and sets in the east."
    },
    3: {
        img: "image 03.jfif",
        name: "Earth",
        info: "Earth is the third planet from the Sun and the only known planet to support life. About 71% of its surface is covered by water, earning it the nickname the Blue Planet. Its atmosphere is a mix of nitrogen and oxygen, and its magnetic field protects us from harmful solar radiation. Earth takes 365.25 days to orbit the Sun, and that extra quarter day is why we have a leap year every four years."
    },
    4: {
        img: "image 04.png",
        name: "Mars",
        info: "Mars, the fourth planet from the Sun, is known as the Red Planet because of the iron oxide (rust) covering its surface. It is home to the largest volcano in the solar system, Olympus Mons, which is nearly three times the height of Mount Everest. Mars has two small moons, Phobos and Deimos, and its thin atmosphere makes it very cold, with an average temperature of about -63C. Scientists believe Mars once had flowing water on its surface."
    },
    5: {
        img: "image 05.jpg",
        name: "Jupiter",
        info: "Jupiter is the largest planet in our solar system - more than 1,300 Earths could fit inside it. It is a gas giant made mostly of hydrogen and helium, with no solid surface. Its most famous feature is the Great Red Spot, a gigantic storm that has been raging for hundreds of years and is larger than Earth itself. Jupiter has at least 95 moons, including Ganymede, the largest moon in the solar system."
    },
    6: {
        img: "image 06.jfif",
        name: "Saturn",
        info: "Saturn is the sixth planet from the Sun and is famous for its stunning rings, which are made of ice and rock particles. Like Jupiter, it is a gas giant, and it is so light compared to its size that it would float in water if you could find a big enough ocean. Saturn has 146 confirmed moons, and its largest moon, Titan, has a thick atmosphere and lakes of liquid methane instead of water."
    },
    7: {
        img: "image 07.jfif",
        name: "Uranus",
        info: "Uranus is the seventh planet from the Sun and an ice giant with a pale blue-green colour caused by methane in its atmosphere. What makes Uranus truly unusual is that it rotates on its side, tilted at almost 98 degrees - likely the result of a giant collision long ago. This tilt gives it extreme seasons, where each pole gets 21 years of continuous sunlight followed by 21 years of darkness. It was the first planet discovered with a telescope, in 1781."
    },
    8: {
        img: "image 08.webp",
        name: "Neptune",
        info: "Neptune is the eighth and farthest planet from the Sun, and the windiest world in the solar system, with supersonic wind speeds reaching 2,100 km per hour. Like Uranus, it is an ice giant with a deep blue colour from methane in its atmosphere. Neptune takes about 165 Earth years to complete one orbit around the Sun, so it has only completed one full orbit since its discovery in 1846."
    },
    9: {
        img: "sun.jpg",
        name: "The Sun",
        info: "The Sun is a star, not a planet - a giant ball of glowing gas at the centre of our solar system. It makes up more than 99% of all the mass in the solar system, and its gravity keeps every planet in orbit. Inside its core, nuclear fusion converts hydrogen into helium, producing the light and heat that make life on Earth possible. It takes light about 8 minutes and 20 seconds to travel from the Sun to Earth."
    },
    10: {
        img: "image 10.jpg",
        name: "The Moon",
        info: "The Moon is Earth's only natural satellite, orbiting our planet at an average distance of about 384,000 km. It is the fifth largest moon in the solar system and formed about 4.5 billion years ago, likely from debris left after a Mars-sized object collided with the young Earth. The Moon's gravity controls our ocean tides, and it always shows Earth the same face because its rotation is locked with its orbit."
    }
};

const infoBox = document.getElementById("popup1");

function showPlanet(planet) {
  
    infoBox.innerHTML = "";
    const image = document.createElement("img");
    image.src = planet.img;
    image.alt = planet.name;

    const text = document.createElement("div");


    const heading = document.createElement("h2");
    heading.textContent = planet.name;

    const paragraph = document.createElement("p");
    paragraph.textContent = planet.info;


    text.append(heading, paragraph);

    infoBox.append(image, text);

    
    infoBox.classList.add("filled");


    infoBox.scrollIntoView({ behavior: "smooth", block: "start" });
}

for (let i = 1; i <= 10; i++) {
    const btn = document.getElementById("learn-more-" + i);

    btn.addEventListener("click", function () {
        showPlanet(planets[i]);
    });
}

