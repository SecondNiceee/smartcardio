import { device } from "@/shared/config/device"
import { TPromocode } from "../model/TPromocode"


export const getDevicePackage = function(comment : string, discount : TPromocode | null) {
    const payment = discount ? device.realPrice - (device.realPrice/100*discount.discountPercent) : device.realPrice;
    return {
            number : "sm-001",
            weight : device.weight,
            length : device.length,
            width : device.width,
            height : device.height,
            comment : comment,
            items : [{
            name : device.name,
            ware_key : "00055",
            payment : {
                value : payment + payment/100*4,
                vat_sum : 0,
                vat_rate : 0,
            },
            cost : payment,
            weight : device.weight,
            amount : 1
            }],
    }
}