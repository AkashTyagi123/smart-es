import AuthGuard from "@/components/authGuard";
import Calendar from "@/components/calendar";
const  DashboardPage = () => {
  return (
    <>
      <Calendar />
    </>
  );
}
export default AuthGuard(DashboardPage);
