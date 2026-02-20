import { TypeOrder } from "./TypeOrder";
import { getCdnUrl } from "../utils/createImgPath";

export const deviceWithCase:TypeOrder = {
    id : 2,
    images : [getCdnUrl("/images/deviceWithCase.png"), getCdnUrl("/images/hoverDevice.png"), getCdnUrl("/images/deviceWithCaseS3.png"), getCdnUrl("/images/smartcardioS6.png"), getCdnUrl("/images/smartcardioS8.png"), getCdnUrl("/images/hoverDeviceWitCase.png")],
    description : "СмартКардио + Компактный чехол для хранения. Смарткардио - первое в мире устройство, регистрирующее одновременно ЭКГ, сатурацию и пульсовую волну без геля и проводов",
    height : 6,
    length : 33,
    name : "СмартКардио + Чехол <br> для хранения",
    price : 19900,
    weight : 500,
    width : 24,
    value : "deviceWithCase",
    realPrice : 19104,
    futurePrice : 20800
}
