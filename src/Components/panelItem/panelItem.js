import './panelItem.css';

function PanelItem() {
    return (
        <div className="panelItem">
            <div className="thumbNail">

            </div>
            <div className="panelInfo">
                <div className="logo">

                </div>
                <div className="text">
                        <div className="title">
                            <h6>Video: How To Thumbnail</h6>
                        </div>
                        <div className="userName">
                            <h6>Ed Sumit</h6>
                        </div>   
                        <div className="viewsAndTimePosted">
                            <h6>30 views 2 hours ago</h6>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default PanelItem;
