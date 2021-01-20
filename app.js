const items = document.querySelectorAll(`[data-group="item"]`);

items.forEach(item => {
    item.addEventListener('click', function() {
        const targetId = this.dataset.tabId;

        items.forEach(item => {
            if(item.dataset.tabId === targetId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        })
    })
})