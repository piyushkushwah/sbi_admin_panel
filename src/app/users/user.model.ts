export module UserModel {

  export interface Datum {
    message: string;
    status: number;
    _id: string;
    name: string;
    email: string;
    phone: string;
    subject: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  }

  export interface Error {
  }

  export interface RootObject {
    success: number;
    message: string;
    data: Datum[];
    error: Error;
  }

}

