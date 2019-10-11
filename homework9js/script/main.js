const tabsTitle = document.querySelectorAll(".tabs li");
for (let i = 0; i < tabsTitle.length; i++) {
    tabsTitle[i].addEventListener('click', function () {
        const removeActive = document.querySelectorAll(".centered-content li, .tabs-content li");
        for (let i = 0; i < removeActive.length; i++) {
            removeActive[i].classList.remove("active");
        }
        console.log(removeActive);
        this.classList.add("active");
        const tabId = this.dataset.target;
        console.log(tabId);
        const tab = document.getElementById(tabId);
        tab.classList.add("active");
    });
}