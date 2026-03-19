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
        text2: "Powerful tail slaps on the ocean’s surface and 40km leaps forward send profound signals through the water to warn, court, or coordinate with other whales. Each tail is also uniquely patterned—like a fingerprint—allowing whales to identify each individual by its distinct ridges. This is why in many Indigenous traditions, a whale’s tail is more than a tool for movement; it’s a symbol of profound identity that reflects not only the whale’s individuality but also its role within a community.",
        //text3 is the section after, discussing the human impacts on whales, referencing the effects on whale’s tails specifically.
        text3: "Today, however, whale identities—constructed through their tails—face profound threats from human activity.  Noise pollution from ships drown out whales’ water-borne signals, disrupting lines of communication. Climate change has reduced prey availability, forcing whales to travel greater distances and placing additional strain on their tails, thus weakening their strength. Exploitative practices (such as commercial whaling and entanglement in fishing gear) can injure or scar tails, compromising individual recognition.",
        //text4 provides information to end the info card. However, for the next stage of this module’s development, we will seek to draw on traditional ecological knowledge to elaborate on the material impacts shipping routes and ships themselves have on whale tails.
        text4: "These impacts remind us that everyday human activities—things that may seem ordinary or harmless—can profoundly disrupt whales’ identities and the intricate social communities they rely on in the ocean.",
        citation1: "[1] OctoberCMS. (n.d.). Your Visual Guide to Whale Breaching, Lunge Feeding and Other Behaviors | The Marine Mammal Center. Www.marinemammalcenter.org. https://www.marinemammalcenter.org/news/your-visual-guide-to-whale-breaching-lunge-feeding-and-other-behaviors",
        citation2: "[2] Katona, S. K., & Whitehead, H. P. (1981). Identifying Humpback Whales using their natural markings. Polar Record, 20(128), 439-444. https://doi.org/10.1017/S003224740000365X", 
        citation3: "[3] Crown, H. (2024, January 24). Whale Tail Meaning and Symbolism. HarperCrown. https://www.harpercrown.com/blogs/topics/whale-tail-meaning-and-symbolism?srsltid=AfmBOop8keewpYAfTRLb3gybn-EPbsYTLLYsP8r-u1pajRuWLjImvD7L",
        citation4: "[4] Erbe, C., Marley, S. A., Schoeman, R. P., Smith, J. N., Trigg, L. E., & Embling, C. B. (2019). The Effects of Ship Noise on Marine Mammals—A Review. Frontiers in Marine Science, 6. https://doi.org/10.3389/fmars.2019.00606",
        citation5: "[5] Clapham, P. J., Young, S. B., & Brownell, R. L. (1999). Baleen whales: Conservation issues and the status of the most endangered populations. Mammal Review, 29(1), 35-60.",
        image: "WhaleTail.jpg", //This is the image that appears inside the info card. In this case, it is a picture of a whale’s tail corresponding to the info card’s topic of focus. 
        link: "https://www.raincoast.org/noisetracker/", //This the link contained in a “learn more” button on the card which encourages users to dive deeper into the information we’ve provided. In this case, it is a link to an organization called “Noise tracker” which seeks to monitor underwater noise production, research its effects on whales, and provide a platform for effective advocacy against the harming of whales.
        video: "https://www.youtube.com/embed/GOlghrCOJNQ?si=E7PoHhpRhexVRcuC", //Similar to the “learn more” button, we have embedded a youtube video to encourage users to continue learning while making the page feel more interactive. While the video displays in the card, it gives us an error message. Once we upload our project to Github, this error should be fixed. 
        showCard: false,
        clicked: false //”clicked” is a boolean flag that tracks whether the user has interacted with this subject. Initially set to “false” (meaning the subject has not been clicked yet), it is set to “true” when the user clicks on the icon button that the user would click on to open the cards.
      },
      //Eyes button & card. The code is the same as the “Tail” button, but this info card holds is about whale eyes.
      {
        title: "Eyes", x: 33, y: 53, text1: "Whales use their eyes not just to navigate, but to survive in the ocean’s ever‑changing world!", 
        text2: "While living in dim and deep waters, many whale species have highly adapted eyes that detect subtle changes in light and contrast despite the world appearing to them in grey-scale. In some species, eyes positioned on the sides of the head provide a panoramic visual field of 130o without eye movement, while specialized retinal rod photoreceptor cells allow whales to see clearly both near the surface and in low-light depths. This is why, in many Indigenous traditions from the Pacific Northwest to Oceania, a whale’s eye is not merely an organ of sight but a symbol of wisdom. Whales are regarded as powerful, guardian-like beings whose gaze connects the physical and spiritual worlds, conveying knowledge that remains largely unknowable to humans.", 
        text3: "Today, due to human activity, whale vision faces serious threats. Artificial light from coastal development, vessel traffic, and offshore infrastructure alters the ocean’s natural light and disrupts visual orientation. Water pollution also reduces clarity and fuels excess algal blooms, making navigation more hazardous. Ship strikes and entanglement in fishing gear can further injure or permanently damage a whale’s eyes, impairing vision entirely. These impacts serve as a stark reminder of how profoundly human activity can disrupt whales’ sensory worlds, affecting not only their survival but also their ability to guide the communities that look to them for wisdom.", 
        citation1: "[1] Mass, A. M., & Supin, A. Y. (2007). Adaptive features of aquatic mammals’ eye. Anatomical Record (Hoboken, N.J. : 2007), 290(6), 701–715. https://doi.org/10.1002/ar.20529",
        citation2: "[2] Magazine, S., & Wolly, B. (2018). Why Scientists Are Starting to Care About Cultures That Talk to Whales. Smithsonian Magazine. https://www.smithsonianmag.com/science-nature/talking-to-whales-180968698/", 
        citation3: "[3] Clapham, P. J., Young, S. B., & Brownell, R. L. (1999). Baleen whales: Conservation issues and the status of the most endangered populations. Mammal Review, 29(1), 35-60.",
        citation4: "[5] Knowlton, A., Hamilton, P., Marx, M., Pettis, H., & Kraus, S. (2012). Monitoring North Atlantic right whale Eubalaena glacialis entanglement rates: a 30 yr retrospective. Marine Ecology. Progress Series (Halstenbek), 466, 293–302. https://doi.org/10.3354/meps09923",
        image: "WhaleEyes.png", 
        video: "https://www.youtube.com/embed/gAc-eLlGl88?si=3XYuusjW53mr1Qk4", 
        link: "https://www.pbsnc.org/blogs/science/humpback-whales-see-less-than-we-thought/?fbclid=IwQ0xDSwMaVY1leHRuA2FlbQIxMQABHoZiB1X6ANU334YKWw57XrALU-HkmbnpWNVv_kkyZJeHyCYnJMVNMYM1cBUY_aem_6qwJuNrxYduC03zU0ThQCg",
        showCard: false,
        clicked: false
      },
      //Body button & card:
      {
        title: "Body", x: 57, y: 80, 
        text1: "Humpback whales are among the largest animals on Earth! Their bodies can grow up to 18 meters long and weigh between 22,000 and 36,000 kilograms, with females often growing slightly larger than males. This immense size helps whales store energy, regulate body temperature, and travel thousands of kilometers. Their long, streamlined bodies also allow them to glide efficiently through the ocean while diving deeply and travelling great distances between feeding and breeding grounds. For these reasons, the whale’s broad body is understood in some Indigenous traditions as a symbol of carrying and protection. Oral teachings describe whales as beings strong enough to “carry the stories of the ocean,” their great bodies representing endurance and the responsibility of transporting knowledge.", 
        text2: "Today, however, the very size that once empowered whales has made them increasingly vulnerable. Large whales cannot easily change direction when massive ships approach, and as global shipping traffic increases, collisions with vessels have become a major threat; ship strikes can cause devastating blunt-force trauma, breaking ribs, damaging internal organs, or leaving deep propeller wounds across a whale’s back. Entanglement in fishing gear can also wrap tightly around a whale’s torso, cutting into the skin and blubber as the animal swims and grows. Over time, this can deform the whale’s body, restrict movement, and drain energy needed for migration.", 
        text3: "These impacts reveal how even the most powerful bodies in the ocean are also some of the most victimized.", 
        citation1: "[1] Clapham, P. J., & Mead, J. G. (1999). Megaptera novaeangliae. Mammalian Species, 604, 1–9. https://doi.org/10.2307/3504352",
        citation2: "[2] The Earth’s Blanket: Traditional Teachings for Sustainable Living. (2005). Journal of Economic Literature, 43(3), 940.", 
        citation3: "[3] Laist, D. W., Knowlton, A. R., Mead, J. G., Collet, A. S., & Podesta, M. (2001). Collisions between ships and whales. Marine Mammal Science, 17(1), 35–75. https://doi.org/10.1111/j.1748-7692.2001.tb00980.x",
        citation4: "[4] Johnson, A., Salvador, G., Kenney, J., Robbins, J., Kraus, S., Landry, S., & Clapham, P. (2005). Fishing gear involved in entanglements of right and humpback whales. Marine Mammal Science, 21(4), 635–645. https://doi.org/10.1111/j.1748-7692.2005.tb01256.x",
        citation5: "[5] Knowlton, A., Hamilton, P., Marx, M., Pettis, H., & Kraus, S. (2012). Monitoring North Atlantic right whale Eubalaena glacialis entanglement rates: a 30 yr retrospective. Marine Ecology. Progress Series (Halstenbek), 466, 293–302. https://doi.org/10.3354/meps09923",
        image: "WhaleBody.png", 
        video: "https://www.youtube.com/embed/glxULceEEjA?si=0We4IzvwHso-V3M_", 
        link: "https://iwc.int/management-and-conservation/vessel-strikes",
        showCard: false,
        clicked: false
      },
      //Fin button & card:
      {
        title: "Fin", x: 40, y: 50, 
        text1: "Humpback whales are especially known for their remarkably long pectoral fins, which can grow up to one-third of their total body length—sometimes reaching nearly 4.5 meters! These fins act like wings underwater, allowing whales to turn sharply, stabilize their bodies, and maneuver with surprising precision despite their enormous size. The front edges of humpback fins also contain rounded bumps called tubercles, which help reduce drag and improve lift in the water, making swimming more efficient.", 
        text2: "In many Indigenous traditions along the Pacific Northwest coast, whales’ powerful fins are associated with guidance and direction. Some teachings describe the fin as the part of the whale that helps it “choose its path,” symbolizing leadership and the ability to navigate life’s challenges.", 
        text3: "Today, however, pectoral fins are often the first part of a whale to snag on fishing ropes, nets, or buoy lines. Entanglement can slice into the skin and blubber, permanently scar or deform the fin, and restrict its movement. Even partial damage to a fin can reduce the whale’s ability to steer, hunt, or migrate efficiently, which increases stress on the body as a whole. Recent monitoring in U.S. and Canadian waters indicates a sharp rise in entanglement cases affecting fins, particularly for humpbacks and right whales. Climate-driven changes in prey distribution also force whales to swim longer distances, placing additional strain on fins, especially if they have existing injuries.", 
        citation1: "[1] Fish, F. E., & Battle, J. M. (1995). Hydrodynamic design of the humpback whale flipper. Journal of Morphology (1931), 225(1), 51–60. https://doi.org/10.1002/jmor.1052250105",
        citation2: "[2] Fish, F. E., Weber, P. W., Murray, M. M., & Howle, L. E. (2011). The Tubercles on Humpback Whales’ Flippers: Application of Bio-Inspired Technology. Integrative and Comparative Biology, 51(1), 203–213. https://doi.org/10.1093/icb/icr016", 
        citation3: "[3] The Earth’s Blanket: Traditional Teachings for Sustainable Living. (2005). Journal of Economic Literature, 43(3), 940.",
        citation4: "[4] Johnson, A., Salvador, G., Kenney, J., Robbins, J., Kraus, S., Landry, S., & Clapham, P. (2005). Fishing gear involved in entanglements of right and humpback whales. Marine Mammal Science, 21(4), 635–645. https://doi.org/10.1111/j.1748-7692.2005.tb01256.x",
        citation5: "[5] Simmonds, M. P., & Eliott, W. J. (2009). Climate change and cetaceans: concerns and recent developments. Journal of the Marine Biological Association of the United Kingdom, 89(1), 203–210. https://doi.org/10.1017/S0025315408003196",
        citation6: "[6] MacLeod, C. (2009). Global climate change, range changes and potential implications for the conservation of marine cetaceans: a review and synthesis. Endangered Species Research, 7(2), 125–136. https://doi.org/10.3354/esr00197",
        image: "WhaleFin.png", 
        video: "https://www.youtube.com/embed/SrG2m1IrhUc?si=GJpsa95r6NhuddPn", 
        link: "https://www.oreateai.com/blog/the-fascinating-world-of-whale-fins-names-and-functions/bf2ecadd6c442a4d199352d3ab2a79aa",
        showCard: false,
        clicked: false
      },
      //Reproductive system button & card:
      {
        title: "Reproductive system", x: 70, y: 59, 
        text1: "Whales’ reproductive systems are central to the survival and continuity of their species. After an 11-month gestation period, female whales give birth to a single calf, which can measure 13 to 16 feet at birth! The calf stays with its protective mother for the first year, during which it learns to swim, feed, and navigate the ocean before being weaned. Female whales typically give birth every 2-3 years, although some may reproduce annually, demonstrating remarkable energy investment and resilience.", 
        text2: "In many Indigenous traditions along the Pacific Northwest coast, whale mothers and calves are celebrated as living symbols of care, endurance, and the deep bonds that sustain life. The mother’s body is seen as both protector and teacher, guiding her calf through the ocean’s challenges while passing on the instincts, knowledge, and rhythms needed to survive. This relationship reflects a broader understanding of the ocean as a connected community, where each generation carries the lessons and stories of those that came before.", 
        text3: "Today, however, human activity increasingly threatens whale reproduction. Noise pollution from ships and industrial activity can stress pregnant females, interfering with communication, migration, and feeding. Entanglement in fishing gear can also injure or separate mothers and calves, while climate-driven changes in prey distribution force mothers to swim longer distances, reducing the energy available for gestation and nursing. These impacts show that human activity does more than endanger individual whales—it disrupts the reproductive processes that sustain a whole population.", 
        citation1: "[1] Clapham, P. J., & Mead, J. G. (1999). Megaptera novaeangliae. Mammalian Species, 604, 1–9. https://doi.org/10.2307/3504352",
        citation2: "[2] NOAA Fisheries. (2016). Humpback Whale | NOAA Fisheries. Noaa.gov; Noaa. https://www.fisheries.noaa.gov/species/humpback-whale", 
        citation3: "[3] McDowall, R. M., Robertson, D. A., & Saito, R. (1975). Occurrence of galaxiid larvae and juveniles in the sea. New Zealand Journal of Marine and Freshwater Research, 9(1), 1–9. https://doi.org/10.1080/00288330.1975.9515541",
        citation4: "[4] (2000). [Rev. of Native science; natural laws of interdependence]. Reference and Research Book News, 15(3).",
        citation5: "[5] The Earth’s Blanket: Traditional Teachings for Sustainable Living. (2005). Journal of Economic Literature, 43(3), 940.",
        citation6: "[6] Rolland, R. M., Parks, S. E., Hunt, K. E., Castellote, M., Corkeron, P. J., Nowacek, D. P., Wasser, S. K., & Kraus, S. D. (2012). Evidence that ship noise increases stress in right whales. Proceedings of the Royal Society B : Biological Sciences, 279(1737), 2363–2368. https://doi.org/10.1098/rspb.2011.2429",
        citation7: "[7] Johnson, A., Salvador, G., Kenney, J., Robbins, J., Kraus, S., Landry, S., & Clapham, P. (2005). Fishing gear involved in entanglements of right and humpback whales. Marine Mammal Science, 21(4), 635–645. https://doi.org/10.1111/j.1748-7692.2005.tb01256.x",
        image: "WhaleReproduction.png", 
        video: "https://www.youtube.com/embed/o767PuYbEXg?si=WfUj5Q49yjmLLgMK", 
        link: "https://apnews.com/article/right-whale-endangered-extinction-climate-aca9048d0df4faa4304c05534bd4acc9",
        showCard: false, clicked: false
      },
      //Tubercles button & card:
      {
        title: "Tubercles", x: 36, y: 87, 
        text1: "A whale’s tubercles are the distinctive, golfball-sized bumps that line the upper and lower jaws, each housing its own hair follicle. While scientists are still uncovering the full purpose of these structures, they appear to serve as specialized sensory organs, helping whales detect subtle changes in their environment. One fascinating behavior linked to tubercles is the “seaweed facial”: humpbacks have been observed gathering clumps of floating seaweed from the surface and rubbing them against the areas of their rostrum where the tubercles are located. This interaction seems to provide a tactile pleasure for the whales, suggesting that tubercles may not only gather information but also play a role in playful behaviors!", 
        text2: "In many Indigenous traditions, whale tubercles are regarded as symbols of individuality, intelligence, and perceptiveness. Each whale’s pattern of bumps is unique, reflecting its distinct character and its ability to interact thoughtfully with the environment.Therefore, oral histories describe whales as highly aware beings, sensitive to subtle changes in currents, prey, and the ocean around them—suggesting that Indigenous peoples recognized the significance of tubercles long before scientists studied them.", 
        text3: "Today, sadly, human activity increasingly disrupts this sensitivity. Noise pollution from global oil or cargo shipping lanes, seismic testing, and offshore development are all said to interfere with a whale’s ability to focus and sense its surroundings; even minor disturbances in these behaviors may affect social learning, calf development, and overall well-being. These pressures show that even the tiniest features of a whale’s body—like tubercles—are essential not just to physical survival, but to the rich sensory life that defines their experience of the ocean.", 
        citation1: "[1] Reidenberg, J. S., & Laitman, J. T. (2007). Discovery of a low frequency sound source in Mysticeti (baleen whales): Anatomical establishment of a vocal fold homolog. Anatomical Record (Hoboken, N.J. : 2007), 290(6), 745–759. https://doi.org/10.1002/ar.20544",
        citation2: "[2] Fish, F. E., Weber, P. W., Murray, M. M., & Howle, L. E. (2011). The Tubercles on Humpback Whales’ Flippers: Application of Bio-Inspired Technology. Integrative and Comparative Biology, 51(1), 203–213. https://doi.org/10.1093/icb/icr016", 
        citation3: "[3] Wood, A. (2024). Why do humpback whales wear seaweed wigs? - Whale and Dolphin Conservation. Whales.org. https://uk.whales.org/2024/01/30/why-do-humpback-whales-wear-seaweed-wigs/",
        citation4: "[4] (2000). [Rev. of Native science; natural laws of interdependence]. Reference and Research Book News, 15(3).",
        citation5: "[5] The Earth’s Blanket: Traditional Teachings for Sustainable Living. (2005). Journal of Economic Literature, 43(3), 940.",
        citation6: "[6] Erbe, C. (2012). Effects of Underwater Noise on Marine Mammals. The Effects of Noise on Aquatic Life, 17–22. https://doi.org/10.1007/978-1-4419-7311-5_3",
        citation7: "[7] Rolland, R. M., Parks, S. E., Hunt, K. E., Castellote, M., Corkeron, P. J., Nowacek, D. P., Wasser, S. K., & Kraus, S. D. (2012). Evidence that ship noise increases stress in right whales. Proceedings of the Royal Society B : Biological Sciences, 279(1737), 2363–2368. https://doi.org/10.1098/rspb.2011.2429",
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

    //The following function ‘updateProgress’ tracks the user when they interact with the body part info card buttons: it ensures that the progress bar only increases the first time a button is clicked and does not increase if an info card is revisited. Without this check, repeatedly clicking on the same button would incorrectly increase the progress multiple times.
    // function updateProgress(index){
    //    if (!subjects.value[index].clicked) {  //This signals to only increment progress if the button is clicked and has not been clicked before.
    //    subjects.value[index].clicked = true; //Marks the button as clicked so it cannot increment if clicked again.
    //    const increment = 100 / subjects.value.length; //Calculates how much each button contributes to the total progress of the bar. 
    //    progress.value = Math.min(progress.value + increment, 100); //Updates the progress, making sure it never exceeds 100%.
    //  }
    // }


    // The function was updated to use the item/card instead of the index. This simplifies the logic since you rondt need to access the whole subjects array each time but rather access directly the card/object clicked. Important: This only works if the pop up is closed by clicking the button, not by clicking outside the pop up.
    function updateProgress(card) {
      if (card.showCard == false && card.clicked == false) {
          card.clicked = true;
          const increment = 100 / subjects.value.length;
          progress.value = progress.value + increment
          
          if (progress.value >= 100) {
          showCongrats.value = true;
          }

          console.log(progress.value)
      }}

      

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
      drawer,
      image, //so the whale image can be displayed in HTML.
      findCoordinates, //The function for detecting where a user clicks on the image, usable in the template.
      progress, //The reactive progress value, so the progress bar can update automatically.
      showCongrats,
      updateProgress, //The function for updating progress when a subject is clicked, callable from the template.
      restartExploration
    }
  }
}

//This final step tells Vue to: (1) create the app using the ‘App’ component defined above, (2) install Vuetify, allowing the use of styled buttons, cards, and other Material Design components, and (3) mount the app to the HTML element with id="app".Without this, nothing would appear on the page.
createApp(App).use(vuetify).mount('#app');


