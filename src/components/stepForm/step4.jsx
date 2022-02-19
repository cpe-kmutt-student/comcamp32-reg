import React, { useEffect, useState } from 'react'
import register from '../../api/register'
import { Form, Input, Button, Row, Col, Select, AutoComplete } from 'antd';
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




function StepForm4(props) {

    
    
    const { currentStep, handlePrev, handleNext, user, summary } = props
    const { getFieldDecorator, getFieldsValue, setFieldsValue } = props.form;
    
    const config = {
        rules: [{
            enum: province_th,
            required: !summary, 
            message: 'กรุณากรอกจังหวัด', 
            
        }
    ]}
    const [value, setValue] = useState('')
    const [dataSource, setDataSource] = useState([])
    let addressData = {}

    useEffect(() => {
        if (user.hasOwnProperty("address")) {
            addressData = user.address
            props.form.setFieldsValue({
                home_number: addressData.address_present.home_number,
                road: addressData.address_present.road,
                village: addressData.address_present.village,
                lane: addressData.address_present.lane,
                sub_district: addressData.address_present.sub_district,
                district: addressData.address_present.district,
                province: addressData.address_present.province,
                postal_code: addressData.address_present.postal_code,

                home_number_regis: addressData.address_regis.home_number,
                road_regis: addressData.address_regis.road,
                village_regis: addressData.address_regis.village,
                lane_regis: addressData.address_regis.lane,
                sub_district_regis: addressData.address_regis.sub_district,
                district_regis: addressData.address_regis.district,
                province_regis: addressData.address_regis.province,
                postal_code_regis: addressData.address_regis.postal_code,

                home_number_parent: addressData.address_parent.home_number,
                road_parent: addressData.address_parent.road,
                village_parent: addressData.address_parent.village,
                lane_parent: addressData.address_parent.lane,
                sub_district_parent: addressData.address_parent.sub_district,
                district_parent: addressData.address_parent.district,
                province_parent: addressData.address_parent.province,
                postal_code_parent: addressData.address_parent.postal_code,

                relation: addressData.parent.relation,
                fname: addressData.parent.fname,
                lname: addressData.parent.lname,
                tel: addressData.parent.tel,
                email: addressData.parent.email,
                prefix_th: addressData.parent.prefix_th,

                relation2: addressData.parent2.relation,
                fname2: addressData.parent2.fname,
                lname2: addressData.parent2.lname,
                tel2: addressData.parent2.tel,
                email2: addressData.parent2.email,
                prefix_th2: addressData.parent2.prefix_th
            });
        }
        // props.form.setFieldsValue({have_accident: false})
    }, []);

    const nextStep = async (payload) => {
        handleNext()
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

    const copyLocationRegis = () => {
        const location = getFieldsValue(['home_number', 'road', 'village', 'lane', 'sub_district', 'district', 'province', 'postal_code'])
        setFieldsValue({
            home_number_regis: location.home_number,
            road_regis: location.road,
            village_regis: location.village,
            lane_regis: location.lane,
            sub_district_regis: location.sub_district,
            district_regis: location.district,
            province_regis: location.province,
            postal_code_regis: location.postal_code,
        })
    }

    const copyLocationParent = () => {
        const location = getFieldsValue(['home_number', 'road', 'village', 'lane', 'sub_district', 'district', 'province', 'postal_code'])
        setFieldsValue({
            home_number_parent: location.home_number,
            road_parent: location.road,
            village_parent: location.village,
            lane_parent: location.lane,
            sub_district_parent: location.sub_district,
            district_parent: location.district,
            province_parent: location.province,
            postal_code_parent: location.postal_code,
        })
    }

    const onSearch = searchText => {
        setDataSource(!searchText ? [] : province_th)
      };
    
    const onChange = value => {
        setValue(value);
    };

    function onSelect(value) {
        console.log('onSelect', value);
    }

    const selectBefore = getFieldDecorator('prefix_th', {
        initialValue:"นาย",
        rules: [{required: !summary, message: 'กรุณาระบุคำนำหน้าชื่อ'}]
    })(
        <Select style={{ width: 90 }}
            disabled={summary}
        >
          <Option value="นาย">นาย</Option>
          <Option value="นาง">นาง</Option>
          <Option value="นางสาว">นางสาว</Option>
        </Select>
    );

    const selectBefore2 = getFieldDecorator('prefix_th2', {
        initialValue:"นาย",
    })(
        <Select style={{ width: 90 }}
            disabled={summary}
        >
          <Option value="นาย">นาย</Option>
          <Option value="นาง">นาง</Option>
          <Option value="นางสาว">นางสาว</Option>
        </Select>
    );
    

    return (
        <div>
            <Form onSubmit={handleSubmit} >
                <Row>
                    <Col xs={24} md={{span: 24}}>
                    <h1>ที่อยู่ปัจจุบัน</h1>
                        <Row>
                            <Col md={{span:6}}>
                            <Form.Item label="บ้านเลขที่">
                            {getFieldDecorator('home_number', {
                                rules: [{ required: !summary, message: 'กรุณากรอกบ้านเลขที่' }],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="10"
                                />,
                            )}
                            </Form.Item>
                            </Col>
                            <Col md={{span:3 , offset: 1}}>
                                <Form.Item label="หมู่">
                                    {getFieldDecorator('village', {
                                        rules: [{ required: !summary, message: 'กรุณากรอกหมู่' }],
                                    })(
                                        <Input
                                            disabled={summary}
                                            placeholder="32"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                            <Col md={{span:6 , offset: 1}}>
                                <Form.Item label="ซอย">
                                    {getFieldDecorator('lane', {
                                            rules: [{ required: !summary, message: 'กรุณากรอกชื่อหรือเลขที่ซอย' }],
                                    })(
                                        
                                        <Input
                                            disabled={summary}
                                            placeholder="คอมแคมป์ 32"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                            <Col md={{span:6 , offset: 1}}>
                            <Form.Item label="ถนน">
                            {getFieldDecorator('road',{
                                rules: [{ required: !summary, message: 'กรุณากรอกชื่อถนน' }],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="วิศววัฒนะ"
                                />,
                            )}
                            </Form.Item>
                            </Col>
                        </Row>
                       
                        <Row>
                            <Col md={{span:6}}>
                                <Form.Item label="ตำบล/แขวง">
                                {getFieldDecorator('sub_district', {
                                    rules: [{ required: !summary, message: 'กรุณากรอกชื่อตำบล/แขวง' }],
                                })(
                                    <Input
                                        disabled={summary}
                                        placeholder="บางมด"
                                    />,
                                )}
                                </Form.Item>
                            </Col>
                            <Col md={{span:5 , offset: 1}}>
                                <Form.Item label="อำเภอ/เขต">
                                    {getFieldDecorator('district', {
                                        rules: [{ required: !summary, message: 'กรุณากรอกชื่ออำเภอ/เขต' }],
                                    })(
                                        <Input
                                            disabled={summary}
                                            placeholder="ทุ่งครุ"
                                        />,
                                    )}
                                </Form.Item>
                                </Col>
                            <Col md={{span:6 , offset: 1}}>
                                <Form.Item label="จังหวัด">
                                    {getFieldDecorator('province', config)(
                                    <AutoComplete
                                        disabled={summary}
                                        dataSource={dataSource}
                                        onSelect={onSelect}
                                        onSearch={onSearch}
                                        placeholder="ระบุจังหวัด"
                                        filterOption={(inputValue, option) =>
                                        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                    }
                                    />
                                )}
                                </Form.Item> 
                            </Col>
                            <Col md={{span: 4 , offset: 1}}>
                                <Form.Item label="รหัสไปรษณีย์">
                                {getFieldDecorator('postal_code', {
                                    rules: [{ required: !summary, message: 'กรุณากรอกรหัสไปรษณีย์' ,pattern: new RegExp(/^[0-9]{5}$/)}]
                                })(
                                    <Input
                                        disabled={summary}
                                        placeholder="10032"
                                    />,
                                )}
                                </Form.Item>
                            </Col>
                        </Row>
                        

                    </Col>
                </Row>

                
                <Row xs={24} md={{span: 24}}>
                    <Col>
                        <h1 style={{display: 'inline-block', 'margin-right': '1em'}}>ที่อยู่ตามทะเบียนบ้าน</h1>
                        {!summary && <Button onClick={copyLocationRegis} className="black" >เหมือนที่อยู่ปัจจุบัน</Button>}
                        <Row>
                            <Col md={{span:6}}>
                            <Form.Item label="บ้านเลขที่">
                            {getFieldDecorator('home_number_regis', {
                                rules: [{ required: !summary, message: 'กรุณากรอกบ้านเลขที่' }],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="10"
                                />,
                            )}
                            </Form.Item>
                            </Col>
                            <Col md={{span:3 , offset: 1}}>
                                <Form.Item label="หมู่">
                                    {getFieldDecorator('village_regis', {
                                        rules: [{ required: !summary, message: 'กรุณากรอกหมู่' }],
                                    })(
                                        <Input
                                            disabled={summary}
                                            placeholder="32"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                            <Col md={{span:6 , offset: 1}}>
                                <Form.Item label="ซอย">
                                    {getFieldDecorator('lane_regis', {
                                            rules: [{ required: !summary, message: 'กรุณากรอกชื่อหรือเลขที่ซอย' }],
                                    })(
                                        
                                        <Input
                                            disabled={summary}
                                            placeholder="คอมแคมป์ 32"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                            <Col md={{span:6 , offset: 1}}>
                            <Form.Item label="ถนน">
                            {getFieldDecorator('road_regis',{
                                rules: [{ required: !summary, message: 'กรุณากรอกชื่อถนน' }],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="วิศววัฒนะ"
                                />,
                            )}
                            </Form.Item>
                            </Col>
                        </Row>
                       
                        <Row>
                            <Col md={{span:6}}>
                                <Form.Item label="ตำบล/แขวง">
                                {getFieldDecorator('sub_district_regis', {
                                    rules: [{ required: !summary, message: 'กรุณากรอกชื่อตำบล/แขวง' }],
                                })(
                                    <Input
                                        disabled={summary}
                                        placeholder="บางมด"
                                    />,
                                )}
                                </Form.Item>
                            </Col>
                            <Col md={{span:5 , offset: 1}}>
                                <Form.Item label="อำเภอ/เขต">
                                    {getFieldDecorator('district_regis', {
                                        rules: [{ required: !summary, message: 'กรุณากรอกชื่ออำเภอ/เขต' }],
                                    })(
                                        <Input
                                            disabled={summary}
                                            placeholder="ทุ่งครุ"
                                        />,
                                    )}
                                </Form.Item>
                                </Col>
                            <Col md={{span:6 , offset: 1}}>
                                <Form.Item label="จังหวัด">
                                    {getFieldDecorator('province_regis', config)(
                                    <AutoComplete
                                        disabled={summary}
                                        dataSource={dataSource}
                                        onSelect={onSelect}
                                        onSearch={onSearch}
                                        placeholder="ระบุจังหวัด"
                                        filterOption={(inputValue, option) =>
                                        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                    }
                                    />
                                )}
                                </Form.Item> 
                            </Col>
                            <Col md={{span: 4 , offset: 1}}>
                                <Form.Item label="รหัสไปรษณีย์">
                                {getFieldDecorator('postal_code_regis', {
                                    rules: [{ required: !summary, message: 'กรุณากรอกรหัสไปรษณีย์',pattern: new RegExp(/^[0-9]{5}$/) }]
                                })(
                                    <Input
                                        disabled={summary}
                                        placeholder="10032"
                                    />,
                                )}
                                </Form.Item>
                            </Col>
                        </Row>
                        

                    </Col>
                    </Row>

                <Row>
                    <Col xs={24} md={{span: 24}}>
                    <h1 style={{display: 'inline-block', 'margin-right': '1em'}}>ที่อยู่ตามทะเบียนผู้ปกครอง</h1>
                    {!summary && <Button onClick={copyLocationParent}>เหมือนที่อยู่ปัจจุบัน</Button>}
                    <Row>
                            <Col md={{span:6}}>
                            <Form.Item label="บ้านเลขที่">
                            {getFieldDecorator('home_number_parent', {
                                rules: [{ required: !summary, message: 'กรุณากรอกบ้านเลขที่' }],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="10"
                                />,
                            )}
                            </Form.Item>
                            </Col>
                            <Col md={{span:3 , offset: 1}}>
                                <Form.Item label="หมู่">
                                    {getFieldDecorator('village_parent', {
                                        rules: [{ required: !summary, message: 'กรุณากรอกหมู่' }],
                                    })(
                                        <Input
                                            disabled={summary}
                                            placeholder="32"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                            <Col md={{span:6 , offset: 1}}>
                                <Form.Item label="ซอย">
                                    {getFieldDecorator('lane_parent', {
                                            rules: [{ required: !summary, message: 'กรุณากรอกชื่อหรือเลขที่ซอย' }],
                                    })(
                                        
                                        <Input
                                            disabled={summary}
                                            placeholder="คอมแคมป์ 32"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                            <Col md={{span:6 , offset: 1}}>
                            <Form.Item label="ถนน">
                            {getFieldDecorator('road_parent',{
                                rules: [{ required: !summary, message: 'กรุณากรอกชื่อถนน' }],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="วิศววัฒนะ"
                                />,
                            )}
                            </Form.Item>
                            </Col>
                        </Row>
                       
                        <Row>
                            <Col md={{span:6}}>
                                <Form.Item label="ตำบล/แขวง">
                                {getFieldDecorator('sub_district_parent', {
                                    rules: [{ required: !summary, message: 'กรุณากรอกชื่อตำบล/แขวง' }],
                                })(
                                    <Input
                                        disabled={summary}
                                        placeholder="บางมด"
                                    />,
                                )}
                                </Form.Item>
                            </Col>
                            <Col md={{span:5 , offset: 1}}>
                                <Form.Item label="อำเภอ/เขต">
                                    {getFieldDecorator('district_parent', {
                                        rules: [{ required: !summary, message: 'กรุณากรอกชื่ออำเภอ/เขต' }],
                                    })(
                                        <Input
                                            disabled={summary}
                                            placeholder="ทุ่งครุ"
                                        />,
                                    )}
                                </Form.Item>
                                </Col>
                            <Col md={{span:6 , offset: 1}}>
                                <Form.Item label="จังหวัด">
                                    {getFieldDecorator('province_parent', config)(
                                    <AutoComplete
                                        disabled={summary}
                                        dataSource={dataSource}
                                        onSelect={onSelect}
                                        onSearch={onSearch}
                                        placeholder="ระบุจังหวัด"
                                        filterOption={(inputValue, option) =>
                                        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                    }
                                    />
                                )}
                                </Form.Item> 
                            </Col>
                            <Col md={{span: 4 , offset: 1}}>
                                <Form.Item label="รหัสไปรษณีย์">
                                {getFieldDecorator('postal_code_parent', {
                                    rules: [{ required: !summary, message: 'กรุณากรอกรหัสไปรษณีย์', pattern: new RegExp(/^[0-9]{5}$/)}]
                                })(
                                    <Input
                                        disabled={summary}
                                        placeholder="10032"
                                    />,
                                )}
                                </Form.Item>
                            </Col>

                        </Row>
                    </Col>
                </Row>

                <Row>
                    <h1>ข้อมูลติดต่อผู้ปกครอง</h1>
                </Row>

                <Row>
                    <Col md={{span:8}}>
                        <Form.Item label="ชื่อ">
                        {getFieldDecorator('fname', {
                        rules: [{ required: !summary, message: 'กรุณากรอกชื่อ' }],
                        })(
                        <Input
                        addonBefore={selectBefore}
                        disabled={summary}
                        placeholder="สมคิด"
                        />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col md={{span:8  , offset:1}}>
                        <Form.Item label="นามสกุล">
                        {getFieldDecorator('lname', {
                        rules: [{ required: !summary, message: 'กรุณากรอกนามสกุล' }],
                        })(
                        <Input
                        disabled={summary}
                        placeholder="ใจมา"
                        />,
                        )}
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                        <Col  md={{span:3}}>
                            <Form.Item label="ความสัมพันธ์">
                            {getFieldDecorator('relation', {
                            rules: [{ 
                                required: !summary, 
                                message: 'กรุณากรอกความสัมพันธ์' }],
                            })(
                            <Input
                            disabled={summary}
                            placeholder="บิดา"
                            />,
                            )}
                            </Form.Item>
                        </Col>
                        <Col md={{span:4 , offset:1}}>
                            <Form.Item label="เบอร์โทรศัพท์">
                            {getFieldDecorator('tel', {
                            rules: [{ required: !summary, message: 'กรุณากรอกเบอร์โทรศัพท์' ,  pattern: new RegExp(/^[0-9]{10}$/)}],
                            })(
                            <Input
                            disabled={summary}
                            placeholder="08xxxxxxxx"
                            />,
                            )}
                            </Form.Item>
                        </Col>
                        {(!summary || addressData.email) && 
                        <Col md={{span:6 , offset:1}}>
                            <Form.Item label="E-mail (หากมี)">
                            {getFieldDecorator('email', {
                            rules: [{ message: 'กรุณากรอกอีเมล' , type: 'email'}],
                            })(
                            <Input
                            disabled={summary}
                            placeholder="sample@gmail.com"
                            />,
                            )}
                            </Form.Item>
                        
                        </Col>
                        }
                </Row>

                

                <Row>
                {(!summary || addressData.fname2) && 
                    <Col md={{span:8}}>
                        <Form.Item label="ชื่อ">
                        {getFieldDecorator('fname2', {
                        rules: [{  message: 'กรุณากรอกชื่อ' }],
                        })(
                        <Input
                        addonBefore={selectBefore2}
                        disabled={summary}
                        placeholder="สมพร"
                        />,
                        )}
                        </Form.Item>
                
                    </Col>
                }
                {(!summary || addressData.lname2) && 
                    <Col md={{span:8 , offset:1}}>
                        <Form.Item label="นามสกุล">
                        {getFieldDecorator('lname2', {
                        rules: [{  message: 'กรุณากรอกนามสกุล' }],
                        })(
                        <Input
                        disabled={summary}
                        placeholder="ใจมา"
                        />,
                        )}
                        </Form.Item>
                    </Col>
                }
                </Row>
                <Row>
                {(!summary || addressData.relation2) && 
                 <Col  md={{span:3}}>
                        <Form.Item label="ความสัมพันธ์">
                        {getFieldDecorator('relation2', {
                        rules: [{  message: 'กรุณากรอกความสัมพันธ์' }],
                        })(
                        <Input
                        disabled={summary}
                        placeholder="มารดา"
                        />,
                        )}
                        </Form.Item>
                    </Col>
                }
                   {(!summary || addressData.tel2) && 
                    <Col md={{span:4 , offset:1}}>
                        <Form.Item label="เบอร์โทรศัพท์">
                        {getFieldDecorator('tel2', {
                        rules: [{  message: 'กรุณากรอกเบอร์โทรศัพท์',  pattern: new RegExp(/^[0-9]{10}$/) }],
                        })(
                        <Input
                        disabled={summary}
                        placeholder="08xxxxxxxx"
                        />,
                        )}
                        </Form.Item>
                    </Col>
                }
                {(!summary || addressData.email2) && 
                    <Col md={{span:6 , offset:1}}>
                        <Form.Item label="E-mail (หากมี)">
                        {getFieldDecorator('email2', {
                        rules: [{  message: 'กรุณากรอกอีเมล' , type: 'email'}],
                        })(
                        <Input
                        disabled={summary}
                        placeholder="sample@gmail.com"
                        />,
                        )}
                        </Form.Item>
                    </Col>
            }
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

export default Form.create({ name: 'step4' })(StepForm4)