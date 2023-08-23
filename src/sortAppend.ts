const sort = document.querySelector('.cs_filter_sort-dropdown')
const newLocation = document.querySelector("[element='appender']")

if (window.innerWidth < 767) {
    newLocation?.appendChild(sort!);
}
