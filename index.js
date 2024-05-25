const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")
const countLikes1 = document.getElementById("countLikes1")
const countLikes2 = document.getElementById("countLikes2")

function hitLikes2() {
   let totalLikes2 = parseInt(countLikes1.value) + 2
   countLikes1.textContent = totalLikes1.toString()
}
 btnLike2.addEventListener("click",hitLikes2)
