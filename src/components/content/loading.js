import Skeleton from '@mui/material/Skeleton';

  const LoopSkeleton = () => {
        let content = [];
        for (let i = 0; i < 15; i++) {
            content.push(
                <div className="nothingToShow">
                    <Skeleton animation="pulse" variant="rectangular" width={1400} height={40} style={{ 'borderRadius': '17px', 'margin': '10px' }} />
                </div>
            )
        }
        return content;
    }
export default  LoopSkeleton
