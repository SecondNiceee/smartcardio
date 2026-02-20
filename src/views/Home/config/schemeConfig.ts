import { getCdnUrl } from "@/shared/utils/createImgPath";

export const schemeConfig = Array.from({length:3}, (e, i) => {
    return getCdnUrl(`/images/scheme${i+1}.png`)
})
