export default function AlbumComponent({album}) {
    return (
        <div>
            User -{album.userId} Album - {album.id} - {album.title}
        </div>
    );
}