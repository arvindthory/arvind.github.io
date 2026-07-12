"""
Shichi AI — backend starting point (not wired to the frontend yet)
=====================================================================

What this file is:
  A minimal Flask app that can serve the site's pages and has one route,
  /api/chat, ready for you to connect to a real model later.

What this file is NOT:
  Connected to any AI model yet. chat.html currently talks to itself
  in the browser (see chat.js) — it does not call this server at all.
  That's intentional, so you can look at the file structure and the
  site behavior before wiring anything real together.

How to run this later, once you're ready:
  1. pip install flask --break-system-packages
  2. python chat.py
  3. Open http://127.0.0.1:5000

How to connect a real model (e.g. Gemini), when you get there:
  1. pip install google-generativeai --break-system-packages
  2. Store your API key as an environment variable — never hardcode it
       export GEMINI_API_KEY="your-key-here"
  3. Replace the placeholder logic inside chat_reply() below with a real
     call to the model, and update chat.js to fetch('/api/chat') instead
     of generating its own canned reply.
"""

from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__, static_folder=".", static_url_path="")


# ---------------------------------------------------------------------------
# Page routes — just serve the static HTML files for now
# ---------------------------------------------------------------------------

@app.route("/")
def home():
    return send_from_directory(".", "index.html")


@app.route("/chat.html")
def chat_page():
    return send_from_directory(".", "chat.html")


@app.route("/user.html")
def user_page():
    return send_from_directory(".", "user.html")


# ---------------------------------------------------------------------------
# API route — this is where Shichi's actual "thinking" will eventually live
# ---------------------------------------------------------------------------

@app.route("/api/chat", methods=["POST"])
def chat_reply():
    incoming = request.get_json(silent=True) or {}
    user_message = incoming.get("message", "")

    # TODO: replace this block with a real call to your model.
    # Example shape, once Shichi 21's routing logic exists:
    #
    #   task_type = classify_task(user_message)          # e.g. "code", "writing"
    #   model = choose_specialist_model(task_type)        # picks GPT / Claude / Gemini
    #   reply = model.generate(user_message)
    #
    # For now, everyone gets the same placeholder:
    reply = (
        "Shichi's reasoning engine isn't connected yet — "
        "you're talking to a placeholder response from chat.py."
    )

    return jsonify({"reply": reply, "received": user_message})


if __name__ == "__main__":
    app.run(debug=True, port=5000)
