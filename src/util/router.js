import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/Root/Layout.jsx";
import InstructorLayout from "pages/Instructor/Layout.jsx";

/* salah's routes*/
import CoursesPage from "../pages/SubCategory/CoursesPage.jsx";
import Profile from "../pages/Profile/Profile.jsx";
import Loading from "../Components/LoadingSpinner/index.jsx";
import MyCourses from "../pages/UserCourses/MyCourses.jsx";
import Search from "Components/Search/Search.jsx";

// global routes
const HomePage = lazy(() => import("../pages/Root/Home/index.jsx"));
const Signup = lazy(() => import("../pages/Root/Auth/Signup.jsx"));
const Signin = lazy(() => import("../pages/Root/Auth/Signin.jsx"));
const ResetPassword = lazy(() =>
  import("../pages/Root/Auth/ResetPassword.jsx")
);
const Logout = lazy(() => import("../pages/Root/Logout/index.jsx"));
const WorkshopsRoot = lazy(() => import("../pages/Root/Workshops/index.jsx"));
const WorkshopRoot = lazy(() => import("../pages/Root/Workshop/index.jsx"));

// instructor routes
const InstructorDashboard = lazy(() =>
  import("../pages/Instructor/Dashboard/index.jsx")
);
const InstructorCourses = lazy(() =>
  import("../pages/Instructor/Courses/index.jsx")
);
const InstructorEditCourseInfo = lazy(() =>
  import("../pages/Instructor/Courses/EditCourseInfo/EditCourseInfo.jsx")
);
const InstructorChapters = lazy(() =>
  import("../pages/Instructor/Chapters/index.jsx")
);
const InstructorTopics = lazy(() =>
  import("../pages/Instructor/Topics/index.jsx")
);
const IntructorArticle = lazy(() =>
  import("../pages/Instructor/Article/index.jsx")
);
const InstructorVideo = lazy(() =>
  import("../pages/Instructor/Video/index.jsx")
);
const InstructorQuiz = lazy(() => import("../pages/Instructor/Quiz/index.jsx"));
const InstructorWorkshops = lazy(() =>
  import("../pages/Instructor/Workshops/index.jsx")
);
const Error404 = lazy(() => import("../pages/Instructor/Error/Error404.jsx"));
const LiveSessions = lazy(() =>
  import("../pages/Instructor/LiveSession/index.jsx")
);
const InstructorEditWorkshopInfo = lazy(() =>
  import("../pages/Instructor/Workshops/EditWorkshopInfo/EditWorkshopInfo.jsx")
);
const InstructorSessions = lazy(() =>
  import("../pages/Instructor/Sessions/index.jsx")
);
const InstructorRevenue = lazy(() =>
  import("../pages/Instructor/Revenue/index.jsx")
);

// student routes
const StudentLayout = lazy(() => import("../pages/Student/Layout.jsx"));
const StudentHome = lazy(() => import("../pages/Student/Dashboard/index.jsx"));
const UserSettings = lazy(() => import("../pages/Student/Settings/index.jsx"));
const UserMessages = lazy(() => import("../pages/Student/Messages/index.jsx"));
const StudentWorkshops = lazy(() =>
  import("../pages/Student/Workshops/index.jsx")
);
const StudentBilling = lazy(() => import("../pages/Student/Billing/index.jsx"));

const SuspenseWrapper = (props) => {
  return <Suspense fallback={<Loading />}>{props.children}</Suspense>;
};

const router = createBrowserRouter([
  // public routes
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <HomePage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "signup",
        element: (
          <SuspenseWrapper>
            <Signup />
          </SuspenseWrapper>
        ),
      },
      {
        path: "signin",
        element: (
          <SuspenseWrapper>
            <Signin />
          </SuspenseWrapper>
        ),
      },
      {
        path: "reset-password",
        element: (
          <SuspenseWrapper>
            <ResetPassword />
          </SuspenseWrapper>
        ),
      },
      {
        path: "logout",
        element: (
          <SuspenseWrapper>
            <Logout />
          </SuspenseWrapper>
        ),
      },
      // { path: "course/:id", element: <CoursesPage /> },
      { path: "course", element: <CoursesPage /> },
      { path: "profile", element: <Profile /> },
      { path: "courses", element: <CoursesPage /> },
      { path: "profile", element: <Profile /> },
      { path: "myCourse", element: <MyCourses /> },
      { path: "search/:title", element: <Search /> },
      {
        path: "workshops",
        children: [
          {
            index: true,
            element: (
              <SuspenseWrapper>
                <WorkshopsRoot />
              </SuspenseWrapper>
            ),
          },
          {
            path: ":workshopId",
            element: (
              <SuspenseWrapper>
                <WorkshopRoot />
              </SuspenseWrapper>
            ),
          },
        ],
      },

      {
        path: "*",
        element: (
          <SuspenseWrapper>
            <Error404 redirectTo={"/"} />
          </SuspenseWrapper>
        ),
      },
    ],
  },

  // instructor routes
  {
    path: "/instructor",
    element: <InstructorLayout />,
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <InstructorDashboard />
          </SuspenseWrapper>
        ),
      },
      {
        path: "*",
        element: (
          <SuspenseWrapper>
            <Error404 redirectTo={"/instructor"} />
          </SuspenseWrapper>
        ),
      },
      {
        path: "courses",
        children: [
          {
            index: true,
            element: (
              <SuspenseWrapper>
                <InstructorCourses />{" "}
              </SuspenseWrapper>
            ),
          },
          {
            path: ":courseId",
            children: [
              {
                index: true,
                element: (
                  <SuspenseWrapper>
                    <InstructorChapters />{" "}
                  </SuspenseWrapper>
                ),
              },
              {
                path: "edit",
                element: (
                  <SuspenseWrapper>
                    <InstructorEditCourseInfo />
                  </SuspenseWrapper>
                ),
              },
            ],
          },
          {
            path: ":courseId/:chapterId",
            children: [
              {
                index: true,
                element: (
                  <SuspenseWrapper>
                    <InstructorTopics />
                  </SuspenseWrapper>
                ),
              },
              {
                path: "article/new",
                element: (
                  <SuspenseWrapper>
                    <IntructorArticle />
                  </SuspenseWrapper>
                ),
              },
              {
                path: "article/:articleId",
                element: (
                  <SuspenseWrapper>
                    <IntructorArticle />
                  </SuspenseWrapper>
                ),
              },
              {
                path: "video/:videoId",
                element: (
                  <SuspenseWrapper>
                    <InstructorVideo />
                  </SuspenseWrapper>
                ),
              },
              {
                path: "quiz/:quizId",
                element: (
                  <SuspenseWrapper>
                    <InstructorQuiz />
                  </SuspenseWrapper>
                ),
              },
            ],
          },
        ],
      },
      {
        path: "workshops",
        children: [
          {
            index: true,
            element: (
              <SuspenseWrapper>
                <InstructorWorkshops />
              </SuspenseWrapper>
            ),
          },
          {
            path: ":workshopId",
            children: [
              {
                index: true,
                element: (
                  <SuspenseWrapper>
                    <InstructorSessions />
                  </SuspenseWrapper>
                ),
              },
              {
                path: "edit",
                element: (
                  <SuspenseWrapper>
                    <InstructorEditWorkshopInfo />
                  </SuspenseWrapper>
                ),
              },
            ],
          },
          {
            path: ":workshopId/live/:sessionId",
            children: [
              {
                index: true,
                element: (
                  <SuspenseWrapper>
                    <LiveSessions />
                  </SuspenseWrapper>
                ),
              },
            ],
          },
          {
            path: ":workshopId/recoarded",
            children: [
              {
                index: true,
                element: (
                  <SuspenseWrapper>
                    <LiveSessions />
                  </SuspenseWrapper>
                ),
              },
            ],
          },
        ],
      },
      {
        path: "messages",
        element: (
          <SuspenseWrapper>
            <UserMessages />
          </SuspenseWrapper>
        ),
        children: [
          {
            path: ":userId",
            element: (
              <SuspenseWrapper>
                <UserMessages />
              </SuspenseWrapper>
            ),
          },
        ],
      },
      {
        path: "settings",
        element: (
          <SuspenseWrapper>
            <UserSettings />
          </SuspenseWrapper>
        ),
      },
      {
        path: "revenue",
        element: (
          <SuspenseWrapper>
            <InstructorRevenue />
          </SuspenseWrapper>
        ),
      },
    ],
  },

  // student routes
  {
    path: "/student",
    element: (
      <SuspenseWrapper>
        <StudentLayout />{" "}
      </SuspenseWrapper>
    ),
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <StudentHome />
          </SuspenseWrapper>
        ),
      },
      {
        path: "*",
        element: (
          <SuspenseWrapper>
            <Error404 redirectTo={"/student"} />
          </SuspenseWrapper>
        ),
      },
      {
        path: "courses",
        element: (
          <SuspenseWrapper>
            <MyCourses />
          </SuspenseWrapper>
        ),
      },
      {
        path: "workshops",
        element: (
          <SuspenseWrapper>
            <StudentWorkshops />
          </SuspenseWrapper>
        ),
      },
      {
        path: "billing",
        element: (
          <SuspenseWrapper>
            <StudentBilling />
          </SuspenseWrapper>
        ),
      },
      {
        path: "messages",
        element: (
          <SuspenseWrapper>
            <UserMessages />
          </SuspenseWrapper>
        ),
        children: [
          {
            path: ":userId",
            element: (
              <SuspenseWrapper>
                <UserMessages />
              </SuspenseWrapper>
            ),
          },
        ],
      },
      {
        path: "settings",
        element: (
          <SuspenseWrapper>
            <UserSettings />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]);
export default router;
