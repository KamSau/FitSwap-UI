import React, {useContext, useState} from "react";
import Button from "../../components/button/Button";
import { SettingsContext } from "../../helpers/SettingsContext";

export default function Settings({children}){

    const {settings, setSettings} = useContext(SettingsContext);

    let toggleDisplay = () => {
        if(settings.display == "base"){
            setSettings({display:"dark"});
        }else{
            setSettings({display:"base"});
        }
    }
    return <div className={"settings__container settings__container--" + settings.display}>
        <Button text="toggle night mode" onSubmitF={toggleDisplay} type="button" modifier={settings.display} ></Button>
    </div>
}