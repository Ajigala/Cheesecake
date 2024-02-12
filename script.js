const navlink = document.querySelector(".navlinks");
const sidebarshow = () => {
  navlink.classList.toggle("navlinkshow");
};

const sidebarhide = () => {
  navlink.classList.remove("navlinkshow");
};
