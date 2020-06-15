import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL,
  SET_CART_PRODUCTS
} from './types';

export function setPurchaseDetail(_id) {
  return ({
    type: SET_PURCHASE_DETAIL,
    payload: _id
  })
}



export function fetchCartProducts() {
  return ({
    type: SET_CART_PRODUCTS,
    payload: [
      {
          _id: 0,
          product: {
                  _id: 0,
                  title: 'Javascript in the Browser',
                  description: "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.",
                  price: 1.99,
                  belongsTo: [0, 1]
          },
          quantity: 2
      },
      {
          _id: 1,
          product: {
                  _id: 1,
                  title: 'Graph Database',
                  description: "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.",
                  price: 1.99,
                  belongsTo: [0, 6]
          },
          quantity: 1
      }
    ]
  })
}







export function fetchUserPurchases() {
  return ({
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 1,
        total: '$8.02',
        orderNumber: '123',
        orderDate: new Date().toDateString(),
        creditCard: '0000 1111 222',
        user: {
          name: 'Varun Sai',
          shippingAddress: '1234 Sea Street' 
        }
      },
      {
        _id: 2,
        total: '$9.02',
        orderNumber: '124',
        orderDate: new Date().toDateString(),
        creditCard: '0000 1111 333',
        user: {
          name: 'Saravana',
          shippingAddress: '1234 Ocean Street' 
        }
      },
      {
        _id: 3,
        total: '$10.02',
        orderNumber: '125',
        orderDate: new Date().toDateString(),
        creditCard: '0000 1111 444',
        user: {
          name: 'Jyothi',
          shippingAddress: '1235 Sea Street' 
        }
      },
      {
        _id: 4,
        total: '$11.02',
        orderNumber: '126',
        orderDate: new Date().toDateString(),
        creditCard: '0000 1111 555',
        user: {
          name: 'Vidhya',
          shippingAddress: '1234 Pondy Street' 
        }
      },
      {
        _id: 5,
        total: '$12.02',
        orderNumber: '156',
        orderDate: new Date().toDateString(),
        creditCard: '0000 1111 666',
        user: {
          name: 'Pushpa',
          shippingAddress: '1234 Lawspet Street' 
        }
      },
      {
        _id: 6,
        total: '$13.02',
        orderNumber: '12',
        orderDate: new Date().toDateString(),
        creditCard: '0000 1111 777',
        user: {
          name: 'Varun Sai',
          shippingAddress: '1234 Sea Street' 
        }
      },
      {
        _id: 7,
        total: '$80.02',
        orderNumber: '1231',
        orderDate: new Date().toDateString(),
        creditCard: '0000 1234 222',
        user: {
          name: 'Varun Sai Saravana',
          shippingAddress: '1234 Sea Street' 
        }
      },
      {
        _id: 8,
        total: '$89.02',
        orderNumber: '12323',
        orderDate: new Date().toDateString(),
        creditCard: '0000 1111 5555',
        user: {
          name: 'Jyothi',
          shippingAddress: '1239 Bay Street' 
        }
      }
    ]
  })
}