//____________________________________________________________________________________
//The following are imports used to create the app and its reactive data


//The following imports ‘Vue’ functions that initialized the ‘Vue’ application and created reactive data that automatically updates the screen when changed.
const { createApp, ref } = Vue;
//The following imports ‘Vuetify’, a UI framework that provides styling components like buttons, cards, and app-bars for creating pictures and titles.
const { createVuetify } = Vuetify;
//The following allows the ‘Vue’ app to use ‘Vuetify’ components and styling.
const vuetify = createVuetify();

//____________________________________________________________________________________
//The following are the main app components

//Everything inside this controls the behaviour of the whale interface.
const App = {
  setup() {
    const image = "whale.png"; //This is the image of the whale displayed in the main interface when you open up the module.
    const progress = ref(0); //’subjects’ is a reactive array wrapped in ref(), meaning that ‘Vue’ will track changes and automatically update the screen when the user interacts with the module and the data changes.
    const drawer = ref(false); // controls open/close of navigation app bar

    //Each object in this array represents one clickable button placed on a body part of the whale, and when clicked, it opens an info card that will hold information on that body part and a relevant picture or embedded youtube video.
    const subjects = ref([
      {
        title: "Tail", //This is the button label, and in this case, it reads “Tail”.
        x: 78, y: 19, //These are the horizontal and vertical positions (respectively) of the info card.
        text1: "Whales use their tails to recognize and speak to one another across the ocean!", //This is the first line to appear in the info card. It is meant to catch the readers’ attention.
        //text2 is the next section of the info card, discussing some facts about whale’s tails and some indigenous traditions’ understanding of this body part’s significance.
        text2: "Powerful tail slaps on the ocean’s surface, and 40km leaps forward send profound signals through the water to warn, court, or coordinate with other whales [1]. As TEK tells us, each tail is also uniquely patterned—like a fingerprint—allowing whales to identify each individual by its distinct ridges. This is why in many Indigenous traditions—particularly coastal ones such as that of the Haida and Kwakwaka’wakw Nations of British Columbia and Maori people of New Zealand—produce artistic representation of whale tails as symbols of identity, reflecting both the individuality of the whale and its integral role within the broader community [2,3].",
        //text3 is the section after, discussing the human impacts on whales, referencing the effects on whale’s tails specifically.
        text3: "Today, however, whale identities—constructed through their tails—face profound threats from human activity.  Noise pollution from ships such as container ships or oil tankers travelling throughout the oceans drown out whales’ water-borne signals, disrupting lines of communication [4]. Climate change has also reduced prey availability, forcing whales to travel greater distances and placing additional strain on their tails, thus weakening their strength [5]. Exploitative practices (such as commercial whaling and entanglement in fishing gear) can injure or scar tails, compromising individual recognition [5].",
        //text4 provides information to end the info card. 
        text4: "These impacts remind us that everyday human activities—things that may seem ordinary or harmless—can profoundly disrupt whales’ identities and the intricate social communities they rely on in the ocean.",
        citation1: "[1] OctoberCMS. (n.d.). Your Visual Guide to Whale Breaching, Lunge Feeding and Other Behaviors | The Marine Mammal Center. Www.marinemammalcenter.org. https://www.marinemammalcenter.org/news/your-visual-guide-to-whale-breaching-lunge-feeding-and-other-behaviors",
        citation2: "[2] Katona, S. K., & Whitehead, H. P. (1981). Identifying Humpback Whales using their natural markings. Polar Record, 20(128), 439-444. https://doi.org/10.1017/S003224740000365X", 
        citation3: "[3] Crown, H. (2024, January 24). Whale Tail Meaning and Symbolism. HarperCrown. https://www.harpercrown.com/blogs/topics/whale-tail-meaning-and-symbolism?srsltid=AfmBOop8keewpYAfTRLb3gybn-EPbsYTLLYsP8r-u1pajRuWLjImvD7L",
        citation4: "[4] Erbe, C., Marley, S. A., Schoeman, R. P., Smith, J. N., Trigg, L. E., & Embling, C. B. (2019). The Effects of Ship Noise on Marine Mammals—A Review. Frontiers in Marine Science, 6. https://doi.org/10.3389/fmars.2019.00606",
        citation5: "[5] Clapham, P. J., Young, S. B., & Brownell, R. L. (1999). Baleen whales: Conservation issues and the status of the most endangered populations. Mammal Review, 29(1), 35-60.",
        imageCitation: "Alaska Magazine. https://alaskamagazine.com/authentic-alaska/wildlife-nature/get-to-know-an-individual-whale-with-happywhale/",
        image: "WhaleTail.jpg", //This is the image that appears inside the info card. In this case, it is a picture of a whale’s tail corresponding to the info card’s topic of focus. 
        link: "https://www.raincoast.org/noisetracker/", //This the link contained in a “learn more” button on the card which encourages users to dive deeper into the information we’ve provided. In this case, it is a link to an organization called “Noise tracker” which seeks to monitor underwater noise production, research its effects on whales, and provide a platform for effective advocacy against the harming of whales.
        video: "https://www.youtube.com/embed/GOlghrCOJNQ?si=E7PoHhpRhexVRcuC", //Similar to the “learn more” button, we have embedded a youtube video to encourage users to continue learning while making the page feel more interactive. Once we upload our project to Github, the videos will display correctly and they can be played within the card. 
        showCard: false, //This boolean tracks the visibility of the info card and is toggled when the user interacts with the subject button.
        clicked: false //”clicked” is a boolean flag that tracks whether the user has interacted with this subject. Initially set to “false” (meaning the subject has not been clicked yet), it is set to “true” when the user clicks on the icon button that the user would click on to open the cards.
      },
      //Eyes button & card. The code is the same as the “Tail” button, but this info card holds is about whale eyes.
      {
        title: "Eyes", x: 33, y: 53, 
        text1: "Whales use their eyes not just to navigate, but to survive in the ocean’s ever‑changing world!", 
        text2: "Adapted for dim and deep waters, many whale species have eyes that detect subtle shifts in light and contrast, even though their surroundings appear largely in grey-scale. With eyes positioned on the sides of their heads, some whales can achieve a panoramic field of vision of up to 130° without movement, while specialized rod photoreceptor cells allow them to see clearly both near the surface and in low-light depths [1]. As TEK tells us, a whale’s vision extends beyond physical sight—reflecting attentiveness, awareness, and deep connection to the ocean’s rhythms. That is why in many Oceanic Indigenous traditions, including those of Papuan and Chamorro peoples, the whale’s eye is understood as a symbol of wisdom and perception, representing a way of “seeing” that connects the physical and spiritual worlds [2].", 
        text3: "Today, however, whales’ vision—and the knowledge it represents—faces growing threats from human activity. Artificial light from coastal development, vessel traffic, and offshore infrastructure—often concentrated in the shallow, nutrient-rich waters whales rely on for breeding and foraging—disrupts natural light conditions and impairs visual orientation [3]. Water pollution reduces clarity and fuels algal blooms, making navigation more difficult, while ship strikes and entanglement in fishing gear can directly injure or damage whales’ eyes [4].", 
        text4: "From a TEK perspective, these disruptions are not only physical but relational. When whales’ ability to see is compromised, so too is their role within interconnected systems of life and knowledge. These impacts remind us that everyday human activities can profoundly disrupt not only how whales survive, but how they perceive, relate to, and move through the ocean world.",
        citation1: "[1] Mass, A. M., & Supin, A. Y. (2007). Adaptive features of aquatic mammals’ eye. Anatomical Record (Hoboken, N.J. : 2007), 290(6), 701–715. https://doi.org/10.1002/ar.20529",
        citation2: "[2] Magazine, S., & Wolly, B. (2018). Why Scientists Are Starting to Care About Cultures That Talk to Whales. Smithsonian Magazine. https://www.smithsonianmag.com/science-nature/talking-to-whales-180968698/", 
        citation3: "[3] Clapham, P. J., Young, S. B., & Brownell, R. L. (1999). Baleen whales: Conservation issues and the status of the most endangered populations. Mammal Review, 29(1), 35-60.",
        citation4: "[4] Knowlton, A., Hamilton, P., Marx, M., Pettis, H., & Kraus, S. (2012). Monitoring North Atlantic right whale Eubalaena glacialis entanglement rates: a 30 yr retrospective. Marine Ecology. Progress Series (Halstenbek), 466, 293–302. https://doi.org/10.3354/meps09923",
        imageCitation: "Iliya, K. (2018). Eye of the Giant. IPA. https://www.photoawards.com/winner/zoom.php?eid=8-197351-20",
        image: "WhaleEyes.png", 
        video: "https://www.youtube.com/embed/gAc-eLlGl88?si=3XYuusjW53mr1Qk4", 
        link: "https://www.pbsnc.org/blogs/science/humpback-whales-see-less-than-we-thought/?fbclid=IwQ0xDSwMaVY1leHRuA2FlbQIxMQABHoZiB1X6ANU334YKWw57XrALU-HkmbnpWNVv_kkyZJeHyCYnJMVNMYM1cBUY_aem_6qwJuNrxYduC03zU0ThQCg",
        showCard: false,
        clicked: false
      },
      //Body button & card:
      {
        title: "Body", x: 57, y: 80, 
        text1: "Humpback whales are among the largest animals on Earth!", 
        text2: "Their bodies can reach up to 18 meters in length and weigh between 22,000 and 36,000 kilograms, with females often slightly larger than males. This remarkable size allows whales to store energy, regulate body temperature, and migrate thousands of kilometers across oceans. Their streamlined forms also enable efficient movement through water, supporting deep dives and long-distance travel between feeding and breeding grounds [1]. Drawing on TEK, a whale’s immense body is understood not only as a biological advantage but as a representation of strength, care, and continuity. In North American Indigenous teachings from the Northwest that interact with and rely on the sea—such as the Tsimshian and Nuu-chah-nulth peoples—whales are described as beings that carry the ocean’s knowledge, with their size symbolizing both endurance and the responsibility of holding and passing on stories across generations [2].", 
        text3: "Today, however, this same scale has become a source of risk. Because of their size, humpback whales are less able to quickly maneuver away from large vessels, making them especially vulnerable to ship strikes as ocean traffic increases. These collisions can result in severe injuries, including fractured bones, internal trauma, and deep lacerations from propellers [3]. Fishing gear entanglement also poses a major threat, with ropes tightening around the body over time, cutting into tissue, limiting mobility, and exhausting the whale as it struggles to swim and migrate [4,5].", 
        text4: "Through a TEK lens, these impacts reflect more than individual harm—they signal disruptions to balance and responsibility within the ocean. When whales are weakened, their ability to fulfill their roles within interconnected systems is also diminished, highlighting how human pressures can unsettle not just the physical wellbeing of whales, but the relationships and systems in which they—and us—are deeply embedded.",
        citation1: "[1] Clapham, P. J., & Mead, J. G. (1999). Megaptera novaeangliae. Mammalian Species, 604, 1–9. https://doi.org/10.2307/3504352",
        citation2: "[2] The Earth’s Blanket: Traditional Teachings for Sustainable Living. (2005). Journal of Economic Literature, 43(3), 940.", 
        citation3: "[3] Laist, D. W., Knowlton, A. R., Mead, J. G., Collet, A. S., & Podesta, M. (2001). Collisions between ships and whales. Marine Mammal Science, 17(1), 35–75. https://doi.org/10.1111/j.1748-7692.2001.tb00980.x",
        citation4: "[4] Johnson, A., Salvador, G., Kenney, J., Robbins, J., Kraus, S., Landry, S., & Clapham, P. (2005). Fishing gear involved in entanglements of right and humpback whales. Marine Mammal Science, 21(4), 635–645. https://doi.org/10.1111/j.1748-7692.2005.tb01256.x",
        citation5: "[5] Knowlton, A., Hamilton, P., Marx, M., Pettis, H., & Kraus, S. (2012). Monitoring North Atlantic right whale Eubalaena glacialis entanglement rates: a 30 yr retrospective. Marine Ecology. Progress Series (Halstenbek), 466, 293–302. https://doi.org/10.3354/meps09923",
        imageCitation: "Iliya, K. (2020). Instagram. https://www.instagram.com/p/CJe8qTwhBgG/?hl=en&img_index=1 ",
        image: "WhaleBody.png", 
        video: "https://www.youtube.com/embed/glxULceEEjA?si=0We4IzvwHso-V3M_", 
        link: "https://iwc.int/management-and-conservation/vessel-strikes",
        showCard: false,
        clicked: false
      },
      //Fin button & card:
      {
        title: "Fin", x: 40, y: 50, 
        text1: "Humpback whales are famous for their extraordinarily long pectoral fins!",
        text2: "Stretching up to one-third of their body length—sometimes nearly 4.5 meters—these fins give humpbacks a level of control that seems almost impossible for such large animals. They use them to pivot, brake, and stabilize as they swim, helping them navigate complex ocean environments with precision [1]. The fins’ leading edges are lined with small bumps called tubercles, which improve water flow and enhance lift, making movement more efficient and controlled [2]. Drawing on TEK, these fins are understood not just as physical features, but also as expressions of intention and movement through the world. In several Pacific Northwest Indigenous teachings, including those of the Haida, Kwakwaka’wakw, and Nuu-chah-nulth Nations of what is now British Columbia, whale fins are connected to the idea of guidance—representing the ability to adjust one’s course, respond to change, and move with awareness and purpose [3].",
        text3: "Today, however, this capacity for movement is increasingly constrained. Pectoral fins are particularly vulnerable to entanglement in fishing gear, where ropes and nets can wrap tightly around them, cutting into flesh and limiting motion. Damage to a fin can make even basic actions—like turning or maintaining balance—more difficult, with ripple effects on feeding, migration, and survival [4]. At the same time, changing ocean conditions linked to climate change are pushing whales into new areas and longer migrations—such as moving farther along the Pacific Northwest coast from British Columbia to Washington State—placing additional demands on already strained fins [5,6].",
        text4: "When viewed through a TEK framework, these injuries signal a disruption in a whale’s ability to move in relation to its environment. The loss of fluid, purposeful movement is not only a physical impairment but a disturbance of the balance and responsiveness that these beings embody. In this way, human impacts are not just limiting where whales can go—but how they are able to exist within the ocean itself.",
        citation1: "[1] Fish, F. E., & Battle, J. M. (1995). Hydrodynamic design of the humpback whale flipper. Journal of Morphology (1931), 225(1), 51–60. https://doi.org/10.1002/jmor.1052250105",
        citation2: "[2] Fish, F. E., Weber, P. W., Murray, M. M., & Howle, L. E. (2011). The Tubercles on Humpback Whales’ Flippers: Application of Bio-Inspired Technology. Integrative and Comparative Biology, 51(1), 203–213. https://doi.org/10.1093/icb/icr016", 
        citation3: "[3] The Earth’s Blanket: Traditional Teachings for Sustainable Living. (2005). Journal of Economic Literature, 43(3), 940.",
        citation4: "[4] Johnson, A., Salvador, G., Kenney, J., Robbins, J., Kraus, S., Landry, S., & Clapham, P. (2005). Fishing gear involved in entanglements of right and humpback whales. Marine Mammal Science, 21(4), 635–645. https://doi.org/10.1111/j.1748-7692.2005.tb01256.x",
        citation5: "[5] Simmonds, M. P., & Eliott, W. J. (2009). Climate change and cetaceans: concerns and recent developments. Journal of the Marine Biological Association of the United Kingdom, 89(1), 203–210. https://doi.org/10.1017/S0025315408003196",
        citation6: "[6] MacLeod, C. (2009). Global climate change, range changes and potential implications for the conservation of marine cetaceans: a review and synthesis. Endangered Species Research, 7(2), 125–136. https://doi.org/10.3354/esr00197",
        imageCitation: "NAMMCO. (2020). Facebook. https://www.facebook.com/story.php?story_fbid=1659621974217525&id=100057441221360",
        image: "WhaleFin.png", 
        video: "https://www.youtube.com/embed/SrG2m1IrhUc?si=GJpsa95r6NhuddPn", 
        link: "https://www.oreateai.com/blog/the-fascinating-world-of-whale-fins-names-and-functions/bf2ecadd6c442a4d199352d3ab2a79aa",
        showCard: false,
        clicked: false
      },
      //Reproductive system button & card:
      {
        title: "Reproductive system", x: 70, y: 59, 
        text1: "Whales’ reproductive systems are vital to the continuation of their species!",
        text2: "After a gestation period of about 11 months, female whales give birth to a single calf, often measuring 13 to 16 feet at birth. In its first year of life, the calf remains close to its mother, learning how to swim, feed, and navigate the ocean before gradually becoming independent. Because raising a calf requires immense energy, many female whales reproduce only every 2–3 years, reflecting the careful balance needed to sustain both mother and offspring [1,2,3]. As emphasized through TEK, this process is not simply biological; in many Pacific Northwest Indigenous traditions that span coastal British Columbia, Alaska, Washington, Oregon, and Northern California and include the Nuu-chah-nulth, Coast Salish, and Tlingit Nations, the bond between mother and calf is understood as a powerful expression of care, teaching, and intergenerational continuity, where knowledge is passed through lived experience and close connection [4,5].",
        text3: "Today, however, these relationships are increasingly under strain. Noise from all sorts of ships and industrial activity such as container vessels, cruise ships, and fishing boats, as well as industrial activities such as offshore drilling or construction can disrupt communication between mothers and calves and place stress on pregnant females, affecting feeding and migration patterns [6]. Entanglement in fishing gear can injure whales or even separate calves from their mothers, while climate change is shifting prey availability beyond normal whale quarters, forcing mothers to travel farther and expend more energy during already demanding periods of gestation and nursing [7].",
        text4: "From a TEK standpoint, these pressures affect more than biological reproduction—they interfere with the transfer of knowledge and care between generations. When these bonds are disrupted, it impacts not only individual whales but the continuity of relationships that sustain life across time.",
        citation1: "[1] Clapham, P. J., & Mead, J. G. (1999). Megaptera novaeangliae. Mammalian Species, 604, 1–9. https://doi.org/10.2307/3504352",
        citation2: "[2] NOAA Fisheries. (2016). Humpback Whale | NOAA Fisheries. Noaa.gov; Noaa. https://www.fisheries.noaa.gov/species/humpback-whale", 
        citation3: "[3] McDowall, R. M., Robertson, D. A., & Saito, R. (1975). Occurrence of galaxiid larvae and juveniles in the sea. New Zealand Journal of Marine and Freshwater Research, 9(1), 1–9. https://doi.org/10.1080/00288330.1975.9515541",
        citation4: "[4] (2000). [Rev. of Native science; natural laws of interdependence]. Reference and Research Book News, 15(3).",
        citation5: "[5] The Earth’s Blanket: Traditional Teachings for Sustainable Living. (2005). Journal of Economic Literature, 43(3), 940.",
        citation6: "[6] Rolland, R. M., Parks, S. E., Hunt, K. E., Castellote, M., Corkeron, P. J., Nowacek, D. P., Wasser, S. K., & Kraus, S. D. (2012). Evidence that ship noise increases stress in right whales. Proceedings of the Royal Society B : Biological Sciences, 279(1737), 2363–2368. https://doi.org/10.1098/rspb.2011.2429",
        citation7: "[7] Johnson, A., Salvador, G., Kenney, J., Robbins, J., Kraus, S., Landry, S., & Clapham, P. (2005). Fishing gear involved in entanglements of right and humpback whales. Marine Mammal Science, 21(4), 635–645. https://doi.org/10.1111/j.1748-7692.2005.tb01256.x",
        imageCitation: "National Geographic. (2024). https://www.nationalgeographic.com/animals/article/humpback-whale-mating-recorded-first-time-males",
        image: "WhaleReproduction.png", 
        video: "https://www.youtube.com/embed/o767PuYbEXg?si=WfUj5Q49yjmLLgMK", 
        link: "https://apnews.com/article/right-whale-endangered-extinction-climate-aca9048d0df4faa4304c05534bd4acc9",
        showCard: false, clicked: false
      },
      //Tubercles button & card:
      {
        title: "Tubercles", x: 36, y: 87, 
        text1: "Whale tubercles—those golfball-sized bumps lining the upper and lower jaws—are far more than curious textures. Each bump contains its own hair follicle and acts as a highly sensitive sensory organ, helping whales detect subtle shifts in water movement, currents, and nearby prey [1]. One fascinating behavior linked to tubercles is the “seaweed facial”: humpbacks have been observed gathering clumps of floating seaweed from the surface and rubbing them against the areas of their rostrum where the tubercles are located. This interaction seems to provide a tactile pleasure for the whales, suggesting that tubercles may not only gather information but also play a role in playful behaviors [2,3]!",
        text2: "Through the lens of TEK, tubercles have long been understood as signs of a whale’s individuality, intelligence, and awareness. Among the Makah, Lummi, Tlingit, and Kwakwaka’wakw Nations of the Pacific Northwest (Washington State and British Columbia), as well as the Inupiat and Yup’ik peoples of Alaska, oral traditions recognize each whale’s pattern of bumps as unique, reflecting its personality and attunement to the ocean. Tlingit and Makah stories, for example, describe whales as highly perceptive beings that respond to subtle changes in currents, prey, and environmental conditions—showing that these communities understood the sensory and relational significance of tubercles long before modern science studied them [4,5].",
        text3: "Today, however, human activity increasingly interferes with these delicate senses. Noise from cargo ships, cruise liners, offshore drilling, and seismic surveys can and have masked the subtle cues whales rely on, disrupting communication, play, and learning. Even minor disturbances may ripple outward, affecting calf development, mother-calf bonding, and social interactions [6,7]. From a TEK perspective, these pressures are more than physical stressors—they interrupt the whale’s connection to its environment, diminishing its ability to perceive, respond, and participate fully in the ocean world. In other words, even the tiniest bumps on a whale’s jaw carry profound meaning, shaping how these incredible creatures experience and engage with life beneath the waves.",
        citation1: "[1] Reidenberg, J. S., & Laitman, J. T. (2007). Discovery of a low frequency sound source in Mysticeti (baleen whales): Anatomical establishment of a vocal fold homolog. Anatomical Record (Hoboken, N.J. : 2007), 290(6), 745–759. https://doi.org/10.1002/ar.20544",
        citation2: "[2] Fish, F. E., Weber, P. W., Murray, M. M., & Howle, L. E. (2011). The Tubercles on Humpback Whales’ Flippers: Application of Bio-Inspired Technology. Integrative and Comparative Biology, 51(1), 203–213. https://doi.org/10.1093/icb/icr016", 
        citation3: "[3] Wood, A. (2024). Why do humpback whales wear seaweed wigs? - Whale and Dolphin Conservation. Whales.org. https://uk.whales.org/2024/01/30/why-do-humpback-whales-wear-seaweed-wigs/",
        citation4: "[4] (2000). [Rev. of Native science; natural laws of interdependence]. Reference and Research Book News, 15(3).",
        citation5: "[5] The Earth’s Blanket: Traditional Teachings for Sustainable Living. (2005). Journal of Economic Literature, 43(3), 940.",
        citation6: "[6] Erbe, C. (2012). Effects of Underwater Noise on Marine Mammals. The Effects of Noise on Aquatic Life, 17–22. https://doi.org/10.1007/978-1-4419-7311-5_3",
        citation7: "[7] Rolland, R. M., Parks, S. E., Hunt, K. E., Castellote, M., Corkeron, P. J., Nowacek, D. P., Wasser, S. K., & Kraus, S. D. (2012). Evidence that ship noise increases stress in right whales. Proceedings of the Royal Society B : Biological Sciences, 279(1737), 2363–2368. https://doi.org/10.1098/rspb.2011.2429",
        imageCitation: "Yee, E.A. (2020). The Bumps on Humps. Discovery Whale Watch. https://discoverywhalewatch.com/naturalist-blog/the-bumps-on-humps-11-17-20/",
        image: "WhaleTubercles.png", 
        video: "https://www.youtube.com/embed/zGqjyqXHIek?si=OOh_AFSJ2xn_3Gxw", 
        link: "https://biologyinsights.com/what-are-the-bumps-on-humpback-whales/?utm_source=chatgpt.com",
        showCard: false,
        clicked: false
      },
    ]);

    const showCongrats = ref(false);

    //____________________________________________________________________________________
    //The following are functions. A “function” is a set of instructions that performs a task when called, and the following code includes two functions: one for opening/closing info cards, and one for checking where the user clicks on the whale image.

    //The following function ‘findCoordinates’ is used to determine where the user clicks on the whale image. A “function” is a set of instructions that performs a task when it is called, and in this case, the function calculates the position of a click as a percentage of the current browser window size, which is useful for placing buttons or interactive elements accurately on the whale image.
    function findCoordinates(event) {
      const windowWidth = window.innerWidth; //This references the width of the browser window in pixels.
      const windowHeight = window.innerHeight; //This references the height of the browser window in pixels.
      //These next two lines convert the x and y pixel positions of the mouse click into percentages relative to the window size. This allows the coordinates to remain accurate even if the browser window is resized.
      const xPercent = (event.clientX / windowWidth) * 100;
      const yPercent = (event.clientY / windowHeight) * 100;
      //The following then prints the calculated percentages to the console for debugging. This is helpful when adding new clickable areas (buttons) on the whale image, as it allows precise positioning.
      console.log(`X: ${xPercent.toFixed(2)}%, Y: ${yPercent.toFixed(2)}%`);
    }


    // This function uses the item/card to update the progress bar. This only works if the pop up is closed by clicking the button, not by clicking outside the pop up.
    function updateProgress(card) {
      if (card.showCard == false && card.clicked == false) {
          card.clicked = true;
          const increment = 100 / subjects.value.length;
          progress.value = progress.value + increment
          
          //this creates a condition to display the congratulations card only when the progress bar is filled 
          if (progress.value >= 100) {
          showCongrats.value = true;
          }

          console.log(progress.value)
      }}

      
      //this function allows the user to reset the progress bar by clicking on a button within the pop-up dialogue that appears once the user has completed the module
    function restartExploration() {
      subjects.value.forEach(subject => {
      subject.clicked = false;
    });
    progress.value = 0;
    showCongrats.value = false;
    }


    //In Vue, the “return” statement exposes reactive variables and functions to the HTML template. Without returning them, the HTML template cannot access or use these values. Therefore, here, we are returning the main data and functions for the app:
    return {
      subjects, //refers to the array of the whale body parts, so that buttons and info cards can appear on the page.
      drawer, //This is for the navigation panel
      image, //so the whale image can be displayed in HTML.
      findCoordinates, //The function for detecting where a user clicks on the image, usable in the template.
      progress, //The reactive progress value, so the progress bar can update automatically.
      showCongrats, //The function for the dialogue card to appear once the module is complete
      updateProgress, //The function for updating progress when a subject is clicked, callable from the template.
      restartExploration //The function to reset the progress bar
    }
  }
}

//This final step tells Vue to: (1) create the app using the ‘App’ component defined above, (2) install Vuetify, allowing the use of styled buttons, cards, and other Material Design components, and (3) mount the app to the HTML element with id="app".Without this, nothing would appear on the page.
createApp(App).use(vuetify).mount('#app');


