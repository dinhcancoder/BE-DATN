import { Router } from 'express'
import Middleware from '../../middleware'
import { tryCatch } from '../../utils/response'
import messageController from '../../controllers/messageController'
import uploadCloud from '../../middleware/uploader'

const router = Router()

router.get('/getmessage/:id', Middleware.verifyToken, tryCatch(messageController.getMessage))
router.get('/conversation', Middleware.verifyToken, tryCatch(messageController.getConversation))
router.get('/search/:conversationId/:query', Middleware.verifyToken, tryCatch(messageController.searchMessage))
router.get('/getrecallmessage', Middleware.verifyToken, tryCatch(messageController.getRecallMessage))
//  ------------------- //
router.post('/sendmessage', Middleware.verifyToken, tryCatch(messageController.sendMessage))
router.post(
  '/sendmessageattach',
  uploadCloud.single('messageattach'),
  Middleware.verifyToken,
  tryCatch(messageController.sendMessageAttach)
)
router.post('/replymessage', Middleware.verifyToken, tryCatch(messageController.replyMessage))
router.post('/sendReactmessage', Middleware.verifyToken, tryCatch(messageController.sendReactMessage))
router.post('/creategroup', Middleware.verifyToken, tryCatch(messageController.createGroup))
router.post('/addmemberstogroup', Middleware.verifyToken, tryCatch(messageController.addMembersToGroup))
router.post('/recallmessage', Middleware.verifyToken, tryCatch(messageController.recallMessage))
//  ------------------- //
router.delete('/deleteconversation/:id', Middleware.verifyToken, tryCatch(messageController.deteleConversation))

export default router
