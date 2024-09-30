const tabsContainerEl = document.querySelector('.news__tab-list');

const onTabClick = (evt) => {
  if (evt.target.matches('.news__tab')) {
    const clickedTab = evt.target;
    if (!(clickedTab.matches('.news__tab--current'))) {
      tabsContainerEl.querySelector('.news__tab--current').classList.remove('news__tab--current');
      clickedTab.classList.add('news__tab--current');
    }
  }
};

const initNewsTabs = () => {
  tabsContainerEl.addEventListener('click', onTabClick);
};

export { initNewsTabs };
