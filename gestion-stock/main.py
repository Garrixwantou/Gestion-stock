import sqlite3
from tkinter import *
from tkinter import messagebox

# Configuration de la base de données
def init_db():
    conn = sqlite3.connect('stock.db')
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS produits 
                      (id INTEGER PRIMARY KEY, nom TEXT, quantite INTEGER)''')
    conn.commit()
    conn.close()

# Fonction pour ajouter un produit
def ajouter_produit():
    nom = entry_nom.get()
    qty = entry_qty.get()
    if nom and qty:
        conn = sqlite3.connect('stock.db')
        cursor = conn.cursor()
        cursor.execute("INSERT INTO produits (nom, quantite) VALUES (?, ?)", (nom, int(qty)))
        conn.commit()
        conn.close()
        messagebox.showinfo("Succès", f"{nom} ajouté au stock !")
        entry_nom.delete(0, END)
        entry_qty.delete(0, END)
    else:
        messagebox.showwarning("Erreur", "Veuillez remplir tous les champs")

# Interface Graphique
root = Tk()
root.title("Gestion de Stock - Ali WM")
root.geometry("300x250")

Label(root, text="Nom du produit:").pack(pady=5)
entry_nom = Entry(root)
entry_nom.pack()

Label(root, text="Quantité:").pack(pady=5)
entry_qty = Entry(root)
entry_qty.pack()

Button(root, text="Ajouter au Stock", command=ajouter_produit, bg="#3b82f6", fg="white").pack(pady=20)

init_db()
root.mainloop()