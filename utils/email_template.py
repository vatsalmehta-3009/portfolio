class ContactEmailTemplate:
    subject = "New Contact Message from {name} - Portfolio Website"
    
    body = """
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>New Contact Message</title>
        <style>
            body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }}
            .content {{ background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }}
            .field {{ margin-bottom: 15px; }}
            .field-label {{ font-weight: bold; color: #667eea; }}
            .field-value {{ margin-top: 5px; }}
            .message-box {{ background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Contact Message</h1>
                <p>Someone has sent you a message through your portfolio website</p>
            </div>
            <div class="content">
                <div class="field">
                    <div class="field-label">Name:</div>
                    <div class="field-value">{name}</div>
                </div>
                <div class="field">
                    <div class="field-label">Email:</div>
                    <div class="field-value">{email}</div>
                </div>
                <div class="field">
                    <div class="field-label">Subject:</div>
                    <div class="field-value">{subject}</div>
                </div>
                <div class="field">
                    <div class="field-label">Message:</div>
                    <div class="field-value">
                        <div class="message-box">{message}</div>
                    </div>
                </div>
                <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
                <p style="color: #666; font-size: 12px;">
                    This message was sent from your portfolio website contact form.
                </p>
            </div>
        </div>
    </body>
    </html>
    """ 