import './App.css';
import React, { useEffect } from 'react';
import {Map, MapMarker} from 'react-kakao-maps-sdk';

function App() {
   
  useEffect(() => {
    // 카카오맵 API가 로드되었는지 확인++
    const checkKakaoMaps = setInterval(() => {
      if (window.kakao && window.kakao.maps) {
        clearInterval(checkKakaoMaps); // 카카오맵이 로드되었으면 타이머 종료
        const myLocation = new window.kakao.maps.
        // 카카오맵 객체 생성
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심 좌표
          level: 1, // 지도 확대 수준
        };
        new window.kakao.maps.Map(container, options); // 지도 객체 생성
      }
    }, 100); // 100ms마다 window.kakao.maps 존재 여부를 체크

    return () => clearInterval(checkKakaoMaps); // 컴포넌트 언마운트 시 타이머 종료
  }, []);

  useEffect(() =>  {

  },[]);

  return (
    <div>
      <div
        id="map"
        style={{
          width: '500px',
          height: '400px',
          border: '1px solid black', // 맵 컨테이너에 테두리 추가하여 보이도록 함
          borderRadius:'10px',
        }}
      ></div>
      <hr/>
      <Map
        className='Map'
        center= {{lat: 33.450701, lng: 126.570667}}
        style={{width: '500px', height: '400px',  border: '5px solid white',}}
        level={3}
      />
    </div>
  );
}

export default App;
