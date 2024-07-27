import { Card } from "@/components/ui/card"

export default function Booking() {
  return (
    <Card className="max-w-md mx-auto p-6 text-center">
      <div className="flex flex-col items-center gap-4">
        <div className="bg-primary rounded-full p-3 animate-bounce">
          <CheckIcon className="w-8 h-8 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Booking Confirmed</h2>
          <p className="text-muted-foreground">Your taxi booking has been confirmed. A driver will arrive shortly.</p>
        </div>
      </div>
    </Card>
  )
}

function CheckIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}