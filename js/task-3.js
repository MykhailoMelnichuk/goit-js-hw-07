console.log('Задание 3 ---------');

const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

const imgLinkGallery = document.querySelector('#gallery');
const createTagGallery = images
  .map(({ url, alt }) => {
    const createTagGallery = `<li>
      <img src="${url}", width = 100%, alt="${alt}" >
    </li>`;
    return createTagGallery;
  })
  .join(" ");

imgLinkGallery.insertAdjacentHTML("beforeend", createTagGallery);

imgLinkGallery.style.display = "flex";
imgLinkGallery.style.alignItems = 'center';

const listItems = imgLinkGallery.querySelectorAll("li");

listItems.forEach((e) => {
  e.style.justifyContent = "space-between";
  e.style.flexBasis = "400px";
  e.style.listStyle = "none";
  e.style.padding = "15px";
});
