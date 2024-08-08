import Image from "next/image";

import Schools from "@/components/Schools";

import {getSchools} from '@/app/actions'
 

export default async function Home() {
 const data = await getSchools();
  return (
    <main>
      
      <Schools data={data} />
      
    </main>
  );
}
