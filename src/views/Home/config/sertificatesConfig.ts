import { getCdnUrl } from "@/shared/utils/createImgPath";

export const sertificateConfig = Array.from({length : 5}, (_, i) => getCdnUrl(`/images/sertificate${i + 1}.png`) )
