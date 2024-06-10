document.addEventListener('DOMContentLoaded', function () {
    changeTab('accueil');
  });
  
  function changeTab(tabName) {
    const tabs = document.querySelectorAll('.content');
    tabs.forEach(tab => {
      tab.style.display = 'none';
    });
  
    document.getElementById(tabName).style.display = 'block';
  }
// Ajoutez ces lignes dans la fonction changeTab
function changeTab(tabName) {
    const tabs = document.querySelectorAll('.content');
    tabs.forEach(tab => {
      tab.style.display = 'none';
    });
  
    const currentTab = document.getElementById(tabName);
    currentTab.style.display = 'block';
  
    // Ajoutez la classe "shake" à l'image sur la page d'accueil
    if (tabName === 'accueil') {
      const accueilImage = currentTab.querySelector('img');
      accueilImage.classList.add('shake');
    }
  }