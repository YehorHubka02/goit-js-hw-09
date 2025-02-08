import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
    {
        preview: "small-image1.jpg",
        original: "large-image1.jpg",
        description: "Image 1 Description"
    },
    {
        preview: "small-image2.jpg",
        original: "large-image2.jpg",
        description: "Image 2 Description"
    },
    {
        preview: "small-image3.jpg",
        original: "large-image3.jpg",
        description: "Image 3 Description"
    }
];

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = images.map(({ preview, original, description }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${original}">
            <img class="gallery-image" src="${preview}" alt="${description}" />
        </a>
    </li>
`).join("");

galleryContainer.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250
});


