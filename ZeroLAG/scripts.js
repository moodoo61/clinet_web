document.addEventListener('DOMContentLoaded', function() {
    loadTickerText();
});

function loadTickerText() {
    fetch('http://news.zerolagvpn.com:3000/ticker')
        .then(response => response.json())
        .then(data => {
            const tickerMove = document.querySelector('.ticker-move');
            tickerMove.innerHTML = '';  // مسح المحتوى الحالي

            data.forEach((item, index) => {
                const tickerItem = document.createElement('div');
                tickerItem.className = 'ticker-item';
                tickerItem.innerHTML = `
                    <span class="ticker-text">${item.text}</span>
                    ${item.icon ? `<img src="http://news.zerolagvpn.com:3000/uploads/${item.icon}" alt="icon" class="ticker-icon">` : ''}
                    ${index < data.length - 1 ? `<img src="http://news.zerolagvpn.com:3000/uploads/${item.separator_icon}" alt="separator" class="ticker-separator">` : ''}
                `;
                tickerMove.appendChild(tickerItem);
            });

            startTickerAnimation();
        })
        .catch(error => {
            console.error('Error fetching ticker text:', error);
        });
}

function startTickerAnimation() {
    const tickerMove = document.querySelector('.ticker-move');
    const tickerWidth = tickerMove.scrollWidth;
    const viewportWidth = window.innerWidth;

    let startPos = viewportWidth;
    let endPos = -tickerWidth;

    function animate() {
        if (startPos <= endPos) {
            startPos = viewportWidth;
        } else {
            startPos -= 2; // تعديل سرعة الحركة هنا
        }
        tickerMove.style.transform = `translateX(${startPos}px)`;
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

// باقي الكود كما هو

// باقي الكود كما هو
document.addEventListener('DOMContentLoaded', function() {
    loadChannels();
});

function loadChannels() {
    var channelButtons = document.getElementById('channelButtons');
    var channels = [
        {
            name: 'القناة 1',
            options: [
                { url: 'https://ch4.zerolagvpn.com/ch1_qu_240p.flv', type: 'flv', quality: 'جودة منخفضة' },
                { url: 'https://ch4.zerolagvpn.com/ch1_qu_480p.flv', type: 'flv', quality: 'جودة متوسطه' },
                { url: 'https://ch4.zerolagvpn.com/ch1_qu_720p.flv', type: 'flv', quality: 'جودة عالية' },
                { url: 'http://ch4.zerolagvpn.com/hls/ch1_qu_480p/index.m3u8', type: 'hls', quality: 'ايفون' }
            ]
        },
        {
            name: 'القناة 2',
            options: [
                { url: 'https://ch4.zerolagvpn.com/ch2_qu_240p.flv', type: 'flv', quality: 'جودة منخفضة' },
                { url: 'https://ch4.zerolagvpn.com/ch2_qu_480p.flv', type: 'flv', quality: 'جودة متوسطه' },
                { url: 'https://ch4.zerolagvpn.com/ch2_qu_720p.flv', type: 'flv', quality: 'جودة عالية' },
                { url: 'http://ch4.zerolagvpn.com/hls/ch2_qu_480p/index.m3u8', type: 'hls', quality: 'ايفون' }
            ]
        },
        {
            name: 'القناة 3',
            options: [
                { url: 'https://ch4.zerolagvpn.com/ch3_qu_240p.flv', type: 'flv', quality: 'جودة منخفضة' },
                { url: 'https://ch4.zerolagvpn.com/ch3_qu_480p.flv', type: 'flv', quality: 'جودة متوسطه' },
                { url: 'https://ch4.zerolagvpn.com/ch3_qu_720p.flv', type: 'flv', quality: 'جودة عالية' },
                { url: 'http://ch4.zerolagvpn.com/hls/ch3_qu_480p/index.m3u8', type: 'hls', quality: 'ايفون' }
            ]
        },
        {
            name: 'القناة 4',
            options: [
                { url: 'https://ch4.zerolagvpn.com/ch4_qu_480p.flv', type: 'flv', quality: 'جودة متوسطه' },
                { url: 'https://ch4.zerolagvpn.com/ch4_qu_720p.flv', type: 'flv', quality: 'جودة عالية' },
                { url: 'http://ch4.zerolagvpn.com/hls/ch4_qu_480p/index.m3u8', type: 'hls', quality: 'ايفون' }
            ]
        },
        {
            name: 'القناة 5',
            options: [
                { url: 'http://ch4.zerolagvpn.com/ch5_qu_240p.flv', type: 'flv', quality: 'جودة منخفضة' },
                { url: 'https://ch4.zerolagvpn.com/ch5_qu_480p.flv', type: 'flv', quality: 'جودة متوسطه' },
                { url: 'https://ch4.zerolagvpn.com/ch5_qu_720p.flv', type: 'flv', quality: 'جودة عالية' },
                { url: 'http://ch4.zerolagvpn.com/hls/ch5_qu_480p/index.m3u8', type: 'hls', quality: 'ايفون' }
            ]
        },
        {
            name: 'القناة 6',
            options: [
                { url: 'https://ch4.zerolagvpn.com/ch6_qu_480p.flv', type: 'flv', quality: 'جودة متوسطه' },
                { url: 'https://ch4.zerolagvpn.com/ch6_qu_720p.flv', type: 'flv', quality: 'جودة عالية' },
                { url: 'http://ch4.zerolagvpn.com/hls/ch5_qu_480p/index.m3u8', type: 'hls', quality: 'ايفون' }
            ]
        }   
        // إضافة المزيد من القنوات مع خياراتها هنا
    ];

    channelButtons.innerHTML = '';
    channels.forEach((channel, index) => {
        var button = document.createElement('button');
        button.className = 'channel-button';
        button.innerText = channel.name;
        
        button.addEventListener('click', function() {
            highlightButton(button, 'channel');
            showQualityOptions(channel.options);
        });
        
        channelButtons.appendChild(button);
    });

    var allMatchesElement = document.querySelector('.allmatches');
    allMatchesElement.setAttribute('data-channels', JSON.stringify(channels));
}

function showQualityOptions(options) {
    var qualityOptionsDiv = document.getElementById('qualityOptions');
    qualityOptionsDiv.innerHTML = '';

    options.forEach(option => {
        var optionButton = document.createElement('button');
        optionButton.className = 'channel-button2';
        optionButton.innerText = option.quality;
        optionButton.addEventListener('click', function() {
            highlightButton(optionButton, 'quality');
            playVideo(option.url, option.type);
            showInternetSpeedNote(option.quality); // عرض الملاحظة
        });
        
        qualityOptionsDiv.appendChild(optionButton);
    });

    qualityOptionsDiv.style.display = 'block'; // عرض الخيارات
}
function showInternetSpeedNote(quality) {
    var note = '';
    
    switch (quality) {
            case 'جودة منخفضة':
            note = 'هذه الجودة تتطلب سرعة إنترنت لا تقل عن300 كيلوبت في الثانية لضمان تشغيل سلس للفيديو.';
            break;
        case 'جودة متوسطه':
            note = 'هذه الجودة تتطلب سرعة إنترنت لا تقل عن 1 ميجابت في الثانية لضمان تشغيل سلس للفيديو.';
            break;
        case 'جودة عالية':
            note = 'هذه الجودة تتطلب سرعة إنترنت لا تقل عن 1.5 ميجابت في الثانية لضمان تشغيل سلس للفيديو.';
            break;
        case 'ايفون':
            note = 'هذا المشغل مخصص لأجهزة الايفون.';
            break;
    }

    var noteElement = document.getElementById('note');
    noteElement.innerText = note;
    noteElement.style.display = 'block';
}

function highlightButton(button, type) {
    if (type === 'channel') {
        // إعادة تعيين جميع أزرار القنوات
        var channelButtons = document.querySelectorAll('.channel-button');
        channelButtons.forEach(btn => btn.classList.remove('active-channel-button'));
        
        // تعيين الزر الحالي كـ active
        button.classList.add('active-channel-button');
    } else if (type === 'quality') {
        // إعادة تعيين جميع أزرار الجودة
        var qualityButtons = document.querySelectorAll('.channel-button2');
        qualityButtons.forEach(btn => btn.classList.remove('active-quality-option-button'));
        
        // تعيين الزر الحالي كـ active
        button.classList.add('active-quality-option-button');
    }
}

var currentType = '';
var player = null;

function stopCurrentPlayer() {
    if (player) {
        switch (currentType) {
            case 'mpegts':
            case 'flv':
                player.unload();
                player.detachMediaElement();
                player.destroy();
                break;
            case 'hls':
                player.destroy();
                break;
            case 'dash':
                player.reset();
                break;
        }
        player = null;
        currentType = '';
    }
}

function playVideo(url, type) {
    var videoElement = document.getElementById('videoElement');

    stopCurrentPlayer();

    const encoderConfigs = {
        'mpegts': {
            checkSupport: () => mpegts.getFeatureList().mseLivePlayback,
            createPlayer: () => mpegts.createPlayer({
                type: 'mpegts',
                url: url,
                config: {
                    autoCleanupMaxBackwardDuration: 3 * 60,
                    enableWorker: true
                }
            }),
            error: 'المتصفح لا يدعم التشغيل المباشر لـ MSE.'
        },
        'flv': {
            checkSupport: () => flvjs.isSupported(),
            createPlayer: () => {
            const flvPlayer = flvjs.createPlayer({
               type: 'flv',
                url: url,
                config: {
               enableStashBuffer: true, // تمكين التخزين المؤقت لتقليل التقطعات
               stashInitialSize: 512 * 1024, // حجم التخزين الأولي: 512 كيلوبايت
               isLive: true // تأكيد البث المباشر
                }
                });
                flvPlayer.attachMediaElement(videoElement);
                flvPlayer.load();
                flvPlayer.play();

                return flvPlayer;
            },
            error: 'المتصفح لا يدعم FLV أو هناك مشكلة في التشغيل.'
        },
        'hls': {
            checkSupport: () => Hls.isSupported(),
            createPlayer: () => {
                const hlsPlayer = new Hls({
                    maxBufferLength: 5,
                    maxMaxBufferLength: 15,
                    startLevel: 1,
                    liveSyncDuration: 2
                });
                hlsPlayer.loadSource(url);
                hlsPlayer.attachMedia(videoElement);
                hlsPlayer.on(Hls.Events.MANIFEST_PARSED, function () {
                    videoElement.play();
                });
                return hlsPlayer;
            }
        },
        'dash': {
            checkSupport: () => dashjs.MediaPlayer.isSupported(),
            createPlayer: () => {
                const dashPlayer = dashjs.MediaPlayer().create();
                dashPlayer.updateSettings({
                    streaming: {
                        stableBufferTime: 0,
                        bufferTimeAtTopQuality: 0,
                        bufferTimeAtTopQualityLongForm: 0
                    }
                });
                dashPlayer.initialize(videoElement, url, true);
                return dashPlayer;
            }
        },
        'html5': {
            checkSupport: () => true,
            createPlayer: () => {
                videoElement.src = url;
                videoElement.play();
                return videoElement;
            }
        }
    };

    const config = encoderConfigs[type];
    if (config && config.checkSupport()) {
        player = config.createPlayer();
        currentType = type;
    } else {
        console.error(config.error || `نوع الإنكودر ${type} غير مدعوم.`);
    }
}
