import React, { Component } from "react"
import "./Outfitters.css"

class Outfitters extends Component {
    state = {
        level: "",
        temp: "",
        clarity: "",
        speed: ""
    }

    render() {
        document.body.style.backgroundImage = 'url(/parkimages/kayak.jpg)';
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        document.body.style.margin = 0;
        document.body.style.padding = 0;
        document.body.style.height = 100 + "%";
        document.body.style.minHeight = 100 + "vh";
        return(
            <div>
                <p className="outfitters-title">Outfitters</p>
                <p className="outfitters-rentals outfitters-heading">Kayak/Paddleboard Rentals</p>
                <ul className="outfitters-rental-list">
                    <li className="list-item">
                        <p className="outfitters-RiversideOutfitters list-name">Riverside Outfitters</p>
                        <p className="RiversideOutfitters-address list-address">6836 Old Westham Rd, Richmond, VA 23225</p>
                        <p className="RiversideOutfitters-link list-website">insert link here</p>
                    </li>
                    <li className="list-item">
                        <p className="outfitters-RVAPaddlesports list-name">RVA Paddlesports</p>
                        <p className="RVAPaddlesports-address list-address">1320 School St, Richmond, VA 23220</p>
                        <p className="RVAPaddlesports-link list-website">insert link here</p>
                    </li>
                    <li>
                        <p className=""></p>
                    </li>            
                </ul>
                <br />
                <p className="outfitters-sales outfitters-heading">Kayak/Paddleboard Sales</p>
                <ul className="outfitters-sales-list">
                    <li className="list-item">
                        <p className="outfitters-AppomattoxRiverCompany list-name">Appomattox River Company</p>
                        <p className="AppomattoxRiverCompany-address list-address">10180 Lakeridge Pkwy., Ashland , VA 23005</p>
                        <p className="AppomattoxRiverCompany-link list-website">insert link here</p>
                    </li>    
                    <li className="list-item">
                        <p className="outfitters-GreenTop list-name">Green Top Sporting Goods</p>
                        <p className="GreenTop-address list-address">10150 Lakeridge Pkwy, Ashland, VA 23005</p>
                        <p className="GreenTop-link list-website">insert link here</p>
                    </li>    
                    <li className="list-item">
                        <p className="outfitters-PeterGlenn list-name">Peter Glen Ski and Sports</p>
                        <p className="PeterGlenn-address list-address">9507 W Broad St, Richmond, VA 23294</p>
                        <p className="PeterGlenn-link list-website">insert link here</p>
                    </li>    
                    <li className="list-item">
                        <p className="outfitters-REI list-name">REI</p>
                        <p className="REI-address list-address">2020 Old Brick Rd, Glen Allen, VA 23060</p>
                        <p className="REI-link list-website">insert link here</p>
                    </li>
                    <li className="list-item">
                        <p className="outfitters-Dicks list-name">DICK'S Sporting Goods</p>
                        <p className="Dicks-address list-address">11800 W Broad St Ste 1096, Richmond, VA 23233</p>
                        <p className="Dicks-link list-website">insert link here</p>
                    </li>        
                </ul>
            </div>
        );
    }
}

export default Outfitters