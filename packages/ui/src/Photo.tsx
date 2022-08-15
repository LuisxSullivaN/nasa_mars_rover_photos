import clsx from 'clsx';
import type { PhotoType } from 'server';
import { AspectBox } from './AspectBox';

type PhotoProps = {
  photo: PhotoType;
  onClick?: () => void;
  pointer?: boolean;
};

export const Photo = ({ photo, onClick, pointer }: PhotoProps) => {
  return (
    <figure>
      <AspectBox ratio="square">
        <img
          src={photo.img_src}
          alt={`Photo ${photo.id} from camera ${photo.camera?.full_name}`}
          className={clsx('h-full mb-2', pointer && 'cursor-pointer')}
          loading="lazy"
          onClick={onClick}
        />
      </AspectBox>
      <figcaption className="text-lg text-center mt-2">
        Photo ID: {photo.id}
      </figcaption>
    </figure>
  );
};
