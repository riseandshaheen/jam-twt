// import {
//     FrameRequest,
//     getFrameMessage,
//     getFrameHtmlResponse,
// } from "@coinbase/onchainkit/frame";
import { NextRequest, NextResponse } from "next/server";
//NEXT_PUBLIC_APP_URL

async function getResponse(req: NextRequest): Promise<NextResponse> {
    const body = { untrustedData: { transactionId: "teste" } };
    // const body: FrameRequest = await req.json();
    // const { isValid } = await getFrameMessage(body);

    // if (!isValid) {
    //     return new NextResponse("Message not valid", { status: 500 });
    // }
    // const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    // return new NextResponse(
    //     getFrameHtmlResponse({
    //         buttons: [
    //             {
    //                 label: `Tx: ${body?.untrustedData?.transactionId || "--"}`,
    //             },
    //         ],
    //         image: {
    //             src: `${appUrl}/park-4.png`,
    //         },
    //     }),
    // );
    return NextResponse.json(body);
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

export const dynamic = "force-dynamic";
