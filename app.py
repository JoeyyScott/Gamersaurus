import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env


app = Flask(__name__)


app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.route("/")
@app.route("/get_gs")
def get_gs():
    terms = list(mongo.db.thesaurus.find())
    return render_template("gamersaurus.html", terms=terms)


@app.route("/home")
def home():
    return render_template("index.html")


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        # Checking if user already exists in the database
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            flash("Username already exists")
            return redirect(url_for("register"))

        register = {
            "username": request.form.get("username").lower(),
            "password": generate_password_hash(request.form.get("password"))
        }
        mongo.db.users.insert_one(register)

        # store user instance in session cookie
        session["user"] = request.form.get("username").lower()
        flash("Registration Successful!")
        return redirect(url_for("profile", username=session["user"]))
    return render_template("register.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # Checking if user already exists in the database
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            # Ensure the hashed password matches data for username in DB
            if check_password_hash(
                    existing_user["password"], request.form.get("password")):
                        session["user"] = request.form.get("username").lower()
                        flash("Successfully logged in as {}".format(
                            request.form.get("username")))
                        return redirect(url_for(
                            "profile", username=session["user"]))
            else:
                # If the password is invalid
                flash("Invalid login details")
                return redirect(url_for("login"))

        else:
            # Username not found
            flash("Invalid login details")
            return redirect(url_for("login"))

    return render_template("login.html")


@app.route("/profile/<username>", methods=["GET", "POST"])
def profile(username):
    # Grab the username from the current sessions 'user'
    username = mongo.db.users.find_one(
        {"username": session["user"]})["username"]

    if session["user"]:
        return render_template("profile.html", username=username)

    return redirect(url_for("login"))


@app.route("/logout")
def logout():
    # remove user from session cookie
    flash("Successfully logged out")
    session.pop("user")
    return redirect(url_for("login"))


@app.route("/add_term", methods=["GET", "POST"])
def add_term():
    if request.method == "POST":
        term = {
            "term": request.form.get("term"),
            "definition": request.form.get("definition"),
            "example": request.form.get("example"),
            "submitted_by": session["user"]
        }
        mongo.db.thesaurus.insert_one(term)
        flash("Term Successfully Added")
        return redirect(url_for("get_gs"))

    return render_template("add_term.html")


@app.route("/edit_term/<term_id>", methods=["GET", "POST"])
def edit_term(term_id):
    if request.method == "POST":
        submit = {
            "term": request.form.get("term"),
            "definition": request.form.get("definition"),
            "example": request.form.get("example"),
            "submitted_by": session["user"]
        }
        mongo.db.thesaurus.update({"_id": ObjectId(term_id)}, submit)
        flash("Term Successfully Updated")

    term = mongo.db.thesaurus.find_one({"_id": ObjectId(term_id)})
    return render_template("edit_term.html", term=term)


@app.route("/delete_task/<term_id>")
def delete_term(term_id):
    mongo.db.thesaurus.remove({"_id": ObjectId(term_id)})
    flash("Term Successfully Deleted")
    return redirect(url_for("get_gs"))


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
