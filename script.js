/* ==========================================================================
   Ian Wang Portfolio - Core JavaScript Logic
   Includes: Real-time clock (per-second update), Dark/Light theme manager,
             Sticky navbar scroll animations, Mobile menu toggle, and
             Interactive parallax background glow effect.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const clockTime = document.getElementById('clock-time');
    const clockDate = document.getElementById('clock-date');
    const clockTimezone = document.getElementById('clock-timezone');
    
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const glow1 = document.getElementById('glow-1');
    const glow2 = document.getElementById('glow-2');

    /* --------------------------------------------------------------------------
       1. Real-time Clock (每秒自動更新)
       -------------------------------------------------------------------------- */
    function updateClock() {
        const now = new Date();
        
        // 格式化時間 (HH:MM:SS)
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockTime.textContent = `${hours}:${minutes}:${seconds}`;
        
        // 格式化日期與星期
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const date = now.getDate();
        
        const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        const dayOfWeek = weekDays[now.getDay()];
        
        clockDate.textContent = `${year}年${month}月${date}日 ${dayOfWeek}`;
    }

    function initTimezone() {
        try {
            // 獲取使用者時區名稱
            const timeZoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
            
            // 計算時區偏移 (e.g. GMT+8)
            const offsetMinutes = new Date().getTimezoneOffset();
            const offsetHours = -offsetMinutes / 60;
            const displayOffset = offsetHours >= 0 ? `+${offsetHours}` : `${offsetHours}`;
            
            // 轉換時區名稱簡化顯示 (例如 Asia/Taipei 顯示為 台北時間)
            let localeName = timeZoneName;
            if (timeZoneName === 'Asia/Taipei') {
                localeName = '台北時間';
            } else if (timeZoneName === 'Asia/Hong_Kong') {
                localeName = '香港時間';
            } else if (timeZoneName === 'Asia/Tokyo') {
                localeName = '東京時間';
            }
            
            clockTimezone.textContent = `${localeName} (GMT${displayOffset})`;
        } catch (e) {
            clockTimezone.textContent = 'GMT+8';
        }
    }

    // 初始化時鐘與時區
    initTimezone();
    updateClock();
    // 每秒更新一次
    setInterval(updateClock, 1000);

    /* --------------------------------------------------------------------------
       2. 深淺色主題切換 (Theme Toggle)
       -------------------------------------------------------------------------- */
    // 從 localStorage 讀取主題偏好，若無則預設為深色模式
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeIcon.className = 'fa-solid fa-sun';
    } else {
        document.body.classList.remove('light-theme');
        themeIcon.className = 'fa-solid fa-moon';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        
        const isLight = document.body.classList.contains('light-theme');
        if (isLight) {
            themeIcon.className = 'fa-solid fa-sun';
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.className = 'fa-solid fa-moon';
            localStorage.setItem('theme', 'dark');
        }
        
        // 切換主題時添加過渡特效
        document.body.style.transition = 'background-color 0.4s ease, color 0.4s ease';
    });

    /* --------------------------------------------------------------------------
       3. 導覽列滾動效果與頁面滾動監聽 (Navbar Scroll & Active States)
       -------------------------------------------------------------------------- */
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        // 導覽列縮減/毛玻璃加深
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // 滾動時高亮對應的導覽列項目
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // 扣除 nav 高度加上緩衝
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    /* --------------------------------------------------------------------------
       4. 行動裝置選單切換 (Mobile Menu Toggle)
       -------------------------------------------------------------------------- */
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const isOpen = navMenu.classList.contains('open');
        
        // 切換按鈕圖示
        const toggleIcon = mobileMenuToggle.querySelector('i');
        if (isOpen) {
            toggleIcon.className = 'fa-solid fa-xmark';
        } else {
            toggleIcon.className = 'fa-solid fa-bars';
        }
    });

    // 點擊任何導覽項目後自動關閉行動選單
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            mobileMenuToggle.querySelector('i').className = 'fa-solid fa-bars';
        });
    });

    /* --------------------------------------------------------------------------
       5. 鼠標動態背景光暈跟隨 (Wow Factor: Interactive Background Glow)
       -------------------------------------------------------------------------- */
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // 取得視窗寬高比例，計算偏移值
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        const moveX1 = (mouseX - windowWidth / 2) * 0.04;
        const moveY1 = (mouseY - windowHeight / 2) * 0.04;
        const moveX2 = (mouseX - windowWidth / 2) * -0.03;
        const moveY2 = (mouseY - windowHeight / 2) * -0.03;

        // 微調背景發光球體的位置
        if (glow1) {
            glow1.style.transform = `translate(${moveX1}px, ${moveY1}px)`;
        }
        if (glow2) {
            glow2.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
        }
    });
});
