1
Single Responsibility Principle (SRP)

ShoppingItem este responsabilă pentru afișarea și manipularea unui singur element din listă.
ShoppingList este responsabilă pentru manipularea listei de elemente.
ShoppingListActions este responsabilă pentru acțiunile asupra elementelor din listă:ștergere, marcare ca făcut.
ShoppingListService este responsabilă pentru conectarea tuturor componentelor și pentru gestionarea interacțiunilor cu utilizatorul.

2
Open/Closed Principle (OCP)

Clasele ShoppingItem și ShoppingList sunt închise pentru modificare și nu trebuie să fie modificate pentru a adăuga funcționalități suplimentare.
Clasele ShoppingListActions și ShoppingListService sunt deschise pentru extensie, astfel încât să putem adăuga funcționalități noi în viitor.

3
Liskov Substitution Principle (LSP)

ShoppingList este clasa de bază, iar ShoppingItem este subclasa sa. ShoppingItem poate fi utilizat în mod eficient în locul clasei de bază ShoppingList, deoarece este înlocuibil cu obiecte de tipul ShoppingList.
addItem și deleteItem sunt metode comune ale clasei de bază și ale subclasei sale, iar acestea sunt înlocuibile unele cu altele. De asemenea, metoda render este definită în clasa de bază, dar este suprascrisă în subclasa sa, pentru a afișa item-urile de cumpărături.

4
Interface Segregation Principle (ISP)
Acest principiu este aplicat în mod implicit prin faptul că fiecare clasă are doar metodele necesare pentru a îndeplini responsabilitatea sa specifică. De exemplu, clasa ShoppingListActions are doar două metode pentru ștergerea elementelor și comutarea stării elementelor, în timp ce clasa ShoppingList are doar metode pentru adăugarea și afișarea elementelor.

Putem observa că clasele sunt definite pentru sarcini specifice, cum ar fi ShoppingList pentru gestionarea listei de cumpărături, ShoppingItem pentru afișarea unui element de pe lista de cumpărături și ShoppingListService pentru a gestiona adăugarea, ștergerea și actualizarea elementelor din lista de cumpărături.

Aceasta arată că codul respectă indirect ISP, deoarece fiecare clasă are o sarcină specifică și nu depinde de alte interfețe sau funcționalități pe care nu le utilizează.

5
Dependency Inversion Principle (DIP)
DIP este aplicat prin injectarea dependențelor. De exemplu, ShoppingListService depinde de două obiecte: ShoppingList și ShoppingListActions. În loc să creeze aceste obiecte în constructorul său, ShoppingListService primește aceste obiecte prin injecție, ceea ce face ca acestea să fie ușor de înlocuit și de testat.

ShoppingListService primește o instanță a ShoppingList și o instanță a ShoppingListActions în constructorul său, care sunt stocate în proprietățile shoppingList și, respectiv, shoppingListActions. Aceste obiecte sunt apoi folosite în metodele din ShoppingListService pentru a adăuga, șterge sau marca elemente din lista de cumpărături ca fiind complete.
