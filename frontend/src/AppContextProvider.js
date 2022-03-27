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
    function removeMemberFromTheList(email){
        for (let i=0; i< memberList.length; i++){

            if (memberList[i]['Email'] === email){
                const tempArray = memberList.slice()
                tempArray.splice(i, 1);
                setMemberList(tempArray);
                return true;
            }
        }
        return false;
    }
    
    const context = { memberList, addNewMemberToList, removeMemberFromTheList };
    


    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    );
}
