
export class AuthService {
  static url = useRuntimeConfig().public.authServer;

  static async signup({
    email,
    username,
    name
  }: {
    email: string;
    username: string;
    name: string;
  }) {
    const response = await fetch(`${this.url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        username,
        name
      })
    });

    return response.json();
  }
}