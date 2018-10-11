import Users from "meteor/vulcan:users";
import { setupBackoffice } from "meteor/vulcan:backoffice-builder";

setupBackoffice([Users], {
  Users: {
    list: {
      basicColumns: [
        "_id",
        "createdAt",
        "username",
        "email",
        "isAdmin",
        "groups"
      ],
      accessGroups: ["admins"],
      accessRedirect: "/"
    },
    details: {
      fields: ["_id", "createdAt", "username", "email", "isAdmin", "groups"],
      accessGroups: ["admins"],
      accessRedirect: "/"
    },
    form: {
      newFields: ["username", "email", "_password", "groups", "isAdmin"],
      editFields: [
        "_id",
        "createdAt",
        "username",
        "email",
        "_password",
        "groups",
        "isAdmin"
      ],
      accessGroups: ["admins"],
      accessRedirect: "/"
    }
  }
});
