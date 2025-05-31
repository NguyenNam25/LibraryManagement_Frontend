```mermaid
usecaseDiagram

actor User
actor "Library Manager" as Manager
actor Admin

User --> (Register Account)
User --> (Login)
User --> (Search Books)

Manager --> (Manage Library Materials)
Admin --> (Manage User Accounts)