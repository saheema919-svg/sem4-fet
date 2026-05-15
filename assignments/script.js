let list = document.getElementById("subjects");

function useWhile() {
    let i = 0;
    let result = [];

    while (i < list.options.length) {
        if (list.options[i].selected) {
            result.push(list.options[i].value);
        }
        i++;
    }

    updateTable("While Loop", result);
}

function useDoWhile() {
    let i = 0;
    let result = [];

    if (list.options.length > 0) {
        do {
            if (list.options[i].selected) {
                result.push(list.options[i].value);
            }
            i++;
        } while (i < list.options.length);
    }

    updateTable("Do-While Loop", result);
}

function updateTable(method, data) {
    let methodCell = document.getElementById("method");
    let resultCell = document.getElementById("result");

    methodCell.innerHTML = method;
    resultCell.innerHTML = data.length ? data.join(", ") : "-";

    methodCell.classList.remove("fade");
    resultCell.classList.remove("fade");

    void methodCell.offsetWidth;

    methodCell.classList.add("fade");
    resultCell.classList.add("fade");
}
