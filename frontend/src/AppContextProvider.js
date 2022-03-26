import {useState} from 'react';
import React from 'react';
import defaultMemberList from './MemberList.json';
import createPersistedState from 'use-persisted-state';

const membershipData = createPersistedState('membershipData');

export const AppContext = React.createContext({});

export function AppContextProvider({children}){
    
    const [memberList, setMemberList] = membershipData(defaultMemberList);//useState(defaultMemberList);
    
    function addNewMemberToList(values){
        setMemberList([...memberList, values]);
        return memberList;
    }
    
    const context = { memberList, addNewMemberToList };
    

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    );
}
