import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import PlaceClientComponent from './PlaceClientComponent'
type PlaceProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const places = await db.place.findMany({
    select: { id: true },
  });

  return places.map((place) => ({
    id: place.id.toString(),
  }));
}

async function getPlace(id: string) {
  const place = await db.place.findUnique({
    where: { id: String(id) },
  });

  if (!place) {
    notFound();
  }

  return place;
}

export default async function PlacePage({ params }: PlaceProps) {
  const place = await getPlace(params.id);
  return <PlaceClientComponent place={place} />;
}
