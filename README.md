# 유성민 — Backend Portfolio

Java·Spring Boot 기반 스타레일 커뮤니티와 개발 경험을 소개하는 정적 포트폴리오입니다.

## GitHub Pages에 올리기

1. GitHub에서 `tms569111-wq.github.io`라는 **Public** 저장소를 만듭니다. `Add a README file`을 선택하면 업로드 메뉴를 찾기 쉽습니다. 같은 이름의 저장소가 이미 있다면 그 저장소를 엽니다.
2. ZIP 파일의 압축을 풉니다. 저장소에서 **Add file → Upload files**를 선택하고 압축을 푼 내용물(`index.html`, `styles.css`, `script.js`, `assets` 폴더, 문서 파일)을 올립니다. ZIP 자체나 상위 폴더를 올리지 말고, 저장소 첫 화면에 `index.html`이 보이게 올립니다. 기존 사이트가 있다면 해당 파일이 교체되므로 기존 내용을 먼저 확인합니다.
3. **Commit changes**로 저장합니다.
4. **Settings → Pages → Build and deployment**에서 Source를 **Deploy from a branch**, Branch를 **main**, 폴더를 **/(root)**로 선택한 뒤 **Save**를 누릅니다.
5. **Actions**에서 Pages 배포가 완료되면 `https://tms569111-wq.github.io/`를 엽니다. 이 주소는 위 설정을 완료했을 때의 주소이며, 이 패키지만으로 게시가 완료된 것은 아닙니다.

다른 저장소 이름을 쓰면 주소에 저장소 이름이 붙습니다. 예: `portfolio` → `https://tms569111-wq.github.io/portfolio/`. 모든 파일 경로는 상대경로여서 두 방식 모두 사용할 수 있습니다.

공식 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 내 컴퓨터에서 보기

압축을 푼 뒤 `index.html`을 브라우저로 열면 됩니다. 빌드 도구, 서버, API 키가 필요하지 않습니다. 글꼴도 `assets` 안에 포함되어 있습니다.

## 구성

소개와 학력·인턴 이력을 첫 화면에서 볼 수 있도록 정리했습니다. 오른쪽 목차로 기술, 프로젝트, 자격증, 연락처로 이동할 수 있습니다. 작은 화면에서는 프로필과 목차가 상단에 표시됩니다.

프로필에는 본인이 제공한 사진을 사용했습니다. 스타레일 커뮤니티는 소개, 아키텍처 그림, 구성 설명, 문제 해결 순서로 읽을 수 있습니다. 아키텍처는 화면 폭에 따라 가로형과 세로형 그림을 표시합니다. 페이지 본문과 링크는 JavaScript를 꺼도 표시됩니다.

## 수정할 곳

- `index.html`: 소개, 학력·경험, 프로젝트, 기술, 자격증, 링크
- `styles.css`: 색상, 글꼴, 화면 크기별 배치
- `script.js`: 현재 읽는 섹션을 목차에 표시
- `assets`: 프로필 사진, 가로·세로 아키텍처 SVG, 로컬 글꼴과 라이선스

글꼴 사용 조건은 `CREDITS.md`와 `assets/*-OFL.txt`에 있습니다.

아키텍처는 저장소의 배포 문서, Docker Compose, Caddy, 인증 및 프로필 조회 코드를 바탕으로 구성했습니다. 캐시와 요청 제한은 단일 JVM 메모리 안에 있고, GitHub Actions는 테스트와 설정·기동 검증을 담당합니다. 실제 운영 서버 설정을 실시간으로 조회하는 그림은 아닙니다.

## 내용 기준

- 회원 47명·투표 130건은 서비스 공개 후 약 2시간 동안의 초기 기록입니다.
- 3,000건 이상의 요청 부하 테스트는 공개 전 별도로 진행한 검증입니다.
- 운영 상태나 회원 수를 실시간으로 조회하지 않습니다.
- 개인정보 증빙 문서, 환경변수, 비밀번호, 인증 토큰은 배포 파일에 포함하지 않았습니다.

HTML 구조, 로컬 파일 경로, JavaScript 구문, 글꼴 파일과 좁은 화면용 CSS를 확인했습니다. 실제 브라우저의 PC·모바일 렌더링 및 외부 링크 접속 상태는 이 작업 환경에서 확인하지 못했습니다.
