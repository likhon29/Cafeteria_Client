import React from 'react';
import person from '../../../Assets/img/modern-empty-cafe-restaurant_7081-1149.webp'
import parts from '../../../Assets/img/logo.jpg'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='  m-2'>
                    <img src="https://tfe-bd.sgp1.cdn.digitaloceanspaces.com/uploads/1646829083.jpg" alt="" className="p-10 rounded-lg shadow-2xl" />
                    {/* <img src={parts}  alt="" className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" /> */}
                </div>
                <div className='w-2/3'>
                    <p className="text-3xl font-bold text-orange-600">About Us</p>
                    {/* <h1 className="my-5 text-5xl font-bold">
                        We are qualified <br />
                        & of experience <br />
                        in this field</h1> */}
                    <p className="py-6">Jahangirnagar University maintains a central cafeteria for all kind of usage. It is behind the monument called “Omor Ekushey”. There are always students in the cafeteria. The cafeteria offers the students and teachers a healthy and fresh meal in morning and lunch time in very low cost. There are 29 staffs and cookers helping to serve the food and maintaining the menus.

</p>
                    <p className="py-2">Some Basic Information to book Cafeteria

There are some formalities to hire the cafeteria but this must be the time when the cafeteria is close (i.e. it is after the daily schedule or off days and holidays). Teachers and students also can arrange any program at very low cost. The charges of hiring the cafe as follows:

<ul className="list-disc text-[green] font-bold mx-4 my-2">
    <li className="">Any relative of any teacher………………………………………..4000/-</li>
    <li>Anyone referred. by any teacher…………………………………6000/-</li>
    <li>Any program of any department……………………………………500/-</li>
</ul>
</p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;