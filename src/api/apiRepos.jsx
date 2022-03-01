import axios from 'axios';

export const listRepos = async () => {
    try {
        const response = await axios.get(
            process.env.REACT_APP_repos
        );
        return response.data && response.data.results ? response.data.results : undefined;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const listDetailRepos = async ( login, repoName ) => {

    try {
        const response = await axios.get(
            process.env.REACT_APP_detailRepos + `?owner=${login}&repo=${repoName}`
        );
        return response.data ? response.data : undefined;
      
    } catch (error) {   
        console.error(error);
        throw error;
    }
}



