import { Result, Button } from 'antd';
import { useNavigate} from 'react-router-dom';



export default function NoSuchPage(){

    let navigate = useNavigate(); 

    function redirectToHome(){
        navigate("../");
    }

    return(
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={redirectToHome}>Back Home</Button>}
  />
    );

}