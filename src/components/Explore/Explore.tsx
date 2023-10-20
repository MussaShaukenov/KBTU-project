import React from "react";
import LayoutContainer from "../MainPage/LayoutContainer";
import "./Explore.scss";
import ExploreItem from "./ExploreItem";

const Explore: React.FC = () => {
    return (
        <LayoutContainer>
            <div className="explore-container">
                <h3>Who to follow?</h3>
                <ExploreItem
                    imageUrl="https://pbs.twimg.com/profile_images/1670714551732432896/z4Gi6yp5_400x400.jpg"
                    name="Premier League"
                    handle="premierleague"
                />
                <ExploreItem
                    imageUrl="https://pbs.twimg.com/profile_images/954405474849427456/Y3efiDw0_400x400.jpg"
                    name="WSJ Personal Finance"
                    handle="WSJpersfinance"
                />
                <ExploreItem
                    imageUrl="https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg"
                    name="Bill Gates"
                    handle="BillGates"
                />
                <ExploreItem
                    imageUrl="https://pbs.twimg.com/profile_images/1592803402291056640/2EGt4J_1_400x400.jpg"
                    name="433"
                    handle="433"
                />
                <ExploreItem
                    imageUrl="https://pbs.twimg.com/profile_images/1710859925293760512/MLeyvq0O_400x400.jpg"
                    name="B/R Football"
                    handle="brfootball"
                />
                <ExploreItem
                    imageUrl="https://pbs.twimg.com/profile_images/1486761402853380113/3ifAqala_400x400.jpg"
                    name="Fabrizio Romano"
                    handle="fabrizioromano"
                />
                <ExploreItem
                    imageUrl="https://pbs.twimg.com/profile_images/1697749409851985920/HbrI04tM_400x400.jpg"
                    name="Space X"
                    handle="spacex"
                />
                <ExploreItem
                    imageUrl="https://pbs.twimg.com/profile_images/1480963147519475718/u3jPWZ1g_400x400.jpg"
                    name="КНБ РК"
                    handle="knbgovkz"
                />
                <ExploreItem
                    imageUrl="https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg"
                    name="MrBeast"
                    handle="MrBeast"
                />
                <ExploreItem
                    imageUrl="https://pbs.twimg.com/profile_images/1605297940242669568/q8-vPggS_400x400.jpg"
                    name="Google"
                    handle="google"
                />

            </div>
        </LayoutContainer>
    );
}

export default Explore;
