import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import Feed from "../Feed/Feed";


const InstagramFeed = (token, ...props) => {

    //props items
    //token: for the specified token
    const [feeds, setFeeds] = useState([])
    const tokenProp = useRef(token);
    tokenProp.current = token;


    useEffect(() => {

        const abort = new AbortController();

        async function fetchInstagramPost() {
            axios
                .get(`https://graph.instagram.com/?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${props.token}`)
                .then(response => {
                    setFeeds(response.data.data)
                })
                .catch(error => {
                    console.log('error', error)
                })

        }

        fetchInstagramPost();

        return () => {
            abort.abort();
        };
    }, [props.limit])


    return (
        <div className="container">
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
        </div>
    )


}

InstagramFeed.propTypes = {
    limit: PropTypes.number.isRequired,
    token: PropTypes.string.isRequired,
};


export default InstagramFeed;