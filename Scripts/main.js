let listItem = document.getElementsByTagName("LI");
for (let i = 0; i < listItem.length; i++) {
    listItem[i].onclick = function () {

        let someListItem = listItem[0];
        while (someListItem) {
            if (someListItem.tagName == "LI") {
                someListItem.classList.remove("clickEffect");
            }
            someListItem = someListItem.nextElementSibling;
        }
        this.classList.add("clickEffect");
    }
}

