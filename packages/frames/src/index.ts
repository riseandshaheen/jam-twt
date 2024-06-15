import { getFrameMetadata } from "@coinbase/onchainkit/frame";
import { FrameRequest, getFrameMessage } from "@coinbase/onchainkit/frame";

export interface PrepareDonationFrameMetadataOpts {
    endpointBaseUrl: string;
    imageUrl: string;
    learnMoreUrl: string;
}

export const prepareDonationFrameMetadata = <T>({
    endpointBaseUrl,
    imageUrl,
    learnMoreUrl,
}: PrepareDonationFrameMetadataOpts) => {
    const frameMetadata = getFrameMetadata({
        buttons: [
            {
                action: "tx",
                label: "Donate",
                target: `${endpointBaseUrl}/api/donate/prepare`,
                postUrl: `${endpointBaseUrl}/api/donate/txhandler`,
            },
            {
                action: "link",
                label: "Learn more",
                target: learnMoreUrl,
            },
        ],
        image: {
            src: imageUrl,
            aspectRatio: "1:1",
        },
    });

    return {
        title: "Comet",
        description: "A text content co-creation platform",
        openGraph: {
            title: "Comet",
            description: "A text content co-creation platform",
            image: imageUrl,
        },
        other: {
            ...frameMetadata,
        },
    } as T;
};

// =====================

export interface PrepareFrameMessageOpts {
    req: any;
    neynarApiKey: string;
    allowFramegear: boolean;
}

export const prepareFrameMessage = async <T>({
    req,
    neynarApiKey,
    allowFramegear,
}: PrepareFrameMessageOpts) => {
    const body: FrameRequest = await req.json();
    return getFrameMessage(body, { neynarApiKey, allowFramegear }) as T;
};
