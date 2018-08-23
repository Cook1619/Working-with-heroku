import * as baseService from "./base";

function all() {
  return baseService.get("/api/registerusers");
}

function one(id) {
  return baseService.get(`/api/registerusers/${id}`);
}

function insert(data) {
  return baseService.post("/api/users/addnew", data);
  console.log(data);
}

function update(id, data) {
  return baseService.put(`/api/registerusers/${id}`, data);
}

function destroy(id) {
  return baseService.destroy(`/api/users/${id}`);
}

export { all, one, insert, update, destroy };
