import styled from "styled-components";



const CardLogo = styled.div`
    padding-top: 15px;
    width: 70rem;
    height: 30rem;
    display: flex;
    justify-items: center;
    padding: 3rem;
    border-style: double;
    border-width: 15px;
    border-color: #ffecb3;
`;

const HomeLayout = ({ children }) => {
    return (
       
            <CardLogo className="card z-depth-5">{children}</CardLogo>
    
    );
};

export default HomeLayout;
