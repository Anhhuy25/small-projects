import React, { useContext, useEffect, useState } from 'react';
import data from './data';


const AppContext = React.createContext();

const getLocalStorage24 = () => {
  let from2to4 = localStorage.getItem('from2to4');

  if (from2to4) {
    return (JSON.parse(localStorage.getItem('from2to4')));
  } else {
    return [];
  }
}

const getLocalStorage47 = () => {
  let from4to7 = localStorage.getItem('from4to7');

  if (from4to7) {
    return JSON.parse(localStorage.getItem('from4to7'));
  } else {
    return [];
  }
}

const getLocalStorageOver20 = () => {
  let over20 = localStorage.getItem('over20');

  if (over20) {
    return JSON.parse(localStorage.getItem('over20'));
  } else {
    return [];
  }
}

const getLocalStorage3264 = () => {
  let from32to64 = localStorage.getItem('from32to64');

  if (from32to64) {
    return JSON.parse(localStorage.getItem('from32to64'));
  } else {
    return [];
  }
}

const getLocalStorage128256 = () => {
  let from128to256 = localStorage.getItem('from128to256');

  if (from128to256) {
    return JSON.parse(localStorage.getItem('from128to256'));
  } else {
    return [];
  }
}

const AppProvider = ({ children }) => {
  // Price
  const [from2to4, setFrom2to4] = useState(getLocalStorage24());
  const [from4to7, setFrom4to7] = useState(getLocalStorage47());
  const [over20, setOver20] = useState(getLocalStorageOver20());

  const [sortList, setSortList] = useState([]);
  const [status, setStatus] = useState('');
  const [isCheck, setIsCheck] = useState(false);
  const [isCheck2, setIsCheck2] = useState(false);
  // Storage
  const [from32to64, setFrom32to64] = useState(getLocalStorage3264());
  const [from128to256, setFrom128to256] = useState(getLocalStorage128256());

  // Function about sort Price
  const filter2to4 = () => {
    const phone24 = sortList.filter(phone => phone.price >= 2 && phone.price <= 4);

    setFrom2to4(phone24)
  }
  const filter4to7 = () => {
    const phone47 = sortList.filter(phone => phone.price >= 4 && phone.price <= 7);

    setFrom4to7(phone47)
  }
  const overTo20 = () => {
    const phoneOver20 = sortList.filter(phone => phone.price > 20);

    setOver20(phoneOver20)
  }

  // Function about sort Storage
  const filter32to64 = () => {
    const phone3264 = sortList.filter(phone => phone.info.storage >= 32 && phone.info.storage <= 64);

    setFrom32to64(phone3264)
  }
  const filter128to256 = () => {
    const phone128256 = sortList.filter(phone => phone.info.storage >= 128 && phone.info.storage <= 256);

    setFrom128to256(phone128256)
  }

  // Check Result
  const checkResult = () => {
    if (isCheck) {
      return "/rom-32-den-64gb";
    } else if (isCheck2) {
      return "/rom-128-den-256gb";
    } else {
      return '';
    }
    // Chua tim duoc cach chon ca 2 o
  }

  const check3264 = () => {
    setIsCheck(!isCheck)
    filter32to64();
  }

  const check128256 = () => {
    setIsCheck2(!isCheck2)
    filter128to256();
  }

  // Save LocalStorage
  useEffect(() => {
    localStorage.setItem('from2to4', JSON.stringify(from2to4));
    localStorage.setItem('from4to7', JSON.stringify(from4to7));
    localStorage.setItem('over20', JSON.stringify(over20));
    localStorage.setItem('from32to64', JSON.stringify(from32to64));
    localStorage.setItem('from128to256', JSON.stringify(from128to256));
  }, [from2to4, from4to7, over20, from32to64, from128to256])

  // Check Status
  useEffect(() => {
    switch (status) {
      case 'highlow':
        setSortList(data
          .map(phone => phone)
          .sort((a, b) => b.price - a.price))
        break;
      case 'lowhigh':
        setSortList(data
          .map(phone => phone)
          .sort((a, b) => a.price - b.price))
        break;
      default:
        setSortList(data)
        break;
    }

    switch (status) {
      case 'highlow':
        setFrom2to4(from2to4
          .map(phone => phone)
          .sort((a, b) => b.price - a.price))
        break;
      case 'lowhigh':
        setFrom2to4(from2to4
          .map(phone => phone)
          .sort((a, b) => a.price - b.price))
        break;
      default:
        setFrom2to4(from2to4) // Chua tim dc cach de tro ve ban dau
        break;
    }

    switch (status) {
      case 'highlow':
        setFrom4to7(from4to7
          .map(phone => phone)
          .sort((a, b) => b.price - a.price))
        break;
      case 'lowhigh':
        setFrom4to7(from4to7
          .map(phone => phone)
          .sort((a, b) => a.price - b.price))
        break;
      default:
        setFrom4to7(from4to7) // Chua tim dc cach de tro ve ban dau
        break;
    }

    switch (status) {
      case 'highlow':
        setOver20(over20
          .map(phone => phone)
          .sort((a, b) => b.price - a.price))
        break;
      case 'lowhigh':
        setOver20(over20
          .map(phone => phone)
          .sort((a, b) => a.price - b.price))
        break;
      default:
        setOver20(over20) // Chua tim dc cach de tro ve ban dau
        break;
    }
  }, [status])


  return (
    <AppContext.Provider
      value={{
        filter2to4, from2to4,
        filter4to7, from4to7,
        overTo20, over20,
        setStatus,
        sortList,
        isCheck, setIsCheck,
        isCheck2, setIsCheck2,
        checkResult,
        from32to64, check3264,
        from128to256, check128256
      }}
    >
      {children}
    </AppContext.Provider>
  )
}


const useGlobalContext = () => {
  return useContext(AppContext);
}


export { AppContext, AppProvider, useGlobalContext };