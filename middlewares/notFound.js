// A middleware in backend development is like a middleman that sits between the incoming request from a client and the final response from the server. It's a function that can modify the request, process it, handle certain task before passing it on to the next path of the code or sending back a response. 

const notFound = (req, res) => {
    res.json({ message: "Route Not Found" });
};

module.exports = notFound;