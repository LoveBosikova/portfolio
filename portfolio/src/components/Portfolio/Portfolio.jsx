import Uptitle from "../Uptitle/Uptitle";
import Title from "../Title/Title";
import Project from "../Project/Project";
import styles from './portfolio.scss';

export default function Portfolio (props) {
    return (
        <section className="portfolio__wrap">
            <div className="portfolio">
                <Uptitle text={'PORTFOLIO'}/>
                <Title text={'Each project is a unique piece of development 🧩'}/>
                <div className="portfolio__projectsWrap">
                    <Project img={'./SleepBabySleep.webp'}
                            alt={'Sleeptracker for kids'}
                            name={'SleepBabySleep'}
                            time={'(Summer 2023)'}
                            emoji={'💤'}
                            description={'The SleepBabySleep website is an online platform that allows users to normalixe kids sleeping. The website provides an interface for input, searching, saving sleep intervals and statistic scrutiny.'}
                            tech1={'SCSS'}
                            tech2={'Vanila JS'}/>

                </div>
            </div>
        </section>
    )
}