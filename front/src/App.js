import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header'
import InterviewList from './component/Interview';
// import InterviewInsert from './component/Interviewformmm'
import Interviewform from './component/Interviewform'
import Footer from './component/Footer'
import Reactport from './component/Reactport';


function App() {
  return (
    <div className='wrap'>
      <Header></Header>
      <Reactport></Reactport>
      <Interviewform dbinfo={{
       titlenm : '면접제안', 
       botable : 'interviewForm',
       crud : 'insert',
       mapper : 'introduceSQL',
       mapperid : 'interviewForm'

      }
      }></Interviewform>
      <InterviewList dbinfo={ {         
         titlenm : '아마존 인터뷰목록', 
         botable : 'interviewList',
         crud : 'select',
         mapper : 'introduceSQL',
         mapperid : 'interviewList'
         }
        }></InterviewList>
        {/* <Routes>
          <Route path='/' element={<InterviewInsert dbinfo={ {         
            titlenm : '리액트스트랩 모듈로 만든 폼 아마존과연동', 
            botable : 'interviewWrite',
            crud : 'insert',
            mapper : 'introduceSQL',
            mapperid : 'interviewInsert'
            }
            }></InterviewInsert>}></Route>   
          <Route path='/interviewModify:no' element={<InterviewInsert dbinfo={ {         
            titlenm : '수정시 주소의 no변수필수 : 아마존 폼태그 글쓰기와 동일한 컴포넌트를 사용한다.', 
            botable : 'interviewModify',
            crud : 'modify',
            mapper : 'introduceSQL',
            mapperid : 'interviewModify'
            }
            }></InterviewInsert>}></Route>   

       
      </Routes> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
