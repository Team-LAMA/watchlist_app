/**
 * Generates the HTML used to show the follow-star
 *
 * @param {color} color Takes a CSS-valid color value and applies that to the center of the star
 * @param {boolean} [isTogglable=true] If true; the onclick on the star will run the [toggleFollow()]{@linkcode toggleFollow()} function
 * @return {string} HTML to be added to another page 
 */
function generateFollowStar(color, isTogglable = true){
  let html = /*html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" ${isTogglable ? "onclick='toggleFollow()'" : ""}>
      <!-- Modified from -->
      <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
      <path stroke="black" stroke-width="35" fill="${color}" d=" M 287.9 78.95 L 235.4 187.2 C 231.9 194.3 225.1 199.3 217.3 200.5 L 98.98 217.9 L 184.9 303 C 190.4 308.5 192.9 316.4 191.6 324.1 L 171.4 443.7 L 276.6 387.5 C 283.7 383.7 292.2 383.7 299.2 387.5 L 404.4 443.7 L 384.2 324.1 C 382.9 316.4 385.5 308.5 391 303 L 476.9 217.9 L 358.6 200.5 C 350.7 199.3 343.9 194.3 340.5 187.2 L 287.9 78.95 z"/> 
    </svg>
  `
  return html;
}