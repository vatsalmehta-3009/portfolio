import smtplib
from email.message import EmailMessage
import mimetypes
from pathlib import Path


def send(sender, app_password, recipient, template, template_vars={}, attachments=None):
    msg = EmailMessage()
    msg['Subject'] = template.subject.format(**template_vars)
    msg['From'] = sender
    msg['To'] = recipient

    html_body = template.body.format(**template_vars)
    msg.set_content(html_body, subtype='html')  # Only HTML, no fallback

    # 🔗 Add attachments if provided
    if attachments:
        for file_path in attachments:
            file_path = Path(file_path)  # safely convert to Path object
            if not file_path.exists():
                print(f"Warning: Attachment {file_path} not found. Skipping.")
                continue

            mime_type, _ = mimetypes.guess_type(file_path)
            maintype, subtype = (mime_type or "application/octet-stream").split("/", 1)

            with open(file_path, "rb") as f:
                file_data = f.read()

            msg.add_attachment(file_data,
                               maintype=maintype,
                               subtype=subtype,
                               filename=file_path.name)

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.login(sender, app_password)
        smtp.send_message(msg)