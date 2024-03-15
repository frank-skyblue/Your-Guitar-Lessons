/**
 * @param classes 
 * @returns concatenated string of classes
 */
function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export { classNames };