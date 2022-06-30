import require from "@/utils/require"
// 上传图片
export function oneImgUploadApi(data) {
    return require({
        url: '/apimine/common/oneImgUploadApi',
        method: 'post',
        data: data,
    })
}