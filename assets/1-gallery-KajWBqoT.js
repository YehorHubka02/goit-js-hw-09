import{S as l}from"./vendor-CgTBfC_f.js";const n=[{preview:"small-image1.png",original:"large-image1.png",description:"Image 1 Description"},{preview:"small-image2.png",original:"large-image2.png",description:"Image 2 Description"},{preview:"small-image3.png",original:"large-image3.png",description:"Image 3 Description"},{preview:"small-image4.png",original:"large-image4.png",description:"Image 4 Description"},{preview:"small-image5.png",original:"large-image5.png",description:"Image 5 Description"},{preview:"small-image6.png",original:"large-image6.png",description:"Image 6 Description"},{preview:"small-image7.png",original:"large-image7.png",description:"Image 7 Description"},{preview:"small-image8.png",original:"large-image8.png",description:"Image 8 Description"},{preview:"small-image9.png",original:"large-image9.png",description:"Image 9 Description"}];console.log(document);const i=document.querySelector(".gallery");console.log(i);const r=n.map(({preview:e,original:a,description:g})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="./img/${a}">
            <img class="gallery-image" src="./img/${e}" alt="${g}" />
        </a>
    </li>
`).join("");i.innerHTML=r;new l(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery-KajWBqoT.js.map
