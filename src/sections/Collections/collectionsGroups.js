import categoryItems from "@/sections/Categories/categoryItems.js";

const collectionsGroups = [
  {
    isActive: true,
    title: 'Movies',
    items: [
      {
        title: `Our Genres`,
        categoryItems,
      },
      {
        title: `Popular Top 10 In Genres`,
        categoryItems: [
          {
            title: "Action",
            badge: 'Top 10 In',
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg"
            ],
          },
          {
            title: "Adventure",
            badge: 'Top 10 In',
            images: [
              "/src/assets/images/categories/adventure/1.jpg",
              "/src/assets/images/categories/adventure/2.jpg",
              "/src/assets/images/categories/adventure/3.jpg",
              "/src/assets/images/categories/adventure/4.jpg"
            ],
          },
          {
            title: "Comedy",
            badge: 'Top 10 In',
            images: [
              "/src/assets/images/categories/comedy/1.jpg",
              "/src/assets/images/categories/comedy/2.jpg",
              "/src/assets/images/categories/comedy/3.jpg",
              "/src/assets/images/categories/comedy/4.jpg"
            ],
          },
          {
            title: "Drama",
            badge: 'Top 10 In',
            images: [
              "/src/assets/images/categories/drama/1.jpg",
              "/src/assets/images/categories/drama/2.jpg",
              "/src/assets/images/categories/drama/3.jpg",
              "/src/assets/images/categories/drama/4.jpg"
            ],
          },

          {
            title: "Action2",
            badge: 'Top 10 In',
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg"
            ],
          },
          {
            title: "Adventure2",
            badge: 'Top 10 In',
            images: [
              "/src/assets/images/categories/adventure/1.jpg",
              "/src/assets/images/categories/adventure/2.jpg",
              "/src/assets/images/categories/adventure/3.jpg",
              "/src/assets/images/categories/adventure/4.jpg"
            ],
          },
          {
            title: "Comedy2",
            badge: 'Top 10 In',
            images: [
              "/src/assets/images/categories/comedy/1.jpg",
              "/src/assets/images/categories/comedy/2.jpg",
              "/src/assets/images/categories/comedy/3.jpg",
              "/src/assets/images/categories/comedy/4.jpg"
            ],
          },
          {
            title: "Drama2",
            badge: 'Top 10 In',
            images: [
              "/src/assets/images/categories/drama/1.jpg",
              "/src/assets/images/categories/drama/2.jpg",
              "/src/assets/images/categories/drama/3.jpg",
              "/src/assets/images/categories/drama/4.jpg"
            ],
          },

          {
            title: "Action3",
            badge: 'Top 10 In',
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg"
            ],
          },
          {
            title: "Adventure3",
            badge: 'Top 10 In',
            images: [
              "/src/assets/images/categories/adventure/1.jpg",
              "/src/assets/images/categories/adventure/2.jpg",
              "/src/assets/images/categories/adventure/3.jpg",
              "/src/assets/images/categories/adventure/4.jpg"
            ],
          },
          {
            title: "Comedy3",
            badge: 'Top 10 In',
            images: [
              "/src/assets/images/categories/comedy/1.jpg",
              "/src/assets/images/categories/comedy/2.jpg",
              "/src/assets/images/categories/comedy/3.jpg",
              "/src/assets/images/categories/comedy/4.jpg"
            ],
          },
          {
            title: "Drama3",
            badge: 'Top 10 In',
            images: [
              "/src/assets/images/categories/drama/1.jpg",
              "/src/assets/images/categories/drama/2.jpg",
              "/src/assets/images/categories/drama/3.jpg",
              "/src/assets/images/categories/drama/4.jpg"
            ],
          },

          {
            title: "Action4",
            badge: 'Top 10 In',
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg"
            ],
          },
          {
            title: "Adventure4",
            badge: 'Top 10 In',
            images: [
              "/src/assets/images/categories/adventure/1.jpg",
              "/src/assets/images/categories/adventure/2.jpg",
              "/src/assets/images/categories/adventure/3.jpg",
              "/src/assets/images/categories/adventure/4.jpg"
            ],
          },
          {
            title: "Comedy4",
            badge: 'Top 10 In',
            images: [
              "/src/assets/images/categories/comedy/1.jpg",
              "/src/assets/images/categories/comedy/2.jpg",
              "/src/assets/images/categories/comedy/3.jpg",
              "/src/assets/images/categories/comedy/4.jpg"
            ],
          },
          {
            title: "Drama4",
            badge: 'Top 10 In',
            images: [
              "/src/assets/images/categories/drama/1.jpg",
              "/src/assets/images/categories/drama/2.jpg",
              "/src/assets/images/categories/drama/3.jpg",
              "/src/assets/images/categories/drama/4.jpg"
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      }
    ],
  }
]

export default collectionsGroups