import { Request, Response } from "express";

export const catchPokemon = (req: Request, res: Response) => {
  const success = Math.random() > 0.5;
  res.json({ success });
};

const isPrime = (num: number): boolean => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export const releasePokemon = (req: Request, res: Response) => {
  const number = Math.floor(Math.random() * 100);
  const success = isPrime(number);
  res.json({ success, number });
};

const fibonacci = (num: number) => {
  if (num === 0) return 0;
  if (num === 1) return 1;
  let a = 0,
    b = 1,
    temp;
  for (let i = 2; i <= num; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

export const renamePokemon = (req: Request, res: Response) => {
  const { name, count } = req.body;
  const fibValue = fibonacci(count);
  res.json({ fibValue });
};
