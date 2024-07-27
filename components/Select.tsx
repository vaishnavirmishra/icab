import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Payment Method" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Payment Method</SelectLabel>
          <SelectItem value="cash">💵Cash</SelectItem>
          <SelectItem value="card">💳Card</SelectItem>
          <SelectItem value="upi">📲UPI</SelectItem>
          <SelectItem value="net banking">🏦Net Banking</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
