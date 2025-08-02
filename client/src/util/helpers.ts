/**
 * @param classes 
 * @returns concatenated string of classes
 */
function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

// auth token helpers
const getStoredToken = (): string | null => localStorage.getItem('token');

const setStoredToken = (token: string): void => localStorage.setItem('token', token);

const removeStoredToken = (): void => localStorage.removeItem('token');

export { classNames, getStoredToken, setStoredToken, removeStoredToken };