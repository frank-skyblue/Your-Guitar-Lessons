const url = process.env.NODE_ENV === "production" ?
    process.env.REACT_APP_BACKEND_API_DOMAIN_PROD : process.env.REACT_APP_BACKEND_API_DOMAIN;

export { url };