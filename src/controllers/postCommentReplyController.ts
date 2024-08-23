import { Request, Response } from 'express'
import { PostCommentReplyInput } from '../types/postCommentReply.type'
import { sendResponseSuccess } from '../utils/response'
import postCommentReplyService from '../services/postCommentReplyService'

class postCommentReplyController {
  // Danh sách trả lời bình luận
  async getAllPostCommentRepliesByCommentId(req: Request, res: Response) {
    if (req.user) {
      const { comment_id } = req.params

      const data = await postCommentReplyService.getAllPostCommentRepliesByCommentId(comment_id)

      sendResponseSuccess(res, data)
    }
  }

  // Thêm mới trả lời bình luận
  async addNewPostCommentReply(req: Request, res: Response) {
    if (req.user) {
      const { user_id } = req.user
      const { comment_id } = req.params
      const dataPostCommentReply: PostCommentReplyInput = req.body
      const file = req.file

      if (file) {
        dataPostCommentReply.media_url = file.path
      }

      const data = await postCommentReplyService.addNewPostCommentReply(comment_id, user_id, dataPostCommentReply)

      sendResponseSuccess(res, data)
    }
  }

  // Xóa trả lời bình luận
  async deletePostCommentReply(req: Request, res: Response) {
    if (req.user) {
      const { comment_reply_id } = req.params

      const data = await postCommentReplyService.deletePostCommentReply(comment_reply_id)

      sendResponseSuccess(res, data)
    }
  }
}

export default new postCommentReplyController()
