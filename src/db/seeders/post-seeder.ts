import { QueryInterface } from 'sequelize'

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      'Posts',
      [
        {
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          content: 'Thành viên băng hải tặc mũ rơm!',
          privary: 'public',
          location: 'Đà Nẵng',
          post_type: 'user',
          user_id: 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002'
        },
        {
          post_id: '397236d5-0097-4ade-845f-24e429ef0e02',
          content: 'Tứ hoàng mới của biển cả mang tên Luffy (bài đăng văn bảng)',
          privary: 'friends',
          location: 'Quảng Nam',
          post_type: 'user',
          user_id: 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002',
          fanpage_id: ''
        },
        {
          post_id: '397236d5-0097-4ade-845f-24e429ef0e034',
          content: 'Hải tặc hot nhất mạng xã hội lúc này!',
          privary: 'private',
          location: 'Hà nội',
          post_type: 'user',
          user_id: 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002',
          fanpage_id: ''
        },
        {
          post_id: '397236d5-0097-4ade-845f-24e429ef0e0301',
          content: 'Bài viết văn với nội dung văn bản',
          privary: 'friends',
          location: 'Đà Nẵng',
          post_type: 'user',
          user_id: 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002',
          fanpage_id: ''
        },
        {
          post_id: '397236d5-0097-4ade-845f-24e429ef0e036-ka',
          content: 'Bài viết văn với nội dung hình ảnh',
          privary: 'public',
          location: 'Đà Nẵng',
          post_type: 'user',
          user_id: 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002',
          fanpage_id: ''
        },
        {
          post_id: '397236d5-0097-4ade-845f-24e429ef0e071',
          content: 'Bài viết văn với nội dung video',
          privary: 'public',
          location: 'Đà Nẵng',
          post_type: 'user',
          user_id: 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002',
          fanpage_id: ''
        },
        {
          post_id: '397236d5-0097-4ade-845f-24e429ef0e035',
          content: 'Sức mạnh thất vũ hải Jinbei!',
          privary: 'public',
          location: 'Hồ Chí Minh',
          post_type: 'user',
          user_id: 'jinbei-22c73-f703-4b16-847d-f61bae05-onepiece',
          fanpage_id: ''
        },
        {
          post_id: '397236d5-0097-4ade-845f-24e429ef0e036',
          content: 'Cựu thất vũ hải gia nhập băng hải tặc mũ rơm!',
          privary: 'private',
          location: 'Hồ Chí Minh',
          post_type: 'user',
          user_id: 'jinbei-22c73-f703-4b16-847d-f61bae05-onepiece',
          fanpage_id: ''
        },
        {
          post_id: '397236d5-0097-4ade-845f-24e429ef0e037',
          content: 'Thợ săn hải tặc - Vua bóng đêm (Zoro)!',
          privary: 'friends',
          location: 'Đà nẵng',
          post_type: 'user',
          user_id: 'zoro-22c73-f703-4b16-847d-f61bae05-onepiece',
          fanpage_id: ''
        },
        {
          post_id: '397236d5-0097-4ade-845f-24e429ef0e038',
          content: 'Zoro đang bị lạc đường ai tới cứu tôi với',
          privary: 'public',
          location: 'Huế',
          post_type: 'user',
          user_id: 'zoro-22c73-f703-4b16-847d-f61bae05-onepiece',
          fanpage_id: ''
        },
        {
          post_id: '397236d5-0097-4ade-845f-24e429ef01a1',
          content: 'Thành viên băng hải tặc mũ rơm!',
          privary: 'public',
          location: 'Đà Nẵng',
          post_type: 'fanpage',
          user_id: 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002',
          fanpage_id: 'fanpage-1'
        },
        {
          post_id: '397236d5-0097-4ade-845f-2u8429ef0e01',
          content: 'Zoro thức tỉnh haki bá vương!',
          privary: 'public',
          location: 'Hồ Chí Minh',
          post_type: 'user',
          user_id: 'zoro-22c73-f703-4b16-847d-f61bae05-onepiece',
          fanpage_id: ''
        },
        {
          post_id: '397236d5-0097-4ade-845f-2u8429ef0e02',
          content: 'Zoro - Vua bóng đêm!',
          privary: 'public',
          location: 'Hồ Chí Minh',
          post_type: 'user',
          user_id: 'zoro-22c73-f703-4b16-847d-f61bae05-onepiece',
          fanpage_id: ''
        },
        {
          post_id: '397236d5-0097-4ade-845f-2u8429ef0e03',
          content: 'Zoro đăng bài nội dung + chế độ bạn bè!',
          privary: 'friends',
          location: 'Hồ Chí Minh',
          post_type: 'user',
          user_id: 'zoro-22c73-f703-4b16-847d-f61bae05-onepiece',
          fanpage_id: ''
        },
        {
          post_id: '397236d5-0097-4ade-845f-2u8429ef0e04',
          content: 'Zoro đăng bài hình ảnh + chế độ riêng tư!',
          privary: 'private',
          location: 'Hồ Chí Minh',
          post_type: 'user',
          user_id: 'zoro-22c73-f703-4b16-847d-f61bae05-onepiece',
          fanpage_id: ''
        }
      ],
      {}
    )
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('Posts', {}, {})
  }
}
