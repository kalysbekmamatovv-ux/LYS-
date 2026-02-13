// Список регионов
const regions = [
    { id: 'bishkek', name: 'Бишкек', type: 'Город' },
    { id: 'osh', name: 'Ош', type: 'Город' },
    { id: 'batken', name: 'Баткен', type: 'Область' },
    { id: 'talas', name: 'Талас', type: 'Область' },
    { id: 'naryn', name: 'Нарын', type: 'Область' },
    // Для этих регионов пока нет фото, используем оффсет (примерный расчет)
    { id: 'jalal-abad', name: 'Джалал-Абад', type: 'Область', offset: 7 }, 
    { id: 'issyk-kul', name: 'Ыссык-Куль', type: 'Область', offset: -7 } 
];

// --- БАЗЫ ДАННЫХ ПО РЕГИОНАМ (2026) ---

// БИШКЕК (С вашего фото)
const bishkekData = [
    { day: 1, date: "19 февраля", weekDay: "Четверг", suhoor: "06:19", iftar: "18:44" },
    { day: 2, date: "20 февраля", weekDay: "Пятница", suhoor: "06:17", iftar: "18:45" },
    { day: 3, date: "21 февраля", weekDay: "Суббота", suhoor: "06:16", iftar: "18:46" },
    { day: 4, date: "22 февраля", weekDay: "Воскресенье", suhoor: "06:14", iftar: "18:48" },
    { day: 5, date: "23 февраля", weekDay: "Понедельник", suhoor: "06:13", iftar: "18:49" },
    { day: 6, date: "24 февраля", weekDay: "Вторник", suhoor: "06:11", iftar: "18:50" },
    { day: 7, date: "25 февраля", weekDay: "Среда", suhoor: "06:10", iftar: "18:51" },
    { day: 8, date: "26 февраля", weekDay: "Четверг", suhoor: "06:08", iftar: "18:53" },
    { day: 9, date: "27 февраля", weekDay: "Пятница", suhoor: "06:07", iftar: "18:54" },
    { day: 10, date: "28 февраля", weekDay: "Суббота", suhoor: "06:05", iftar: "18:55" },
    { day: 11, date: "1 марта", weekDay: "Воскресенье", suhoor: "06:04", iftar: "18:56" },
    { day: 12, date: "2 марта", weekDay: "Понедельник", suhoor: "06:02", iftar: "18:58" },
    { day: 13, date: "3 марта", weekDay: "Вторник", suhoor: "06:00", iftar: "18:59" },
    { day: 14, date: "4 марта", weekDay: "Среда", suhoor: "05:59", iftar: "19:00" },
    { day: 15, date: "5 марта", weekDay: "Четверг", suhoor: "05:57", iftar: "19:01" },
    { day: 16, date: "6 марта", weekDay: "Пятница", suhoor: "05:55", iftar: "19:03" },
    { day: 17, date: "7 марта", weekDay: "Суббота", suhoor: "05:54", iftar: "19:04" },
    { day: 18, date: "8 марта", weekDay: "Воскресенье", suhoor: "05:52", iftar: "19:05" },
    { day: 19, date: "9 марта", weekDay: "Понедельник", suhoor: "05:50", iftar: "19:06" },
    { day: 20, date: "10 марта", weekDay: "Вторник", suhoor: "05:48", iftar: "19:08" },
    { day: 21, date: "11 марта", weekDay: "Среда", suhoor: "05:47", iftar: "19:09" },
    { day: 22, date: "12 марта", weekDay: "Четверг", suhoor: "05:45", iftar: "19:10" },
    { day: 23, date: "13 марта", weekDay: "Пятница", suhoor: "05:43", iftar: "19:11" },
    { day: 24, date: "14 марта", weekDay: "Суббота", suhoor: "05:41", iftar: "19:12" },
    { day: 25, date: "15 марта", weekDay: "Воскресенье", suhoor: "05:39", iftar: "19:14" },
    { day: 26, date: "16 марта", weekDay: "Понедельник", suhoor: "05:38", iftar: "19:15" },
    { day: 27, date: "17 марта", weekDay: "Вторник", suhoor: "05:36", iftar: "19:16" },
    { day: 28, date: "18 марта", weekDay: "Среда", suhoor: "05:34", iftar: "19:17" },
    { day: 29, date: "19 марта", weekDay: "Четверг", suhoor: "05:32", iftar: "19:18" },
    { day: 30, date: "20 марта", weekDay: "Пятница", suhoor: "05:30", iftar: "19:19" }
];

// ОШ (Переписано с фото)
const oshData = [
    { day: 1, date: "19 февраля", weekDay: "Четверг", suhoor: "06:26", iftar: "18:54" },
    { day: 2, date: "20 февраля", weekDay: "Пятница", suhoor: "06:25", iftar: "18:55" },
    { day: 3, date: "21 февраля", weekDay: "Суббота", suhoor: "06:23", iftar: "18:57" },
    { day: 4, date: "22 февраля", weekDay: "Воскресенье", suhoor: "06:22", iftar: "18:58" },
    { day: 5, date: "23 февраля", weekDay: "Понедельник", suhoor: "06:21", iftar: "18:59" },
    { day: 6, date: "24 февраля", weekDay: "Вторник", suhoor: "06:19", iftar: "19:00" },
    { day: 7, date: "25 февраля", weekDay: "Среда", suhoor: "06:18", iftar: "19:01" },
    { day: 8, date: "26 февраля", weekDay: "Четверг", suhoor: "06:16", iftar: "19:02" },
    { day: 9, date: "27 февраля", weekDay: "Пятница", suhoor: "06:15", iftar: "19:03" },
    { day: 10, date: "28 февраля", weekDay: "Суббота", suhoor: "06:13", iftar: "19:05" },
    { day: 11, date: "1 марта", weekDay: "Воскресенье", suhoor: "06:12", iftar: "19:06" },
    { day: 12, date: "2 марта", weekDay: "Понедельник", suhoor: "06:11", iftar: "19:07" },
    { day: 13, date: "3 марта", weekDay: "Вторник", suhoor: "06:09", iftar: "19:08" },
    { day: 14, date: "4 марта", weekDay: "Среда", suhoor: "06:07", iftar: "19:09" },
    { day: 15, date: "5 марта", weekDay: "Четверг", suhoor: "06:06", iftar: "19:10" },
    { day: 16, date: "6 марта", weekDay: "Пятница", suhoor: "06:04", iftar: "19:11" },
    { day: 17, date: "7 марта", weekDay: "Суббота", suhoor: "06:03", iftar: "19:12" },
    { day: 18, date: "8 марта", weekDay: "Воскресенье", suhoor: "06:01", iftar: "19:14" },
    { day: 19, date: "9 марта", weekDay: "Понедельник", suhoor: "06:00", iftar: "19:15" },
    { day: 20, date: "10 марта", weekDay: "Вторник", suhoor: "05:58", iftar: "19:16" },
    { day: 21, date: "11 марта", weekDay: "Среда", suhoor: "05:56", iftar: "19:17" },
    { day: 22, date: "12 марта", weekDay: "Четверг", suhoor: "05:55", iftar: "19:18" },
    { day: 23, date: "13 марта", weekDay: "Пятница", suhoor: "05:53", iftar: "19:19" },
    { day: 24, date: "14 марта", weekDay: "Суббота", suhoor: "05:51", iftar: "19:20" },
    { day: 25, date: "15 марта", weekDay: "Воскресенье", suhoor: "05:50", iftar: "19:21" },
    { day: 26, date: "16 марта", weekDay: "Понедельник", suhoor: "05:48", iftar: "19:22" },
    { day: 27, date: "17 марта", weekDay: "Вторник", suhoor: "05:46", iftar: "19:23" },
    { day: 28, date: "18 марта", weekDay: "Среда", suhoor: "05:44", iftar: "19:24" },
    { day: 29, date: "19 марта", weekDay: "Четверг", suhoor: "05:43", iftar: "19:25" },
    { day: 30, date: "20 марта", weekDay: "Пятница", suhoor: "05:41", iftar: "19:26" }
];

// БАТКЕН (Переписано с фото)
const batkenData = [
    { day: 1, date: "19 февраля", weekDay: "Четверг", suhoor: "06:35", iftar: "18:57" },
    { day: 2, date: "20 февраля", weekDay: "Пятница", suhoor: "06:33", iftar: "18:58" },
    { day: 3, date: "21 февраля", weekDay: "Суббота", suhoor: "06:32", iftar: "18:59" },
    { day: 4, date: "22 февраля", weekDay: "Воскресенье", suhoor: "06:31", iftar: "19:00" },
    { day: 5, date: "23 февраля", weekDay: "Понедельник", suhoor: "06:29", iftar: "19:01" },
    { day: 6, date: "24 февраля", weekDay: "Вторник", suhoor: "06:28", iftar: "19:02" },
    { day: 7, date: "25 февраля", weekDay: "Среда", suhoor: "06:27", iftar: "19:03" },
    { day: 8, date: "26 февраля", weekDay: "Четверг", suhoor: "06:25", iftar: "19:05" },
    { day: 9, date: "27 февраля", weekDay: "Пятница", suhoor: "06:24", iftar: "19:06" },
    { day: 10, date: "28 февраля", weekDay: "Суббота", suhoor: "06:23", iftar: "19:07" },
    { day: 11, date: "1 марта", weekDay: "Воскресенье", suhoor: "06:20", iftar: "19:08" },
    { day: 12, date: "2 марта", weekDay: "Понедельник", suhoor: "06:18", iftar: "19:09" },
    { day: 13, date: "3 марта", weekDay: "Вторник", suhoor: "06:17", iftar: "19:11" },
    { day: 14, date: "4 марта", weekDay: "Среда", suhoor: "06:15", iftar: "19:12" },
    { day: 15, date: "5 марта", weekDay: "Четверг", suhoor: "06:14", iftar: "19:13" },
    { day: 16, date: "6 марта", weekDay: "Пятница", suhoor: "06:12", iftar: "19:14" },
    { day: 17, date: "7 марта", weekDay: "Суббота", suhoor: "06:11", iftar: "19:15" },
    { day: 18, date: "8 марта", weekDay: "Воскресенье", suhoor: "06:09", iftar: "19:16" },
    { day: 19, date: "9 марта", weekDay: "Понедельник", suhoor: "06:08", iftar: "19:17" },
    { day: 20, date: "10 марта", weekDay: "Вторник", suhoor: "06:06", iftar: "19:18" },
    { day: 21, date: "11 марта", weekDay: "Среда", suhoor: "06:04", iftar: "19:19" },
    { day: 22, date: "12 марта", weekDay: "Четверг", suhoor: "06:03", iftar: "19:20" },
    { day: 23, date: "13 марта", weekDay: "Пятница", suhoor: "06:01", iftar: "19:21" },
    { day: 24, date: "14 марта", weekDay: "Суббота", suhoor: "05:59", iftar: "19:22" },
    { day: 25, date: "15 марта", weekDay: "Воскресенье", suhoor: "05:58", iftar: "19:23" },
    { day: 26, date: "16 марта", weekDay: "Понедельник", suhoor: "05:56", iftar: "19:24" },
    { day: 27, date: "17 марта", weekDay: "Вторник", suhoor: "05:54", iftar: "19:25" },
    { day: 28, date: "18 марта", weekDay: "Среда", suhoor: "05:53", iftar: "19:27" },
    { day: 29, date: "19 марта", weekDay: "Четверг", suhoor: "05:51", iftar: "19:28" },
    { day: 30, date: "20 марта", weekDay: "Пятница", suhoor: "05:49", iftar: "19:29" }
];

// ТАЛАС (Переписано с фото)
const talasData = [
    { day: 1, date: "19 февраля", weekDay: "Четверг", suhoor: "06:28", iftar: "18:52" },
    { day: 2, date: "20 февраля", weekDay: "Пятница", suhoor: "06:27", iftar: "18:53" },
    { day: 3, date: "21 февраля", weekDay: "Суббота", suhoor: "06:25", iftar: "18:54" },
    { day: 4, date: "22 февраля", weekDay: "Воскресенье", suhoor: "06:24", iftar: "18:56" },
    { day: 5, date: "23 февраля", weekDay: "Понедельник", suhoor: "06:22", iftar: "18:57" },
    { day: 6, date: "24 февраля", weekDay: "Вторник", suhoor: "06:21", iftar: "18:58" },
    { day: 7, date: "25 февраля", weekDay: "Среда", suhoor: "06:19", iftar: "18:59" },
    { day: 8, date: "26 февраля", weekDay: "Четверг", suhoor: "06:18", iftar: "19:01" },
    { day: 9, date: "27 февраля", weekDay: "Пятница", suhoor: "06:16", iftar: "19:02" },
    { day: 10, date: "28 февраля", weekDay: "Суббота", suhoor: "06:15", iftar: "19:03" },
    { day: 11, date: "1 марта", weekDay: "Воскресенье", suhoor: "06:12", iftar: "19:06" },
    { day: 12, date: "2 марта", weekDay: "Понедельник", suhoor: "06:10", iftar: "19:07" },
    { day: 13, date: "3 марта", weekDay: "Вторник", suhoor: "06:08", iftar: "19:08" },
    { day: 14, date: "4 марта", weekDay: "Среда", suhoor: "06:07", iftar: "19:09" },
    { day: 15, date: "5 марта", weekDay: "Четверг", suhoor: "06:05", iftar: "19:10" },
    { day: 16, date: "6 марта", weekDay: "Пятница", suhoor: "06:03", iftar: "19:12" },
    { day: 17, date: "7 марта", weekDay: "Суббота", suhoor: "06:02", iftar: "19:13" },
    { day: 18, date: "8 марта", weekDay: "Воскресенье", suhoor: "06:00", iftar: "19:14" },
    { day: 19, date: "9 марта", weekDay: "Понедельник", suhoor: "05:58", iftar: "19:15" },
    { day: 20, date: "10 марта", weekDay: "Вторник", suhoor: "05:56", iftar: "19:16" },
    { day: 21, date: "11 марта", weekDay: "Среда", suhoor: "05:55", iftar: "19:18" },
    { day: 22, date: "12 марта", weekDay: "Четверг", suhoor: "05:53", iftar: "19:19" },
    { day: 23, date: "13 марта", weekDay: "Пятница", suhoor: "05:51", iftar: "19:20" },
    { day: 24, date: "14 марта", weekDay: "Суббота", suhoor: "05:49", iftar: "19:21" },
    { day: 25, date: "15 марта", weekDay: "Воскресенье", suhoor: "05:47", iftar: "19:22" },
    { day: 26, date: "16 марта", weekDay: "Понедельник", suhoor: "05:46", iftar: "19:23" },
    { day: 27, date: "17 марта", weekDay: "Вторник", suhoor: "05:44", iftar: "19:25" },
    { day: 28, date: "18 марта", weekDay: "Среда", suhoor: "05:42", iftar: "19:26" },
    { day: 29, date: "19 марта", weekDay: "Четверг", suhoor: "05:40", iftar: "19:27" },
    { day: 30, date: "20 марта", weekDay: "Пятница", suhoor: "05:38", iftar: "19:28" }
];

// НАРЫН (Переписано с фото)
const narynData = [
    { day: 1, date: "19 февраля", weekDay: "Четверг", suhoor: "06:13", iftar: "18:38" },
    { day: 2, date: "20 февраля", weekDay: "Пятница", suhoor: "06:12", iftar: "18:39" },
    { day: 3, date: "21 февраля", weekDay: "Суббота", suhoor: "06:10", iftar: "18:41" },
    { day: 4, date: "22 февраля", weekDay: "Воскресенье", suhoor: "06:09", iftar: "18:42" },
    { day: 5, date: "23 февраля", weekDay: "Понедельник", suhoor: "06:08", iftar: "18:43" },
    { day: 6, date: "24 февраля", weekDay: "Вторник", suhoor: "06:06", iftar: "18:44" },
    { day: 7, date: "25 февраля", weekDay: "Среда", suhoor: "06:05", iftar: "18:45" },
    { day: 8, date: "26 февраля", weekDay: "Четверг", suhoor: "06:03", iftar: "18:47" },
    { day: 9, date: "27 февраля", weekDay: "Пятница", suhoor: "06:02", iftar: "18:48" },
    { day: 10, date: "28 февраля", weekDay: "Суббота", suhoor: "06:00", iftar: "18:49" },
    { day: 11, date: "1 марта", weekDay: "Воскресенье", suhoor: "05:57", iftar: "18:51" },
    { day: 12, date: "2 марта", weekDay: "Понедельник", suhoor: "05:56", iftar: "18:52" },
    { day: 13, date: "3 марта", weekDay: "Вторник", suhoor: "05:54", iftar: "18:54" },
    { day: 14, date: "4 марта", weekDay: "Среда", suhoor: "05:52", iftar: "18:55" },
    { day: 15, date: "5 марта", weekDay: "Четверг", suhoor: "05:51", iftar: "18:56" },
    { day: 16, date: "6 марта", weekDay: "Пятница", suhoor: "05:49", iftar: "18:57" },
    { day: 17, date: "7 марта", weekDay: "Суббота", suhoor: "05:48", iftar: "18:58" },
    { day: 18, date: "8 марта", weekDay: "Воскресенье", suhoor: "05:46", iftar: "18:59" },
    { day: 19, date: "9 марта", weekDay: "Понедельник", suhoor: "05:44", iftar: "19:01" },
    { day: 20, date: "10 марта", weekDay: "Вторник", suhoor: "05:43", iftar: "19:02" },
    { day: 21, date: "11 марта", weekDay: "Среда", suhoor: "05:41", iftar: "19:03" },
    { day: 22, date: "12 марта", weekDay: "Четверг", suhoor: "05:39", iftar: "19:04" },
    { day: 23, date: "13 марта", weekDay: "Пятница", suhoor: "05:37", iftar: "19:05" },
    { day: 24, date: "14 марта", weekDay: "Суббота", suhoor: "05:36", iftar: "19:06" },
    { day: 25, date: "15 марта", weekDay: "Воскресенье", suhoor: "05:34", iftar: "19:07" },
    { day: 26, date: "16 марта", weekDay: "Понедельник", suhoor: "05:32", iftar: "19:08" },
    { day: 27, date: "17 марта", weekDay: "Вторник", suhoor: "05:30", iftar: "19:09" },
    { day: 28, date: "18 марта", weekDay: "Среда", suhoor: "05:28", iftar: "19:11" },
    { day: 29, date: "19 марта", weekDay: "Четверг", suhoor: "05:27", iftar: "19:12" },
    { day: 30, date: "20 марта", weekDay: "Пятница", suhoor: "05:25", iftar: "19:13" }
];


// Функция для получения данных по региону
function getCalendarData(regionId) {
    // Возвращаем точные данные, если они есть
    if (regionId === 'bishkek') return bishkekData;
    if (regionId === 'osh') return oshData;
    if (regionId === 'batken') return batkenData;
    if (regionId === 'talas') return talasData;
    if (regionId === 'naryn') return narynData;

    // Фолбек для регионов без фото (Джалал-Абад, Ыссык-Куль)
    const region = regions.find(r => r.id === regionId);
    const offset = region ? region.offset : 0;
    
    return bishkekData.map(day => ({
        ...day,
        suhoor: addMinutes(day.suhoor, offset),
        iftar: addMinutes(day.iftar, offset)
    }));
}

// Вспомогательная функция для добавления минут
function addMinutes(timeStr, minutesToAdd) {
    let [hours, minutes] = timeStr.split(':').map(Number);
    let date = new Date();
    date.setHours(hours, minutes + minutesToAdd);
    return date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
}

// --- DOM элементы и логика интерфейса ---
const regionSelector = document.getElementById('region-selector');
const calendarView = document.getElementById('calendar-view');
const welcomeMessage = document.getElementById('welcome-message');
const calendarTitle = document.getElementById('calendar-region-title');
const calendarBody = document.getElementById('calendar-body');
const backButton = document.getElementById('back-btn');

function renderButtons() {
    regionSelector.innerHTML = '';
    regions.forEach(region => {
        const btn = document.createElement('button');
        btn.style.touchAction = 'manipulation';
        btn.className = 'glass-card region-btn p-4 md:p-6 flex flex-col items-center justify-center text-center h-28 md:h-32 w-full';
        
        btn.innerHTML = `
            <span class="text-[#D4AF37] mb-2"><i data-lucide="map-pin" width="24"></i></span>
            <span class="text-lg font-semibold tracking-wide">${region.name}</span>
            <span class="text-xs text-gray-400 uppercase mt-1 tracking-widest">${region.type}</span>
        `;
        
        btn.addEventListener('click', () => {
            if (navigator.vibrate) navigator.vibrate(10);
            btn.blur();
            selectRegion(region);
        });
        
        regionSelector.appendChild(btn);
    });
    
    if (window.lucide) lucide.createIcons();
}

function selectRegion(region) {
    regionSelector.classList.add('hidden');
    welcomeMessage.classList.add('hidden');
    calendarView.classList.remove('hidden');
    
    calendarTitle.textContent = `${region.type} ${region.name}`;
    loadCalendarTable(region.id);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function loadCalendarTable(regionId) {
    const data = getCalendarData(regionId);
    calendarBody.innerHTML = '';
    
    data.forEach((row, index) => {
        const tr = document.createElement('tr');
        tr.className = 'calendar-row border-b border-gray-700 last:border-0';
        // Анимация строк
        tr.style.animation = `fadeIn 0.5s ease-out forwards ${index * 0.03}s`;
        tr.style.opacity = '0';
        
        // Выделение пятниц или 27-й ночи можно добавить сюда стилями
        const isFriday = row.weekDay.toLowerCase() === 'пятница';
        const activeClass = isFriday ? 'text-[#D4AF37]' : 'text-gray-300';
        
        tr.innerHTML = `
            <td class="font-bold text-[#D4AF37]">${row.day}</td>
            <td class="${activeClass} text-xs md:text-sm">
                <div class="font-bold">${row.date}</div>
                <div class="text-[10px] opacity-70 uppercase">${row.weekDay}</div>
            </td>
            <td class="font-mono text-base md:text-lg text-white font-semibold tracking-wide bg-[#D4AF37]/10 rounded">${row.suhoor}</td>
            <td class="font-mono text-base md:text-lg text-white font-semibold tracking-wide bg-[#0F281E]/50 rounded border border-[#D4AF37]/20">${row.iftar}</td>
        `;
        calendarBody.appendChild(tr);
    });
}

function goBack() {
    if (navigator.vibrate) navigator.vibrate(10);
    if (backButton) backButton.blur();

    calendarView.classList.add('hidden');
    regionSelector.classList.remove('hidden');
    welcomeMessage.classList.remove('hidden');
    
    const buttons = document.querySelectorAll('.region-btn');
    buttons.forEach(btn => {
        btn.style.animation = 'none';
        btn.offsetHeight; 
        btn.style.animation = null; 
    });
}

if (backButton) {
    backButton.addEventListener('click', goBack);
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) lucide.createIcons();
    renderButtons();
});
