import React from "react";
import { useSelector } from 'react-redux';
import '../assets/css/Preloader.css';

const Preloader = (props) => {
    let processings = true;

    const processing = useSelector(state => {
        // //console.log("state",state);
        let processing = false;

        Object.keys(state).map((key) => {
            if (state[key]['processing'] !== undefined) {
                if (state[key]['processing']) {
                    processing = true;
                }
            } else {
                Object.keys(state[key]).map((key2) => {
                    if (state[key][key2]['processing'] !== undefined) {
                        if (state[key][key2]['processing']) {
                            processing = true;
                        }
                    } else {
                        Object.keys(state[key][key2]).map((key3) => {
                            if (state[key][key2][key3]['processing'] !== undefined) {
                                if (state[key][key2][key3]['processing']) {
                                    processing = true;
                                }
                            }
                        });
                    }
                });
            }

        });

        return processing;
    });

    return processing ?
        <div style={
            {
                position: "fixed",
                zIndex: 2000,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: "#010101b8"
            }
        }>
            <div className="spinner-grow text-primary" role="status" style={{
                color: "#9ac51a", backgroundColor: "#9ac51a"
            }}>
                <span className="sr-only">Loading...</span>
            </div>
        </div> : ""
    // return processing ? <div className="spinner-border text-success" style={{ position: "absolute", zIndex: 2000, left: 0, right: 0 }}></div> : ""
}

export default Preloader;
