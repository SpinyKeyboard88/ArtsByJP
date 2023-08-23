import PropTypes from "prop-types";

const Feed = (props) => {
    const { id, caption, media_type, media_url } = props.feed
    let post;

    const image = (
        <img
            width='100%'
            height='auto'
            id={id}
            src={media_url}
            alt={caption}
        />
    )

    switch (media_type) {
        case "VIDEO":
            post = (
                <video
                    width='100%'
                    height='auto'
                    src={media_url}
                    type="video/mp4"
                    controls playsInline
                >
                </video >
            );
            break;
        case "CAROUSEL_ALBUM":
            post = (
                image
            );
            break;
        default:
            post = (
                image
            );
            break;
    }

    return (
        <>
            {post}
        </>
    );
}

Feed.propTypes = {
    feed: PropTypes.shape({
        id: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        media_type: PropTypes.string.isRequired,
        media_url: PropTypes.string.isRequired,
    }).isRequired,
};

export default Feed;