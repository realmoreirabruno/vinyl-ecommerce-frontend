import { UserData } from "../types/UserData";

interface Props {
  label: string;
  type: string;
  setUserDataInput: React.Dispatch<React.SetStateAction<UserData>>;
}

export default function FormInput({ label, type, setUserDataInput }: Props) {
  function getInput(event: React.ChangeEvent<HTMLInputElement>) {
    switch (type) {
      case "text":
        return setUserDataInput((prevUserDataInput) => ({
          ...prevUserDataInput,
          name: event.target.value,
        }));

      case "email":
        return setUserDataInput((prevUserDataInput) => ({
          ...prevUserDataInput,
          email: event.target.value,
        }));

      case "password":
        return setUserDataInput((prevUserDataInput) => ({
          ...prevUserDataInput,
          password: event.target.value,
        }));
    }
  }

  return (
    <>
      <label htmlFor={label} className="mb-[4px] text-[#49475A]">
        {label}
      </label>
      <input
        type={type}
        id={label}
        required
        className="py-3 px-2 mb-[14px] rounded-xl border border-[#CBCAD7] md:py-4"
        onChange={getInput}
      />
    </>
  );
}