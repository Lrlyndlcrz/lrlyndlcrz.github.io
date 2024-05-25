const btnlike1 = document.getElementById("btnLike1")
const btnlike2 = document.getElementById("btnLike2")
const countLikes1 = documentElementById("countLikes1)
const countLikes2 = documentElementById("countLikes2)

function hitLikes1() {
        let totalLikes1 = parseInt(countLikes1.value) + 1
        countLikes1.textContent = totalLikes1.toString()
}
btnLike1.addEventListener("click",hitlikes1)
