GIT을 이용하여 remote repository를 생성하고 git용 bash 로 새로 initialize한 local repository랑 연결하는 과정을 스크린샷과 함께 각 명령어의 자세한 설명을 작성하시오. 이때 브랜치명은 main으로 합니다

![과제1](https://github.com/Chovy10/Chovy/assets/162932915/d41424bc-b93b-43ea-b355-8e0bde44a370)
D드라이브에 Example 폴더의 Example폴더로 이동해줍니다. 
git init를 써줘서 git을 초기화 해줬습니다.
![과제3](https://github.com/Chovy10/Chovy/assets/162932915/aa78d008-4d02-4668-b9aa-2306251f0a5e)
echo "# TempRepository">> READMe.md 명령어를 사용해 프로젝트를 설명하는 README.md를 만들어줬습니다
그다음 git add README.md를 써 git에 README.md파일을 추가했습니다
git commit -m "first commit" 명령어로 파일을 추가한것을 확정해줬습니다. 
git에 commit을 하기위해 작성자를 인식해야 하는데 사용자 정보를 등록해줬습니다.
git config --global user.email"sdh042829@gmail.com"
git config -- global user.name"Chovy10"

git branch -M main으로 브랜치 이름을 main으로 정해줬습니다.
git remote add origin https://github.com/Chovy10/Example1/.git 명령어를 이용해 로컬 브랜치 github 리모트 브런치에 추가해줬습니다.
git push -u origin main을 이용해 push를 해줬습니다.
![과제4](https://github.com/Chovy10/Chovy/assets/162932915/fa155744-b7df-4391-90bc-836d00fb09fb)
사진처럼 이렇게 뜨는데 sign in with your browser선택해 인증을 진행했습니다.
![캡쳐5](https://github.com/Chovy10/Chovy/assets/162932915/c6bcf92b-b22f-488b-b9f6-c390df385e66)
사진처럼 push가 성공적으로 진행됐습니다.











