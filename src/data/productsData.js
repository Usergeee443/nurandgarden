import lazerImage from "../assets/images/products/Artboard 7.png";
import teaImage from "../assets/images/products/tea-image.png";
import nutsImage from "../assets/images/products/nuts-image.png";
import driedFruitsImage from "../assets/images/products/dried-fruits-image.png";

export const products = [
  {
    id: "lazer",
    image: lazerImage,
    nameKey: "products.cards.lazer.name",
    descriptionKey: "products.cards.lazer.description",
    category: "rice",
  },
  // Yong'oqlar (3 ta)
  {
    id: "almond-premium",
    image: nutsImage,
    nameKey: "products.cards.almondPremium.name",
    descriptionKey: "products.cards.almondPremium.description",
    category: "nuts",
  },
  {
    id: "walnut-select",
    image: nutsImage,
    nameKey: "products.cards.walnutSelect.name",
    descriptionKey: "products.cards.walnutSelect.description",
    category: "nuts",
  },
  {
    id: "pistachio-royal",
    image: nutsImage,
    nameKey: "products.cards.pistachioRoyal.name",
    descriptionKey: "products.cards.pistachioRoyal.description",
    category: "nuts",
  },
  // Quruq mevalar (1 ta)
  {
    id: "dried-fruits-mix",
    image: driedFruitsImage,
    nameKey: "products.cards.driedFruitsMix.name",
    descriptionKey: "products.cards.driedFruitsMix.description",
    category: "driedFruits",
  },
  // Choylar (1 ta)
  {
    id: "green-tea-premium",
    image: teaImage,
    nameKey: "products.cards.greenTeaPremium.name",
    descriptionKey: "products.cards.greenTeaPremium.description",
    category: "teas",
  },
];
