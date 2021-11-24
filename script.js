// 着火点となる要素
const headings = document.querySelectorAll('.heading');
const options = {
  threshold: 1
};

// 実行する
const observer = new IntersectionObserver(showElements);

// 各 .heading に到達したら発動。複数あるから forEach 使う。
headings.forEach(heading => {
  observer.observe(heading);
});

// 要素が表示されたら実行する動作
function showElements(entries){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 各 .heading に .active を加える
      entry.target.classList.add('active');
    }
  });
};