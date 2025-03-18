import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import GolbIcon from "../assets/Globe.webp";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-black text-white flex items-center justify-between p-10 w-full h-[60px] fixed top-0 left-0 z-10">
      <div className="flex items-center space-x-2">
        <span className="font-bold text-lg">ECO TRACK</span>
        <img src={GolbIcon} alt="Logo" className="w-8 h-8" />
      </div>
      <div>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            if (credentialResponse.credential) {
              const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
              console.log(credentialResponseDecoded);
              navigate("/saved");
            }
          }}
          onError={() => console.log("Login failed")}
          auto_select={true}
        />
      </div>
    </nav>
  );
};

export default Navbar;
