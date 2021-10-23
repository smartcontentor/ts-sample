import { generate } from "generate-password"

interface UserInfo {
    id: number;
    user_name?: string;
    email?: string;
    password?: string;
    is_online?: boolean;
}

const users: UserInfo[] = [
    {
        id: 1,
        user_name: "John",
        email: "john@email.com",
        password: generate({length:20}),
        is_online: true
    },
    {
        id: 2,
        user_name: "Diana",
        email: "diana@email.com",
        password: generate({length:20}),
        is_online: false
    },
    {
        id: 3,
        user_name: "Tom",
        email: "tom@email.com",
        password: generate({length:20}),
        is_online: false
    },
    {
        id: 4,
        user_name: "Fred",
        email: "fred@email.com",
        password: generate({length:20}),
        is_online: false
    },
    {
        id: 5,
        user_name: "smith",
        email: "smith@email.com",
        password: generate({length:20}),
        is_online: false
    },
]

console.table(users)