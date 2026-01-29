import { deviceWithCase } from "@/shared/config/deviceWithCase"
import { TPromocode } from "../model/TPromocode"

export const getDeviceWithPackage = function(comment : string,  discount : TPromocode|null){
    const payment = discount ? deviceWithCase.realPrice-deviceWithCase.realPrice/100*discount.discountPercent : deviceWithCase.realPrice ;
    return {
        number : "smwc-001",
        weight : deviceWithCase.weight,
        length : deviceWithCase.length,
        width : deviceWithCase.width,
        height : deviceWithCase.height,
        comment : comment,
        items : [{
            name : deviceWithCase.name,
            ware_key : "00055",
            payment : {
            value : payment + payment/100*4 ,
            vat_sum : 0,
            vat_rate : 0,
            },
            cost : payment,
            weight : deviceWithCase.weight,
            amount : 1
        }],
    }
}