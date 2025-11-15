export type UserContext = {
     id: number,
     firstName: string,
     lastName: string,
     email: string,
     mobile: string,
     addressLineOne: string,
     status: { id: number, value: string },
     provinceId: number,
     cityId: number,
     postalCode: string
     updatedAt: string,
     createdAt: string,
     isLogged: boolean,
}
