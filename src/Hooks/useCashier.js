import { useEffect, useState } from "react";

const useCashier = (email) => {
  const [isCashier, setIsCashier] = useState(false);
  const [isCashierLoading, setIsCashierLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/Cashier/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsCashier(data.isCashier);
          setIsCashierLoading(false);
        });
    }
  }, [email]);
  return [isCashier, isCashierLoading];
};

export default useCashier;
