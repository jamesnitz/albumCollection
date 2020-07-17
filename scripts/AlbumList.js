import { useAlbum, rockAlbums } from "./AlbumDataProvider.js";
import { albumHTMLBuilder } from "./AlbumHtmlMaker.js";

export const AlbumList = () => {

  let albumHTMLRepresentations = ""
  let rockHtmlRepresentations = ""
  const contentTarget = document.querySelector(".album__content")
  const arrayOfAlbums = useAlbum()
  const allRockAlbums = rockAlbums()

  for (const albumObj of arrayOfAlbums) {
    albumHTMLRepresentations += albumHTMLBuilder(albumObj)
  }

  // for of loop
  // for (const albumObj of allRockAlbums) {
  //   rockHtmlRepresentations += albumHTMLBuilder(albumObj)
  // }


  allRockAlbums.forEach(albumObj => rockHtmlRepresentations += albumHTMLBuilder(albumObj))

  contentTarget.innerHTML += `
    <h4>My Albums</h4>
    <article class="album__list">
      ${albumHTMLRepresentations}
      <h5>Rock Albums</h5>
      ${rockHtmlRepresentations}
    </article>

  `





}