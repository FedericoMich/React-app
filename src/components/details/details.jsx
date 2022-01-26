import { useRepos } from '../../hooks/useRepos'
import { DetailsCard } from './detailscard';
import { CardLoopSkeleton } from '../../layout/Loading/loading';
import './details.css'
import { useParams } from 'react-router-dom';
import { RefreshBtn } from '../HeaderContent/RefreshBtn';



export const Details = () => {
    const { idRepo } = useParams();
    const { repos, loading, handelUpdate, onError } = useRepos();
    const fiteredDetails = (repos.filter((item) => item.idRepo.toString() === idRepo))



    return (
        <div className="mainContainer">
            <div className='buttonRefreshContainer'>
                <RefreshBtn handelUpdate={handelUpdate} loading={loading} />
            </div>
            {repos && !loading && (<DetailsCard fiteredDetails={fiteredDetails} />)}
            {onError && !repos && <div className='errorContainer'><h1 class="error">Server Error</h1></div>}
            {loading && <CardLoopSkeleton />}
        </div>
    );
}

