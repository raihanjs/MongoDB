### MongoDB BASIC Terminology

| **RDBMS**         | **MongoDB**        |
|-------------------|--------------------|
| Database          | Database           |
| Table             | Collection         |
| Tuple/Row         | Document           |
| Column            | Field              |
| Table Join        | Collection         |
| Primary Key       | _id (Field)        |

MongoDB তে দুই ধরনের Data Model নিয়ে কাজ করা যায়
- Embeded Data Model
- Normalized Data Model

# Embeded Data Model
```
{
    _id: ,
    Emp_ID: "1020258465",
    Personal_Details: {
        First_Name: "Raihan",
        Last_Name: "Gazi"
        Date_of_Birth: "1997-05-05"
    },
    Contact:{
        e-mail: "raihan123@gmail.com",
        phone: 12345678910
    },
    Address: {
        City: "Kamrangir Char",
        Area: "Mominbag",
        State: "Dhaka"
    }
}
```

# Normalized Data Model
```
{
     _id: ,
    Emp_ID: "1020258465"
}

{
    empDocID: "ObjectId101",
    First_Name: "Raihan",
    Last_Name: "Gazi"
    Date_of_Birth: "1997-05-05"
}

{
    empDocID: "ObjectId101",
    e-mail: "raihan123@gmail.com",
    phone: 12345678910
}

{
    empDocID: "ObjectId101",
    City: "Kamrangir Char",
    Area: "Mominbag",
    State: "Dhaka"
}
```

- Data Types 
- MongoDB Atlas


