const locations = ["東京", "大阪", "京都", "北海道", "沖繩", "青森", "福岡", "名古屋", "神戶", "熊本", "首爾", "釜山", "濟州島"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const durations = ["3 Days", "4 Days", "5 Days", "6 Days", "7 Days", "8 Days", "9 Days", "10 Days", "One Way Ticket"];


// 取得 HTML 元素 (這樣 JavaScript 才能找到並操作它們)
const spinButton = document.getElementById('spinButton'); // 取得「開始拉霸！」按鈕
const locationResult = document.getElementById('locationResult'); // 取得顯示地點結果的 span
const monthResult = document.getElementById('monthResult');     // 取得顯示月份結果的 span
const durationResult = document.getElementById('durationResult'); // 取得顯示天數結果的 span

// 函式：從任何一個陣列（清單）中隨機選擇一個項目
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length); // 產生一個隨機的索引數字
    return arr[randomIndex]; // 返回該索引對應的項目
}

// 函式：當「開始拉霸！」按鈕被點擊時，執行的所有動作
function spinMachine() {
    // 先儲存最終隨機選出的結果
    const finalLocation = getRandomItem(locations);
    const finalMonth = getRandomItem(months);
    const finalDuration = getRandomItem(durations);

    // 簡單的動畫效果：讓文字快速閃爍幾次，模擬拉霸機滾動
    let count = 0;
    const totalFlashes = 15; // 總共閃爍的次數
    const flashSpeed = 80; // 每次閃爍的間隔 (毫秒，越小越快)

    // 設定一個定時器，每隔 flashSpeed 毫秒執行一次
    const interval = setInterval(() => {
        // 在動畫過程中顯示隨機的項目
        locationResult.textContent = getRandomItem(locations);
        monthResult.textContent = getRandomItem(months);
        durationResult.textContent = getRandomItem(durations);

        count++; // 每次執行都讓計數器加一

        if (count >= totalFlashes) { // 如果閃爍次數達到預設值
            clearInterval(interval); // 停止定時器 (停止動畫)

            // 顯示最終的隨機結果
            locationResult.textContent = finalLocation;
            monthResult.textContent = finalMonth;
            durationResult.textContent = finalDuration;
        }
    }, flashSpeed);
}

// 事件監聽：當 spinButton 被「點擊 (click)」時，就執行 spinMachine 函式
spinButton.addEventListener('click', spinMachine);