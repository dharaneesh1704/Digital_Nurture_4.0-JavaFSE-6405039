# Extract text from all 5 Git-HOL.docx files in the root and save as .txt in week8
from docx import Document
import os

root_dir = r'C:\Users\skdha\OneDrive\Desktop\COMPANY\cognizant\CODE\Digital_Nurture_4.0-JavaFSE-6405039'
output_dir = os.path.join(root_dir, 'week8')

for i in range(1, 6):
    docx_path = os.path.join(root_dir, f'{i}. Git-HOL.docx')
    txt_path = os.path.join(output_dir, f'{i}_Git-HOL.txt')
    if os.path.exists(docx_path):
        doc = Document(docx_path)
        text = '\n'.join([para.text for para in doc.paragraphs])
        with open(txt_path, 'w', encoding='utf-8') as f:
            f.write(text)
    else:
        with open(txt_path, 'w', encoding='utf-8') as f:
            f.write('File not found: ' + docx_path)
print('Extraction complete. Check the week8 folder for .txt files.')
