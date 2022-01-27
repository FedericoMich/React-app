import axios from 'axios';

//owner=login 
//repo=repoName
export const listDetailRepos = async ( login, repoName ) => {

    try {
        const response = await axios.get(
            `https://github-function-app.azurewebsites.net/api/RepoGitDetail?owner=${login}&repo=${repoName}`
        );
        return response.data ? response.data : undefined;
      

    } catch (error) {
        console.error(error);
        throw error;
    }
}