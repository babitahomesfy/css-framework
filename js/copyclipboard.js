

var tooltip = document.querySelectorAll('[data-clipboard-tooltip="clipboard-tooltip"]');
Array.from(tooltip).forEach(items => {
    items.addEventListener("click", async function (e) {
        const parent = e.target.parentElement;
        const child = parent.querySelector(':scope > .copy-main-parent')
        if (!navigator.clipboard) {
            return null;
        }
        try {
            await navigator.clipboard.writeText(child.innerHTML);
            console.log(e);
            e.target.classList.remove("copy")
            e.target.classList.add("copied")

        } catch (err) {
            console.error("Failed to copy!", err);
        }
    })

})


