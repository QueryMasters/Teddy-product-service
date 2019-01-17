const faker = require('faker');
const fs = require('fs');

// Import products images urls (array of arrays with URLs)
const { productImageURLs } = require('../productImageURLs.js', { flags: 'a' });

// Get a random number of image urls from imported image urls
const getImgUrls = () => {
  const rand = Math.floor(Math.random() * productImageURLs.length);

  return productImageURLs[rand];
};

// Get a random amount of description from faker
const getDescription = () => {
  const rand = Math.floor(Math.random() * 4) + 4;
  const paragraphs = [];

  for (let i = 0; i < rand; i += 1) {
    paragraphs.push(faker.lorem.paragraphs());
  }
  return JSON.stringify(paragraphs);
};

const getRandomBoolean = () => Math.floor(Math.random() * 10) > 4;
const getRandomQuantity = () => Math.floor(Math.random() * 25);
const getRandomPrice = () => faker.commerce.price();
const getRandomReviewQuantity = () => Math.floor(Math.random() * Math.random() * 100);
const getRandomAnswerQuantity = () => Math.floor(Math.random() * 250);
const getFutureDate = () => faker.date.future().toString();
  
const writeStreamProduct = fs.createWriteStream("./mockdata-product.csv");
const writeStreamVersions = fs.createWriteStream("./mockdata-version.csv");
const writeStreamNewVersion = fs.createWriteStream("./mockdata-new.csv");
const writeStreamOldVersion = fs.createWriteStream("./mockdata-old.csv");

let productColumns = ['id', 'name', 'description', 'seller', 'prime_eligible', 'versions', 'image_urls', 'expected_date_of_arrival', 'five_star_reviews', 'four_star_reviews', 'three_star_reviews', 'two_star_reviews', 'one_star_reviews', 'answered+questions'];
let versionsColumns = ['id', 'newId', 'oldId'];
let oldVersionColumns = ['id', 'qty_in_stock', 'price'];
let newVersionColumns = ['id', 'qty_in_stock', 'price'];

productColumns = productColumns.join() + '\n';
versionsColumns = versionsColumns.join() + '\n';
oldVersionColumns = oldVersionColumns.join() + '\n';
newVersionColumns = newVersionColumns.join() + '\n';

writeStreamProduct.write(productColumns);
writeStreamVersions.write(versionsColumns);
writeStreamNewVersion.write(newVersionColumns);
writeStreamOldVersion.write(oldVersionColumns)

const tracker = (i, name) => {
  if (i === 0) {
    return console.log(`WOOOOOO!!! ALL 10,000,000 data generated for ${name}!!!`)
  }
  if (i % 100000 === 0) {
    if (i % 1000000 === 0) {
      console.log(name + ':' + (10 - (i/1000000)) + ',000,000 data generated!' )
    } else {
      console.log(name + ':' + (100 - (i/100000)) + '00000 data generated!')
    }
  }
}

const populateProduct = (writer) => {
  let i = 10000000;
  const write = () => {
    let ok = true;
    do {
      i--;
      tracker(i, 'Product');
      const product = 
        i + '|'
        + faker.commerce.productName() + '|'
        + getDescription() + '|'
        + faker.company.companyName() + '|'
        + getRandomBoolean() + '|'
        + i + '|'
        + getImgUrls() + '|'
        + getFutureDate() + '|'
        + getRandomReviewQuantity() + '|' 
        + getRandomReviewQuantity() + '|' 
        + getRandomReviewQuantity() + '|' 
        + getRandomReviewQuantity() + '|' 
        + getRandomReviewQuantity() + '|' 
        + getRandomAnswerQuantity() + '\n'
      if (i === 0) {
        writer.write(product);
      } else {
        ok = writer.write(product);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once("drain", write);
    }
  };
  write();
};

const populateVersions = (writer) => {
  let i = 10000000;
  const write = () => {
    let ok = true;
    do {
      i--;
      tracker(i, 'Versions');
      const product = 
        i + '|'
        + i + '|'
        + i + '\n'
      if (i === 0) {
        writer.write(product);
      } else {
        ok = writer.write(product);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once("drain", write);
    }
  };
  write();
}

const populateNewVersion = (writer) => {
  let i = 10000000;
  const write = () => {
    let ok = true;
    do {
      i--;
      tracker(i, 'New Version');
      const product = 
        i + '|'
        + getRandomQuantity() + '|' 
        + getRandomPrice() +'\n'
      if (i === 0) {
        writer.write(product);
      } else {
        ok = writer.write(product);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once("drain", write);
    }
  };
  write();
};

const populateOldVersion = (writer) => {
  let i = 10000000;
  const write = () => {
    let ok = true;
    do {
      i--;
      tracker(i, 'Old Version');
      const product = 
        i + '|'
        + getRandomQuantity() + '|' 
        + getRandomPrice() + '\n'
      if (i === 0) {
        writer.write(product);
      } else {
        ok = writer.write(product);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once("drain", write);
    }
  };
  write();
};

populateProduct(writeStreamProduct);
populateVersions(writeStreamVersions)
populateNewVersion(writeStreamNewVersion);
populateOldVersion(writeStreamOldVersion);
// versions: {
//   new: {
//     qty_in_stock: getRandomQuantity() 
//     price: getRandomPrice() 
//   } 
//   old: {
//     qty_in_stock: getRandomQuantity() 
//     price: getRandomPrice() 
//   } 
// } 