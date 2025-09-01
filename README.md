## rocket AI 코딩테스트

[코딩 테스트 디자인]
https://www.figma.com/design/7dCFOvX8T0wkksPjP5mM5h/%EC%9A%B4%EC%84%B8%EB%B0%95%EC%82%AC-%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8?node-id=0-1&amp;t=n48zHDpS6p9TPAZA-1

과제 내용 :

1. 퍼블리싱 개발

- Tailwind를 활용한 반응형 웹 퍼블리싱
- 직관적이고 사용성을 고려한 UI 개발
- https://tailwindcss.com/docs/installation/framework-guides/nextjs (공식문서)

2. 프론트엔드 개발

- Next.js(페이지 라우터 선호)를 활용한 프론트엔드 개발
- 사주팔자 표 부분을 컴포넌트화 하여 개발
- https://nextjs.org/docs/getting-started/installation (공식문서)

3. 배포

- 프론트엔드 Vercel 무료로 배포하기

---

### 구현 내용

1. 퍼블리싱 개발

- tailwind를 이용한 웹 퍼블리싱
- `[clamp()]`를 이용한 자연스러운 반응형
- `styles/globals.css` : 1rem을 10px로 조정

2. 프론트엔드 개발

- Next.js의 page router 방식으로 개발
- `/components/SajuTable.tsx` 참고
- `/constants/sajuData.ts` : 정적 데이터 분리
- `/types/table/ts` : 타입 분리

3. 배포

- 버셀을 이용한 배포

4. 구현하면서 신경 쓴 점

- 자연스러운 반응형과 직관적인 ui를 위해 이미지를 svg로 다운받아 요소를 제거해서 구현했습니다.
- 테이블의 배경을 따로 골라내 테이블의 요소에 이미지를 고정시켜 함께 반응형이 동작하도록 구현했습니다.
- 글자를 자연스럽게 줄어들게 만들기 위해 tailwind의 clamp 속성을 사용했습니다.
- 위치가 조금식 어긋나는 현상을 최대한 막기 위해 `aspect-[375/2081]` 속성과 이미지 fill 속성을 추가해 최대한 틀어짐을 방지했습니다.
- 디자인을 최대한 맞추기 위해 global.css에 1rem을 10px로 변경하는 코드를 넣었습니다.
- 피그마의 요소(선, 글자크기 등)를 확인한 후 rem으로 반영시켰습니다.
