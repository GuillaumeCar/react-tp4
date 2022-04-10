export default function VideoThumbnail({ file, id, thumbnail, title, description, navigate }) {
    return (
        <a onClick={() => navigate('details', {id})}>
            <img src={`https://source.unsplash.com/${thumbnail}/600x340`} />
            <section className="infos">
                <h4>{title}</h4>
                <p>{description}</p>
            </section>
        </a>
    );
}