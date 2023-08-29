function show(){
    let user = document.getElementById(`name`).value;
    let miter = document.getElementById(`miterNumber`).value;
    let Unit = document.getElementById(`Price`).value;
    let fNumber = document.getElementById(`fanNumber`).value;
    let fWatts = document.getElementById(`fanWatts`).value;
    let fHours = document.getElementById(`fanHours`).value;
    let bNumber = document.getElementById(`bulbsNumber`).value;
    let bWatts = document.getElementById(`bulbsWatts`).value;
    let bHours = document.getElementById(`BulbsHours`).value;
    let ACNum = document.getElementById(`ACNumber`).value;
    let ACWatt = document.getElementById(`ACWatts`).value;
    let ACHours = document.getElementById(`ACHours`).value;
    let TVNum = document.getElementById(`TVNumber`).value;
    let TVWatt = document.getElementById(`TVWatts`).value;
    let TVHours = document.getElementById(`TVHours`).value;
    let FridgeNum = document.getElementById(`FridgeNumber`).value;
    let FridgeWatt = document.getElementById(`FridgeWatts`).value;
    let FridgeHours = document.getElementById(`FridgeHours`).value;
    let TFWatts = (fNumber * fWatts * fHours * Unit) / 1000;
    document.getElementById(`fanWattsDis`).innerText = TFWatts;
    let TBWatts = (bNumber * bWatts * bHours * Unit) / 1000;
    document.getElementById(`bulbsWattsDis`).innerText = TBWatts;
    let TAWatts = (ACNum * ACWatt * ACHours * Unit) / 1000;
    document.getElementById(`ACWattsDis`).innerText = TAWatts;
    let TVWatts = (TVNum * TVWatt * TVHours * Unit) / 1000;
    document.getElementById(`TVWattsDis`).innerText = TVWatts;
    let FRWatts = (FridgeNum * FridgeWatt * FridgeHours * Unit) / 1000;
    document.getElementById(`FridgeWattsDis`).innerText = FRWatts;
    let TPrice = TFWatts + TBWatts + TAWatts + TVWatts + FRWatts;
    // document.getElementById(`rasult`).innerText = TPrice
    document.getElementById(`rasult`).innerHTML = "Miter Owner Name "+user+" Miter Number "+ miter +" This Miter Oneday Bill "+ TPrice +" TK";
}

