import { device } from "@/shared/config/device";
import { deviceWithCase } from "@/shared/config/deviceWithCase";
import { getCdnUrl } from "@/shared/utils/createImgPath";

export const storeOrders = [{...device, hoverImage : getCdnUrl("/images/hoverDevice.png")}, {...deviceWithCase, hoverImage : getCdnUrl("/images/hoverDeviceWithCase.png")}]
