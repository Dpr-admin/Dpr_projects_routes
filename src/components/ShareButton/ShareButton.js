// import React, { useState } from 'react';
// import { FaShareAlt, FaTimes } from 'react-icons/fa';
// import {
//     FacebookShareButton,
//     TwitterShareButton,
//     WhatsappShareButton,
//     EmailShareButton,
//     FacebookIcon,
//     TwitterIcon,
//     WhatsappIcon,
//     EmailIcon
// } from 'react-share';

// const ShareButton = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const shareUrl = "https://sample.com";
//     const title = "Check this out!";

//     const toggleShareOptions = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div>
//             <button
//                 className="btn btn-primary rounded-circle"
//                 aria-label="Share"
//                 style={{
//                     position: 'fixed',
//                     bottom: '20px',
//                     right: '20px',
//                     zIndex: '999',
//                     padding: '12px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     transition: 'transform 0.3s',
//                     transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
//                     backgroundColor: '#007bff',
//                     border: 'none',
//                     borderRadius: '50%',
//                     boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
//                     color: 'white'
//                 }}
//                 onClick={toggleShareOptions}
//             >
//                 {isOpen ? <FaTimes size={24} /> : <FaShareAlt size={24} />}
//             </button>
//             <div
//                 className="d-flex flex-column align-items-center"
//                 style={{
//                     position: 'fixed',
//                     bottom: isOpen ? '80px' : '20px',
//                     right: '20px',
//                     zIndex: '998',
//                     transition: 'bottom 0.3s',
//                     opacity: isOpen ? 1 : 0,
//                     pointerEvents: isOpen ? 'auto' : 'none',
//                 }}
//             >
//                 <div style={{ margin: '5px' }}>
//                     <WhatsappShareButton url={shareUrl} title={title}>
//                         <WhatsappIcon size={32} round />
//                     </WhatsappShareButton>
//                 </div>
//                 <div style={{ margin: '5px' }}>
//                     <FacebookShareButton url={shareUrl} quote={title}>
//                         <FacebookIcon size={32} round />
//                     </FacebookShareButton>
//                 </div>
//                 <div style={{ margin: '5px' }}>
//                     <TwitterShareButton url={shareUrl} title={title}>
//                         <TwitterIcon size={32} round />
//                     </TwitterShareButton>
//                 </div>
//                 <div style={{ margin: '5px' }}>
//                     <EmailShareButton url={shareUrl} subject={title} body="Check this out!">
//                         <EmailIcon size={32} round />
//                     </EmailShareButton>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ShareButton;


import React, { useState } from 'react';
import { FaShareAlt, FaTimes } from 'react-icons/fa';
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    EmailIcon
} from 'react-share';

const ShareButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const shareUrl = window.location.href; // Dynamically get the current page URL
    const title = "Check this out!";

    const toggleShareOptions = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                className="btn btn-primary rounded-circle"
                aria-label="Share"
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: '999',
                    padding: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    backgroundColor: '#007bff',
                    border: 'none',
                    borderRadius: '50%',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    color: 'white'
                }}
                onClick={toggleShareOptions}
            >
                {isOpen ? <FaTimes size={24} /> : <FaShareAlt size={24} />}
            </button>
            <div
                className="d-flex flex-column align-items-center"
                style={{
                    position: 'fixed',
                    bottom: isOpen ? '80px' : '20px',
                    right: '20px',
                    zIndex: '998',
                    transition: 'bottom 0.3s',
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? 'auto' : 'none',
                }}
            >
                <div style={{ margin: '5px' }}>
                    <WhatsappShareButton url={shareUrl} title={title}>
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                </div>
                <div style={{ margin: '5px' }}>
                    <FacebookShareButton url={shareUrl} quote={title}>
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                </div>
                <div style={{ margin: '5px' }}>
                    <TwitterShareButton url={shareUrl} title={title}>
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                </div>
                <div style={{ margin: '5px' }}>
                    <EmailShareButton url={shareUrl} subject={title} body="Check this out!">
                        <EmailIcon size={32} round />
                    </EmailShareButton>
                </div>
            </div>
        </div>
    );
};

export default ShareButton;

