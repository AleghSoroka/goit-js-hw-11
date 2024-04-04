// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import { getImages } from "./js/pixabay-api";
import { imagesRender } from  "./js/render-functions"

const userRequestForm = document.querySelector(".user_request_form");
const gallery = document.querySelector(".gallery");
const loading = document.querySelector(".loading");

userRequestForm.addEventListener("submit", onRequestSubmit);

function onRequestSubmit(event) {
  event.preventDefault();

  loading.classList.add("loader");

  const userRequestStr = event.target.elements.user_query.value.toLowerCase().trim().replaceAll(" ", "+");
  if (!userRequestStr) {
    iziToast.error({
      backgroundColor: "red",
      icon: false,
      progressBar: false,
      close: false,
      position: "topRight",
      message: "Please, input a valid request!"
    });
    return;
  }
  else {
    getImages(userRequestStr).then(data => {
      if (!data.hits.length) {
      iziToast.error({
      backgroundColor: "red",
      icon: false,
      progressBar: false,
      close: false,
      position: "topRight",
      message: "There are no images matching Your request!"
    });
      }
      else {
      
        gallery.innerHTML = imagesRender(data.hits);

          const lightbox = new SimpleLightbox(".gallery-link", {
          captionsData: "alt"
        });
        lightbox.refresh();
      };
    })
      .catch(error => {
      iziToast.error({
      backgroundColor: "red",
      icon: false,
      progressBar: false,
      close: false,
      position: "topRight",
      message: "Something went wrong during your request. Please, try again later!"
    });
    })
      .finally(()=>loading.classList.remove(".loader"))
  };
  // event.target.reset();
};

// getImages().then(images => {
//   const markup = imagesTemplate(images);
//   // container.innerHTML = markup;
// })


// const container = document.querySelector(".gallery");
// container.insertAdjacentHTML("beforeend", createMarkup(images));
// function createMarkup(arr){ 
//     return arr.map(({ preview, original, description }) =>
//      `<li class="gallery-item">
//   <a class="gallery-link" href=${original}>
//     <img
//       class="gallery-image"
//       src=${preview}
//       alt="${description}"
//     />
//   </a>
// </li>`)
//         .join("")
// };



const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});