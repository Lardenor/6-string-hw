// !1
function checkSpam(text) {
  let lowerText = text.toLowerCase();
  if (lowerText.includes("vip") || lowerText.includes("sale")) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSpam("Having a VIP client experience works sort of like a domino effect, and all the pieces that fall are the amazing benefits.")); 
console.log(checkSpam("Shop the sale online at H&M and stock up on lots of great deals!")); 
console.log(checkSpam("UNIQLO LifeWear combines high performance technology and functional design for an affordable price.")); 
// ?2
// ?2
// ?2
// ?2
// ?2
// ?2
function textSlice(text, n){
    let textLength = text.length;
    if(textLength >= n){
        let checkSlice = text.slice(0, n)
        console.log(checkSlice.trim() + "...")
    } else(console.log(text))
}

textSlice('Having a VIP client experience works sort of like a domino effect, and all the pieces that fall are the amazing benefits.', 20);
