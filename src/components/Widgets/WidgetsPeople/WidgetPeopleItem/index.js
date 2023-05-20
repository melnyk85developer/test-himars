import React from "react";
import { NavLink } from "react-router-dom";
import { routeMain as  routeUserProfile} from "../../../../pages/UserProfile";
import "./styles.scss";

const PeopleItem = (props) => {
    return (
        <div className="wrapFriendsWidget">
            <NavLink to={routeUserProfile(props.id)}>
                <div className="friendItem">
                    <img className="miniAvatarFriend" src={props.avatar} alt="ava"/>
                    <li className="friendLiItem"><p>{props.name}</p></li>
                </div>
            </NavLink>
        </div>
    )
}

export default PeopleItem;