import styles from './AvailableTable.Module.css';
import FloorPlan from '../images/FloorPlan.png';
import Table1Preview from '../images/Table-1-Preview.jpg';
import Table2Preview from '../images/Table-2-Preview.jpg';
import Table3Preview from '../images/Table-3-Preview.jpg';
import Table4Preview from '../images/Table-4-Preview.jpg';
import Table5Preview from '../images/Table-5-Preview.jpg';
import Table6Preview from '../images/Table-6-Preview.jpg';
import Table7Preview from '../images/Table-7-Preview.jpg';
import Table8Preview from '../images/Table-8-Preview.jpg';
import Table9Preview from '../images/Table-9-Preview.jpg';
import Table10Preview from '../images/Table-10-Preview.jpg';

var tables=5;
if (tables==5) {
        var element = document.getElementById("table5");
        element.classList.add("available");
}
else {
    console.log("hi")
}

// display all the categories
const AvailableTable = ({list}) => {

    
    return (
        <div>
            <h2>List of reservations</h2>
            <ul>
            {list && 
                list.map((reservation) => (
                    <li key={reservation.res_id}>{reservation.res_id} | {reservation.no_of_guest} | {reservation.res_date} | {reservation.res_time} | {reservation.cust_notes} | {reservation.user_id} | {reservation.dt_id}</li>   
                ))
            }
            </ul>
           
        <div id="floorPlan">
            <img id="ImgFP" src={FloorPlan} alt="FloorPlan"/>
            <div className="thover" id="table1"><p id="t1txt">Table 1</p><img id="preview1" src={Table1Preview} alt="Table 1 Preview"/></div>
            <div className="thover" id="table2"><p id="t2txt">Table 2</p><img id="preview2" src={Table2Preview} alt="Table 2 Preview"/></div>
            <div className="thover" id="table3"><p id="t3txt">Table 3</p><img id="preview3" src={Table3Preview} alt="Table 3 Preview"/></div>
            <div className="thover" id="table4"><p id="t4txt">Table 4</p><img id="preview4" src={Table4Preview} alt="Table 4 Preview"/></div>
            <div className="thover" id="table5"><p id="t5txt">Table 5</p><img id="preview5" src={Table5Preview} alt="Table 5 Preview"/></div>
            <div className="thover" id="table6"><p id="t6txt">Table 6</p><img id="preview6" src={Table6Preview} alt="Table 6 Preview"/></div>
            <div className="thover" id="table7"><p id="t7txt">Table 7</p><img id="preview7" src={Table7Preview} alt="Table 7 Preview"/></div>
            <div className="thover" id="table8"><p id="t8txt">Table 8</p><img id="preview8" src={Table8Preview} alt="Table 8 Preview"/></div>
            <div className="thover" id="table9"><p id="t9txt">Table 9</p><img id="preview9" src={Table9Preview} alt="Table 9 Preview"/></div>
            <div className="thover" id="table10"><p id="t10txt">Table 10</p><img id="preview10" src={Table10Preview} alt="Table 10 Preview"/></div>
        </div>
    </div>
    )
}

export default AvailableTable;