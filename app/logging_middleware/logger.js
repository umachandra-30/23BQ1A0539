import axios from "axios";

const LOG_API = "http://4.224.186.213/evaluation-service/logs";

export async function Log(
  stack,
  level,
  packageName,
  message
) {
  try {
    const payload = {
      stack,
      level,
      package: packageName,
      message
    };

    console.log("Log Event:", payload);

    // Uncomment when you have the actual token

    await axios.post(
      LOG_API,
      payload,
      {
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2JxMWEwNTM5QHZ2aXQubmV0IiwiZXhwIjoxNzgwNjM1NDI1LCJpYXQiOjE3ODA2MzQ1MjUsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJmNWRhMjU3NS04NTZhLTRmZTUtYTRiOS00OGM0MzNlN2E2OWQiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJ1bWEgY2hhbmRyYSIsInN1YiI6ImQ5Y2RjNjhiLThlNzctNDNjNS1hNGNkLTBlMzdhNjQ0OTMxMSJ9LCJlbWFpbCI6IjIzYnExYTA1MzlAdnZpdC5uZXQiLCJuYW1lIjoidW1hIGNoYW5kcmEiLCJyb2xsTm8iOiIyM2JxMWEwNTM5IiwiYWNjZXNzQ29kZSI6IlFRZEVZeSIsImNsaWVudElEIjoiZDljZGM2OGItOGU3Ny00M2M1LWE0Y2QtMGUzN2E2NDQ5MzExIiwiY2xpZW50U2VjcmV0IjoieXZacWhlSkNKcEFSeG1lQiJ9.vAWlC6AdB15mZ5ZF2GN5Y2YESwYY_hD4C57m6ahi4MM`
        }
      }
    );

  } catch (error) {
    console.error(
      "Logging Failed:",
      error.message
    );
  }
}