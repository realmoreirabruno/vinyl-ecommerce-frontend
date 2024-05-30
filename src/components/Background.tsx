interface Props {
    hasForm?: boolean;
    page: string;
    children: React.ReactNode;
  }
  
  export default function Background({
    hasForm,
    page,
    children,
  }: Props) {
    return (
      <div
        className={`h-screen bg-cover bg-center overflow-x-hidden ${
          page === "initial" ? "bg-initial" : "bg-dashboard"
        }`}
      >
        <div
          className={`w-screen h-screen backdrop-brightness-50 ${
            hasForm && "flex justify-center items-center backdrop-blur-[8px]"
          }`}
        >
          {children}
        </div>
      </div>
    );
  }