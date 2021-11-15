//Pié de página
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {

    return(
        <footer className="redes-sociales">
            <ul className="redes">
                <li className="facebook"><a href="https://www.facebook.com/canalmusicalibreyoutube" target="_blank" rel="noreferrer"><img
                            src="../images/facebook.png" alt="Facebook"/></a></li>
                <li className="instagram"><a href="https://www.instagram.com/yudieskelroque/" target="_blank" rel="noreferrer"><img
                            src="../images/instagram.png" alt="Instagram"/></a></li>
                <li className="youtube"><a
                        href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUC0kVqtxUBeBq5nuDjgJKc_g%3Ffbclid%3DIwAR03-rrZLu_NqmXiSlQGTwLnmQkTbMNvozIZenmaeA58n_2izT8nEobg2Fo&h=AT2HeCx8IDbZFLgSvOromGOc0Q4bLl25SJEm-qRskbC0Ma7gu2NdBVlUCReRuzM8JGx5_d_J0_XKoQU3Vpvce0u8VZ1PrnzCE5QthMnaEIBz8jHwHgvn2H5HjWiSxDkA22xx&__tn__=-UK-R&c[0]=AT1qhJjXrlsXMSAyoD77bBvbQlZUQ35CWOg7Q-rx-7hRv_xtuXCD8NqPn9oOdG1BnzyR4thPsZoIrrnqudv_I9Yk632QCljO41FZICUfJfrfiqkj-3D_ipYk9buD3VSzoHdoWoJQ4AgZ44wzmePWyjijrMmixuZBMERXoA"
                        target="_blank" rel="noreferrer"><img src="../images/youtube.png" alt="You Tube"/></a></li>
                <li className="costv"><a href="https://cos.tv/channel/22750516301441024" target="_blank" rel="noreferrer"><img
                            src="../images/costvicono.png" alt="Cos TV"/></a></li>
                <li className="odysee"><a href="https://odysee.com/@músicalibre:f" target="_blank" rel="noreferrer"><img
                            src="../images/odyseeicono.jfif" alt="Odysee"/></a></li>
                <li className="spotify"><a
                        href="https://l.facebook.com/l.php?u=https%3A%2F%2Fopen.spotify.com%2Fplaylist%2F0vCso2vTJuIQCJzluXLL8V%3Ffbclid%3DIwAR196gWkQKYVuUfC6968vthj-3qyhJu_ShvHt4TVDGJnjwNcwfFoboBOu6w&h=AT2C3l2VbH8YhtkhGkZ_YoGE7Z9SwwsgEVlW8oJRBckTa8N_x9BWMVwE-1cfueEpvuTadHGWtQooDnN7Ui7MAOR0QIdSTfRvKH-hhVX22n9F1HkIdE7rS5O2-FiT9MU4sRfy&__tn__=-UK-R&c[0]=AT1qhJjXrlsXMSAyoD77bBvbQlZUQ35CWOg7Q-rx-7hRv_xtuXCD8NqPn9oOdG1BnzyR4thPsZoIrrnqudv_I9Yk632QCljO41FZICUfJfrfiqkj-3D_ipYk9buD3VSzoHdoWoJQ4AgZ44wzmePWyjijrMmixuZBMERXoA"
                        target="_blank" rel="noreferrer"><img src="../images/spotify.png" alt="spotify"/></a></li>
            </ul>
            <h5><img className="copyright" src="../images/copyright.png" alt="Icono copyright"/> Música Libre <span
                    className="span-footer"> 2021 - </span><Link className="terminos-condiciones" to="/terminos">Términos</Link> | <Link
                    className="terminos-condiciones" to="/privacidad">Privacidad</Link></h5>
        </footer>
    );
};
export default Footer;