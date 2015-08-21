//Page Schema
Pages = new Mongo.Collection("pages");

var Schemas = {};

Schemas.Page = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    content: {
        type: String,
        label: "Page content",
        autoform: {
          afFieldInput: {
            type: 'froala',
            inlineMode: false
            // froala options goes here
          }
        }
    },
    pageurl: {
        type: String,
        label: "Page url",
        optional: true,
        max: 1000
    }
});

Pages.attachSchema(Schemas.Page);
