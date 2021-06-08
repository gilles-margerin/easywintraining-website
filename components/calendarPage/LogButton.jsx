import Image from "next/image";

const LogButton = ({styles, signFunc, text}) => {
  return (
    <button 
      className={styles.btnLogin} 
      onClick={() => signFunc()}>
      <Image
        src="/icons/login.svg"
        alt="login icon"
        width={40}
        height={40}
        layout="fixed"
      />
      {text}
    </button>
  );
};

export default LogButton