import { IOAuth } from "./interfaces";

export class GoogleAuth implements IOAuth {
  authenticate() {
    console.log('Perform an http call to Google');
    console.log('Do your stuff here');
    return new Promise<boolean>((resolve, reject) => {
      resolve(true);
    });
  }
}

export class FacebookAuth implements IOAuth {
  authenticate() {
    console.log('Perform an http call to Facebook');
    console.log('Do your stuff here');
    return new Promise<boolean>((resolve, reject) => {
      resolve(true);
    });
  }
}

export class LinkedInAuth implements IOAuth {
  authenticate() {
    console.log('Perform an http call to LinkedIn');
    console.log('Do your stuff here');
    return new Promise<boolean>((resolve, reject) => {
      resolve(true);
    });
  }
}