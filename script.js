const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener("click", () => {
    const ip = parseInt(document.getElementById('ip').value);
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ip);
        }, 2000);
    })
    .then((ip) => {
        output.innerHTML += `Result: ${ip} <br>`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(ip * 2), 2000);
        });
    })
    .then((ip) => {
        output.innerHTML += `Result: ${ip} <br>`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(ip - 3), 1000);
        });
    })
    .then((ip) => {
        output.innerHTML += `Result: ${ip} <br>`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(ip / 2), 1000);
        });
    })
    .then((ip) => {
        output.innerHTML += `Result: ${ip} <br>`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(ip + 10), 1000);
        });
    })
    .then((ip) => {
        output.innerHTML += `Final Result: ${ip} <br>`;
    });
});
