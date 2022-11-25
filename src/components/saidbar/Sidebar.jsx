import "./sidebar.css"
import {RssFeed,Chat,PlayCircle,Group,Bookmark,HelpOutline,WorkOutline,CalendarMonth,School} from "@mui/icons-material";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="SidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon"/>
            <span className="SidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircle className="sidebarIcon"/>
            <span className="SidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon"/>
            <span className="SidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"/>
            <span className="SidebarListItemText">BookMarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon"/>
            <span className="SidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon"/>
            <span className="SidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <CalendarMonth className="sidebarIcon"/>
            <span className="SidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon"/>
            <span className="SidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/1.jpeg" alt="" />
            <span className="sidebarFriendName">Lily SHA</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Liam El</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/3.jpeg" alt="" />
            <span className="sidebarFriendName">Emma Ul</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/4.jpeg" alt="" />
            <span className="sidebarFriendName">Sophia Pn</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/5.jpeg" alt="" />
            <span className="sidebarFriendName">Olivia KTn</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/6.jpeg" alt="" />
            <span className="sidebarFriendName">azite KaK</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/7.jpeg" alt="" />
            <span className="sidebarFriendName">Annabelle CjM</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/8.jpeg" alt="" />
            <span className="sidebarFriendName">Alice Kf</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/9.jpeg" alt="" />
            <span className="sidebarFriendName">Makayla Gl</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
