// import { printProps } from './printProps'
import { withUser } from './withUser'
import { UserInfo } from './UserInfo'

// const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, 1);


function Chapter4() {
  
  
  return (
    <>
    {/* <UserInfoWrapped a={1} b="Hello" c={{name: 'Shaun'}} /> */}
    <UserInfoWithLoader  />
    </>
  );
}

export default Chapter4;
