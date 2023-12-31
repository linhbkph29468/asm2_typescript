import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { ICate, IProduct } from '../../../types/product'
import { Button, Form, Input } from 'antd';
import { updateCate } from '../../../api/category';
interface IProps {
    categories: ICate[],
    onUpdate: (cate: ICate) => void
}
const UpdateCategory = (props: IProps) => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [categories, setCategories] = useState<ICate>() // khởi tạo biến state product có kiểu dữ liệu là IProduct
    useEffect(() => { // khi props thay đổi thì sẽ chạy useEffect này
        const currentCate = props.categories.find((cate: ICate) => cate.id == Number(id))
        // tìm trong mảng props.products có phần tử nào có id trùng với id trên url không
        setCategories(currentCate) // nếu có thì set lại giá trị cho biến product
    }, [props])
    useEffect(() => { // khi biến product thay đổi thì sẽ chạy useEffect này
        setFields() // gọi hàm setFields để set lại giá trị cho các input
    }, [categories])
    const [form] = Form.useForm();
    // khởi tạo một instance của Form và gán vào biến form
    // Instance của form là một đối tượng được tạo ra bởi Ant Design để thực hiện các chức năng của form trong React

    const setFields = () => {// hàm này để set lại giá trị cho các input
        form.setFieldsValue({ // gọi hàm setFieldsValue của instance form để set lại giá trị cho các input dựa vào giá trị của biến product
            id: categories?.id,
            name: categories?.name,
        })
    }

    const onFinish = (values: any) => {
        props.onUpdate(values);
        navigate('/admin/category')
    };

    return (
        <div>
            <Form
                form={form}
                labelCol={{ span: 8 }}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
            >
                {/* đoạn này cần truyền cả id vào form khi submit để lấy được giá trị id truyền lên component App */}
                <Form.Item
                    label=""
                    name="id"
                    style={{ display: 'none' }} // ẩn input này đi
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your category name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 15 }}>
                    <Button type="primary" htmlType="submit">
                        Update Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateCategory