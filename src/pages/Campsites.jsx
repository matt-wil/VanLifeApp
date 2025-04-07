// API call
import React, { useEffect, useState } from 'react';

function useCampgroundData(searchQuery="mountain") {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!searchQuery) return;

        setLoading(true);
            fetch(`/api/campgrounds?q=${searchQuery}`, {
                method: 'GET',
                headers: {
                    "accept": "application/json",
                },
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data.results);
                setLoading(false);
            })
            .catch((error) => {
                setError(error)
                setLoading(false);
            })
    }, [searchQuery]);
    return {data, error, loading};
}


export default function CampgroundSearch({ searchQuery }) {
    const {data, error, loading} = useCampgroundData(searchQuery);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    if (!data || data.length === 0) return <p>No results found.</p>

    return (
        <div>
            <h2>Campgrounds for: {searchQuery}</h2>
            <ul>
                {data.map((campground) => (
                    <li key={campground.id}>
                        <h3>{campground.name}</h3>
                        <p>{campground.shortDescription}</p>
                        <p><strong>Sites:</strong> {campground.numberOfCampsites}</p>
            {campground.bookingLink && (
              <p>
                <a href={campground.bookingLink} target="_blank" rel="noopener noreferrer">
                  Book Here
                </a>
              </p>
            )}
                    </li>
                ))}
            </ul>
        </div>
    )
}