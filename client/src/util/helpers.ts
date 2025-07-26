/**
 * @param classes 
 * @returns concatenated string of classes
 */
function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

// auth token helpers
const getStoredToken = (): string | null => localStorage.getItem('authToken');

const setStoredToken = (token: string): void => localStorage.setItem('authToken', token);

const removeStoredToken = (): void => localStorage.removeItem('authToken');

export { classNames, getStoredToken, setStoredToken, removeStoredToken };