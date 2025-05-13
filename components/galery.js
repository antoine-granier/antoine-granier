import Image from 'next/image'

export default function ImageGallery({ images }) {
  return (
    <div className={styles.gallery}>
      {images.map((img) => (
        <div key={img.id} className={styles.galleryItem}>
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            layout="responsive"
          />
        </div>
      ))}
    </div>
  );
}