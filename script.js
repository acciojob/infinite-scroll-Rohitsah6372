const list = document.getElementById("infi-list");

function addListItem(count) {
    for (let i = 0; i < count; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Item ${list.children.length + 1}`;
        list.appendChild(listItem);
    }
}

addListItem(10); // Initial items

list.addEventListener("scroll", function () {
    // Check if user has scrolled to the bottom of the list
    if (this.scrollTop + this.clientHeight >= this.scrollHeight) {
        addListItem(2); // Add 2 more items when scrolled to the bottom
    }
});
