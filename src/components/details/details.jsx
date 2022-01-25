import { useRepos } from '../../hooks/useRepos'
import { DetailsCard } from './detailscard';
import { HeaderContent } from '../../components/content/headerContent'
import { CardLoopSkeleton } from '../content/loading';
import './details.css'
import { useParams } from 'react-router-dom';



export const Details = () => {
    const { idRepo } = useParams();
    const { repos, loading, handelUpdate, onError } = useRepos();
    const fiteredDetails = (repos.filter((item) => item.idRepo.toString() === idRepo))



    return (
        <div className="mainContainer">
            <HeaderContent repos={fiteredDetails} handelUpdate={handelUpdate} loading={loading} />
            {repos && !loading && (<DetailsCard fiteredDetails={fiteredDetails} />)}
            {onError &&  !repos && <div className='errorContainer'><h1 class="error">Server Error</h1></div>}
            {loading && <CardLoopSkeleton />}
        </div>
    );
}

