import { ExpertsProps } from "@/types"
import Image from "next/image"

function ExpertsSection({ data }: { data: ExpertsProps[]}) {
  return (
    <div>
      <h2 className="text-5xl text-center">Meet Out Top Experts</h2>
      <div className="flex grid grid-cols-3 gap-4">
        {data?.map(({ _id, name, state, profileImage, socials }) => (
          <div className="relative aspect-[500/500]" key={_id} >
            {profileImage ? (
              <>
                <Image
                  src={profileImage}
                  alt={`Picture of ${name} from ${state}`}
                  style={{ objectFit: 'cover' }}
                  fill
                  className="saturate-0"
                  sizes="500"
                  loading="lazy"
                />
                <div className="gradient-overlay absolute w-full h-full" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0) 57%, rgb(0, 0, 0) 100%)' }}></div>
              </>
            ) : (
              <div style={{ background: 'gray', objectFit: 'cover', width: '100%', height: '100%' }}></div>
            )}
            <div className="absolute bottom-0 py-4 px-6 flex justify-between items-center w-full">
              <span className="text-white">{name} - {state}</span>
              {socials && (
                <div className="flex gap-2">
                  {socials.map(({ title, url }, id) => (
                    <a href={url} className="href" key={id}>
                      <Image
                        src={`/${title}-icon.png`}
                        alt={`Social media Instagram icon`}
                        width="30"
                        height="30"
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExpertsSection