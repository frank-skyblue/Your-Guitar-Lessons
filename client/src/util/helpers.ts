/**
 * @param classes 
 * @returns concatenated string of classes
 */
function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

function extractDateInfo(date: Date) {
    if (!(date instanceof Date)) {
        date = new Date(date)
    }

    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    const dateStr = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const time = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    return { day, date: dateStr, time };
}

// auth token helpers
const getStoredToken = (): string | null => localStorage.getItem('token');

const setStoredToken = (token: string): void => localStorage.setItem('token', token);

const removeStoredToken = (): void => localStorage.removeItem('token');

export { classNames, extractDateInfo, getStoredToken, setStoredToken, removeStoredToken };