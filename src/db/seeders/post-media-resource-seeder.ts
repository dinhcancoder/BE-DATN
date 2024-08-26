import { QueryInterface } from 'sequelize'

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      'PostMediaResources',
      [
        {
          media_id: 'ap123c73-f703-4b16-847d-f61bae053a01',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          media_url: 'https://wallpapers.com/images/featured/one-piece-c0pujiakubq5rwas.jpg',
          media_type: 'image'
        },
        {
          media_id: 'ap123c73-f703-4b16-847d-f61bae053a02',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          media_url: 'https://wallpapergod.com/images/hd/one-piece-2560X1440-wallpaper-d9yjswfrzice8o04.jpeg',
          media_type: 'image'
        },
        {
          media_id: 'ap123c73-f703-4b16-847d-f61bae053a03',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e034',
          media_url:
            'https://i.ytimg.com/vi/2enD3HgYUMM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gPSg3MA8=&rs=AOn4CLCkS6UDDJagujj93wjcZVkYnqr8zg',
          media_type: 'image'
        },
        {
          media_id: 'ap123c73-f703-4b16-847d-f61bae053a04',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e035',
          media_url:
            'https://vietotaku.com/wp-content/uploads/2023/05/jinbe-ngoai-hinh-tinh-cach-va-suc-manh-cua-hiep-si-bien-ca-1-e1685267759779-750x375.jpg?v=1685267723',
          media_type: 'image'
        },
        {
          media_id: 'ap123c73-f703-4b16-847d-f61bae053a05',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e035',
          media_url: 'https://gamek.mediacdn.vn/133514250583805952/2020/4/5/l6-15860620170441866616716.jpeg',
          media_type: 'image'
        },
        {
          media_id: 'ap123c73-f703-4b16-847d-f61bae053a06',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e036',
          media_url: 'https://cdn.popsww.com/blog/sites/2/2023/09/jinbe-wano.jpg',
          media_type: 'image'
        },
        {
          media_id: 'ap123c73-f703-4b16-847d-f61bae053a07',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e037',
          media_url: 'https://acrossmag.com/wp-content/uploads/2022/11/zoro-roronoa-2022-birthday-one-piece.jpg',
          media_type: 'image'
        },
        {
          media_id: 'ap123c73-f703-4b16-847d-f61bae053a010',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e036-ka',
          media_url: 'https://images4.alphacoders.com/135/1352216.png',
          media_type: 'image'
        },
        {
          media_id: 'ap123c73-f703-4b16-847d-f61bae053a011',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e036',
          media_url: 'https://images5.alphacoders.com/135/thumb-1920-1355115.jpeg',
          media_type: 'image'
        },
        {
          media_id: 'ap123c73-f703-4b16-847d-f61baeu3a011',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e071',
          media_url:
            'https://res.cloudinary.com/dswainylr/video/upload/v1724661392/default/Y2meta.app-VIDEO_10s-_1080p_gcqrl0.mp4',
          media_type: 'video'
        },
        {
          media_id: 'ap123c73-f703-4b16-847d-iao01',
          post_id: '397236d5-0097-4ade-845f-2u8429ef0e01',
          media_url: 'https://images.alphacoders.com/129/1297729.jpg',
          media_type: 'image'
        },
        {
          media_id: '397236d5-0097-4ade-845f-2u8429ef0e02',
          post_id: '397236d5-0097-4ade-845f-2u8429ef0e02',
          media_url: 'https://images5.alphacoders.com/132/1325614.jpeg',
          media_type: 'image'
        },
        {
          media_id: '397236d5-0097-4ade-845f-2u8429ef0e03',
          post_id: '397236d5-0097-4ade-845f-2u8429ef0e04',
          media_url: 'https://www.hdwallpapers.in/download/green_hair_roronoa_zoro_hd_one_piece_2-2560x1440.jpg',
          media_type: 'image'
        }
      ],
      {}
    )
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('PostMediaResources', {}, {})
  }
}
