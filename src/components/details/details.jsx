import { useRepos } from '../../hooks/useRepos'
import { DetailsCard } from './detailscard';
import {HeaderContent} from '../../components/content/headerContent'
import{ CardLoopSkeleton }from '../content/loading';



export const Details = () => {
    const {repos, loading, handelUpdate} = useRepos();
    const idPath = window.location.pathname.split('/').pop("=");
    const fiteredDetails = (repos.filter((item) => item.idRepo == idPath))
   
   
    return (
        <>
         <HeaderContent repos={repos} handelUpdate={handelUpdate} loading={loading}/>
        {repos &&  !loading &&(<DetailsCard fiteredDetails={fiteredDetails}/>)}
        {loading && <CardLoopSkeleton/>}
        </>
    );
}

