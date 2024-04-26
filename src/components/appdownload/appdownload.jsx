import React from 'react';
import './appdownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For better experience Download<br/>Swiggy app</p>
      <div className='app-download-platforms'>
        <a href='https://play.google.com/store/apps/details?id=your_app_package_name' target='_blank' rel='noopener noreferrer'>
          <img src={assets.play_store} alt='Play Store' />
        </a>
        <a href='https://apps.apple.com/us/app/your-app-name/idxxxxxxxxx' target='_blank' rel='noopener noreferrer'>
          <img src={assets.app_store} alt='App Store' />
        </a>
      </div>
    </div>
  );
}

export default AppDownload;
