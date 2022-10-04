import './panelItem.css';

function PanelItem(props) {

    return (
        <div className="panelItem">
            <div className="thumbNail">
                <img src={'http://localhost:3001/' + props.item.imageUrl}/>
            </div>
            <div className="panelInfo">
                <div className="logo">

                </div>
                <div className="text">
                        <div className="title">
                            <h6>{props.item.thumbnailTitle}</h6>
                        </div>
                        <div className="userName">
                            <h6>{props.item.creator.userName}</h6>
                        </div>   
                        <div className="viewsAndTimePosted">
                            <h6>{0} views | {props.item.createdAt} hours ago</h6>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default PanelItem;
