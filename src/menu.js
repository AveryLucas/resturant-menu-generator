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
    items.push(generateItem());
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

function generateItem() {
  return {
    name: lorem.generateWords(Math.round(Math.random() * 3) + 1),
    description: lorem.generateSentences(2),
    price: Math.round(Math.random() * 14) + 1,
  };
}

function generateMenu(title = lorem.generateWords(1)) {
  return {
    title,
    columns: generateColumns(generateSectionArray()),
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

function generateItemArray(numberOfItems = 10) {
  return new Array(numberOfItems).fill(null).map(() => generateItem());
}

function generateSectionArray(numberOfSections = 4) {
  return new Array(numberOfSections).fill(null).map(() => generateSection());
}

function generateColumns(items) {
  let cols = [[], []];
  let pingPong = 0;
  for (var i = 0; i < items.length; i++) {
    cols[pingPong].push(items[i]);
    pingPong += 1;
    if (!cols[pingPong]) {
      pingPong = 0;
    }
  }
  console.log(cols);
  return cols;
}

export default {
  generateItem,
  generateMenu,
  generateSection,
  generatePage,
};

// function generateItems
