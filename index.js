const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")
const countLike1 = document.getElementById("countLike1)
const countLike2 = document.getElementById("countLike2)

function hitLikes1() {
        let totalLikes1 = parseInt(countLikes1.value) + 1
        countLikes1.textContent = totalLike1.toString()
}
btnLikes1.addEventListener("click",hitlikes1)
