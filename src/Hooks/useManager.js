import { useEffect, useState } from "react";

const useManager = (email) => {
  const [isManager, setIsManager] = useState(false);
  const [isManagerLoading, setIsManagerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/Manager/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsManager(data.isManager);
          setIsManagerLoading(false);
        });
    }
  }, [email]);
  return [isManager, isManagerLoading];
};

export default useManager;
