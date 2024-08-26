import { QueryInterface } from 'sequelize'

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      'PostReactions',
      [
        {
          post_reaction_id: 'eb28cd1-8ed1-4f1e-b369-3378546c2e601',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          user_id: 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002',
          type: 'love'
        },
        {
          post_reaction_id: 'eb28cd1-8ed1-4f1e-b369-3378546c2e602',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          user_id: 'luffy-22c73-f703-4b16-847d-f61bae05-onepiece',
          type: 'love'
        },
        {
          post_reaction_id: 'eb28cd1-8ed1-4f1e-b369-3378546c2e603',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          user_id: 'zoro-22c73-f703-4b16-847d-f61bae05-onepiece',
          type: 'haha'
        },
        {
          post_reaction_id: 'eb28cd1-8ed1-4f1e-b369-3378546c2e604',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          user_id: 'sanji-22c73-f703-4b16-847d-f61bae05-onepiece',
          type: 'sad'
        },
        {
          post_reaction_id: 'eb28cd1-8ed1-4f1e-b369-3378546c2e605',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          user_id: 'nami-22c73-f703-4b16-847d-f61bae05-onepiece',
          type: 'love'
        },
        {
          post_reaction_id: 'eb28cd1-8ed1-4f1e-b369-3378546c2e606',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          user_id: 'usopp-22c73-f703-4b16-847d-f61bae05-onepiece',
          type: 'like'
        },
        {
          post_reaction_id: 'eb28cd1-8ed1-4f1e-b369-3378546c2e607',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          user_id: 'robin-22c73-f703-4b16-847d-f61bae05-onepiece',
          type: 'love'
        },
        {
          post_reaction_id: 'eb28cd1-8ed1-4f1e-b369-3378546c2e608',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          user_id: 'jinbei-22c73-f703-4b16-847d-f61bae05-onepiece',
          type: 'haha'
        },
        {
          post_reaction_id: 'eb28cd1-8ed1-4f1e-b369-3378546c2e609',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          user_id: 'akainu-22c73-f703-4b16-847d-f61bae05-onepiece',
          type: 'like'
        },
        {
          post_reaction_id: 'e1b28cd1-8ed1-4f1e-b369-3378546c2e612',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e02',
          user_id: 'akainu-22c73-f703-4b16-847d-f61bae05-onepiece',
          type: 'haha'
        },
        {
          post_reaction_id: 'eio1b28cd1-8ed1-4f1e-b369-3378546c2e1a',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e02',
          user_id: 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002',
          type: 'haha'
        },
        {
          post_reaction_id: '87cdf099-cb38-40bf-9e18-645734dded6e',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          user_id: 'chopper-62345-f678-9abc-def01234-onepiece',
          type: 'wow'
        },
        {
          post_reaction_id: '71defc2b-0ba7-494e-addd-c56ab60cb7be',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          user_id: 'franky-82345-f678-9abc-def01234-onepiece',
          type: 'sad'
        },
        {
          post_reaction_id: '17212f31-b28b-4467-8225-2f08e2e6bbc9',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          user_id: 'brook-92345-f678-9abc-def01234-onepiece',
          type: 'angry'
        },
        {
          post_reaction_id: '0eafbd19-0b04-4292-9a9c-68a4d68e934c',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          user_id: 'goku-12345-f678-9abc-def01234-dbz',
          type: 'like'
        },
        {
          post_reaction_id: '60af29e2-48eb-4642-920c-6e8830c16963',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          user_id: 'vegeta-22345-f678-9abc-def01234-dbz',
          type: 'love'
        },
        {
          post_reaction_id: '59e7da8c-38d7-4af6-a3c5-e81fa5baa615',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          user_id: 'gohan-32345-f678-9abc-def01234-dbz',
          type: 'haha'
        },
        {
          post_reaction_id: '0e495709-a013-4007-b029-fb7daca02a52',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          user_id: 'trunks-42345-f678-9abc-def01234-dbz',
          type: 'wow'
        },
        {
          post_reaction_id: '283fc540-3bad-44a7-977e-ce9dd235774f',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          user_id: 'bulma-52345-f678-9abc-def01234-dbz',
          type: 'sad'
        },
        {
          post_reaction_id: '3ea8383a-5c5b-4530-aa5b-a677b0daa10d',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          user_id: 'piccolo-62345-f678-9abc-def01234-dbz',
          type: 'angry'
        },
        {
          post_reaction_id: '23ce3064-1b04-4e13-b603-daf24cdbe68d',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          user_id: 'krillin-72345-f678-9abc-def01234-dbz',
          type: 'like'
        },
        {
          post_reaction_id: '9942efd0-78a4-4a61-8503-1c584703321e',
          post_id: '397236d5-0097-4ade-845f-24e429ef0e01',
          user_id: 'tien-92345-f678-9abc-def01234-dbz',
          type: 'love'
        }
      ],
      {}
    )
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('PostReactions', {}, {})
  }
}
