
import logoImage from '../../../assets/images/logo.jpg'
import '../../../assets/CSS/header.css'
//icons
import discountIcon from "./../../../assets/icons/discount-icon.svg"
import GiftIcon from "./../../../assets/icons/gift-icon.svg"
import FixIcon from "./../../../assets/icons/fix-icon.svg"
import PhoneIcon from "./../../../assets/icons/phone-icon.svg"
import TVIcon from "./../../../assets/icons/tv-icon.svg"
import LaptopIcon from "./../../../assets/icons/laptop-icon.svg"
import TabletIcon from "./../../../assets/icons/tablet-icon.svg"
import ForHomeIcon from "./../../../assets/icons/flower-icon.svg"
import SportIcon from "./../../../assets/icons/phone-icon.svg"
import ToysIcon from "./../../../assets/icons/toy-icon.svg"
import TransportIcon from "./../../../assets/icons/bicycle-icon.svg"
import ForCars from "./../../../assets/icons/car-icon.svg"

function Header() {
    return (
        <header>
            <div className="container">
                <div className="HeaderInfoBlock">
                    <img src={logoImage} alt=""/>
                    <label>Контакты</label>
                    <label>О нас</label>
                    <label>Условия гарантии/кредитования</label>
                    <label>Кэшбек</label>
                    <label>Доствка</label>
                    <label>Производители</label>
                    <button className="material-symbols-outlined">shopping_cart</button>
                    <button className="material-symbols-outlined">tune</button>
                    <button className="material-symbols-outlined">account_circle</button>
                </div>
                <div className="HeaderSearchBlock">
                    <div className="CatalogButton">
                        <span className="material-symbols-outlined">menu</span>
                        <button>Каталог</button>
                    </div>
                    <div>
                        <input type="text" placeholder="Смартфоны, ноутбуки..."></input>
                    </div>
                    <div className="FastFilterBlock">
                        <button>
                            <img src={discountIcon} alt=""/>
                            <span>Скидки</span>
                        </button>
                        <button>
                            <img src={GiftIcon} alt=""/>
                            <span>Идея для подарков</span>
                        </button>
                        <button>
                            <img src={FixIcon} alt=""/>
                            <span>Сервисный центр</span>
                        </button>
                    </div>
                </div>
                    <div className="HeaderCategories">
                        <button>
                            <img src={PhoneIcon} alt=""/>
                            Смартфон
                        </button>
                        <button>
                            <img src={TVIcon} alt=""/>
                            Телевизоры
                        </button>
                        <button>
                            <img src={LaptopIcon} alt=""/>
                            Ноутбуки
                        </button>
                        <button>
                            <img src={TabletIcon} alt=""/>
                            Планшеты
                        </button>
                        <button>
                            <img src={ForHomeIcon} alt=""/>
                            Для дома
                        </button>
                        <button>
                            <img src={SportIcon} alt=""/>
                            Спорт
                        </button>
                        <button>
                            <img src={ToysIcon} alt=""/>
                            Игрушки
                        </button>
                        <button>
                            <img src={TransportIcon} alt=""/>
                            Транспорт
                        </button>
                        <button>
                            <img src={ForCars} alt=""/>
                            Для авто
                        </button>
                        <button>

                            Еще⇣
                        </button>
                    </div>
            </div>
        </header>
    );
}

export default Header;