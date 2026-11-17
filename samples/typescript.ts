// Kanagawa Dragon — TypeScript sample (semantic tokens via tsserver)
import { Component } from "react";                       // import keyword: preproc red
const MAX_RETRIES = 3;                                    // constant variable: orange
enum Status { Active, Disabled }                          // enum: aqua, members: orange

interface User {                                          // interface: aqua
  id: number;                                             // property: yellow
  name: string;
}

type Result<T> = { ok: boolean; value: T | null };        // booleans bold orange

/** JSDoc comment — italic ash */
class UserService {                                       // class: aqua
  private cache = new Map<string, Result<User>>();        // `new`: violet italic

  async fetchUser(id: number, retries = MAX_RETRIES): Promise<User> {  // params: gray
    if (retries <= 0) {
      throw new Error("too many attempts");               // throw/throw: red italic
    }
    for (let i = 0; i < retries; i++) {                   // control keywords: violet bold
      const res = await fetch(`/api/users/${id}`);        // `${id}` interp: teal
      if (res.ok && res.status !== 404) return res.json();
    }
    return null as never;
  }

  get defaultUser(): User {                               // getter: blue function
    return { id: 1, name: "dragon" };
  }
}

export function createService(timeout?: number) {         // functions: dragonBlue2
  return new UserService();
}
console.log("done", true, 42, 3.14, 0xff);                // builtin: teal, numbers: pink
// TODO: deprecated usage below shows katanaGray strikethrough
