export function addToCart(comic) {
    function verifyAndCreateCart() {
        !localStorage.cart ? localStorage.cart = JSON.stringify([]) : null
    }

    function getNewListOfCart(cart, newComic) {
        const resultFindComicInCart = cart.filter(comicStoraged => {
            return comicStoraged.id == newComic.id
        })

        if(resultFindComicInCart.length) {
            resultFindComicInCart[0].quantity += 1
            return cart.map(comicStoraged => {
                if(comicStoraged.id == resultFindComicInCart[0].id) {
                    return resultFindComicInCart[0]
                } else {
                    return comicStoraged
                }
            })
        } else {
            newComic.quantity = 1
            cart.push(newComic)
            return cart
        }
    }

    verifyAndCreateCart()
    const cartObject = JSON.parse(localStorage.cart)
    localStorage.cart = JSON.stringify(getNewListOfCart(cartObject, comic))
}
