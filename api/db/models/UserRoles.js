const mongoose = require("mongoose")

const schema = mongoose.schema({
    role_id: {type: mongoose.SchemaTypes.ObjectId, require: true},
    user_id: {type: mongoose.SchemaTypes.ObjectId, require: true}
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class UserRoles extends mongoose.Model {

}

schema.loadClass(UserRoles);
module.exports = mongoose.model("user_roles", schema);