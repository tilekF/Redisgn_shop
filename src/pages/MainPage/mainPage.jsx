import "./../../assets/CSS/mainPage.css"
import banner1 from "../../assets/images/Banners/banner-1.jpg"
//Photo
import ItemCard from "../Item-Card/item-Card.jsx";
import itemCard from "../Item-Card/item-Card.jsx";

function MainPage() {
    return (
        <div className="MainPage">
            <div className="container">
                <div className="MainBlock">
                    <div className="BannerBlock">
                        <button>ᐊ</button>
                        <img src={banner1} alt=""/>
                        <button>ᐅ</button>
                    </div>
                </div>
                <div className="BannerDivider">
                    <nav>
                        <ul>
                            <li className="tab1">
                                <label htmlFor="tab1"></label>
                            </li>
                            <li className="tab2">
                                <label htmlFor="tab2"></label>
                            </li>
                            <li className="tab3">
                                <label htmlFor="tab3"></label>
                            </li>
                            <li className="tab4">
                                <label htmlFor="tab4"></label>
                            </li>
                            <li className="tab5">
                                <label htmlFor="tab5"></label>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="ProductBlock">
                    <div className="ProductItemCard">
                    {/*Top Product*/}
                            <ul><li>ТОП ПРОДАЖ</li></ul>
                        <div className="ProductItemCard">
                            <div className="ItemCard">
                                <img src={ItemCard.AirPodsMax} alt="Product" />
                                <span className="ItemPrice">$19.99</span>
                                <h4>Название товара</h4>
                            </div>
                            <div className="ItemCard">
                                <img src={ItemCard.MacBook} alt="Product" />
                                <span className="ItemPrice">$19.99</span>
                                <h4>Название товара</h4>
                            </div>
                            <div className="ItemCard">
                                <img src={itemCard.WatchSE} alt="Product" />
                                <span className="ItemPrice" >$19.99</span>
                                <h4>Название товара</h4>
                            </div>
                            <div className="ItemCard">
                                <img src={itemCard.Iphone13} alt="Product" />
                                <span className="ItemPrice">$19.99</span>
                                <h4>Название товара</h4>
                            </div>
                            <div className="ItemCard">
                                <img src={itemCard.Ipad} alt="Product" />
                                <span className="ItemPrice">$19.99</span>
                                <h4>Название товара</h4>
                            </div>
                        </div>
                        {/*New product*/}
                        <ul><li>НОВИНКИ</li></ul>
                        <div className="ProductItemCard">
                            <div className="ItemCard">
                                <img src={itemCard.IpadPro} alt="Product" />
                                <span className="ItemPrice">$19.99</span>
                                <h4>Название товара</h4>
                            </div>
                            <div className="ItemCard">
                                <img src={itemCard.WatchSE} alt="Product" />
                                <span className="ItemPrice">$19.99</span>
                                <h4>Название товара</h4>
                            </div>
                            <div className="ItemCard">
                                <img src={itemCard.Iphone15} alt="Product" />
                                <span className="ItemPrice">$19.99</span>
                                <h4>Название товара</h4>
                            </div>
                            <div className="ItemCard">
                                <img src={itemCard.Iphone13} alt="Product" />
                                <span className="ItemPrice">$19.99</span>
                                <h4>Название товара</h4>
                            </div>
                            <div className="ItemCard">
                                <img src={itemCard.USB} alt="Product" />
                                <span className="ItemPrice">$19.99</span>
                                <h4>Название товара</h4>
                            </div>
                        </div>
                        {/*Phone Product*/}
                        <ul><li>СМАРТФОНЫ</li></ul>
                        <div className="ProductItemCard">
                            <div className="ItemCard">
                                <img src={itemCard.SamsungA54} alt="Product" />
                                <span className="ItemPrice">$19.99</span>
                                <h4>Название товара</h4>
                            </div>
                            <div className="ItemCard">
                                <img src={itemCard.SamsungA34} alt="Product" />
                                <span className="ItemPrice">$19.99</span>
                                <h4>Название товара</h4>
                            </div>
                            <div className="ItemCard">
                                <img src={itemCard.Realme10} alt="Product" />
                                <span className="ItemPrice">$19.99</span>
                                <h4>Название товара</h4>
                            </div>
                            <div className="ItemCard">
                                <img src={itemCard.InfinixGT10Pro} alt="Product" />
                                <span className="ItemPrice">$19.99</span>
                                <h4>Название товара</h4>
                            </div>
                            <div className="ItemCard">
                                <img src={itemCard.RedmiNote12} alt="Product" />
                                <span className="ItemPrice">$19.99</span>
                                <h4>Название товара</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;