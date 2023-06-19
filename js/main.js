const bntDarkMode = document.querySelector('.dark-mode-btn');



if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    bntDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}

if (localStorage.getItem('darkMode') === 'dark'){
    bntDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}else if (localStorage.getItem('darkMode') === 'light'){
    bntDarkMode.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    const newColorScheme = event.matches ? 'dark' : 'light'
    
    if (newColorScheme === 'dark'){
        bntDarkMode.classList.add('dark-mode-btn--active');
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'dark')
    }else{
        bntDarkMode.classList.remove('dark-mode-btn--active');
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'light')
    }
}); 

bntDarkMode.onclick = () => {
    bntDarkMode.classList.toggle('dark-mode-btn--active');
    const isDark = document.body.classList.toggle('dark');

    isDark ? localStorage.setItem('darkMode', 'dark') : localStorage.setItem('darkMode', 'light');
}
