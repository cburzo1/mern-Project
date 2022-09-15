import './panelItem.css';

function PanelItem(props) {

    //console.log(props.item);
    console.log(props.item.timeEllapseSincePost);

    return (
        <div className="panelItem">
            <div className="thumbNail">

            </div>
            <div className="panelInfo">
                <div className="logo">

                </div>
                <div className="text">
                        <div className="title">
                            <h6>{props.item.thumbnailTitle}</h6>
                        </div>
                        <div className="userName">
                            <h6>{props.item.userName}</h6>
                        </div>   
                        <div className="viewsAndTimePosted">
                            <h6>{props.item.views} views | {props.item.timeEllapseSincePost} hours ago</h6>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default PanelItem;
