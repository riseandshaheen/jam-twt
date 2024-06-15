import { prepareFrameMessage } from "@jam/frames";
import { NextRequest, NextResponse } from "next/server";
//import { prepareFrameMessage } from "@jam/frames";
import { encodeFunctionData, parseEther } from "viem";
import { baseSepolia } from "viem/chains";
// import BuyMeACoffeeABI from "../../_contracts/BuyMeACoffeeABI";
// import { BUY_MY_COFFEE_CONTRACT_ADDR } from "../../config";
// import type { FrameTransactionResponse } from "@coinbase/onchainkit/frame";

async function getResponse(req: NextRequest): Promise<NextResponse | Response> {
    const request = await req.json();
    console.log("Request", request);
    const neynarApiKey = process.env.NEYNAR_ONCHAIN_KIT_API_KEY || "";

    const { isValid } = (await prepareFrameMessage({
        req: request,
        apiKey: neynarApiKey,
    })) as { isValid: boolean };

    console.log("isValid", isValid);

    // if (!isValid) {
    //     return new NextResponse("Message not valid", { status: 500 });
    // }

    // const data = encodeFunctionData({
    //     abi: BuyMeACoffeeABI,
    //     functionName: "buyCoffee",
    //     args: [parseEther("1"), "Coffee all day!"],
    // });

    // const txData: FrameTransactionResponse = {
    //     chainId: `eip155:${baseSepolia.id}`,
    //     method: "eth_sendTransaction",
    //     params: {
    //         abi: [],
    //         data,
    //         to: BUY_MY_COFFEE_CONTRACT_ADDR,
    //         value: parseEther("0.00004").toString(), // 0.00004 ETH
    //     },
    // };
    // return NextResponse.json(txData);
    return NextResponse.json({ message: "Success", isValid });
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

export const dynamic = "force-dynamic";
