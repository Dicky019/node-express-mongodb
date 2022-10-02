module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      username: String,
      email: String,
      password: String,
      address: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = mongoose.model("User", schema);
  
  return User;
};
