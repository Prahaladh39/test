import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid form data", details: parsed.error.issues });
      }

      const submission = await storage.createContactSubmission(parsed.data);
      return res.status(201).json({ success: true, id: submission.id });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  return httpServer;
}
