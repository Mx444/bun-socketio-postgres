import express, { type Request, type Response } from "express";

export const handleError = (res: Response, status: number, error: any) => {
  console.error(error);
  res.status(status).json({ error: error.message || "An error occurred" });
};
