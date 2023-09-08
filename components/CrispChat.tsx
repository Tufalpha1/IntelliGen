"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1e1ea8b7-0e7d-485e-aedd-3cf98c3d9f3d");
  }, []);

  return null;
};

export default CrispChat;
