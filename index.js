let timer = setInterval(() => {
    let date_2025 = new Date('2024-12-31T12:00:00');
    let now = new Date();
    let diff = date_2025.getTime() - now.getTime();
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let min = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
    let sec = Math.floor(diff % (1000 * 60) / (1000));
    console.log(`Days:${days} - hours:${hours} - min:${min} - seconds:${sec}`);
    if (days < 0 && hours < 0 && min < 0 && sec < 0) {
        clearInterval(timer);
        console.log("Time Up");
    }
}, 1000);
export {};
// let sec_now = now.getTime() / 1000
// let total_remaining_sec = Math.floor(sec_2025 - sec_now)
// let remaining_days = total_remaining_sec / (60 * 60 * 24)
// let remaining_sec_for_hours = total_remaining_sec % (60 * 60 * 24)
//day,hour , minute , second
//      24     60        60
