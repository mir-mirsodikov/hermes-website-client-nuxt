export class AuthService {
  static url = '';

  static async signup({
    email,
    username,
    name,
  }: {
    email: string;
    username: string;
    name: string;
  }) {
    const response = await fetch(`${this.url}/register`, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        username,
        name,
      }),
    });

    return response.json();
  }
}
