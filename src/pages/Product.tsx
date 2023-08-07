import React, { useEffect, useState } from 'react'
import "../components/css.css";
import { IProduct } from '../types/product'
import { Footer, Header } from '../components'
interface IProps { // định nghĩa kiểu dữ liệu cho props truyền vào component
    products: IProduct[], // định nghĩa kiểu dữ liệu cho mảng products 
    onRemove: (id: number) => void // định nghĩa kiểu dữ liệu cho hàm onRemove
}

const ProductPage = (props: IProps) => { // khai báo kiểu dữ liệu cho props
    const [data, setData] = useState<IProduct[]>([]) //khởi taọ state data với kiểu dữ liệu của data là mảng IProduct
    useEffect(() => {
        setData(props.products)
    }, [props])

    function removeProduct(id: number) {
        // console.log(id);
        props.onRemove(id)
    }
    return (
        <div>
            <Header />
            <div className='container'>
                <h1 className='center'>Product</h1>
                <div className="box">
                    {data.map((value, index) => {
                        return (
                            <div key={value.id}>
                                <div className='product' key={index}>
                                    <p>{value.name}</p>
                                    <img src={value.image} alt="" />
                                    <div className='price'>
                                        <span>{value.price}đ</span><del>{value.price}đ</del>
                                    </div>
                                </div>
                                {/* <button onClick={() => removeProduct(value.id)}>Remove</button> */}
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default ProductPage
