const searchInput = document.querySelector("[w-element='search-input']") as HTMLInputElement
const applyButton = document.querySelector("[w-element='apply-button']") as HTMLButtonElement;

searchInput?.addEventListener('keyup', (e) => {
    applyButton?.click()
})
