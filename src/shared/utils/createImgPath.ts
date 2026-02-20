const CDN_URL = (process.env.NEXT_PUBLIC_CDN_URL || '').replace(/\/+$/, '')

export const getCdnUrl = (path: string): string => {
    if (!CDN_URL) return path
    const normalizedPath = path.startsWith('/') ? path : `/${path}`
    return `${CDN_URL}${normalizedPath}`
}

export const createImageResolution = (imgName:string, resolution : number) => {
    return getCdnUrl(`/images/r/${resolution}/${imgName}`)
}
