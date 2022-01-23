import { LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { UserBadgeContainer } from "./styles";

const UserBadge = () => {
  const { user, signOut } = useAuth();

  return (
    <UserBadgeContainer>
      {user ?
        (
          <>
            <div>Olá, <span>{ user.email }</span></div>
            <LogoutOutlined onClick={() => signOut()} />
          </>
        ) :
        (
          <Link to='/login'>Faça seu login</Link>
        )
      }
    </UserBadgeContainer>
  );
}

export { UserBadge };