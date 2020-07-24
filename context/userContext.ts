import React from 'react';

const UserContext = React.createContext<null | { name: string }>(null);

export { UserContext };
