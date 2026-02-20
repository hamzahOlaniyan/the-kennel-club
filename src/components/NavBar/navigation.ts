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
   {
      id: 1,
      title: "search dog",
      route: "/search-dog",
   },
];

export const naviagtion: NavgationType = [
   {
      id: 1,
      title: "home",
      route: "/",
   },
   {
      id: 4,
      title: "Events & Activities",
      route: "/events&activities",
   },
   {
      id: 5,
      title: "Dog Info",
      route: "/dog-breeding",
   },
   {
      id: 6,
      title: "Resources",
      route: "/healthcare",
   },
   {
      id: 2,
      title: "about us",
      route: "/about-us",
   },
];
