function createPromise(id) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 2000) + 1000; // Random delay between 1 and 3 seconds
        setTimeout(() => {
            resolve({ id, delay: delay / 1000 });
        }, delay);
    });
}

function updateTable(results) {
    const output = document.getElementById("output");
    output.innerHTML = ""; // Clear the loading message

    results.forEach((result) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>Promises ${result.id}</td>
            <td>${result.delay}</td>
        `;
        output.appendChild(row);
    });

    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
        <td>Total</td>
        <td>${Math.max(...results.map((result) => result.delay)).toFixed(3)}</td>
    `;
    output.appendChild(totalRow);
}

Promise.all([createPromise(1), createPromise(2), createPromise(3)]).then((results) => {
    updateTable(results);
});