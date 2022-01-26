import FindReplaceIcon from '@mui/icons-material/FindReplace';
import Button from '@mui/material/Button';

export const RefreshBtn = (props) => {
    return (
        <div className="tableButton">
            <Button style={{
                borderRadius: 35,
                color: "#0d2137",
                borderColor: "#0d2137",
                padding: "12px 30px",
                fontSize: "16px"
            }}
                variant="outlined" onClick={() => props.handelUpdate()} startIcon={<FindReplaceIcon />}>
                Refresh
            </Button>
        </div>
    )
};
