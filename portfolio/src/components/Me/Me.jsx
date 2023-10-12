import Uptitle from "../Uptitle/Uptitle";
import Title from "../Title/Title";
import styles from './me.scss';


export default function Me (props) {
    return (
        <section className="me__wrap">
            <div className="me">
                <div className="me__imgSide">
                    <img src="./meComputer.jpg" alt="My estetic workspace" />
                </div>
                <div className="me__textSide">
                    <Uptitle text={'ABOUT ME'} />
                    <Title text={'A dedicated Front-end Developer based in Belgrade, Serbia 📍'}/>
                    <p className="me__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, obcaecati est voluptas quam rem eum consequuntur molestiae laborum beatae, odit nostrum sed commodi mollitia, iste voluptate. Beatae rerum numquam natus.
                    Esse eum expedita adipisci ea accusantium illo, sunt ut numquam voluptates corrupti quod at blanditiis quo quos qui quisquam officiis vero nesciunt obcaecati tempore? Labore consequatur voluptatibus repellendus perferendis soluta?
                    Eveniet, molestiae, vero vel quis natus similique sint nisi, est voluptatibus nulla laboriosam qui quibusdam quia dolorem reiciendis esse recusandae soluta minus quasi nemo! Ducimus, assumenda? Beatae ducimus cumque obcaecati.
                    </p>
                </div>
            </div>

        </section>
    )
}