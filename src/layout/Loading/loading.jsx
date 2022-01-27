import Skeleton from '@mui/material/Skeleton';

export const LoopSkeleton = () => {
    let content = [];
    for (let i = 0; i < 15; i++) {
        let keyValue = i + 1;
        content.push(
            <div className="nothingToShow" key={keyValue}>
                <Skeleton animation="pulse" variant="rectangular" width={1400} height={40} style={{ 'borderRadius': '17px', 'margin': '10px' }} />
            </div>
        )
    }
    return content;
}

export const CardLoopSkeleton = () => {
    let content = [];
    for (let i = 0; i < 1; i++) {
        let keyValue = i + 1;
        content.push(
            <div className="nothingToShow" key={keyValue}>
                <Skeleton animation="pulse" variant="rectangular" width={1000} height={300} style={{ 'borderRadius': '17px', 'margin': '50px' }} />
            </div>
        )
    }
    return content;
}

