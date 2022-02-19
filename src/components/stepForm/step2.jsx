import React, { useEffect, useState } from 'react'
import register from '../../api/register'
import { Form, Input, AutoComplete, Row, Col, Select, InputNumber } from 'antd';
import btn_left from '../../asset/Button_left.png';
import btn_right from '../../asset/Button_right.png';

const { Option } = Select

const province_th = [
    'กรุงเทพฯ',
    'กระบี่',
    'กาญจนบุรี',
    'กาฬสินธุ์',
    'กำแพงเพชร',
    'ขอนแก่น',
    'จันทบุรี',
    'ฉะเชิงเทรา',
    'ชลบุรี',
    'ชัยนาท',
    'ชัยภูมิ',
    'ชุมพร',
    'เชียงใหม่',
    'เชียงราย',
    'ตรัง',
    'ตราด',
    'ตาก',
    'นครนายก',
    'นครปฐม',
    'นครพนม',
    'นครราชสีมา',
    'นครศรีธรรมราช',
    'นครสวรรค์',
    'นนทบุรี',
    'นราธิวาส',
    'น่าน',
    'บึงกาฬ',
    'บุรีรัมย์',
    'ปทุมธานี',
    'ประจวบคีรีขันธ์',
    'ปราจีนบุรี',
    'ปัตตานี',
    'พระนครศรีอยุธยา',
    'พะเยา',
    'พังงา',
    'พัทลุง',
    'พิจิตร',
    'พิษณุโลก',
    'เพชรบุรี',
    'เพชรบูรณ์',
    'แพร่',
    'ภูเก็ต',
    'มหาสารคาม',
    'มุกดาหาร',
    'แม่ฮ่องสอน',
    'ยโสธร',
    'ยะลา',
    'ร้อยเอ็ด',
    'ระนอง',
    'ระยอง',
    'ราชบุรี',
    'ลพบุรี',
    'ลำปาง',
    'ลำพูน',
    'เลย',
    'ศรีสะเกษ',
    'สกลนคร',
    'สงขลา',
    'สตูล',
    'สมุทรปราการ',
    'สมุทรสงคราม',
    'สมุทรสาคร',
    'สระแก้ว',
    'สระบุรี',
    'สิงห์บุรี',
    'สุโขทัย',
    'สุพรรณบุรี',
    'สุราษฎร์ธานี',
    'สุรินทร์',
    'หนองคาย',
    'หนองบัวลำภู',
    'อ่างทอง',
    'อำนาจเจริญ',
    'อุดรธานี',
    'อุตรดิตถ์',
    'อุทัยธานี',
    'อุบลราชธานี',
];

function StepForm2(props) {

    const { currentStep, handlePrev, handleNext, user, summary } = props

    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        if (user.hasOwnProperty("school")) {
            let schoolData = user.school
            delete schoolData._id
            props.form.setFieldsValue(schoolData);
        }
    }, []);


    const nextStep = async (payload) => {
        // const flag = await register.sendData(currentStep, payload)
        console.log("Click Next")
        // console.log(flag)
        if (true) {
            console.log("Next 2")
            handleNext()
        } else {
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                nextStep(values)
            }
        });
    };

    const onSearch = searchText => {
        setDataSource(!searchText ? [] : province_th)
      };

    const { getFieldDecorator } = props.form;

    const config = {
        rules: [{
            required: !summary, 
            message: 'กรุณากรอกจังหวัด', 
            enum: ['กรุงเทพฯ',
            'กระบี่',
            'กาญจนบุรี',
            'กาฬสินธุ์',
            'กำแพงเพชร',
            'ขอนแก่น',
            'จันทบุรี',
            'ฉะเชิงเทรา',
            'ชลบุรี',
            'ชัยนาท',
            'ชัยภูมิ',
            'ชุมพร',
            'เชียงใหม่',
            'เชียงราย',
            'ตรัง',
            'ตราด',
            'ตาก',
            'นครนายก',
            'นครปฐม',
            'นครพนม',
            'นครราชสีมา',
            'นครศรีธรรมราช',
            'นครสวรรค์',
            'นนทบุรี',
            'นราธิวาส',
            'น่าน',
            'บึงกาฬ',
            'บุรีรัมย์',
            'ปทุมธานี',
            'ประจวบคีรีขันธ์',
            'ปราจีนบุรี',
            'ปัตตานี',
            'พระนครศรีอยุธยา',
            'พะเยา',
            'พังงา',
            'พัทลุง',
            'พิจิตร',
            'พิษณุโลก',
            'เพชรบุรี',
            'เพชรบูรณ์',
            'แพร่',
            'ภูเก็ต',
            'มหาสารคาม',
            'มุกดาหาร',
            'แม่ฮ่องสอน',
            'ยโสธร',
            'ยะลา',
            'ร้อยเอ็ด',
            'ระนอง',
            'ระยอง',
            'ราชบุรี',
            'ลพบุรี',
            'ลำปาง',
            'ลำพูน',
            'เลย',
            'ศรีสะเกษ',
            'สกลนคร',
            'สงขลา',
            'สตูล',
            'สมุทรปราการ',
            'สมุทรสงคราม',
            'สมุทรสาคร',
            'สระแก้ว',
            'สระบุรี',
            'สิงห์บุรี',
            'สุโขทัย',
            'สุพรรณบุรี',
            'สุราษฎร์ธานี',
            'สุรินทร์',
            'หนองคาย',
            'หนองบัวลำภู',
            'อ่างทอง',
            'อำนาจเจริญ',
            'อุดรธานี',
            'อุตรดิตถ์',
            'อุทัยธานี',
            'อุบลราชธานี']
        }]
    }

    return (
        <div>
            <h1>ประวัติการศึกษา</h1>
            <Form onSubmit={handleSubmit} >
                    <Row>
                        <Col xs={24} md={{span: 20}}>
                        <Form.Item label="ชื่อสถานศึกษา">
                            {getFieldDecorator('school_name', {
                                rules: [{ required: !summary, message: 'กรุณากรอกชื่อสถานศึกษา' }],
                            })(
                                <Input
                                disabled={summary}
                                placeholder="โรงเรียนคอมแคมป์ 32"
                                />,
                            )}
                        </Form.Item>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col xs={24} md={{span:10}}>
                            <Form.Item label="จังหวัด">
                                        {getFieldDecorator('school_province', config)(
                                        <AutoComplete
                                            disabled={summary}
                                            dataSource={dataSource}
                                            onSearch={onSearch}
                                            placeholder="ระบุจังหวัด"
                                            filterOption={(inputValue, option) =>
                                            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                        }
                                        />
                                    )}
                            </Form.Item>
                        </Col>
                    </Row>

                <Row>
                    <Col xs={24} md={{span:10}} lg={{span: 7}}>
                        <Form.Item label="ระดับการศึกษา">
                            {getFieldDecorator('grade', {
                                rules: [{ required: !summary, message: 'กรุณากรอกชั้นปีการศึกษา', enum: ['4', '5', '6', 'ปวช'] }],
                            })(
                                <Select disabled={summary} placeholder='ระบุระดับการศึกษา '>
                                    <Option value={'4'}>ม.4 ขึ้น ม.5</Option>
                                    <Option value={'5'}>ม.5 ขึ้น ม.6</Option>
                                    <Option value={'6'}>ม.6 ขึ้น มหาวิทยาลัย</Option>
                                    <Option value={'ปวช 1'}>ปวช ชั้นปีที่ 1 ขึ้น ชั้นปีที่ 2</Option>
                                    <Option value={'ปวช 2'}>ปวช ชั้นปีที่ 2 ขึ้น ชั้นปีที่ 3</Option>
                                    <Option value={'ปวช 3'}>ปวช ชั้นปีที่ 3 จบการศึกษา</Option>
                                </Select>,
                            )}
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={{span:3, offset:1}} lg={{span: 2, offset:1}}>
                        <Form.Item label="เกรดเฉลี่ย">
                            {getFieldDecorator('gpax', {
                                rules: [{ required: !summary, message: 'กรุณากรอกเกรดเฉลี่ย' ,pattern: new RegExp(/^[0-9]+(\.[0-9]{0,2})?$/) }],
                            })(
                                <InputNumber min={0} max={4} step={0.01}
                                    style={{width: '100%'}}
                                    placeholder="4.00"
                                    disabled={summary}
                                />,
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                {!summary &&
                    <Form.Item>
                        <div class="Button-Row">
                            <div className="Button-Column right">
                                <div className="Button-Left-Image">
                                    <img
                                        src={btn_left}
                                        alt="Left button decoration"
                                    />
                                </div>
                                <div className="Button-Right-Image">
                                    <img
                                        src={btn_right}
                                        alt="Right button decoration"
                                    />
                                </div>
                                <div className="Button-BorderImage"></div>
                                <button className="Button-Background" htmlType="submit">
                                    <span className="Markdown">Next</span>
                                </button>
                            </div>

                            <div className="Button-Column left">
                                <div className="Button-Left-Image">
                                    <img
                                        src={btn_left}
                                        alt="Left button decoration"
                                    />
                                </div>
                                <div className="Button-Right-Image">
                                    <img
                                        src={btn_right}
                                        alt="Right button decoration"
                                    />
                                </div>
                                <div className="Button-BorderImage"></div>
                                <button className="Button-Background" onClick={handlePrev}>
                                    <span className="Markdown">Back</span>
                                </button>
                            </div>
                        </div>
                    </Form.Item>
                }

            </Form>
        </div>
    )
}

export default Form.create({ name: 'step2' })(StepForm2)