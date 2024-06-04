document.querySelector("#top").addEventListener("click", (e) => {
    document.querySelector("#sec1").scrollIntoView({ behavior: "smooth" });
  });
  document.querySelector("#team").addEventListener("click", (e) => {
    document.querySelector("#sec2").scrollIntoView({ behavior: "smooth" });
  });
  document.querySelector("#citizen").addEventListener("click", (e) => {
    document.querySelector("#sec4").scrollIntoView({ behavior: "smooth" });
  });
  document.querySelector("#projects").addEventListener("click", (e) => {
    document.querySelector("#sec5").scrollIntoView({ behavior: "smooth" });
  });
  document.querySelector("#poem1").addEventListener("click", (e) => {
    document.querySelector("#sec6").scrollIntoView({ behavior: "smooth" });
  });
  document.querySelector("#poem2").addEventListener("click", (e) => {
    document.querySelector("#sec7").scrollIntoView({ behavior: "smooth" });
  });
  document.querySelector("#end").addEventListener("click", (e) => {
    document.querySelector("#sec8").scrollIntoView({ behavior: "smooth" });
  });



  document.querySelector('#menu_bar').addEventListener('click', function() {
    const menu = document.getElementById('menu_box');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        setTimeout(() => { menu.style.display = 'none'; }, 500);
    } else {
        menu.style.display = 'block';
        setTimeout(() => { menu.classList.add('show'); }, 10);
    }
});


let leftBtn = document.querySelector('#left_btn')
let rightBtn = document.querySelector('#right_btn')
let videoElement  = document.querySelector("#sma_video")

const videoSources = [
  'video/minmin.mp4',
  'video/solsol.mp4',
  'video/youngyoung.mp4'
];

// 현재 비디오 인덱스
let currentVideoIndex = 0;


// 비디오 업데이트 함수
function updateVideo(index) {
    // 인덱스가 배열 범위를 벗어나지 않도록 조정
    if (index < 0) {
        currentVideoIndex = videoSources.length - 1;
    } else if (index >= videoSources.length) {
        currentVideoIndex = 0;
    } else {
        currentVideoIndex = index;
    }

    // 페이드 아웃
    videoElement.style.opacity = 0;

    // 페이드 아웃 후 비디오 소스 업데이트
    setTimeout(() => {
        videoElement.src = videoSources[currentVideoIndex];
        videoElement.play(); // 비디오 자동 재생
        // 페이드 인
        videoElement.style.opacity = 1;
    }, 500); // 페이드 아웃 지속 시간과 동일하게 설정
}

// 왼쪽 버튼 클릭 이벤트
leftBtn.addEventListener('click', () => {
    updateVideo(currentVideoIndex - 1);
});

// 오른쪽 버튼 클릭 이벤트
rightBtn.addEventListener('click', () => {
    updateVideo(currentVideoIndex + 1);
});

