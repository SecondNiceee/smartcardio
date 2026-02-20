import { TypeOrder } from "./TypeOrder";
import { getCdnUrl } from "../utils/createImgPath";

export const device:TypeOrder = {
    id : 1,
    images : [getCdnUrl("/images/device.png"), getCdnUrl("/images/hoverDevice.png"), getCdnUrl("/images/smartcardioS6.png"), getCdnUrl("/images/smartcardioS8.png"), getCdnUrl("/images/smartcardioS1.png"), getCdnUrl("/images/smartcardioS2.png")],
    name : "СмартКардио",
    description : "СмартКардио - первое в мире устройство, регистрирующее одновременно ЭКГ, сатурацию и пульсовую волну без геля и проводов",
    price : 19600,
    realPrice : 18816,
    weight : 500,
    width : 24,
    length : 33,
    height : 5,
    value : "device",
    futurePrice : 20300
}
