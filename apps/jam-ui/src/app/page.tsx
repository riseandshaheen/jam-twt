import { Stack } from "@mantine/core";
import { FaRegLightbulb } from "react-icons/fa";
import PageTitle from "../components/layout/pageTitle";
import { prepareDonationFrameMetadata } from "@jam/frames";
import { Metadata } from "next";

export const metadata: Metadata = prepareDonationFrameMetadata({
    endpointBaseUrl: "https://jam-twt-nine.vercel.app",
    imageUrl:
        "https://pbs.twimg.com/profile_images/1801339115935268864/myUfQhBo_400x400.jpg",
    learnMoreUrl: "https://jam-twt-nine.vercel.app",
});

export default function HomePage() {
    return (
        <Stack>
            <PageTitle title="Jam House" Icon={FaRegLightbulb} />
        </Stack>
    );
}
