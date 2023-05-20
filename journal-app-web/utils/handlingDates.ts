
export const getLocaleDate = (date: string) => {
    return new Date(date).toUTCString().split(' ').slice(0, 4).join(' ');
}
