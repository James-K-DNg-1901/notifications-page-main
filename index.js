const noti_box = document.getElementsByClassName("noti-box");
const markRead = document.getElementById("mark-read");
const num_of_noti = document.getElementById("num-of-unread").innerHTML;
console.log(parseInt(num_of_noti));

for (i = 0; i < noti_box.length; i++) {
    noti_box[i].addEventListener("click", function () {
        if (document.getElementById("num-of-unread").innerHTML > 0){
            document.getElementById("num-of-unread").innerHTML -= 1;
        }
        this.classList.remove("unread");
    });
}
markRead.addEventListener("click", function () {
    document.getElementById("num-of-unread").innerHTML = 0;
    for (i = 0; i < noti_box.length; i++) {
        noti_box[i].classList.remove("unread");
    }
});
