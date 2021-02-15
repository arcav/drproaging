import Buttons from "../components/Buttons/Buttons";

import Image from "next/image";

const index = () => {
    return (
        <>
            <div
                className="valign-wrapper "
                style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    borderStyle: "double",
                    borderWidth: "10px",
                    borderColor: "#ffecb3",
                }}
            >
                <div className="container">
                    <div
                        className="card z-depth-5 "
                        style={{
                            paddingTop: "15px",
                            paddingBotom: "10px",
                            borderStyle: "double",
                            borderWidth: "15px",
                            borderColor: "#ffecb3",
                        }}
                    >
                        <div className="container">
                            <Image src="/Logo.svg" width="1000" height="300" />
                        </div>
                        <div className="container">
                            <Buttons />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
