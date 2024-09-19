function calcMetabolicRate(e) {
    e.preventDefault();
    console.log("running calc_metabolic_rate ...");

    // Harris-Benedict-Formel:
    const weight = parseInt(document.querySelector('#weight').value);
    const size = parseInt(document.querySelector('#body_size').value);
    const age = parseInt(document.querySelector('#age').value);
    const activity = parseFloat(document.querySelector("#activity").value);

    console.log({ weight, size, age, activity });
    let mbr = 0;

    if (document.querySelector('#male').checked) {
        // - Grundumsatz bei Männern (Kalorien je Tag):
        // - 66.47 + (13.7 * Körpergewicht in kg) + (5 * Körpergröße in cm) – (6.8 * Alter in Jahren) = Grundumsatz
        mbr = 66.47 + (13.7 * weight) + (5 * size) - (6.8 * age);
    } else {
        // - Grundumsatz bei Frauen (Kalorien je Tag):
        // - 655.1 + (9.6 * Körpergewicht in kg) + (1.8 * Körpergröße in cm) – (4.7 * Alter in Jahren) = Grundumsatz

        mbr = 655.1 + (9.6 * weight) + (1.8 * size) - (4.7 * age);
    }


    let mbr_kj = mbr * 4.184

    let tdee = mbr * activity;
    let tdee_kj = mbr_kj * activity;
    console.log({ mbr, mbr_kj, tdee, tdee_kj });

    document.querySelector("#mbr").innerHTML = mbr.toFixed(2);
    document.querySelector("#mbr-kj").innerHTML = mbr_kj.toFixed(2);
    document.querySelector("#tdee").innerHTML = tdee.toFixed(2);
    document.querySelector("#tdee-kj").innerHTML = tdee_kj.toFixed(2);

    document.querySelector("#mbrTable").style.display = "block";
}

function change_pricing_period(period = "Yearly") {
    console.log("running change_pricing_period ...", { period });
    if (period == "Yearly") {
        console.log("Jahr ausgewählt");
        document.querySelector(".price-plan-1 h2").innerHTML = "$294";
        document.querySelector(".price-plan-2 h2").innerHTML = "$474";
        document.querySelector(".price-plan-3 h2").innerHTML = "$594";
        document.querySelectorAll(".contract-period").forEach(e => { e.innerHTML = "/year" });
    } else {
        console.log("Monat ausgewählt");
        document.querySelector(".price-plan-1 h2").innerHTML = "$49";
        document.querySelector(".price-plan-2 h2").innerHTML = "$79";
        document.querySelector(".price-plan-3 h2").innerHTML = "$99";
        document.querySelectorAll(".contract-period").forEach(e => { e.innerHTML = "/month" });
    }
}