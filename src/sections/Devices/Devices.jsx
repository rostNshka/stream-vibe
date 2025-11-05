import Sections from "@/layouts/Sections";
import Grid from "@/components/Grid";
import DeviceCard from "@/components/DeviceCard";

const Devices = () => {
    const deviceItems = [
        {
            title: "Smartphones",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            imgSrc: './public/devices/Smartphones.svg',
        },
        {
            title: "Tablet",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            imgSrc: './public/devices/Tablet.svg',
        },
        {
            title: "Smart TV",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            imgSrc: './public/devices/SmartTV.svg',
        },
        {
            title: "Laptops",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            imgSrc: './public/devices/Laptops.svg',
        },
        {
            title: "Gaming Consoles",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            imgSrc: './public/devices/GamingConsoles.svg',
        },
        {
            title: "VR Headsets",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            imgSrc: './public/devices/VRHeadsets.svg',
        },
    ]
    return (
        <Sections
            title="We Provide you streaming experience across various devices."
            titleId="devices-title"
            description="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
        >
            <Grid columns={3}>
                {deviceItems.map((deviceItem, index) => (
                    <DeviceCard {...deviceItem} key={index} />
                ))}
            </Grid>
        </Sections>
    )
}

export default Devices