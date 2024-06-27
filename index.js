const list = document.querySelector("ul")
const openButton = document.querySelector(".flower__button")
const closeModal = document.querySelector(".flower__close")
const modalHidden = document.querySelector(".backdrop")
const flowers = [
  {
    flowerName: "Rose",
    flowerImage: "https://images.pexels.com/photos/53141/rose-red-blossom-bloom-53141.jpeg",
    flowerPrice: 20,
    flowerDescription: "Their stems are usually prickly and their glossy, green leaves have toothed edges"
  },
  {
    flowerName: "Lily",
    flowerImage: "https://westmountflorist.com/cdn/shop/articles/wf-flower-reference-guide-lily.jpg?v=1697056484&width=1400",
    flowerPrice: 30,
    flowerDescription: "large, trumpet-shaped blooms with six petal-like tepals"
  },
  {
    flowerName: "Sunflower",
    flowerImage: "https://www.highmowingseeds.com/media/catalog/product/cache/6cbdb003cf4aae33b9be8e6a6cf3d7ad/7/1/7104-1.jpg",
    flowerPrice: 50,
    flowerDescription: "The common sunflower has a green erect stem covered in coarse hairs, growing on average around 2m tall"
  },
  {
    flowerName: "Lotus",
    flowerImage: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Lotus_flower_%28978659%29.jpg",
    flowerPrice: 15,
    flowerDescription: "an aquatic perennial"
  },
  {
    flowerName: "Marygold",
    flowerImage: "https://live.staticflickr.com/65535/52906291372_2f79885d35_h.jpg",
    flowerPrice: 25,
    flowerDescription: "cheery, pom-pom, anemone, or daisy-shaped inflorescences in colors ranging from yellow and gold to orange, red, and mahogany"
  },
  {
    flowerName: "Hibiscus",
    flowerImage: "https://www.thespruce.com/thmb/usatpU6W5znU4UkXWxjWA_V80sA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hibiscus-growing-guide-5192541-hero-615db48a744245c49517f7f4bef54d18.JPG",
    flowerPrice: 40,
    flowerDescription: "The leaves are alternate, ovate to lanceolate, often with a toothed"
  },
  {
    flowerName: "Tulip",
    flowerImage: "https://storage.googleapis.com/pod_public/1300/202829.jpg",
    flowerPrice: 30,
    flowerDescription: "Tulips are erect flowers with long, broad, parallel-veined leaves and a cup-shaped, single or double flower at the tip of the stem"
  },
  {
    flowerName: "Jasmine",
    flowerImage: "https://cdn.britannica.com/56/197956-050-5062911A/Arabian-jasmine.jpg",
    flowerPrice: 35,
    flowerDescription: "Common jasmine is a climbing shrub that can grow up to 8 metres tall"
  },
  {
    flowerName: "Daisy",
    flowerImage: "https://www.wholesalenurseryco.com/cdn/shop/files/OxeyeDaisy_1_1_1.jpg?v=1709935028&width=1920",
    flowerPrice: 55,
    flowerDescription: "Each flower has a rosette of small, thin white petals surrounding a bright yellow centre."
  },
  {
    flowerName: "Lavender",
    flowerImage: "https://assets.highcountrygardens.com/media/catalog/product/l/a/lavander_angustifolia_after_midnight__2_cc_cropped_2.jpg?quality=85&fit=bounds&height=&width=2048&auto=webp&format=pjpg",
    flowerPrice: 60,
    flowerDescription: "Lavender is a heavily branched short shrub that grows to a height of roughly 60 centimeters"
  },
]

const listFlowers = flowers.map((flower) => {
  const flowerLayout = `    <li class="flower__item">
  <h3 class="flower__name">${flower.flowerName}</h3>
  <img class="flower__img" src="${flower.flowerImage}">
  <button class="flower__button">Детальніша інформація</button>
  <p class="flower__price">${flower.flowerPrice}</p>
  <h4 class="flower__desc">${flower.flowerDescription}</h4>
</li>`
return flowerLayout
}).join("")
console.log(listFlowers)
list.insertAdjacentHTML("afterbegin", listFlowers)

list.addEventListener("click", (event) => {
  console.log(event.target.nodeName)
if(event.target.nodeName === "BUTTON"){
  // if (openButton !== null){
    event.target.addEventListener("click", function() {
      console.log("test")
      modalHidden.classList.toggle("hidden")
    })
  // }
}
})
closeModal.addEventListener("click", function() {
  if (closeModal !== null) {
    modalHidden.classList.add("hidden")
  }
})