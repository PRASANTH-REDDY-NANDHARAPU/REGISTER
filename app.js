let registers = [];
function register() {
    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let registers_count = registers.filter((x) => {
        return (x.tempMAIL == mail);
    });
    if (registers_count.length == 0) {
        let members = {
            tempNAME: name,
            tempMAIL: mail,
        };
        registers.push(members);
        console.table(registers);
    } else {
        console.log("email is already exist..");
    }
    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    let container = document.getElementById("register_Container");
    container.innerHTML = ""
    registers.map((members) => {
        let div = document.createElement("div");
        div.classList.add("card")
        let userNAME = document.createElement("h4")
        let userMAIL = document.createElement("p")
        userNAME.innerHTML = members.tempNAME
        userMAIL.innerHTML = members.tempMAIL
        container.appendChild(div);
        div.appendChild(userNAME);
        div.appendChild(userMAIL);

    });
}
function checkEMAIL() {
    let mail = document.getElementById("mail").value;
    let emailEXISTS = registers.filter((members) => {
        return members.tempMAIL == mail
    })
    console.log(emailEXISTS)
    let alert = document.getElementById('alert')
    if (emailEXISTS.length == 0) {
        alert.classList.add('d-none')
        alert.classList.remove('danger')
    }
    else {
        alert.classList.remove('d-none')
        alert.classList.add('danger')

    }
}
