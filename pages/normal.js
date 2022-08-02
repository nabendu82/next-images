import { photos } from "../photos"
import Image from 'next/image'

const normal = () => {
    return (
        <>
            <h2>Normal Images</h2>
            {photos.map((photo) => (
                <Image
                    key={photo.src}
                    width={photo.width}
                    height={photo.height}
                    src={photo.src}
                    alt={photo.alt}
                    layout="responsive"
                />
            ))}
        </>
    )
}

export default normal