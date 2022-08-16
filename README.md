# NASA Mars Rover Photos

This is an example project required for the SDJS Course at Enroute.

Note: I struggled a bit with the project set up and all the monorepo stuff as well as setting up the tests configs. That costed time so I decided to leave this project in this functional state.

## Stack

* [Turborepo](https://turborepo.org/): Monorepo management and build tool. I already had used Nx in the past so I wanted to give turborepo a try.
* [Vite](https://vitejs.dev/): Basically a replacement of CRA. It's faster and meant for production-ready applications.
* [TailwindCSS](https://tailwindcss.com/): CSS utility-first library for styling. I didn't want to use a whole component library for a small project and tailwind is very small in size.
* [tRPC](https://trpc.io/): Library for writing typesafe APIs with typescript. It's a really cool tool and wanted to give it a try as it sits in between of REST and GraphQL.
* [React Query](https://tanstack.com/query/v4/): Library for asynchronous state management. Goodbye Redux.
* [pnpm](https://pnpm.io/): A better architected node package manager.

## Running the project

Clone the repo:
```
git clone git@github.com:LuisxSullivaN/nasa_mars_rover_photos.git
```

Run the project:
```
cd nasa_mars_rover_photos
pnpm install && pnpm run dev
```

The project should be running at `http://localhost:5173` (frontend) and at `http://localhost:4000` (backend).
