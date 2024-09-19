function calc_metabolic_rate(isMale, height, weight) {

    // 66.47 + (13.7 * Körpergewicht in kg) + (5 * Körpergröße in cm) – (6.8 * Alter in Jahren) = Grundumsatz
    return 0
}

function change_pricing_period(period = "Yearly"){
    if (period=="Yearly") {
        document.querySelectorAll(".price-plan-1 h2").innerHTML = "$294";
        document.querySelectorAll(".price-plan-2 h2").innerHTML = "$474";
        document.querySelectorAll(".price-plan-3 h2").innerHTML = "$594";

        document.querySelectorAll(".contract-period").innerHTML = "/year";
    } else {
        document.querySelectorAll(".price-plan-1 h2").innerHTML = "$49";
        document.querySelectorAll(".price-plan-2 h2").innerHTML = "$79";
        document.querySelectorAll(".price-plan-3 h2").innerHTML = "$99";
        
        document.querySelectorAll(".contract-period").innerHTML = "/month";
    }
}