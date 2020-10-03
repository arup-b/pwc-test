import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    ///
  }

  getProducts(): any {
    // in real scenario - the following data to be availaed from an API endpoint
    const products = {
      list: [
        {
          img: 'assets/products/001.jpg',
          info: 'Inspiration, July 13, 2017',
          title: 'Dining Room',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          likes: '12 likes', comments: '5 Comments'
        },
        {
          img: 'assets/products/002.jpg',
          info: 'Inspiration, July 14, 2017',
          title: 'Living Room',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          likes: '12 likes', comments: '15 Comments'
        },
        {
          img: 'assets/products/003.jpg',
          info: 'Inspiration, July 20, 2017',
          title: 'Kitchen Room',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          likes: '8 likes', comments: '3 Comments'
        },
        {
          img: 'assets/products/004.jpg',
          info: 'Inspiration, July 23, 2017',
          title: 'Other Room',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          likes: '10 likes', comments: '13 Comments'
        },
        {
          img: 'assets/products/005.jpg',
          info: 'Inspiration, July 24, 2017',
          title: 'Title',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          likes: '11 likes', comments: '4 Comments'
        },
        {
          img: 'assets/products/006.jpg',
          info: 'Inspiration, July 27, 2017',
          title: 'Title',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          likes: '3 likes', comments: '2 Comments'
        },
        {
          img: 'assets/products/007.jpg',
          info: 'Inspiration, August 3, 2017',
          title: 'Title',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          likes: '13 likes', comments: '8 Comments'
        },
        {
          img: 'assets/products/008.jpg',
          info: 'Inspiration, August 5, 2017',
          title: 'Title',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          likes: '14 likes', comments: '18 Comments'
        },
      ]
    };
    //
    return new Promise((resolve, reject) => {
      // to handle http returned data when available
      // all http endpoints to be listed in a Global Constant file for easy maintaining & scalability
      resolve(products);
    });
  }
}
