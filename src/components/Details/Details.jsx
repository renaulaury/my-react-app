function Details() {
    const spe = {
        dev : "js",
        favoriteRecipe: "lasagne",
        favoriteGame: "sdao",
    }
    return (
        <section>
            <ul>
                <li>{spe.dev}</li>
                <li>{spe.favoriteRecipe}</li>
                <li>{spe.favoriteGame}</li>
            </ul>
        </section>
    )
}

export default Details
