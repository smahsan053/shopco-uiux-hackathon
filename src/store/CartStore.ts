import { CATALOG_QUERYResult } from "sanity.types";
import { create } from "zustand";

interface CartItems {
    product: CATALOG_QUERYResult[0],
    quantity: number
    sizes: string[]
    colors: string[]
}

interface CartState {
    cartItems: CartItems[],
    color: string,
    setColor: (newColor: string) => void
    size: string,
    setSize: (newSize: string) => void
    addCartItem: (product: CATALOG_QUERYResult[0], size: string, color: string) => void
    reduceItemCount: (productId: string) => void
    removeCartItem: (productId: string) => void
    cartItemsCount: (productId: string) => number
    getTotalPrice: () => number
}

const useCartStore = create<CartState>()((set, get) => ({
    cartItems: [],
    color: "",
    setColor: (newColor) => set({ color: newColor }),
    size: "",
    setSize: (newSize) => set({ size: newSize }),
    addCartItem: (product, size, color) =>
        set((state) => {
            const existingItem = state.cartItems.find(
                (item) => item.product._id === product._id
            );
            if (existingItem) {
                return {
                    cartItems: state.cartItems.map((item) =>
                        item.product._id === product._id
                            ? { ...item, quantity: item.quantity + 1, sizes: [...item.sizes, size], colors: [...item.colors, color] }
                            : item
                    ),
                };
            } else {
                return { cartItems: [...state.cartItems, { product, quantity: 1, sizes: [size], colors: [color] }] as CartItems[] };
            }
        }),
    reduceItemCount: (productId: string) =>
        set((state) => {
            const existingItem = state.cartItems.find((item) => item.product._id === productId)
            if (existingItem) {
                if (existingItem!.quantity > 1) {
                    return {
                        cartItems: state.cartItems.map((item) =>
                            item.product._id === productId ? { ...item, quantity: item.quantity - 1, sizes: item.sizes.slice(0, -1), colors: item.colors.slice(0, -1) } : item
                        )
                    }
                } else {
                    return { cartItems: state.cartItems.filter((item) => item.product._id !== productId) }
                }
            } else {
                return { cartItems: state.cartItems }
            }
        }),
    removeCartItem: (productId: string) =>
        set((state) => ({ cartItems: state.cartItems.filter((item) => item.product._id !== productId) })),
    cartItemsCount: (productId: string) => {
        const item = get().cartItems.find((item) => item.product._id === productId)
        return item ? item.quantity : 0
    },
    getTotalPrice: () => {
        const totalPrice = get().cartItems.map((item) => (item.product.discountPercent! > 0 ? Math.ceil(item.product.price! - (item.product.price! * item.product.discountPercent! / 100)) * item.quantity : item.product.price! * item.quantity)).reduce((prev, curr) => (prev + curr), 0)
        return totalPrice
    },
}))

export default useCartStore

