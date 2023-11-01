import { SKIL_MODAL_LIST , PROJECT_MODAL_LIST } from "../vo/modalVo"

// DB 없으니 DB 대용으로 만듦
export const SkilModalList : Array<SKIL_MODAL_LIST> = 
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
        ,content : `간단한 CSS 조작 및 퍼블리싱이 된 화면에서의 수정이 가능합니다.`
        ,score : 3.5
        ,height : "130px"
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
        ,score : 4
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
        ,score : 4.5
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

export const ProjectModalList : Array<PROJECT_MODAL_LIST> = 
[
    { 
        id : "Sabre1"
        ,content : ` ------------------------------ Java / Jsp / Web 개발 ------------------------------

                    EMDS2 : HOST 명령어 가 나오면 해당 명령어를 가져와 화면에 넣어주고
                            사용자가 더욱더 편리하게 이용할수 있도록 앱 화면으로 전환 작업 개발

                    시스템정보 : 사용자의 로그인 정보 및 초기 설정 개발

                    증빙코드 : 여행사를 자주찾는 고객의 코드를 가지고 자동입력이 가능하도록 개발

                    --------------------------- Java / TypeScript / App 개발 ---------------------------

                    계산(나이/시간/특정일/환률) : 간단한 알고리즘을 통해 각종 편리한 계산을 제공 

                    OZ PRORATION : Asiana 항공편 정보 입력후 해당 항공권의 가격 조회 개발
                    
                    환불위약금 : 사용자가 정보입력시 해당 정보에 맞는 Data를 불러와 위약금 정보를 보여주는 기능 개발

                    OZ PNR 조회 : OZ(Asiana)항공 으로 예약한 정보만 불러오는 기능 개발

                    OZ Q 전송 : 다른 현업 여행사 플랫폼 에게 고객 PNR(항공 예약정보) 를 넘겨 해당 사용자도 수정할수있는 권한 등록 개발

                    OZ FLT 운항 조회 : Asiana 항공편 조회 기능 개발

                    마일리지 : (Air 서울 / Air 부산 / Asiana) 마일리지 계산 개발

                    --------------------------- TypeScript 공통 개발 ----------------------------

                    지시어 전송 : Sabre Host 에 지시어 전송 기능 개발
                    
                    EnterKey 이벤트 처리 : Modal 창이 뜬후 EnterKey 를 누르면 
                                          HOST 지시어 전송 을 막고 해당 Modal 의 기능 조회 및 전송 하도록 개발
                    
                    GetToken : Rest Api(Server) 통신을 하기 위해 사용자 Token 을 갱신 및 생성 하여 Indexed DB 에 저장 개발 
                    
                    Rest Api : Server 와 통신을 위해 각 화면에서 호출 되도록 개발

                    Soap Api : Sabre Host 와 통신을 위해 각화면에서 호출 되도록 개발
                    
                `
    }
    ,{
        id : "Sabre2"
        ,content : `------------------- Sabre 기능 Web 화면 전환 작업 ------------------------
        
                    Desktop Device(App) 가 아닌 모바일 Web 화면에서도 사용가능 여부 판단 개발

                    History : 운임 내역 History 조회 기능 Web 화면 전환 개발
                    PNR 조회 : 발권 생성된 PNR 정보 Data 조회 Web 화면 전환 개발
                    전송 서비스 : (문자/카톡/알림톡) 전송 기능 Web 화면 전환 개발
                    전송 결과확인 : 전송서비스의 전송결과를 확인 기능 Web 화면 전환 개발

                    --------------------------- TypeScript 공통 개발 ----------------------------

                    기존 Sabre Red 360 App 에서 Web 화면으로 전환 작업 진행
                     Post Message 공통 작업을 진행 하였으며 App 에서 실행 된것과는 달리 Sabre Host 를 Web 으로 전환 작업
                     Web Page(Sabre Red 360 Web) 에서 TypeScript 으로 Popup 창이 Open 되도록 만들었으며
                     기존 App Host를 이용하는 방식을 Web Host 와 통신 하도록 Post Message 를 이용 하였습니다.
                     
                    `
    }
    ,{
        id : "Sabre3"
        ,content : `------------------- Sabre 주요기능 Web 화면 전환 작업 ------------------------

                    항공권 발행 : App Host 와 Data 를 주고 받은것을 Web Host 와 Data 주고 받도록 공통 Api 수정 개발
                    항공권 재발행 : 위와 동일

                    한글운임 조회 : Sabre Red360 Host Widget 버튼을 추가하여 영문으로 되어있는 항공 운임 설명을 한글로 변환 작업 개발
                                  Soap Api 를 이용하여 한글 번역할 Data 를 뽑아온후 현업이 만든 번역 Api 에 전송후 한글 번역된 Json Data 를 받아 화면에 가공 처리 후 보여줌 
                    `
        
    }
    ,{
        id : "AirPort"
        ,content : ` ------------------------ Nexacro Web Page ------------------------------

                     급유 관리 : 급유차량 관리 시스템 개발

                     주기장 관리 : 주기장 정보 변경 및 수정 개발

                     Pit Master 관리 : Pit Master 사용자 정보 추가 삭제 수정 개발

                     통계 : 총 10개의 통계화면을 개발 하였으며 DB Data를 가공 하여 사용자가 원하는 통계 Data를 제공 개발

                     ------------------------ Nexacro Mobile --------------------------------

                     특별작업 : 이유 / 수령 / TEST / 시설반납 총 4개의 화면 개발
                     
                     항공정비 : 항공편 InBound / OupBound Data 조회 개발 해당 Data 클릭 시 
                                -> TSWO(통상관리) 입력 - (Routine / NonRoutine / 사인) 개발 
                                사용 자가 OutBound 클릭시 해당 OutBound 연결 한공편을 조회 하여 InBound Data 를 보여주도록 개발

                     항공정비 : Towing입력 개발
                     항공정비 : Cabin입력 개발

                     항공정비내역 조회 : Total 항공정비 내역 조회 개발

                     일괄서명 : 항공정비 고객 사인이 안되어있는 Data 일괄 서명 개발

                    `
    }
    ,{
        id : "SangahSm"
        ,content : `------------------------ SangAh PM Consuting Solution 유지보수 ------------------------
        
                    상아매니지먼트 컨설팅 개발팀 에서 개발한 프로젝트 들을 관리 및 유지보수 를 해왔습니다.            
        
                    자세한 사항은 작업목록 Excel 다운로드를 확인해주시기 바랍니다.

                    `
    }
]