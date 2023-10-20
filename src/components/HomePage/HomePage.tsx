import React from "react";
import LayoutContainer from "../MainPage/LayoutContainer";
import Post from "../Post/Post";


const HomePage: React.FC = () => {
    const postOneProps = {
        authorLogo: "https://pbs.twimg.com/profile_images/1457725055178260480/_GOnheh__400x400.jpg",
        author: 'GOAL',
        time: '4h',
        content: "Cristiano Ronaldo Jr has signed with Al-Nassr's U13 team and will wear the No.7 shirt 7️⃣",
        imageUrl: 'https://pbs.twimg.com/media/F80U91YW4AEVlQM?format=jpg&name=medium',
        comments: 200,
        shares: 800,
        likes: 52324,
    };
    const postTwoProps = {
        authorLogo: "https://pbs.twimg.com/profile_images/1668437684828684290/GMDq0cU1_400x400.jpg",
        author: 'Tengrinews',
        time: 'Oct 18',
        content: "Уроженца Казахстана приговорили к пожизненному заключению в США.",
        imageUrl: 'https://pbs.twimg.com/card_img/1714628090024837120/6f2RMyXb?format=jpg&name=medium',
        comments: 5,
        shares: 2,
        likes: 800,
    };
    const postThreeProps = {
        authorLogo: "https://pbs.twimg.com/profile_images/693731557299720193/z0EeBAZE_400x400.png",
        author: 'ESPN UK',
        time: 'Oct 18',
        content: "Which midfield trio are you taking? 🤔",
        imageUrl: "https://pbs.twimg.com/media/F8vCTkKX0AE9CPe?format=jpg&name=medium",
        comments: 1022,
        shares: 1200,
        likes: 25213,
    }
    const postFourProps = {
        authorLogo: "https://pbs.twimg.com/profile_images/1668437684828684290/GMDq0cU1_400x400.jpg",
        author: 'Tengrinews',
        time: 'Oct 18',
        content: "Жених и его друг получили по 7 лет за кражу невесты в Таразе",
        imageUrl: "https://pbs.twimg.com/card_img/1714587810466803712/cI99eVXa?format=jpg&name=medium",
        comments: 74,
        shares: 14,
        likes: 900,
    }


    return (
        <LayoutContainer>
            <h2 style={{marginLeft: "1em"}}>Home</h2>
            <Post {...postOneProps} />
            <Post {...postTwoProps} />
            <Post {...postThreeProps} />
            <Post {...postFourProps} />
        </LayoutContainer>
    );
}

export default HomePage;