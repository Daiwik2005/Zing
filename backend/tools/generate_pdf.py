import json
from jinja2 import Template
from xhtml2pdf import pisa

# Load JSON data
with open("output.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# Load HTML template
with open("resume_template.html", "r", encoding="utf-8") as f:
    template_html = f.read()

# Render template
template = Template(template_html)

rendered_html = template.render(**data)

# Save optional HTML preview
with open("resume.html", "w", encoding="utf-8") as f:
    f.write(rendered_html)

# Convert HTML to PDF
with open("resume.pdf", "wb") as pdf_file:
    pisa.CreatePDF(rendered_html, dest=pdf_file)

print("PDF generated successfully!")