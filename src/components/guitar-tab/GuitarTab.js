import GuitarString from "../guitar-string/GuitarString";
import './GuitarTab.css'
export default function GuitarTab() {

    return (
        <div className="guitar_tab">
            <div className="tab_line">
                <GuitarString string="E"/>
                <GuitarString string="A"/>
                <GuitarString string="D"/>
                <GuitarString string="G"/>
                <GuitarString string="B"/>
                <GuitarString string="e"/>
            </div>
        </div>
    );
}