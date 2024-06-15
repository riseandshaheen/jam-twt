import { getFrameMetadata } from "@coinbase/onchainkit/frame";
import { getFrameMessage } from "@coinbase/onchainkit/frame";

export interface PrepareDonateFrameMetadataOpts {
    endpointBaseUrl: string;
}

export const prepareDonateFrameMetadata = <T>({
    endpointBaseUrl,
}: PrepareDonateFrameMetadataOpts) => {
    const frameMetadata = getFrameMetadata({
        buttons: [
            {
                action: "tx",
                label: "Donate",
                target: `${endpointBaseUrl}/api/donate/prepare`,
                postUrl: `${endpointBaseUrl}/api/donate/handletx`,
            },
            {
                action: "link",
                label: "Learn more",
                target: endpointBaseUrl,
            },
        ],
        image: {
            src: "https://pbs.twimg.com/profile_images/1801339115935268864/myUfQhBo_400x400.jpg",
            aspectRatio: "1:1",
        },
    });

    return {
        title: "Comet",
        description: "Text co-creation platform",
        openGraph: {
            title: "Comet",
            description: "Text co-creation platform",
            images: [
                "https://pbs.twimg.com/profile_images/1801339115935268864/myUfQhBo_400x400.jpg",
            ],
        },
        other: {
            ...frameMetadata,
        },
    } as T;
};

// ===============

export interface PrepareFrameMessageOpts {
    req: any;
    apiKey: string;
}

export const prepareFrameMessage = async <T>({
    req,
    apiKey,
}: PrepareFrameMessageOpts) => {
    const body = await req.json();
    return getFrameMessage(body, {
        neynarApiKey: apiKey,
    }) as T;
};
