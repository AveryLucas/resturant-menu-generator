import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

function generateSection(numberOfItems = Math.round(Math.random() * 5) + 1) {
  let items = [];
  for (var i = 0; i < numberOfItems; i++) {
    items.push(generateItemMenu());
  }
  return {
    title: lorem.generateWords(Math.round(Math.random() * 3) + 1),
    subTitle:
      Math.random() > 0.5
        ? lorem.generateWords(Math.round(Math.random() * 3) + 1)
        : undefined,
    postTitle:
      Math.random() > 0.5
        ? lorem.generateWords(Math.round(Math.random() * 3) + 1)
        : undefined,
    items,
  };
}

function generateItemMenu() {
  return {
    name: lorem.generateWords(Math.round(Math.random() * 5) + 1),
    description: lorem.generateSentences(1),
    price: Math.round(Math.random() * 14) + 1,
  };
}

function generateMenu(title = lorem.generateWords(1)) {
  return {
    title,
    banner:
      "https://www.onegreenplanet.org/wp-content/uploads/2020/03/wendys-the-plantiful-2048x1556.jpeg",
    sections: [
      generateSection(),
      generateSection(),
      generateSection(),
      generateSection(),
      generateSection(),
    ],
  };
}

function generatePage(numberOfMenus = 1) {
  let menus = [];
  for (var i = 0; i < numberOfMenus; i++) {
    menus.push(generateMenu());
  }
  return {
    logo: "",
    heroLogo: "",
    heroImg: "",
    menus,
  };
}

export default {
  generateItemMenu,
  generateMenu,
  generateSection,
};
