import styles from './contacts.scss';
import Uptitle from "../Uptitle/Uptitle";
import Title from "../Title/Title";

export default function Contacts (props) {
    return (
        <section className="contacts">
            <div className="contacts__wrap">
                <Uptitle text={'CONTACT'} />
                <Title text={'Don\'t be shy! Hit me up! 👇'}/>
                <div className="contacts__itemsWrap">
                    <div className="contacts__item">
                        <div className="contacts__imgSide">
                            <svg className='contacts__img' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
                        </div>
                        <div className="contacts__textSide">
                            <h4 className="contacts__type">Mail</h4>
                            <a href={''} className="contacts_number">Contact me here!</a>
                        </div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__imgSide">
                            <img src="" alt="" />
                        </div>
                        <div className="contacts__textSide">
                            <h4 className="contacts__type">Telegram</h4>
                            <a href={''} className="contacts_number">Contact me there!</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}