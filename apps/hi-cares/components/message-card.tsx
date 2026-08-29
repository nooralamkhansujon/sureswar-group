export function MessageCard({
  name,
  title,
  intro,
  body,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  imageFit = "cover",
  imageObjectPosition,
}: {
  name: string;
  title: string;
  intro: string;
  body: string[];
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageFit?: "cover" | "contain";
  imageObjectPosition?: string;
}) {
  return (
    <article className="message-card">
      <figure
        className={`message-card-photo${imageFit === "contain" ? " message-card-photo--contain" : ""}`}
      >
        <img
          src={image}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          loading="lazy"
          decoding="async"
          style={imageObjectPosition ? { objectPosition: imageObjectPosition } : undefined}
        />
      </figure>
      <div className="message-card-body">
        <h3>{name}</h3>
        <p className="role">{title}</p>
        <p>{intro}</p>
        {body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        <p className="sign-off">
          — {name}, {title}
        </p>
      </div>
    </article>
  );
}
