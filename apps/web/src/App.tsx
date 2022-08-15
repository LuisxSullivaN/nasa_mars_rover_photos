import React from 'react';
import clsx from 'clsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Button, Drawer, FilterIcon, Carousel, Photo } from 'ui';
import { trpc } from './trpc';

const cameras = [
  { display: 'All Cameras', name: 'all' },
  { display: 'Front Hazard Avoidance Camera', name: 'fhaz' },
  { display: 'Rear Hazard Avoidance Camera', name: 'rhaz' },
  { display: 'Mast Camera', name: 'mast' },
  { display: 'Chemistry and Camera Complex', name: 'chemcam' },
  { display: 'Mars Hand Lens Imager', name: 'mahli' },
  { display: 'Mars Descent Imager', name: 'mardi' },
  { display: 'Navigation Camera', name: 'navcam' },
];

const HomePage = () => {
  const [isFilterDrawerOpen, setFilterDrawerOpen] = React.useState(false);
  const [isCarouselOpen, setCarouselOpen] = React.useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = React.useState<number>();
  const [activeCamera, setActiveCamera] = React.useState<{
    display: string;
    name: string;
  }>(cameras[0]);
  const { data: photos, isLoading } = trpc.useQuery([
    'photos',
    activeCamera?.name,
  ]);

  return (
    <>
      <div className="bg-zinc-900 min-h-screen">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-center md:justify-start items-center py-5 px-4">
            <a href="https://www.nasa.gov/" target="_blank">
              <img src="/nasa.svg" className="h-24" alt="Nasa logo" />
            </a>
            <h1 className="text-4xl font-extrabold text-white inline-block bg-gradient-to-r from-white via-red-500 to-blue-500 bg-clip-text text-transparent">
              Mars Rover Photos
            </h1>
          </div>
          <div className="p-5 md:px-8 text-white">
            <div className="grid md:grid-cols-[1fr_3fr]">
              <ul className="hidden pr-4 md:block">
                {cameras.map((camera) => (
                  <li
                    key={camera.name}
                    className={clsx(
                      'mb-2 last:mb-0 cursor-pointer first:pb-2 first:border-b-[0.5px] fist:border-white/30',
                      activeCamera?.name === camera.name && 'font-bold'
                    )}
                    onClick={() => setActiveCamera(camera)}
                  >
                    {camera.display}
                  </li>
                ))}
              </ul>
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-lg font-bold">
                      {activeCamera?.display || 'All Cameras'}
                    </p>
                    <p>{isLoading ? 'Loading' : photos?.length || 0} photos</p>
                  </div>
                  <Button
                    className="md:hidden"
                    leftIndicator={<FilterIcon width={24} fill="white" />}
                    onClick={() => {
                      setFilterDrawerOpen(true);
                    }}
                  >
                    Filter
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                  {photos?.map((photo, index) => (
                    <Photo
                      key={photo.id}
                      photo={photo}
                      onClick={() => {
                        setActivePhotoIndex(index);
                        setCarouselOpen(true);
                      }}
                      pointer
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Drawer
          isOpen={isFilterDrawerOpen}
          onDismiss={() => setFilterDrawerOpen(false)}
          animation="slide"
        >
          <p className="text-lg font-semibold mb-6">Filter by camera</p>
          <ul>
            {cameras.map((camera) => (
              <li
                key={camera.name}
                className={clsx(
                  'mb-2 last:mb-0 cursor-pointer first:pb-2 first:border-b-[0.5px] fist:border-white/30',
                  activeCamera?.name === camera.name && 'font-bold'
                )}
                onClick={() => setActiveCamera(camera)}
              >
                {camera.display}
              </li>
            ))}
          </ul>
        </Drawer>
        <Drawer
          isOpen={isCarouselOpen}
          onDismiss={() => setCarouselOpen(false)}
          animation="fade"
        >
          <Carousel activeIndex={activePhotoIndex}>
            {photos?.map((photo) => (
              <Photo key={photo.id} photo={photo} />
            ))}
          </Carousel>
        </Drawer>
      </div>
    </>
  );
};

const client = new QueryClient();

export const App = () => {
  const [trpcClient] = React.useState(() =>
    trpc.createClient({
      url: 'http://localhost:4000/trpc',
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={client}>
      <QueryClientProvider client={client}>
        <HomePage />
      </QueryClientProvider>
    </trpc.Provider>
  );
};
