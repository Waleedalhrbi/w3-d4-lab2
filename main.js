    let cup = document.getElementById("cupR");
    const colors = [
        'blue', 
        'green', 
        'gray', 
        'gold', 
        'purple', 
        'pink', 
    ];

    setInterval(() => {

        let left2 = Math.floor(Math.random() * (window.innerWidth - 100) + 'px');
        let top2 = Math.floor(Math.random() * (window.innerHeight - 100)) + 'px';
        let size2 = Math.floor(Math.random() * (230 - 70 + 1)) + 70 + 'px';
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
    
        
        cup.style.left = left2;
        cup.style.top = top2;
        cup.style.width = size2;
        cup.style.height = size2;
        cup.style.backgroundColor = randomColor;
    }, 2000);