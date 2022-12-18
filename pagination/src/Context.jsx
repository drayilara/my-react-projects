import React, { createContext, useContext, useState, useEffect } from "react";

const Pagination = createContext();

const PaginationProvider = ({ children }) => {

    let [data, setData] = useState({
        users : [],
        profiles : [],
        loading : true,
        current_page : 1
    })

    const loadPage = (e) => {
        let { textContent:current_page } = e.target;

        let profile_per_page = 10;
        let first_page = 1;
        let last_page = 10;
        let prev_page = data.current_page - 1;
        let next_page = data.current_page + 1;

        if(current_page === "Prev") {
            if(data.current_page === first_page ) {
                current_page = last_page;
            }
            else {
                current_page = prev_page;
            }
        }

        if(current_page === "Next") {
            if(data.current_page === last_page) {
                current_page = first_page;
            }else {
                current_page = next_page;
            }
        }
        
        let index_of_last_profile = current_page * profile_per_page;
        let index_of_first_profile = index_of_last_profile - profile_per_page;
        let profiles_to_display = data.users.slice(index_of_first_profile, index_of_last_profile);

        return setData(prev => {
            return {
                ...prev,
                profiles : profiles_to_display,
                current_page : Number(current_page)
            }
        })
    }


    useEffect(
        () => {
            
        let per_page = 100;
        let starting_id = 0

        const getUsers = () => {
            let URL = `https://api.github.com/users?since=${starting_id}&per_page=${per_page}`;
            fetch(URL)
            .then(response => response.json())
            .then(data => setData(prev => {
                return {
                    ...prev,
                    users : data,
                    profiles : data.slice(0, 10),
                    loading : false
                }
            }))
        }

        getUsers();
    }      
    , [])

    const value = {
        loadPage,
        data
    }



    return <Pagination.Provider value={value}>
                { children }
           </Pagination.Provider>
}

const usePaginationContext = () => {
    return useContext(Pagination);
}

export{ usePaginationContext, PaginationProvider };
