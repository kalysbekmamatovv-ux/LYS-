// Выбираем все карточки с атрибутом data-tilt
const cards = document.querySelectorAll('.card-3d');

cards.forEach(card => {
    const content = card.querySelector('.card-content');

    // Когда мышка движется над карточкой
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        
        // Вычисляем положение мыши внутри карточки
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Вычисляем центр карточки
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Вычисляем угол поворота (чем дальше от центра, тем сильнее наклон)
        // Делим на число (например, 10 или 20), чтобы уменьшить чувствительность
        const rotateX = (centerY - y) / 10; 
        const rotateY = (x - centerX) / 10;

        // Применяем стили (поворот)
        content.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // Когда мышка уходит с карточки - сбрасываем положение
    card.addEventListener('mouseleave', () => {
        content.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
});
