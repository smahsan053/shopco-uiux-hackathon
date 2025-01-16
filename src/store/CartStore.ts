import { Item } from "@/app/shop/[id]/page";
import { create } from "zustand";

interface CartItems {
    product: Item,
    quantity: number
}
interface CartState {
    cartItems: CartItems[],
    addCartItem: (product: Item) => void
    reduceItemCount: (productId: string) => void
    removeCartItem: (productId: string) => void
    cartItemsCount: (productId: string) => number
    getTotalPrice: () => number

}

const useCartStore = create<CartState>()((set, get) => ({
    cartItems: [],
    addCartItem: (product) =>
        set((state) => {
            const existingItem = state.cartItems.find(
                (item) => item.product.id === product.id
            );
            if (existingItem) {
                return {
                    cartItems: state.cartItems.map((item) =>
                        item.product.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            } else {
                return { cartItems: [...state.cartItems, { product, quantity: 1 }] as CartItems[] };
            }
        }),
    reduceItemCount: (productId: string) =>
        set((state) => {
            const existingItem = state.cartItems.find((item) => item.product.id === productId)
            if (existingItem) {
                if (existingItem!.quantity > 1) {
                    return {
                        cartItems: state.cartItems.map((item) =>
                            item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                        )
                    }
                } else {
                    return { cartItems: state.cartItems.filter((item) => item.product.id !== productId) }
                }
            } else {
                return { cartItems: state.cartItems }
            }
        }),
    removeCartItem: (productId: string) =>
        set((state) => ({ cartItems: state.cartItems.filter((item) => item.product.id !== productId) })),
    cartItemsCount: (productId: string) => {
        const item = get().cartItems.find((item) => item.product.id === productId)
        return item ? item.quantity : 0
    },
    getTotalPrice: () => {
        const totalPrice = get().cartItems.map((item) => (item.product.discountedPrice ? item.product.discountedPrice * item.quantity : item.product.actualPrice * item.quantity)).reduce((prev, curr) => (prev + curr), 0)
        return totalPrice
    }
}))

export default useCartStore