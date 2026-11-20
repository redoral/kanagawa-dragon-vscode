// Kanagawa Dragon — TypeScript sample (semantic tokens via tsserver)
import { Component } from "react"; // import/export keywords: red; Component + "react": deprecated strikethrough
const MAX_RETRIES = 3; // constant variable: orange (variable.readonly)
enum Status {
  Active,
  Disabled,
} // enum: aqua, members: orange

interface User {
  // interface: aqua
  id: number; // property: yellow
  name: string;
}

type Result<T> = { ok: boolean; value: T | null }; // keys ok/value: yellow, boolean/T: aqua, null: orange

/** JSDoc comment — italic ash */
class UserService {
  // class: aqua
  private cache = new Map<string, Result<User>>(); // `new`: violet italic, Map: teal (defaultLibrary)

  async fetchUser(id: number, retries = MAX_RETRIES): Promise<User> {
    // params: white (dragonWhite — same as normal text)
    if (retries <= 0) {
      throw new Error("too many attempts"); // throw: violet bold, new: violet italic, Error: teal
    }
    for (let i = 0; i < retries; i++) {
      // control keywords (if/for): violet bold
      const res = await fetch(`/api/users/${id}`); // await: red italic, `${}` markers: teal, id: white
      if (res.ok && res.status !== 404) return res.json();
    }
    return null as never; // return: red italic, null: orange, as: red, never: aqua
  }

  get defaultUser(): User {
    // method (getter): blue
    return { id: 1, name: "dragon" };
  }
}

export function createService(timeout?: number) {
  // functions: blue (dragonBlue2)
  return new UserService();
}
console.log("done", true, 42, 3.14, 0xff); // log: teal (defaultLibrary), numbers: pink, true: bold orange
// TODO: deprecated usage below shows katanaGray strikethrough

/** @deprecated use createService instead */
function legacyService(): UserService {
  return new UserService();
}

legacyService(); // deprecated call: katanaGray strikethrough
