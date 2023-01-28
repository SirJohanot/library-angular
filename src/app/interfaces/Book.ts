export interface Book {
    id: number,
    title: string,
    authors: { name: string }[],
    genre: { name: string },
    publisher: { name: string },
    publishmentYear: number,
    amount: number,
    deleted: boolean
}