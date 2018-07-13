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
                        <p className="RiversideOutfitters-phone list-phone">(804) 560-0068</p>
                        <a className="RiversideOutfitters-link list-website is-link" href="//www.riversideoutfitters.net">www.riversideoutfitters.net</a>
                    </li>
                    <li className="list-item">
                        <p className="outfitters-RVAPaddlesports list-name">RVA Paddlesports</p>
                        <p className="RVAPaddlesports-address list-address">1320 School St, Richmond, VA 23220</p>
                        <p className="RiversideOutfitters-phone list-phone">(804) 898-0697</p>
                        <a className="RVAPaddlesports-link list-website is-link" href="https://www.rvapaddlesports.com">www.rvapaddlesports.com</a>
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
                        <p className="RiversideOutfitters-phone list-phone">(804) 897-1556</p>
                        <a className="AppomattoxRiverCompany-link list-website is-link" href="http://www.paddleva.com">www.paddleva.com</a>
                    </li>    
                    <li className="list-item">
                        <p className="outfitters-GreenTop list-name">Green Top Sporting Goods</p>
                        <p className="GreenTop-address list-address">10150 Lakeridge Pkwy, Ashland, VA 23005</p>
                        <p className="RiversideOutfitters-phone list-phone">(804) 550-2188</p>
                        <a className="GreenTop-link list-website is-link" href=" http://www.greentophuntfish.com">www.greentophuntfish.com</a>
                    </li>    
                    <li className="list-item">
                        <p className="outfitters-PeterGlenn list-name">Peter Glen Ski and Sports</p>
                        <p className="PeterGlenn-address list-address">9507 W Broad St, Richmond, VA 23294</p>
                        <p className="RiversideOutfitters-phone list-phone">(804) 527-2020</p>
                        <a className="PeterGlenn-link list-website is-link" href="http://www.peterglenn.com/content/peter-glenn-ski-sports-richmond-va">www.peterglenn.com/content/peter-glenn-ski-sports-richmond-va</a>
                    </li>    
                    <li className="list-item">
                        <p className="outfitters-REI list-name">REI</p>
                        <p className="REI-address list-address">2020 Old Brick Rd, Glen Allen, VA 23060</p>
                        <p className="RiversideOutfitters-phone list-phone">(804) 360-1381</p>
                        <a className="REI-link list-website is-link" href="http://www.rei.com/stores/richmond-short-pump.html">www.rei.com/stores/richmond-short-pump.html</a>
                    </li>
                    <li className="list-item">
                        <p className="outfitters-Dicks list-name">DICK'S Sporting Goods</p>
                        <p className="Dicks-address list-address">11800 W Broad St Ste 1096, Richmond, VA 23233</p>
                            <p className="RiversideOutfitters-phone list-phone">(804) 360-8165</p>
                        <a className="Dicks-link list-website is-link" href="https://stores.dickssportinggoods.com/va/richmond/128/">www.stores.dickssportinggoods.com/va/richmond/128</a>
                    </li>        
                </ul>
            </div>
        );
    }
}

export default Outfitters