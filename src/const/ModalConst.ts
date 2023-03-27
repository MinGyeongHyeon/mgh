import { MODAL_LIST } from "../vo/modalVo"

// DB 없으니 DB 대용으로 만듦
export const ModalConst : Array<MODAL_LIST> = 
[
    {
        id:"html"
        ,title : "HTML"
        ,content : `현재 까지 꾸준이 사용 하며 화면 을 만들수 있습니다.`
        ,score : 5
        ,height : "100px"
    }
    ,{
        id:"css"
        ,title : "CSS"
        ,content : `간단한 CSS 조작 및 퍼블리싱이 된 화면에서의 수정이 가능합니다.

                    현재 페이지는 구글링을 통하여 CSS를 작성하였습니다.`
        ,score : 3
        ,height : "160px"
    }
    ,{
        id:"js"
        ,title : "JavaScript"
        ,content : `처음 코딩을 배웠을때부터 사용해 왔으며 SI 개발을 통해 꾸준히 사용해 왔습니다.

                    Jquery 와 함께 썼으며 프로그래머스 의 문제 풀이도 
                    JavaScript 으로 꾸준히 풀어왔습니다.`
        ,score : 5
        ,height : "180px"
    }
    ,{
        id:"jquery"
        ,title : "jQuery"
        ,content : `JavaScript 와 마찬가지로
                    SI 개발을 통해 꾸준히 사용해 왔습니다.
        
                    html 태그 및 요소 조작 동적 변경 및 생성
                    Ajax를 통한 서버와의 통신 json 등등으로
                    웹 개발을 하면서 필수적으로 써왔습니다.`
        ,score : 5
        ,height : "220px"
    }
    ,{
        id:"ts"
        ,title : "TypeScript"
        ,content : `SI 신입 개발 당시 첫 프로젝트에서
                    처음으로 사용하였으며
                    그 당시 회사 선임분들도 아무도 할 줄 모르는 상태에서
                    저 혼자 개발을 맡았고 할 줄 아는 사람이 없어서 
                    물어보지도 못하며 혼자 독학하였고
                    개발 환경 구축 or 사용법을 터득하였습니다.

                    TypeScript 을 사용하면서 
                    Rest APi or Soap Api을 통해 서버와 통신 하였습니다.
                    
                    
                    현재 페이지도 React+TypeScript으로 만들어졌습니다.`
        ,score : 3.5
        ,height : "340px"
    }
    ,{
        id:"react"
        ,title : "React"
        ,content : `현재 까지 독학 으로 배웠으며
                    TypeScript 와 같이 쓰고 싶다는 마음에
                    현재 페이지를 React+TypeScript 으로 만들었습니다.
        `
        ,score : 3
        ,height : "150px"
    }
    ,{
        id:"java"
        ,title : "Java"
        ,content : `처음 코딩을 배웠을때 부터 꾸준히 써왔으며
                    웹개발 하면서 필수적으로 써왔습니다.

                    주로 CRUD 를 해왔으며.
                    Data 가공은 주로 javaScript 쪽에서 이뤄졌습니다.
                    
                    필요하면 Java 쪽에서 Data 가공을 전부 처리하였습니다.
                    `
        ,score : 4
        ,height : "250px"
    }
    ,{
        id:"git"
        ,title : "Git"
        ,content : `학원 다니면서 형상관리 툴로 써왔습니다.
                    `
        ,score : 4
        ,height : "100px"
    }
    ,{
        id:"svn"
        ,title : "SVN"
        ,content : `SI 개발을하면서 항상 
                    형상관리는 SVN 으로 관리 하였습니다.
                    `
        ,score : 5
        ,height : "130px"
    }
    ,{
        id:"oracle"
        ,title : "ORACLE"
        ,content : `학원 다닐때부터 쭉 써왔으며
                    SI 개발 당시 오라클을 주로 썼습니다.
                    간단한 CRUD 부터 가공이 필요하다 생각하는
                    쿼리는 직접 짜왔습니다.
                    `
        ,score : 4.5
        ,height : "170px"
    }
    ,{
        id:"mssql"
        ,title : "MsSql"
        ,content : `마지막 프로젝트 당시 MsSql (SQL Server) 으로 
                    6개월 가량 이용 하였습니다.
                    `
        ,score : 4.5
        ,height : "120px"
    }
    ,{
        id:"dev"
        ,title : "Sql Developer"
        ,content : `주로 DB 관리 툴으로 사용해 왔으며 
                    그외 다른툴도 사용이 가능합니다
                    `
        ,score : 5
        ,height : "120px"
    }
]