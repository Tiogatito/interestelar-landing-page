'use strict';
const header = document.querySelector('.header');
const toggle = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__nav');
function closeMenu() {
  toggle.setAttribute('aria-expanded','false');
  header.classList.remove('header--open');
}
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(expanded));
  header.classList.toggle('header--open', expanded);
});
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.querySelector('.header__brand').addEventListener('click', closeMenu);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); }
});
const breakpoint = matchMedia('(min-width: 851px)');
breakpoint.addEventListener('change', closeMenu);
function updateHeader() { header.classList.toggle('header--scrolled', window.scrollY > 80); }
window.addEventListener('scroll', updateHeader, {passive:true});
updateHeader();
const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
function selectTab(tab, focus = false) {
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected',String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    let target;
    if(event.key === 'ArrowRight') target = (index + 1) % tabs.length;
    if(event.key === 'ArrowLeft') target = (index - 1 + tabs.length) % tabs.length;
    if(event.key === 'Home') target = 0;
    if(event.key === 'End') target = tabs.length - 1;
    if(target !== undefined) { event.preventDefault(); selectTab(tabs[target], true); }
  });
});
