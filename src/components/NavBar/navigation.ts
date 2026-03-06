type NavgationType = {
   id: number;
   title: string;
   route: string;
}[];

export const topNaviagtion: NavgationType = [
   {
      id: 4,
      title: "registration",
      route: "/registration",
   },
   // {
   //    id: 1,
   //    title: "search dog",
   //    route: "/search-dog",
   // },
];

export const navigation: NavgationType = [
   {
      id: 1,
      title: "home",
      route: "/",
   },
   {
      id: 2,
      title: "Events & Activities",
      route: "/events&activities",
   },
   {
      id: 3,
      title: "Breeders",
      route: "/breeders",
   },
   {
      id: 4,
      title: "Health & Welfare",
      route: "/health-welfare",
   },
   {
      id: 5,
      title: "development",
      route: "/development",
   },
   {
      id: 6,
      title: "education",
      route: "/education",
   },
   {
      id: 7,
      title: "charity",
      route: "/charity",
   },
   {
      id: 8,
      title: "about us",
      route: "/about-us",
   },
];
