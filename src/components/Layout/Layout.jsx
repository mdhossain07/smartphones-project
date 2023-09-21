import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { InfinitySpin } from "react-loader-spinner";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header />
      {navigation.state === "loading" ? (
        <InfinitySpin width="200" color="#4fa94d" />
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
};

export default Layout;
