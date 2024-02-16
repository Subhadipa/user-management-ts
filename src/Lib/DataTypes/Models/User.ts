export type CommonModelType = {
    // createdOn?: Date
    // updatedOn?: Date
    timestamps?:Date
    isDeleted?: boolean
}

export type UserModelType<T=Record<string,any>> = T & {
    firstName: string
    lastName: string
    email: string
    password: string
    token: string
    image?: string
    age: number,
    comparePassword?(candidatePassword: string): boolean
}