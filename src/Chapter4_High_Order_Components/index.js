// import { printProps } from './printProps'
// import { UserInfo } from './UserInfo'
// import { withUser } from './withUser'
import { UserInfoForm } from './UserInfoForm'


// const UserInfoWrapped = printProps(UserInfo);
// const UserInfoWithLoader = withUser(UserInfo, 1);


function Chapter4() {
  
  
  return (
    <>
    <p>High Order Components</p>
    <UserInfoForm />
    {/* <UserInfoWrapped a={1} b="Hello" c={{name: 'Shaun'}} /> */}
    {/* <UserInfoWithLoader  /> */}
    </>
  );
}

export default Chapter4;
