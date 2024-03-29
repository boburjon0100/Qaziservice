import React from 'react'
import './Search.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer/Footer';
import { NavLink } from 'react-router-dom';

const Search = () => {
  return (
    <div className='search'>
        <div className='search1'>
        <div className='top'>
        <div className='top1'>
            <p>Результатов: 38</p>
        </div>
        <div className='top2'>
         <p>Поиск по запросу:</p>
         <input type="text" maxLength={38} placeholder='ИК-Фурье'/>
         <FontAwesomeIcon className="serach_icon"  icon={faMagnifyingGlass  } />
        </div>
        </div>
        <p className='p1'>Раздел</p>
        {
            data && data.map((item , i) => {
                return(
                    <div className='bottom'>
                    <div className='bottom1'>
                        <p>{item.name}</p>
                    </div> 
                     <div className='bottom2'>
                        <h4>{item.title}</h4>
                        <p>{item.text }</p>
                    </div>
            
                    </div>
                )
            })
        }
        
       
    </div>
    <div className='number'>
       <NavLink to={"/"}> <span>1</span></NavLink>
       <NavLink to={"/"}> <span>2</span></NavLink>
       <NavLink to={"/"}> <span>3</span></NavLink>
       <NavLink to={"/"}> <span>4</span></NavLink>
       <NavLink to={"/"}> <span>5</span></NavLink>
       <NavLink to={"/"}> <span>...</span></NavLink>
       <NavLink to={"/"}> <span>9</span></NavLink>
       
    </div>
    <Footer/>
    </div>
    
  )
}

export default Search

const data  =[
    {id:1 , name: 'Оборудование' , text: 'ИК-Фурье спектрометры серии Nicolet Summit - эргономичные и компактные ИК-Фурье спектрометры, разработанные для применения в самых разных областях анализа, обладающие всеми современными возможностями обработки спектров. Это идеальная система для отделов контроля качества и учебных лабораторий.' , title: 'ИК-Фурье спектрометры серии Nicolet Summit'
    

}
,
{id:2 , name: 'Оборудование' , text: 'ИК-Фурье спектрометры серии Nicolet Summit - эргономичные и компактные ИК-Фурье спектрометры, разработанные для применения в самых разных областях анализа, обладающие всеми современными возможностями обработки спектров. Это идеальная система для отделов контроля качества и учебных лабораторий.' , title: 'ИК-Фурье спектрометры серии Nicolet Summit'
    

}
,
{id:3 , name: 'Оборудование' , text: 'ИК-Фурье спектрометры серии Nicolet Summit - эргономичные и компактные ИК-Фурье спектрометры, разработанные для применения в самых разных областях анализа, обладающие всеми современными возможностями обработки спектров. Это идеальная система для отделов контроля качества и учебных лабораторий.' , title: 'ИК-Фурье спектрометры серии Nicolet Summit'
    

}
,
{id:4 , name: 'Оборудование' , text: 'ИК-Фурье спектрометры серии Nicolet Summit - эргономичные и компактные ИК-Фурье спектрометры, разработанные для применения в самых разных областях анализа, обладающие всеми современными возможностями обработки спектров. Это идеальная система для отделов контроля качества и учебных лабораторий.' , title: 'ИК-Фурье спектрометры серии Nicolet Summit'
    

},
{id:5 , name: 'Оборудование' , text: 'ИК-Фурье спектрометры серии Nicolet Summit - эргономичные и компактные ИК-Фурье спектрометры, разработанные для применения в самых разных областях анализа, обладающие всеми современными возможностями обработки спектров. Это идеальная система для отделов контроля качества и учебных лабораторий.' , title: 'ИК-Фурье спектрометры серии Nicolet Summit'
    

},
{id:6 , name: 'Оборудование' , text: 'ИК-Фурье спектрометры серии Nicolet Summit - эргономичные и компактные ИК-Фурье спектрометры, разработанные для применения в самых разных областях анализа, обладающие всеми современными возможностями обработки спектров. Это идеальная система для отделов контроля качества и учебных лабораторий.' , title: 'ИК-Фурье спектрометры серии Nicolet Summit'
    

},
{id:7 , name: 'Оборудование' , text: 'ИК-Фурье спектрометры серии Nicolet Summit - эргономичные и компактные ИК-Фурье спектрометры, разработанные для применения в самых разных областях анализа, обладающие всеми современными возможностями обработки спектров. Это идеальная система для отделов контроля качества и учебных лабораторий.' , title: 'ИК-Фурье спектрометры серии Nicolet Summit'
    

},
{id:8 , name: 'Оборудование' , text: 'ИК-Фурье спектрометры серии Nicolet Summit - эргономичные и компактные ИК-Фурье спектрометры, разработанные для применения в самых разных областях анализа, обладающие всеми современными возможностями обработки спектров. Это идеальная система для отделов контроля качества и учебных лабораторий.' , title: 'ИК-Фурье спектрометры серии Nicolet Summit'
    

},
{id:9 , name: 'Оборудование' , text: 'ИК-Фурье спектрометры серии Nicolet Summit - эргономичные и компактные ИК-Фурье спектрометры, разработанные для применения в самых разных областях анализа, обладающие всеми современными возможностями обработки спектров. Это идеальная система для отделов контроля качества и учебных лабораторий.' , title: 'ИК-Фурье спектрометры серии Nicolet Summit'
    

},

]