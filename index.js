// Pronunciation functionality
window.addEventListener('load', () => {
  setTimeout(() => {
    const pron = document.querySelector('.pronunciation');
    if (pron) pron.classList.add('show-pronounce');
  }, 3000);
});

// Navigation system
let currentSection = 'hero';

function navigateTo(sectionName) {
  const container = document.querySelector('.container');
  const allSections = document.querySelectorAll('.section');
  const currentSectionEl = document.querySelector(`.${currentSection}`);
  
  // Quick fade out current section
  currentSectionEl.classList.add('fadeout');
  
  setTimeout(() => {
    // Remove all classes
    allSections.forEach(s => {
      s.classList.remove('active', 'fadeout');
    });
    
    // Remove all expansion classes
    container.classList.remove('expand-top-left', 'expand-top-right', 'expand-bottom-left', 'expand-bottom-right');
    
    // Add expansion class
    if (sectionName === 'about') {
      container.classList.add('expand-top-left');
    } else if (sectionName === 'skills') {
      container.classList.add('expand-top-right');
    } else if (sectionName === 'projects') {
      container.classList.add('expand-bottom-left');
    } else if (sectionName === 'contact') {
      container.classList.add('expand-bottom-right');
    }
    
    // Activate new section
    setTimeout(() => {
      document.querySelector(`.${sectionName}`).classList.add('active');
      currentSection = sectionName;
    }, 300);
  }, 200);
}