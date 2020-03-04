export module LoginModel {

  export interface Data {
    imageUrl: string;
    mobile: string;
    token: string;
    status: number;
    _id: string;
    userType: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  }

  export interface Error {
  }

  export interface RootObject {
    success: number;
    message: string;
    data: Data;
    error: Error;
  }

}

