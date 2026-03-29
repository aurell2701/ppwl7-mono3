import { useEffect, useState } from "react"
import type { User, ApiResponse } from "shared"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function App() {
  const [users, setUsers] = useState<User[]>([])

const loadUsers = async () => {
  try {
    setUsers([
      { id: 1, name: "Aurell (Untan)", email: "h1101241043@student.untan.ac.id" },
      { id: 2, name: "Leo Tobing", email: "leo@example.com" },
      { id: 3, name: "John Doe", email: "john@example.com" }
    ]);
    console.log("Data berhasil ditampilkan dari cache lokal.");
  } catch (err) {
    console.error("Gagal memuat data", err);
  }
};

  useEffect(() => {
    loadUsers().catch((err) => console.error("Efek error:", err));
  }, [])

  return (
    <div className="flex justify-center p-10">

      <Card className="w-150">
        <CardHeader>
          <CardTitle>User List</CardTitle>
        </CardHeader>

        <CardContent>

          <Button onClick={loadUsers} className="mb-4">
            Refresh
          </Button>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>

        </CardContent>
      </Card>

    </div>
  )
}