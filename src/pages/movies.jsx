import MoviesBanner from "@/sections/MoviesBanner/index.js";
import Collections from "@/sections/Collections/index.js";

export const metadata = {
    title: 'Movies & Shows'
}


export default function () {
    return (
        <>
          <MoviesBanner />
          <Collections />
        </>
    )
}
