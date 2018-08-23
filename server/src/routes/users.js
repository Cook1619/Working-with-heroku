import { Router } from "express";
import { tokenMiddleware, isLoggedIn } from "../middleware/auth.mw";
import Table from "../table";
import { generateHash } from "../utils/hash";

let router = Router();

let newUser = new Table("users");

//comment

router.post("/addnew", async (req, res) => {
  try {
    let hash = await generateHash(req.body.password);
    let body = {
      name: req.body.name,
      email: req.body.email,
      hash
    };
    let id = await newUser.insert(body);
    res.json(id);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get("/me", tokenMiddleware, isLoggedIn, (req, res) => {
  res.json(req.user);
});

router.get("/me/:id", tokenMiddleware, isLoggedIn, async (req, res) => {
  let id = req.params.id;
  let userData = await newUser.getOne(id);
  res.json(userData);
});

export default router;
