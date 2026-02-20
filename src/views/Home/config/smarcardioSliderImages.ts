import { getCdnUrl } from "@/shared/utils/createImgPath";

export const  smartardioSliderImage = Array.from({length : 8}).map( (e, i) => {
    return getCdnUrl(`/images/smartcardioS${i+1}.png`)
} )

export const  recordersSliders = Array.from({length : 3}).map( (e, i) => {
    return getCdnUrl(`/images/example${i+1}.png`)
} )


