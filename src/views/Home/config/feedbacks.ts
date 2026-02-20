import { getCdnUrl } from "@/shared/utils/createImgPath";

export const feedbacks = Array.from({length:9}, (i, k) => {
    return getCdnUrl(`/images/feedback${k + 1}.png`)
})
