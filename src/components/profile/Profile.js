import { useAuth } from "../../Context/AuthProvider";
import Layout from "../../Layout/Layout";

const Profile = () => {
  const { name, email } = useAuth();
  return (
    <Layout>
      <div>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </Layout>
  );
};

export default Profile;
