export type Session = {
   user: User;
   expires: Date;
};

export type User = {
   name: string;
   email: string;
};
