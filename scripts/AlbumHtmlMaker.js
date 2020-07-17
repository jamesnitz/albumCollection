export const albumHTMLBuilder = (albumObject) => {
  return `
    <article class="album__card" >  
      <div>${albumObject.name}</div> 
      <div>${albumObject.artist}</div> 
      <div>${albumObject.genre}</div> 
    </article>
  `
}