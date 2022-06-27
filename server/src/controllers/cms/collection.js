import { InterfaceSetupModel } from "../../model/InterfaceSetup"
import { collectionVideo } from "../../utils/collectionVideo"
import logger from "../../utils/logger"
import response from "../../utils/response"

/**
 * 
 * @description 采集苹果cms视频
 */
export const maccmsCollection = async ({ id, h = '' }) => {
  try {
    const data = await InterfaceSetupModel.findOne({
      where: {
        id
      }
    })

    collectionVideo({
      id,
      url: data.interfaceUrl,
      h,
    })

    return response.success(200, {}, '开始采集视频')
  } catch (error) {
    logger.error(error)
    return response.error(500, error, '服务器异常')
  }
}
