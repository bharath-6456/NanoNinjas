from flask import Flask, render_template, request
import google.generativeai as genai  # Assuming correct import path
import pathlib

app = Flask(__name__)

# Load your Google API key from a secure environment variable
GOOGLE_API_KEY = "AIzaSyDzkoyl8p3hDfsV1CzWyCyNGj4_cvNTo-k"
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel('gemini-pro')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_itinerary', methods=['POST'])
def generate_itinerary():
    location = request.form['location']
    # preferences = request.form['preferences']

    # Generate content using the model
    response = model.generate_content(f"Give 5 suitable and 3 unsuitable crops for '{location}'") # with keeping in mind '{preferences}'")

    # Return the generated itinerary as Markdown
    return render_template('result.html', itinerary_markdown=to_markdown(response.text))

def to_markdown(text):
  text = text.replace('•', '  *')
  # return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))
  return text

if __name__ == '__main__':
    app.run(debug=True)
