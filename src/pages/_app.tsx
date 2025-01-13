// import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import ProtectedRoute from "@/components/ProtectedRoute";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import withAuth from "@/middleware/middleware";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import feather from "feather-icons";

export default function App({ Component, pageProps }: any) {


  useEffect(() => {
    feather.replace(); // Initialize feather icons
  }, []);

  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  const isAuthPage = ["/admin/signin", "/admin/signup"].includes(router.pathname);


  useEffect(() => {
    setIsMounted(true); // Ensures this logic runs only on the client
  }, []);

  if (!isMounted) {
    return null;
  }

  const WrappedComponent = isAuthPage ? Component : withAuth(Component);

  return (
    <Provider store={store}>
      <div id="app-layout">
        {!isAuthPage && <Sidebar />}
        {!isAuthPage && <Navbar />}
        <WrappedComponent {...pageProps} />
        <ToastContainer />
      </div>
    </Provider>
  );
}