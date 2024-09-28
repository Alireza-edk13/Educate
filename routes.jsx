import BlogDetail from "./src/pages/BlogDetail/BlogDetail"
import BlogList from "./src/pages/BlogList/BlogList"
import Contact from "./src/pages/Contact/Contact"
import CourseDetail from "./src/pages/CourseDetail/CourseDetail"
import CoursesList from "./src/pages/CoursesList/CoursesList"
import Index from "./src/pages/Index/Index"
import Login from "./src/pages/Login/Login"
import Register from "./src/pages/Register/Register"
import TeacherDetail from "./src/pages/TeacherDetail/TeacherDetail"
import TeacherList from "./src/pages/TeacherList/TeacherList"
import Error404 from "./src/Components/Error404/Error404"


import AdminPanel from "./src/pages/AdminPanel"
import AdminPanelIndex from "./src/pages/AdminPanel/Index/Index"
import UserList from "./src/pages/AdminPanel/UserList/UserList"
import CourseList from "./src/pages/AdminPanel/CourseList/CourseList"
import SessionList from "./src/pages/AdminPanel/SessionList/SessionList"
import Category from "./src/pages/AdminPanel/Category/Category"
import Comments from "./src/pages/AdminPanel/Comments/Comments"
import DiscountCode from "./src/pages/AdminPanel/DiscountCode/DiscountCode"
import Tickets from "./src/pages/AdminPanel/Tickets/Tickets"
import Message from "./src/pages/AdminPanel/Message/Message"
import BlogPanel from "./src/pages/AdminPanel/BlogPanel/BlogPanel"
import PAdminPrivate from "./src/Components/Privates/PAdminPrivate"


import UserPanel from "./src/pages/UserPanel"
import UserPanelIndex from "./src/pages/UserPanel/Index/Index"
import UserCourses from "./src/pages/UserPanel/Courses/Courses"
import Error404Panel from "./src/Components/AdminPanel/Error404/Error404"
import UserOrders from "./src/pages/UserPanel/Orders/Orders"
import EditAccount from "./src/pages/UserPanel/EditAccount/EditAccount"

const routes = [
  { path: "/", element: <Index /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/course-list", element: <CoursesList /> },
  { path: "/course-detail/:courseName", element: <CourseDetail /> },
  { path: "/contact", element: <Contact /> },
  { path: "/blog-list", element: <BlogList /> },
  { path: "/blog-detail", element: <BlogDetail /> },
  { path: "/teacher-list", element: <TeacherList /> },
  { path: "/teacher-detail", element: <TeacherDetail /> },
  { path: "*", element: <Error404 /> },




  {
    path: "/admin-panel/*",
    element:
      <PAdminPrivate>
        <AdminPanel />
      </PAdminPrivate>,
    children: [
      { path: "", element: <AdminPanelIndex /> },
      { path: "user-list", element: <UserList /> },
      { path: "course-list", element: <CourseList /> },
      { path: "session-list", element: <SessionList /> },
      { path: "category", element: <Category /> },
      { path: "comments", element: <Comments /> },
      { path: "discount-code", element: <DiscountCode /> },
      { path: "ticket", element: <Tickets /> },
      { path: "message", element: <Message /> },
      { path: "blog", element: <BlogPanel /> },
    ]
  },



  {
    path: "/my-account/*",
    element: <UserPanel />,
    children: [
      { path: "", element: <UserPanelIndex /> },
      { path: "courses", element: <UserCourses /> },
      { path: "orders", element: <UserOrders /> },
      { path: "edit-account", element: <EditAccount /> },
      { path: "*", element: <Error404Panel href={'/my-account'} /> },
    ],
  },
]

export default routes