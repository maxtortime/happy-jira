# happy-jira
JIRA에서 이슈 본문을 클릭하면 자꾸 textarea 가 되버리는 현상을 방지하는 크롬 확장프로그램입니다.

## 사용법
1. `mainfest.json` 에서 아래 항목을 찾고 나서 자신이 쓰는 JIRA 주소를 넣어줍시다.
```
...
  "content_scripts": [
    {
      "matches": ["지라주소/*"],
      "js": ["content.js"],
      "run_at": "document_end"
    }
  ],
  ...
```
2. chrome://extensions/ 으로 이동합니다.
3. `압축해제된 확장 프로그램을 로드합니다.` 을 고르고 본 폴더를 선택합니다.
4. 잘 사용하시면 됩니다.

## 라이선스
MIT


