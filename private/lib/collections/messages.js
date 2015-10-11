Messages = new Mongo.Collection("messages");
Messages.insert({greeting: "hello again"}, function() {});

