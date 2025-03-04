import { useNavigate } from "react-router";
import './mainpage.css';
import Menu from "../Components/menu";
import Book_table from "../Components/book_table";
import Lapthe from "../Components/lapthedocgia";
import Tiepnhan from "../Components/tiepnhansachmoi";
import Muonsach from "../Components/muonsach";
import Docgia from "../Components/docgia_table";
import Trasach from "../Components/trasach";
import Phieuthu from "../Components/phieuthutienphat";
import { useState } from "react";
import Lapbaocao from "../Components/lapbaocao";
function Mainpage(){
    let navigate = useNavigate()
    const [isOpen,setisOpen] = useState(false)
    const [currentOpen,setcurrentOpen] = useState(null)
    function logout(){
        navigate("/");      
    }
    function selection(select){
        setisOpen(true)
        setcurrentOpen(select)
    
    }
    function hide(){
        setisOpen(false)
    }
    return (
        <>  
            <Menu selection={selection}/>
            <div id="hang"><img src="./src/assets/sign.png" alt="" /></div>
            <div id="user-info">
                <center>Thông tin</center><br></br>
                <div className='info'>
                    <div className="label">Họ tên:</div>
                    <span className="result">NGUYỄN VĂN A</span>
                    </div>
                <div className="info">
                    <div className="label">Ngày sinh:</div>
                    <span className="result">01/01/1998</span>
            </div>
                <div className="info">
                    <div className="label">Giới tính:</div>
                    <span className="result">Nam</span>
                    </div>
                <div className="info">
                    <div className="label">Chức vụ:</div>
                    <span className="result">Nhân viên quản lí</span>
                </div>
                <div className="div-button">
                    <button className='button'>Đổi mật khẩu</button>
                    <button className='button' onClick={logout}>Đăng xuất</button>
                </div>
            </div>
            {(currentOpen==='tiepnhan' || currentOpen==='baocao' || currentOpen===null ) && <Book_table/>}
            {(currentOpen==='lapthe'|| currentOpen==='phieuthu' || currentOpen==='muonsach' || currentOpen==='trasach') && <Docgia/>}
            {isOpen && currentOpen==='lapthe' && <Lapthe hide={hide}/>}
            {isOpen && currentOpen==='tiepnhan' && <Tiepnhan hide={hide}/>}
            {isOpen && currentOpen==='muonsach' && <Muonsach hide={hide}/>}
            {isOpen && currentOpen==='trasach' && <Trasach hide={hide}/>}
            {isOpen && currentOpen==='phieuthu' && <Phieuthu hide={hide}/>}
            {isOpen && currentOpen==='baocao' && <Lapbaocao hide={hide}/>}
        </>
    )
}
export default Mainpage;