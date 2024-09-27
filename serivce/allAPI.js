import { commonAPI } from "./commonAPI";
import { server_url } from "./server_url";

// upload a video
export const uploadVideoAPI =async(video) => {
    return await commonAPI ("POST", `${server_url}/allVideos`,video )
}

//get all video
export const getAllUploadedVideosAPI =async() => {
    return await commonAPI ("GET", `${server_url}/allVideos`,"")
}

//get a video
export const getVideoAPI =async(id) => {
    return await commonAPI ("GET", `${server_url}/allVideos/${id}`,"")
}

//delete a video
export const deleteVideoAPI =async(id) => {
    return await commonAPI ("DELETE", `${server_url}/allVideos/${id}`,{})
}

// add History
export const addHistoryAPI= async(video) => {
    return await commonAPI ("POST", `${server_url}/history`, video)
}

//getHistory
export const getHistoryAPI= async() => {
    return await commonAPI ("GET", `${server_url}/history`, "")
}

//deleteHistory
export const deleteHistoryAPI = async(id) => {
    return await commonAPI ("DELETE", `${server_url}/history/${id}`, {})
}

//add Category
export const addCategoryAPI = async(category) => {
    return await commonAPI ("POST", `${server_url}/category`, category)
}

//get Category
export const getCategoryAPI = async() => {
    return await commonAPI ("GET", `${server_url}/category`, "")
}

//delete Category
export const deleteCategoryAPI = async(id) => {
    return await commonAPI ("DELETE", `${server_url}/category/${id}`, {})
}

// update category
export const updateCategoryAPI =async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}