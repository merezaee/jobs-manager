let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

function render() {
    const tbody = document.getElementById("jobs");
    tbody.innerHTML = "";

    jobs.forEach((job, index) => {
        tbody.innerHTML += `
        <tr>
            <td>${job.number}</td>
            <td>${job.referrer}</td>
            <td>${job.service}</td>
            <td>${job.cost}</td>
            <td>${job.check}</td>
            <td>${job.status}</td>
            <td>${job.note}</td>
            <td><button onclick="removeJob(${index})">حذف</button></td>
        </tr>`;
    });

    localStorage.setItem("jobs", JSON.stringify(jobs));
}

function addJob() {
    jobs.push({
        number: prompt("شماره جاب"),
        referrer: prompt("معرف"),
        service: prompt("نوع خدمت"),
        cost: prompt("هزینه دریافت شود؟ (بلی/خیر)"),
        check: prompt("نیاز به کنترل فاکتور؟ (بلی/خیر)"),
        status: prompt("وضعیت"),
        note: prompt("توضیحات")
    });

    render();
}

function removeJob(index) {
    if (confirm("حذف شود؟")) {
        jobs.splice(index,1);
        render();
    }
}

render();
