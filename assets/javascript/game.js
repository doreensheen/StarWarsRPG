var healthPoints;
var attackPower;
var counterAttackPower;

$(".hero").on("click", function() {
    attackPower = $(this).val();
    console.log("attackPower = " + attackPower);
})

$(".enemy").on("click", function() {
    counterAttackPower = $(this).val();
    console.log("counterAttackPower = " + counterAttackPower);
})
