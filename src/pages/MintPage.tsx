import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CounterInput from "react-counter-input";

import bear from "assets/mint/bear.png";
import logo from "assets/mint/logo.png";
import background from "assets/mint/background.svg";

const PageContainer = styled.div`
    ${tw`
    min-h-screen
    w-full
    h-full
    bg-main
    flex
    flex-col
    justify-start
    items-center
 `};
`;

const BackgroundEl = styled.img`
    ${tw`
    fixed
    bottom-0
    min-w-full
    pointer-events-none
 `};
`;

const Logo = styled.img`
    ${tw`
    relative
    w-[100px]
    pointer-events-none
 `};
`;

const MintCard = styled.div`
    ${tw`
    flex
    flex-col
    items-center
    justify-start
    px-6
    py-8
 `};
    width: clamp(300px, 60vw, 600px);
    background: linear-gradient(
        110.72deg,
        rgba(255, 255, 255, 0.08) 2.19%,
        rgba(255, 255, 255, 0.02) 80.27%
    );
    background-blend-mode: overlay;
    backdrop-filter: blur(22px);
    border-radius: 40px;
    border-top: 1px solid white;
`;

const Button = styled.button`
    ${tw`
    bg-orange
    px-6
    py-2
    rounded-xl
    flex
    justify-center
    items-center
    text-white
    tracking-normal
    font-main
    text-sm
    md:text-lg
    mt-5
    hover:bg-[#CE921D] 
    transition
`};
`;

const MintPage = () => {
    const [quantity, setQuantity] = useState(0);

    const handleQuantityChange = (count: number) => {
        setQuantity(count);
    };

    let basePrice = 0.05;

    return (
        <PageContainer>
            <div className="flex justify-between items-center mb-5 p-8 w-full">
                <Logo src={logo} />
                <Button>Connect Wallet</Button>
            </div>
            <BackgroundEl src={background} />
            <div className="flex w-full max-w-[700px] justify center items-center px-8">
                <h2 className="font-main font-bold text-2xl md:text-3xl lg:text-4xl mb-8 text-white tracking-wide text-center">
                    The bear market has hit and we're{" "}
                    <span className="text-[#F51F1F] text-3xl font-main lg:text-4xl">
                        NOT OKAY.
                    </span>
                </h2>
            </div>
            <div className="flex flex-col items-center mt-4 mb-16">
                <img src={bear} alt="bear" className="w-[250px] md:w-[330px]" />

                <MintCard>
                    <h2 className="font-main text-xl md:text-2xl lg:text-3xl mb-8 text-white tracking-wide">
                        Bear Minting
                    </h2>
                    <div className="flex flex-col space-y-2 my-8 items-center">
                        <h2 className="font-main text-md tracking-widest font-light text-white ">
                            Select Quantity
                        </h2>
                        <CounterInput
                            min={1}
                            max={10}
                            wrapperStyle={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                maxWidth: "100%",
                            }}
                            btnStyle={{
                                color: `#E19F1D`,
                                fontSize: "30px",
                                fontWeight: "700",
                                margin: "0 1rem",
                            }}
                            inputStyle={{
                                alignItems: "center",
                                focus: "none",
                                outline: "2px solid #E19F1D",
                                borderRadius: "8px",
                                width: "50%",
                                color: "white",
                                fontWeight: "700",
                                padding: "1rem 0",
                                minWidth: "10rem",
                                fontSize: "1.2rem",
                            }}
                            onCountChange={handleQuantityChange}
                        />
                        <h2 className="font-main text-sm tracking-wide font-light text-white ">
                            {(basePrice * quantity).toFixed(2)} ETH
                        </h2>
                    </div>
                    <Button>Mint</Button>
                    <h2 className="font-main mt-12 text-sm tracking-widest font-light text-white ">
                        .../4000 Minted
                    </h2>
                    <h2 className="font-main mt-12 text-xs tracking-wide font-light text-white text-center opacity-30">
                        20% donated towards mental health
                    </h2>
                </MintCard>
            </div>
            <div className="flex w-full max-w-[700px] justify center items-center px-8 z-10">
                <h2 className="font-main font-normal text-lg md:text-xl lg:text-xl mb-16 text-white tracking-wide text-center">
                    <span className="text-[#F51F1F] text-xl font-main lg:text-2xl">
                        NO
                    </span>{" "}
                    roadmap,{" "}
                    <span className="text-[#F51F1F] text-xl font-main lg:text-2xl">
                        NO
                    </span>{" "}
                    vibes, just a bunch of bears that are{" "}
                    <span className="text-[#F51F1F] text-xl font-main lg:text-2xl">
                        NOT OKAY.
                    </span>
                </h2>
            </div>
        </PageContainer>
    );
};

export default MintPage;
