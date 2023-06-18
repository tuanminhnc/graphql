import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql

    #This "Book" type define the queryable fileds for every book in our data source
    type Book {
        title: String
        author: String
    }

    #The query type is special: it list all off the book.
    type Query {
        books: [Book]
    }
`;


//Define your data set
const books = [
    {
        title: 'The Hacking',
        author: 'Hoa Nguyen'
    },
    {
        title: "Apollo GrahpQL",
        author: 'Hoa Nguyen'
    },
];

//Define a resolver
//This resolver retrieves book from the "books" array above
const resolvers = {
    Query: {
        books: () => books,
    },
};

//Create an instance of Apollo Server
//The ApolloServer constructor requires two parameters 
const server = new ApolloServer({
    typeDefs,
    resolvers
});

//
const { url } = await startStandaloneServer(server, {
    listen: { port: 40001 }
});

console.log(`Server ready at: ${url}`);