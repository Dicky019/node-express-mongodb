module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      image: String,
      service : Array
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Service = mongoose.model("Service", schema);
  
  return Service;
};
