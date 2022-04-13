import React from "react";

const ToggleSwitch = ({ label }) => {
    return (
        <View style={className="container"}>
            <Text>{label}{" "}</Text>
            <View className="toggle-switch">
                <input type="checkbox" className="checkbox"
                    name={label} id={label} />
                <label className="label" htmlFor={label}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </View>
        </View>
    )
}

export default ToggleSwitch;