import React from 'react'
import register from '../../api/register'
import { Form, Checkbox, Input } from 'antd';
import btn_left from '../../asset/Button_left.png';
import btn_right from '../../asset/Button_right.png';

const description = `นโยบายข้อมูลส่วนบุคคล
1. ข้อมูลสำคัญเกี่ยวกับโครงการ
โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์ ครั้งที่ 32 หรือ Comcamp#32 (ซึ่งต่อไปนี้จะเรียกว่า “โครงการ”) เป็นผู้จัดการดำเนินการเว็บไซต์ comcamp.io และเว็บไซต์อื่นที่เกี่ยวข้อง (ซึ่งต่อไปนี้จะเรียกว่า “เว็บไซต์”) นโยบายความเป็นส่วนตัวนี้ เพื่อกำหนดความมุ่งมั่นของโครงการต่อความเป็นส่วนตัวของผู้ใช้ของท่าน (ซึ่งต่อไปนี้จะเรียกว่า “ผู้ใช้” หรือ “ท่าน”) และวิธีที่โครงการเก็บและใช้ข้อมูลส่วนตัวของท่าน
กรุณาอ่านนโยบายความเป็นส่วนตัวนี้โดยละเอียด การเข้าใช้งานเว็บไซต์ของโครงการโดยใช้บริการของโครงการ และยอมรับนโยบายที่เกี่ยวข้องนี้อย่างชัดเจน ท่านรับทราบว่า ท่านได้อ่านและยอมรับข้อกำหนดนโยบายข้อมูลส่วนบุคคลนี้แล้ว หากผู้ใช้ไม่ยอมรับนโยบายข้อมูลส่วนบุคคล ผู้ใช้ยังสามารถทำการสมัครผ่านเว็บไซต์ของโครงการได้

2. ข้อมูลที่โครงการเก็บรวบรวมเกี่ยวกับผู้ใช้
	ข้อมูลส่วนบุคคล หรือ ข้อความส่วนบุคคล หมายถึง ข้อมูลเกี่ยวกับบุคคลที่สามารถระบุบุคคลนั้น อาจทำการรวบรวม ใช้ เก็บ และถ่ายโอนข้อมูลส่วนบุคคลประเภทต่าง ๆ ที่เกี่ยวกับผู้ใช้ตามที่โครงการได้จัดกลุ่มไว้ด้วยกัน ดังต่อไปนี้
ข้อมูลส่วนตัว	ได้แก่ ชื่อ นามสกุล ชื่อเล่น เพศ วันเดือนปีเกิด กรุ๊ปเลือด ศาสนา เบอร์โทรศัพท์ของท่าน อีเมลเพื่อใช้สำหรับการติดต่อ และขนาดไซส์เสื้อ
ข้อมูลการศึกษา ได้แก่ ระดับการศึกษา ชื่อสถานศึกษา จังหวัด และเกรดเฉลี่ยสะสม
ข้อมูลสุขภาพ 	ได้แก่ โรคประจำตัว ข้อมูลอาหารที่แพ้ ยาที่แพ้ ยาประจำตัว ประวัติอุบัติเหตุในรอบ 6 เดือน และประวัติการผ่าตัดในรอบ 6 เดือน
ข้อมูลที่อยู่ 	ได้แก่ ที่อยู่ปัจจุบัน ที่อยู่ตามทะเบียนบ้าน และที่อยู่ตามทะเบียนผู้ปกครอง
ข้อมูลอื่น ๆ 	ได่แก่ ความสนใจส่วนบุคคล ความสามารถพิเศษและผลงาน ช่องทางที่รู้จักโครงการ และการเดินทางมามหาวิทยาลัยเพื่อเข้าร่วมโครงการ
ข้อมูลการใช้งานเว็บไซต์ ได้แก่ เครื่องมือที่ใช้เข้าถึงเว็บไซต์ ลักษณะการใช้งานบนเว็บไซต์ โดยไม่ระบุตัวตน

3. การจัดเก็บข้อมูลส่วนบุคคลของผู้ใช้
	โครงการอาจรวบรวมข้อมูลเกี่ยวกับผู้ใช้ได้หลายวิธี ได้แก่
ปฏิสัมพันธ์โดยตรง โครงการจะเก็บรวบรวมข้อมูลส่วนบุคคลของผู้ใช้ ตัวอย่างเช่น ท่านอาจให้ข้อมูลส่วนตัว ข้อมูลการศึกษา โดยการกรอกแบบฟอร์มบนเว็บไซต์รับสมัครของโครงการ เพื่อทำการสมัครเข้าร่วมโครงการ
เทคโนโลยีอัตโนมัติหรือปฏิสัมพันธ์ ในขณะที่ท่านโต้ตอบกับเว็บไซต์ของโครงการ ระบบเทคโนโลยีอัตโนมัตที่โครงการใช้งานบนเว็บไซต์อาจรวบรวมข้อมูลทางเทคนิค เช่น ข้อมูลเกี่ยวกับเบราเซอร์ของท่านโดยอัตโนมัติ ว่าท่านเข้าเยี่ยมชมพื้นที่ใดในเว็บไซต์ของโครงการและลิงก์ที่ท่านคลิกดูการกระทำและรูปแบบการเรียกดู ช่วยให้โครงการสามารถให้ประสบการณ์ที่ดีแก่ท่านเมื่อท่านเข้าชมเว็บไซต์ของโครงการ และยังช่วยให้โครงการสามารถปรับปรุงพัฒนาเว็บไซต์ให้ดีขึ้น
บุคคลที่สาม หรือ แหล่งข้อมูลสาธารณะ โครงการจะเก็บข้อมูลของผู้ใช้ผ่านการเข้าสู่ระบบโดยใช้สื่อสังคม ทำให้โครงการอาจจะเก็บรวบรวมข้อมูลการติดต่อ อัตลักษณ์ และข้อมูลทางเทคนิค รวมไปถึง ชื่อผู้ใช้งาน/ชื่อผู้ใช้ รูปประจำตัวผู้ใช้งาน ที่อยู่อีเมล และวันเดือนปีเกิดของท่าน ข้อมูลเกี่ยวกับสื่อสังคมออนไลน์ที่ท่านยินยอมเปิดเผยกับโครงการจะไปรวมกับข้อมูลอื่น ๆ ที่ผู้ใช้ให้กับโครงการไว้ หรือที่โครงการรวบรวมเกี่ยวกับท่าน

4.วัตถุประสงค์ของการใช้ข้อมูลส่วนบุคคล
	โครงการมีวัตถุประสงค์ในการใช้ข้อมูล ดังต่อไปนี้
โครงการใช้ข้อมูลส่วนบุคคลเพื่อยืนยันคุณสมบัติและคัดเลือกผู้เข้าร่วมโครงการ
โครงการใช้ข้อมูลส่วนบุคคลเพื่อจัดกลุ่มผู้เข้าร่วมโครงการ
โครงการใช้ข้อมูลส่วนบุคคลเพื่อจัดกิจกรรมในโครงการ
โครงการใช้ข้อมูลส่วนบุคคลเพื่อจัดสรรอาหารให้เหมาะสมกับผู้ร่วมกิจกรรมในโครงการ
โครงการใช้ข้อมูลส่วนบุคคลเพื่อจัดส่งใบประกาศนียบัตรสำหรับผู้ที่เข้าร่วมโครงการ
โครงการใช้ข้อมูลส่วนบุคคลเพื่อให้สามารถติดต่อผู้ปกครองได้ในกรณีฉุกเฉิน
โครงการใช้ข้อมูลแบบไม่ระบุตัวตน และข้อมูลเทคโนโลยีอัตโนมัติเพื่อใช้ในการวิเคราะห์ข้อมูลทางสถิติ
โครงการใช้ข้อมูลส่วนบุคคลเพื่อดูแลความปลอดภัยในระหว่างโครงการ

5. ระยะเวลาในการเก็บข้อมูลส่วนบุคคล
	โครงการจะเก็บข้อมูลส่วนบุคคลของท่านเท่าที่จำเป็นในการจัดโครงการครั้งปัจจุบัน และสำหรับโครงการครั้งต่อไป แต่ไม่เกิน 4 ปี

6. สิทธิของท่านเกี่ยวกับข้อมูลส่วนบุคคล
	ท่านสามารถใช้สิทธิที่ท่านมีอยู่ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล ยังรวมถึงการเข้าถึง การแก้ไข การลบระงับการประมวลผลข้อมูล ขอให้โครงการส่งสำเนาข้อมูลส่วนบุคคลของท่าน ขอให้องค์กรคัดค้านการประมวลผลข้อมูล หรือถอนความยินยอม โครงการได้ทำการแต่งตั้งเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล เพื่อกำกับดูแลคุ้มครองข้อมูลส่วนบุคคลของค่าย และท่านสามารถติดต่อผู้ดูแลข้อมูลของโครงการ ได้ที่อีเมล comcamp32.kmutt@gmail.com`

function StepForm0(props) {

    const { currentStep, handleNext } = props

    const nextStep = async () => {
        const flag = await register.sendData(currentStep, { personal: true })
        console.log("Click Next")
        console.log(flag)
        if (flag) {
            console.log("Next")
            window.location = '/register'
        } else {
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                nextStep()
            }
        });
    };

    const {getFieldDecorator} = props.form

    return (
        <div>
            <h1>นโยบายข้อมูลส่วนบุคคล</h1>
            <Input.TextArea
                disabled={false}
                autoSize={{ maxRows: 15 }}
                placeholder="กรอกคำตอบที่นี่..."
                value={description}
            />
            <Form onSubmit={handleSubmit}>
                <Form.Item className="Right-Radio">
                    {getFieldDecorator('agree', {
                        rules: [{ required: true, message: 'กรุณาอ่านข้อมูลการสมัครให้ครบถ้วน' }]
                    })(
                        <Checkbox.Group options={['ข้าพเจ้าได้อ่านนโยบายข้อมูลส่วนบุคคลทั้งหมดแล้ว']} />,
                    )}
                </Form.Item>
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
                            <button className="Button-Background" htmlType="submit" >
                                <span className="Markdown">Next</span>
                            </button>
                        </div>

                    </div>
                </Form.Item>
            </Form>

        </div>
    )
}

export default Form.create({ name: 'step0' })(StepForm0)