import React, { useRef, useEffect } from 'react';
import Type2Comp from './type2Comp';

const Type2CompImgAnimation = (props) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Wrapper içerisindeki tüm img elementlerini seçiyoruz.
    const images = wrapperRef.current.querySelectorAll('img');

    // Her bir img için başlangıç stillerini ve geçiş gecikmesini ayarlıyoruz.
    images.forEach((img, index) => {
      img.style.opacity = 0;
      img.style.transform = 'translateY(20px)';
      let delay = '0s';
      if (index === 1) {
        delay = '0.3s';
      } else if (index === 2) {
        delay = '0.7s';
      }
      img.style.transition = `opacity 0.8s ease-out ${delay}, transform 0.8s ease-out ${delay}`;
    });

    // Intersection Observer ile her bir img'nin görünürlüğünü takip ediyoruz.
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Görüntünün %10'u göründüğünde animasyonu tetikler.
    );

    // Tüm img elementlerini gözlem altına alıyoruz.
    images.forEach(img => observer.observe(img));

    // Cleanup: Bileşen unmount olduğunda gözlemleri kaldırıyoruz.
    return () => {
      images.forEach(img => observer.unobserve(img));
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      <Type2Comp {...props} />
    </div>
  );
};

export default Type2CompImgAnimation;
