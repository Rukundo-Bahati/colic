
import './App.css'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Page from './pages/page'
import SignUp from './pages/sign-up'
import SignUpPhotographer from './pages/photographerSignup'
import SignUpClient from './pages/clientSignUp'
import Choices from './pages/field'
import Details from './pages/personaldetails'
import UserHome from './pages/userHome'
import UserGallery from './pages/gallery'
import ImageDetail from './pages/imageDetail'
import Dashpage from './pages/dashboard'
import Chatdash from './pages/chatdash'
import SingleChat from './pages/singleChat'
import Calendar from './pages/calendar';
import Profile from './pages/Profile'
import Settings from './pages/settings'
import Styles from './pages/Styles'
import Progress from './pages/Progress'
import userData from './pages/Users';
import ErrorBoundary from './pages/ErrorBoundary'

const routes=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
 {
  path:"/page",
  element:<Page/>
 },
 {
  path:"/sign",
  element:<SignUp/>
 },
 {
  path:"/phot",
  element:<SignUpPhotographer/>
 },
 {
  path:"/client",
  element:<SignUpClient/>
 },
 {
  path:"/choice",
  element:<Choices/>
 },
 {
  path:"/details",
  element:<Details/>
 },{
  path:"/user",
  element:<UserHome/>
 },{
  path:"/gallery",
  element:<UserGallery/>
 },{
  path:"/image/:id",
  element:<ImageDetail/>
 },{
  path:"/dashboard",
  element:<Dashpage/>
 },
 {
  path:"/chat",
  element:<Chatdash users={userData}/>
 },
 {
  path:"/chat/:id",
  element:<SingleChat users={userData}/>
 },
 {
  path:"/calendar",
  element:<Calendar/>
 },
 {
  path:"/profile",
  element:<Profile/>
 },
 {
  path:"/settings",
  element:<Settings/>
 },
 {
  path:"/styles",
  element:<Styles/>
 },
 {
  path:"/progress",
  element:<Progress/>
 },
 {
  path:"/error",
  element:<ErrorBoundary/>
 }
])
function App() {

  return (
      <div>
        <RouterProvider router={routes}/>
  
          </div>   
  )
}

export default App
