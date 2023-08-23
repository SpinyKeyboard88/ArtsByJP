
import facebook from '../../assets/svg/facebook.png'
import instagram from '../../assets/svg/insta-white.svg';
import envelope from '../../assets/svg/envelope2.svg';
import phone from '../../assets/svg/telephone2.svg';

export default function Footer() {

    var footer_phrase = "Let's make your space into your dream space.";

    return (
        <>
            <footer>
                <div className='footer-text'>
                    <p>{footer_phrase}
                    </p>
                    <p >Feel free to contact us about any questions you may have!</p>
                </div>
                <div className='reachme-links'>

                    <a className='reachme' href="tel:+19566016667">
                        <img className='icons' src={phone}></img>
                        <p>956-601-6667</p>
                    </a>
                    <a className='reachme' href="mailto:juan.porraz@artsbyjp.com">
                        <img className='icons' src={envelope}></img>
                        <p>Juan.porraz@artsbyjp.com</p>
                    </a>


                    <a className='reachme' href="https://www.facebook.com/artsbyjp/">
                        <img className='icons' src={facebook}></img>
                        <p>Facebook</p>
                    </a>
                    <a className='reachme' href="https://www.instagram.com/jpkreates24/">
                        <img className='icons' src={instagram}></img>
                        <p>Instagram</p>
                    </a>

                </div>
            </footer>
        </>
    )
}