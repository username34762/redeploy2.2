export const isAdministrator = (userId: string | null | undefined) => {
    const administrators = process.env.NEXT_PUBLIC_ADMINISTRATORS?.split(',') || [];
    return administrators.includes(userId || '');
}
