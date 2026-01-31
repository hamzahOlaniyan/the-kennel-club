type NavgationType = {
   id: number;
   title: string;
   route: string;
}[];

export const naviagtion: NavgationType = [
   {
      id: 1,
      title: "home",
      route: "/",
   },
   {
      id: 2,
      title: "about us",
      route: "/about-us",
   },
   {
      id: 3,
      title: "your dog",
      route: "/auth/register",
   },
   // {
   //    id: 4,
   //    title: "registration",
   //    route: "/registeration",
   // },
];

export const topNaviagtion: NavgationType = [
   {
      id: 1,
      title: "search dog",
      route: "/auth/register",
   },
   {
      id: 2,
      title: "sign in",
      route: "/auth/sign-in",
   },
   {
      id: 3,
      title: "sign up",
      route: "/auth/register",
   },
];
