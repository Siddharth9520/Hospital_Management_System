/* ==========================================================================
   CarePulse Authoritative C++ Codebase & OOP Knowledge Base
   Complete 1-to-1 reflection of carepulse_system.cpp (314 lines)
   ========================================================================== */

const CPP_SECTIONS = [
  {
    "id": "person-class",
    "title": "1. Person Class",
    "oopConcept": "Encapsulation & Base Class",
    "description": "Includes, namespaces and Person base class with encapsulated identity fields, member initializer list, and virtual destructor.",
    "startLine": 1,
    "endLine": 36,
    "lines": [
      {
        "num": 1,
        "text": "#include <iostream>",
        "tokens": [
          {
            "t": "kw",
            "s": "#include"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "id",
            "s": "iostream>"
          }
        ]
      },
      {
        "num": 2,
        "text": "#include <vector>",
        "tokens": [
          {
            "t": "kw",
            "s": "#include"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "id",
            "s": "vector>"
          }
        ]
      },
      {
        "num": 3,
        "text": "#include <string>",
        "tokens": [
          {
            "t": "kw",
            "s": "#include"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "id",
            "s": "string>"
          }
        ]
      },
      {
        "num": 4,
        "text": "#include <memory>",
        "tokens": [
          {
            "t": "kw",
            "s": "#include"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "id",
            "s": "memory>"
          }
        ]
      },
      {
        "num": 5,
        "text": "#include <iomanip>",
        "tokens": [
          {
            "t": "kw",
            "s": "#include"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "id",
            "s": "iomanip>"
          }
        ]
      },
      {
        "num": 6,
        "text": "#include <stdexcept>",
        "tokens": [
          {
            "t": "kw",
            "s": "#include"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "id",
            "s": "stdexcept>"
          }
        ]
      },
      {
        "num": 7,
        "text": "#include <algorithm>",
        "tokens": [
          {
            "t": "kw",
            "s": "#include"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "id",
            "s": "algorithm>"
          }
        ]
      },
      {
        "num": 8,
        "text": "",
        "tokens": []
      },
      {
        "num": 9,
        "text": "using namespace std;",
        "tokens": [
          {
            "t": "kw",
            "s": "using"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "namespace"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "std"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 10,
        "text": "",
        "tokens": []
      },
      {
        "num": 11,
        "text": "// ==========================================",
        "tokens": [
          {
            "t": "cmt",
            "s": "// =========================================="
          }
        ]
      },
      {
        "num": 12,
        "text": "// 1. PERSON CLASS (Encapsulation & Base Class)",
        "tokens": [
          {
            "t": "cmt",
            "s": "// 1. PERSON CLASS (Encapsulation & Base Class)"
          }
        ]
      },
      {
        "num": 13,
        "text": "// ==========================================",
        "tokens": [
          {
            "t": "cmt",
            "s": "// =========================================="
          }
        ]
      },
      {
        "num": 14,
        "text": "class Person {",
        "tokens": [
          {
            "t": "kw",
            "s": "class"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Person"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 15,
        "text": "protected:",
        "tokens": [
          {
            "t": "kw",
            "s": "protected"
          },
          {
            "t": "op",
            "s": ":"
          }
        ]
      },
      {
        "num": 16,
        "text": "    string id;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "id"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 17,
        "text": "    string name;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "name"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 18,
        "text": "    int age;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "int"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "age"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 19,
        "text": "",
        "tokens": []
      },
      {
        "num": 20,
        "text": "public:",
        "tokens": [
          {
            "t": "kw",
            "s": "public"
          },
          {
            "t": "op",
            "s": ":"
          }
        ]
      },
      {
        "num": 21,
        "text": "    Person(string personId, string personName, int personAge)",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Person"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "personId"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "personName"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "int"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "personAge"
          },
          {
            "t": "op",
            "s": ")"
          }
        ]
      },
      {
        "num": 22,
        "text": "        : id(personId), name(personName), age(personAge) {}",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "id"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "personId"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "name"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "personName"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "age"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "personAge"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 23,
        "text": "",
        "tokens": []
      },
      {
        "num": 24,
        "text": "    virtual ~Person() {}",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "virtual"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "~"
          },
          {
            "t": "tp",
            "s": "Person"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 25,
        "text": "",
        "tokens": []
      },
      {
        "num": 26,
        "text": "    string getId() const { return id; }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "getId"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "id"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 27,
        "text": "    string getName() const { return name; }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "getName"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "name"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 28,
        "text": "    int getAge() const { return age; }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "int"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "getAge"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "age"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 29,
        "text": "",
        "tokens": []
      },
      {
        "num": 30,
        "text": "    virtual void displayDetails() const {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "virtual"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "void"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "displayDetails"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 31,
        "text": "        cout << \"ID: \" << setw(8) << left << id ",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "cout"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"ID: \""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "setw"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "num",
            "s": "8"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "left"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "id"
          },
          {
            "t": "op",
            "s": " "
          }
        ]
      },
      {
        "num": 32,
        "text": "             << \" | Name: \" << setw(18) << left << name ",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\" | Name: \""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "setw"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "num",
            "s": "18"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "left"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "name"
          },
          {
            "t": "op",
            "s": " "
          }
        ]
      },
      {
        "num": 33,
        "text": "             << \" | Age: \" << age;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\" | Age: \""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "age"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 34,
        "text": "    }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 35,
        "text": "};",
        "tokens": [
          {
            "t": "op",
            "s": "}"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 36,
        "text": "",
        "tokens": []
      }
    ]
  },
  {
    "id": "doctor-class",
    "title": "2. Doctor Class",
    "oopConcept": "Single Inheritance",
    "description": "Extends Person with specialization, availability status flag, and polymorphic display method.",
    "startLine": 37,
    "endLine": 59,
    "lines": [
      {
        "num": 37,
        "text": "// ==========================================",
        "tokens": [
          {
            "t": "cmt",
            "s": "// =========================================="
          }
        ]
      },
      {
        "num": 38,
        "text": "// 2. DOCTOR CLASS (Single Inheritance)",
        "tokens": [
          {
            "t": "cmt",
            "s": "// 2. DOCTOR CLASS (Single Inheritance)"
          }
        ]
      },
      {
        "num": 39,
        "text": "// ==========================================",
        "tokens": [
          {
            "t": "cmt",
            "s": "// =========================================="
          }
        ]
      },
      {
        "num": 40,
        "text": "class Doctor : public Person {",
        "tokens": [
          {
            "t": "kw",
            "s": "class"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Doctor"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "public"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Person"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 41,
        "text": "private:",
        "tokens": [
          {
            "t": "kw",
            "s": "private"
          },
          {
            "t": "op",
            "s": ":"
          }
        ]
      },
      {
        "num": 42,
        "text": "    string specialization;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "specialization"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 43,
        "text": "    bool isAvailable;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "bool"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "isAvailable"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 44,
        "text": "",
        "tokens": []
      },
      {
        "num": 45,
        "text": "public:",
        "tokens": [
          {
            "t": "kw",
            "s": "public"
          },
          {
            "t": "op",
            "s": ":"
          }
        ]
      },
      {
        "num": 46,
        "text": "    Doctor(string docId, string docName, int docAge, string spec, bool avail = true)",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Doctor"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "docId"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "docName"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "int"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "docAge"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "spec"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "bool"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "avail"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "true"
          },
          {
            "t": "op",
            "s": ")"
          }
        ]
      },
      {
        "num": 47,
        "text": "        : Person(docId, docName, docAge), specialization(spec), isAvailable(avail) {}",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Person"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "docId"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "docName"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "docAge"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "specialization"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "spec"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "isAvailable"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "avail"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 48,
        "text": "",
        "tokens": []
      },
      {
        "num": 49,
        "text": "    string getSpecialization() const { return specialization; }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "getSpecialization"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "specialization"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 50,
        "text": "    bool getAvailability() const { return isAvailable; }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "bool"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "getAvailability"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "isAvailable"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 51,
        "text": "    void setAvailability(bool status) { isAvailable = status; }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "void"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "setAvailability"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "bool"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "status"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "isAvailable"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "status"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 52,
        "text": "",
        "tokens": []
      },
      {
        "num": 53,
        "text": "    void displayDetails() const override {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "void"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "displayDetails"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "override"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 54,
        "text": "        Person::displayDetails();",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Person"
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "fn",
            "s": "displayDetails"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 55,
        "text": "        cout << \" | Specialization: \" << setw(16) << left << specialization",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "cout"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\" | Specialization: \""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "setw"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "num",
            "s": "16"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "left"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "specialization"
          }
        ]
      },
      {
        "num": 56,
        "text": "             << \" | Status: \" << (isAvailable ? \"Available\" : \"Unavailable\") << endl;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\" | Status: \""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "isAvailable"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "?"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"Available\""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"Unavailable\""
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "endl"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 57,
        "text": "    }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 58,
        "text": "};",
        "tokens": [
          {
            "t": "op",
            "s": "}"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 59,
        "text": "",
        "tokens": []
      }
    ]
  },
  {
    "id": "patient-class",
    "title": "3. Patient Class",
    "oopConcept": "Abstract Base Class & Polymorphism",
    "description": "Abstract base class defining pure virtual methods for calculateBill() and getCategory().",
    "startLine": 60,
    "endLine": 77,
    "lines": [
      {
        "num": 60,
        "text": "// ==========================================",
        "tokens": [
          {
            "t": "cmt",
            "s": "// =========================================="
          }
        ]
      },
      {
        "num": 61,
        "text": "// 3. PATIENT CLASS (Abstract Base Class - Polymorphism)",
        "tokens": [
          {
            "t": "cmt",
            "s": "// 3. PATIENT CLASS (Abstract Base Class - Polymorphism)"
          }
        ]
      },
      {
        "num": 62,
        "text": "// ==========================================",
        "tokens": [
          {
            "t": "cmt",
            "s": "// =========================================="
          }
        ]
      },
      {
        "num": 63,
        "text": "class Patient : public Person {",
        "tokens": [
          {
            "t": "kw",
            "s": "class"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Patient"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "public"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Person"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 64,
        "text": "public:",
        "tokens": [
          {
            "t": "kw",
            "s": "public"
          },
          {
            "t": "op",
            "s": ":"
          }
        ]
      },
      {
        "num": 65,
        "text": "    Patient(string patId, string patName, int patAge)",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Patient"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patId"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patName"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "int"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patAge"
          },
          {
            "t": "op",
            "s": ")"
          }
        ]
      },
      {
        "num": 66,
        "text": "        : Person(patId, patName, patAge) {}",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Person"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "patId"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patName"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patAge"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 67,
        "text": "",
        "tokens": []
      },
      {
        "num": 68,
        "text": "    virtual string getCategory() const = 0;   // Pure virtual function",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "virtual"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "getCategory"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "num",
            "s": "0"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "cmt",
            "s": "// Pure virtual function"
          }
        ]
      },
      {
        "num": 69,
        "text": "    virtual double calculateBill() const = 0; // Polymorphic bill calculation",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "virtual"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "double"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "calculateBill"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "num",
            "s": "0"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "cmt",
            "s": "// Polymorphic bill calculation"
          }
        ]
      },
      {
        "num": 70,
        "text": "",
        "tokens": []
      },
      {
        "num": 71,
        "text": "    void displayDetails() const override {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "void"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "displayDetails"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "override"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 72,
        "text": "        Person::displayDetails();",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Person"
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "fn",
            "s": "displayDetails"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 73,
        "text": "        cout << \" | Category: \" << setw(10) << left << getCategory()",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "cout"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\" | Category: \""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "setw"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "num",
            "s": "10"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "left"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "getCategory"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          }
        ]
      },
      {
        "num": 74,
        "text": "             << \" | Consultation Fee: ₹\" << fixed << setprecision(2) << calculateBill() << endl;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\" | Consultation Fee: ₹\""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "fixed"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "setprecision"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "num",
            "s": "2"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "calculateBill"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "endl"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 75,
        "text": "    }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 76,
        "text": "};",
        "tokens": [
          {
            "t": "op",
            "s": "}"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 77,
        "text": "",
        "tokens": []
      }
    ]
  },
  {
    "id": "patient-categories",
    "title": "4. Patient Categories",
    "oopConcept": "Hierarchical Inheritance & Runtime Polymorphism",
    "description": "Concrete derived classes: GeneralPatient (₹500), SeniorPatient (10% discount ₹450 & age check), and EmergencyPatient (₹800).",
    "startLine": 78,
    "endLine": 126,
    "lines": [
      {
        "num": 78,
        "text": "// ==========================================",
        "tokens": [
          {
            "t": "cmt",
            "s": "// =========================================="
          }
        ]
      },
      {
        "num": 79,
        "text": "// 4. PATIENT CATEGORIES (Hierarchical Inheritance)",
        "tokens": [
          {
            "t": "cmt",
            "s": "// 4. PATIENT CATEGORIES (Hierarchical Inheritance)"
          }
        ]
      },
      {
        "num": 80,
        "text": "// ==========================================",
        "tokens": [
          {
            "t": "cmt",
            "s": "// =========================================="
          }
        ]
      },
      {
        "num": 81,
        "text": "class GeneralPatient : public Patient {",
        "tokens": [
          {
            "t": "kw",
            "s": "class"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "GeneralPatient"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "public"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Patient"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 82,
        "text": "public:",
        "tokens": [
          {
            "t": "kw",
            "s": "public"
          },
          {
            "t": "op",
            "s": ":"
          }
        ]
      },
      {
        "num": 83,
        "text": "    GeneralPatient(string patId, string patName, int patAge)",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "GeneralPatient"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patId"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patName"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "int"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patAge"
          },
          {
            "t": "op",
            "s": ")"
          }
        ]
      },
      {
        "num": 84,
        "text": "        : Patient(patId, patName, patAge) {}",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Patient"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "patId"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patName"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patAge"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 85,
        "text": "",
        "tokens": []
      },
      {
        "num": 86,
        "text": "    string getCategory() const override {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "getCategory"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "override"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 87,
        "text": "        return \"General\";",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"General\""
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 88,
        "text": "    }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 89,
        "text": "",
        "tokens": []
      },
      {
        "num": 90,
        "text": "    double calculateBill() const override {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "double"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "calculateBill"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "override"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 91,
        "text": "        return 500.0; // Standard consultation charge",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "num",
            "s": "500.0"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "cmt",
            "s": "// Standard consultation charge"
          }
        ]
      },
      {
        "num": 92,
        "text": "    }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 93,
        "text": "};",
        "tokens": [
          {
            "t": "op",
            "s": "}"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 94,
        "text": "",
        "tokens": []
      },
      {
        "num": 95,
        "text": "class SeniorPatient : public Patient {",
        "tokens": [
          {
            "t": "kw",
            "s": "class"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "SeniorPatient"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "public"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Patient"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 96,
        "text": "public:",
        "tokens": [
          {
            "t": "kw",
            "s": "public"
          },
          {
            "t": "op",
            "s": ":"
          }
        ]
      },
      {
        "num": 97,
        "text": "    SeniorPatient(string patId, string patName, int patAge)",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "SeniorPatient"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patId"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patName"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "int"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patAge"
          },
          {
            "t": "op",
            "s": ")"
          }
        ]
      },
      {
        "num": 98,
        "text": "        : Patient(patId, patName, patAge) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Patient"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "patId"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patName"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patAge"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 99,
        "text": "        if (patAge < 60) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "if"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "patAge"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "num",
            "s": "60"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 100,
        "text": "            throw invalid_argument(\"Senior patient must be 60 years or older.\");",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "throw"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "invalid_argument"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "str",
            "s": "\"Senior patient must be 60 years or older.\""
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 101,
        "text": "        }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 102,
        "text": "    }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 103,
        "text": "",
        "tokens": []
      },
      {
        "num": 104,
        "text": "    string getCategory() const override {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "getCategory"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "override"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 105,
        "text": "        return \"Senior\";",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"Senior\""
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 106,
        "text": "    }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 107,
        "text": "",
        "tokens": []
      },
      {
        "num": 108,
        "text": "    double calculateBill() const override {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "double"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "calculateBill"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "override"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 109,
        "text": "        return 500.0 * 0.90; // 10% Senior Discount -> ₹450",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "num",
            "s": "500.0"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "*"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "num",
            "s": "0.90"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "cmt",
            "s": "// 10% Senior Discount -> ₹450"
          }
        ]
      },
      {
        "num": 110,
        "text": "    }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 111,
        "text": "};",
        "tokens": [
          {
            "t": "op",
            "s": "}"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 112,
        "text": "",
        "tokens": []
      },
      {
        "num": 113,
        "text": "class EmergencyPatient : public Patient {",
        "tokens": [
          {
            "t": "kw",
            "s": "class"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "EmergencyPatient"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "public"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Patient"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 114,
        "text": "public:",
        "tokens": [
          {
            "t": "kw",
            "s": "public"
          },
          {
            "t": "op",
            "s": ":"
          }
        ]
      },
      {
        "num": 115,
        "text": "    EmergencyPatient(string patId, string patName, int patAge)",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "EmergencyPatient"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patId"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patName"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "int"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patAge"
          },
          {
            "t": "op",
            "s": ")"
          }
        ]
      },
      {
        "num": 116,
        "text": "        : Patient(patId, patName, patAge) {}",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Patient"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "patId"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patName"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patAge"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 117,
        "text": "",
        "tokens": []
      },
      {
        "num": 118,
        "text": "    string getCategory() const override {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "getCategory"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "override"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 119,
        "text": "        return \"Emergency\";",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"Emergency\""
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 120,
        "text": "    }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 121,
        "text": "",
        "tokens": []
      },
      {
        "num": 122,
        "text": "    double calculateBill() const override {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "double"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "calculateBill"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "override"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 123,
        "text": "        return 500.0 + 300.0; // ₹500 base + ₹300 urgent triage surcharge -> ₹800",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "num",
            "s": "500.0"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "num",
            "s": "300.0"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "cmt",
            "s": "// ₹500 base + ₹300 urgent triage surcharge -> ₹800"
          }
        ]
      },
      {
        "num": 124,
        "text": "    }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 125,
        "text": "};",
        "tokens": [
          {
            "t": "op",
            "s": "}"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 126,
        "text": "",
        "tokens": []
      }
    ]
  },
  {
    "id": "appointment-class",
    "title": "5. Appointment Class",
    "oopConcept": "Encapsulation & Association",
    "description": "Associates patient with doctor, stores schedule slot, and protects against double-billing.",
    "startLine": 127,
    "endLine": 160,
    "lines": [
      {
        "num": 127,
        "text": "// ==========================================",
        "tokens": [
          {
            "t": "cmt",
            "s": "// =========================================="
          }
        ]
      },
      {
        "num": 128,
        "text": "// 5. APPOINTMENT CLASS (Encapsulation & Association)",
        "tokens": [
          {
            "t": "cmt",
            "s": "// 5. APPOINTMENT CLASS (Encapsulation & Association)"
          }
        ]
      },
      {
        "num": 129,
        "text": "// ==========================================",
        "tokens": [
          {
            "t": "cmt",
            "s": "// =========================================="
          }
        ]
      },
      {
        "num": 130,
        "text": "class Appointment {",
        "tokens": [
          {
            "t": "kw",
            "s": "class"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Appointment"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 131,
        "text": "private:",
        "tokens": [
          {
            "t": "kw",
            "s": "private"
          },
          {
            "t": "op",
            "s": ":"
          }
        ]
      },
      {
        "num": 132,
        "text": "    string appointmentId;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "appointmentId"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 133,
        "text": "    string patientId;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patientId"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 134,
        "text": "    string doctorId;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "doctorId"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 135,
        "text": "    string date;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "date"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 136,
        "text": "    string timeSlot;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "timeSlot"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 137,
        "text": "    bool isBilled;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "bool"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "isBilled"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 138,
        "text": "    double billedAmount;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "double"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "billedAmount"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 139,
        "text": "",
        "tokens": []
      },
      {
        "num": 140,
        "text": "public:",
        "tokens": [
          {
            "t": "kw",
            "s": "public"
          },
          {
            "t": "op",
            "s": ":"
          }
        ]
      },
      {
        "num": 141,
        "text": "    Appointment(string apptId, string patId, string docId, string apptDate, string slot)",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Appointment"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "apptId"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patId"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "docId"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "apptDate"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "slot"
          },
          {
            "t": "op",
            "s": ")"
          }
        ]
      },
      {
        "num": 142,
        "text": "        : appointmentId(apptId), patientId(patId), doctorId(docId),",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "appointmentId"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "apptId"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patientId"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "patId"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "doctorId"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "docId"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ","
          }
        ]
      },
      {
        "num": 143,
        "text": "          date(apptDate), timeSlot(slot), isBilled(false), billedAmount(0.0) {}",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "date"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "apptDate"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "timeSlot"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "slot"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "isBilled"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "false"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "billedAmount"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "num",
            "s": "0.0"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 144,
        "text": "",
        "tokens": []
      },
      {
        "num": 145,
        "text": "    string getAppointmentId() const { return appointmentId; }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "getAppointmentId"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "appointmentId"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 146,
        "text": "    string getPatientId() const { return patientId; }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "getPatientId"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patientId"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 147,
        "text": "    string getDoctorId() const { return doctorId; }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "getDoctorId"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "doctorId"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 148,
        "text": "    string getDate() const { return date; }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "getDate"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "date"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 149,
        "text": "    string getTimeSlot() const { return timeSlot; }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "getTimeSlot"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "timeSlot"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 150,
        "text": "    bool getIsBilled() const { return isBilled; }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "bool"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "getIsBilled"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "isBilled"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 151,
        "text": "    double getBilledAmount() const { return billedAmount; }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "double"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "getBilledAmount"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "billedAmount"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 152,
        "text": "",
        "tokens": []
      },
      {
        "num": 153,
        "text": "    void markBilled(double amount) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "void"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "markBilled"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "double"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "amount"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 154,
        "text": "        if (isBilled) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "if"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "isBilled"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 155,
        "text": "            throw runtime_error(\"Appointment \" + appointmentId + \" is already billed.\");",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "throw"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "runtime_error"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "str",
            "s": "\"Appointment \""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "appointmentId"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\" is already billed.\""
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 156,
        "text": "        }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 157,
        "text": "        isBilled = true;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "isBilled"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "true"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 158,
        "text": "        billedAmount = amount;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "billedAmount"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "amount"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 159,
        "text": "    }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 160,
        "text": "};",
        "tokens": [
          {
            "t": "op",
            "s": "}"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      }
    ]
  },
  {
    "id": "hospital-system",
    "title": "6. Hospital System",
    "oopConcept": "Composition & Exception Handling",
    "description": "Manages collections using STL vectors, slot conflict detection, and runtime polymorphic bill dispatch.",
    "startLine": 161,
    "endLine": 286,
    "lines": [
      {
        "num": 161,
        "text": "",
        "tokens": []
      },
      {
        "num": 162,
        "text": "// ==========================================",
        "tokens": [
          {
            "t": "cmt",
            "s": "// =========================================="
          }
        ]
      },
      {
        "num": 163,
        "text": "// 6. HOSPITAL SYSTEM (Composition & Exception Handling)",
        "tokens": [
          {
            "t": "cmt",
            "s": "// 6. HOSPITAL SYSTEM (Composition & Exception Handling)"
          }
        ]
      },
      {
        "num": 164,
        "text": "// ==========================================",
        "tokens": [
          {
            "t": "cmt",
            "s": "// =========================================="
          }
        ]
      },
      {
        "num": 165,
        "text": "class HospitalSystem {",
        "tokens": [
          {
            "t": "kw",
            "s": "class"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "HospitalSystem"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 166,
        "text": "private:",
        "tokens": [
          {
            "t": "kw",
            "s": "private"
          },
          {
            "t": "op",
            "s": ":"
          }
        ]
      },
      {
        "num": 167,
        "text": "    vector<Doctor> doctors;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "vector<Doctor>"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "doctors"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 168,
        "text": "    vector<shared_ptr<Patient>> patients;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "vector<shared_ptr<Patient>>"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patients"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 169,
        "text": "    vector<Appointment> appointments;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "vector<Appointment>"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "appointments"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 170,
        "text": "    int nextApptCounter;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "int"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "nextApptCounter"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 171,
        "text": "",
        "tokens": []
      },
      {
        "num": 172,
        "text": "public:",
        "tokens": [
          {
            "t": "kw",
            "s": "public"
          },
          {
            "t": "op",
            "s": ":"
          }
        ]
      },
      {
        "num": 173,
        "text": "    HospitalSystem() : nextApptCounter(101) {}",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "HospitalSystem"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "nextApptCounter"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "num",
            "s": "101"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 174,
        "text": "",
        "tokens": []
      },
      {
        "num": 175,
        "text": "    void addDoctor(const Doctor& doc) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "void"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "addDoctor"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Doctor"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "doc"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 176,
        "text": "        for (const auto& d : doctors) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "for"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "auto"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "d"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "doctors"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 177,
        "text": "            if (d.getId() == doc.getId()) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "if"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "d"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "getId"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "doc"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "getId"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 178,
        "text": "                throw runtime_error(\"Doctor with ID \" + doc.getId() + \" already exists.\");",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "throw"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "runtime_error"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "str",
            "s": "\"Doctor with ID \""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "doc"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "getId"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\" already exists.\""
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 179,
        "text": "            }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 180,
        "text": "        }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 181,
        "text": "        doctors.push_back(doc);",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "doctors"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "push_back"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "doc"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 182,
        "text": "    }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 183,
        "text": "",
        "tokens": []
      },
      {
        "num": 184,
        "text": "    void removeDoctor(const string& docId) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "void"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "removeDoctor"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "docId"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 185,
        "text": "        auto it = remove_if(doctors.begin(), doctors.end(),",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "auto"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "it"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "remove_if"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "doctors"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "id",
            "s": "begin"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "doctors"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "id",
            "s": "end"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ","
          }
        ]
      },
      {
        "num": 186,
        "text": "            [&docId](const Doctor& d) { return d.getId() == docId; });",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "["
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "id",
            "s": "docId"
          },
          {
            "t": "op",
            "s": "]"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Doctor"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "d"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "d"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "getId"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "docId"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 187,
        "text": "        if (it == doctors.end()) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "if"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "it"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "doctors"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "id",
            "s": "end"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 188,
        "text": "            throw runtime_error(\"Doctor not found: \" + docId);",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "throw"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "runtime_error"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "str",
            "s": "\"Doctor not found: \""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "docId"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 189,
        "text": "        }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 190,
        "text": "        doctors.erase(it, doctors.end());",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "doctors"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "erase"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "it"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "doctors"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "id",
            "s": "end"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 191,
        "text": "    }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 192,
        "text": "",
        "tokens": []
      },
      {
        "num": 193,
        "text": "    void setDoctorAvailability(const string& docId, bool status) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "void"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "setDoctorAvailability"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "docId"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "bool"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "status"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 194,
        "text": "        for (auto& d : doctors) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "for"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "auto"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "d"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "doctors"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 195,
        "text": "            if (d.getId() == docId) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "if"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "d"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "getId"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "docId"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 196,
        "text": "                d.setAvailability(status);",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "d"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "setAvailability"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "status"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 197,
        "text": "                return;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 198,
        "text": "            }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 199,
        "text": "        }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 200,
        "text": "        throw runtime_error(\"Doctor not found: \" + docId);",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "throw"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "runtime_error"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "str",
            "s": "\"Doctor not found: \""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "docId"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 201,
        "text": "    }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 202,
        "text": "",
        "tokens": []
      },
      {
        "num": 203,
        "text": "    void registerPatient(shared_ptr<Patient> patient) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "void"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "registerPatient"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "shared_ptr<Patient>"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patient"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 204,
        "text": "        for (const auto& p : patients) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "for"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "auto"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "p"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patients"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 205,
        "text": "            if (p->getId() == patient->getId()) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "if"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "p"
          },
          {
            "t": "op",
            "s": "-"
          },
          {
            "t": "op",
            "s": ">"
          },
          {
            "t": "fn",
            "s": "getId"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patient"
          },
          {
            "t": "op",
            "s": "-"
          },
          {
            "t": "op",
            "s": ">"
          },
          {
            "t": "fn",
            "s": "getId"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 206,
        "text": "                throw runtime_error(\"Patient with ID \" + patient->getId() + \" already exists.\");",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "throw"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "runtime_error"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "str",
            "s": "\"Patient with ID \""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patient"
          },
          {
            "t": "op",
            "s": "-"
          },
          {
            "t": "op",
            "s": ">"
          },
          {
            "t": "fn",
            "s": "getId"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\" already exists.\""
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 207,
        "text": "            }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 208,
        "text": "        }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 209,
        "text": "        patients.push_back(patient);",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patients"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "push_back"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "patient"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 210,
        "text": "    }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 211,
        "text": "",
        "tokens": []
      },
      {
        "num": 212,
        "text": "    string bookAppointment(const string& patId, const string& docId, const string& date, const string& timeSlot) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "bookAppointment"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patId"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "docId"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "date"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "timeSlot"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 213,
        "text": "        // Validate patient existence",
        "tokens": [
          {
            "t": "cmt",
            "s": "        // Validate patient existence"
          }
        ]
      },
      {
        "num": 214,
        "text": "        bool patientFound = false;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "bool"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patientFound"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "false"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 215,
        "text": "        for (const auto& p : patients) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "for"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "auto"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "p"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patients"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 216,
        "text": "            if (p->getId() == patId) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "if"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "p"
          },
          {
            "t": "op",
            "s": "-"
          },
          {
            "t": "op",
            "s": ">"
          },
          {
            "t": "fn",
            "s": "getId"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patId"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 217,
        "text": "                patientFound = true;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patientFound"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "true"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 218,
        "text": "                break;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "break"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 219,
        "text": "            }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 220,
        "text": "        }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 221,
        "text": "        if (!patientFound) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "if"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": "!"
          },
          {
            "t": "id",
            "s": "patientFound"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 222,
        "text": "            throw runtime_error(\"Booking failed: Patient ID \" + patId + \" not found.\");",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "throw"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "runtime_error"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "str",
            "s": "\"Booking failed: Patient ID \""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patId"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\" not found.\""
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 223,
        "text": "        }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 224,
        "text": "",
        "tokens": []
      },
      {
        "num": 225,
        "text": "        // Validate doctor existence and availability",
        "tokens": [
          {
            "t": "cmt",
            "s": "        // Validate doctor existence and availability"
          }
        ]
      },
      {
        "num": 226,
        "text": "        bool doctorFound = false;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "bool"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "doctorFound"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "false"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 227,
        "text": "        bool doctorAvailable = false;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "bool"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "doctorAvailable"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "false"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 228,
        "text": "        for (const auto& d : doctors) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "for"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "auto"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "d"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "doctors"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 229,
        "text": "            if (d.getId() == docId) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "if"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "d"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "getId"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "docId"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 230,
        "text": "                doctorFound = true;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "doctorFound"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "true"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 231,
        "text": "                doctorAvailable = d.getAvailability();",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "doctorAvailable"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "d"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "getAvailability"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 232,
        "text": "                break;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "break"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 233,
        "text": "            }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 234,
        "text": "        }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 235,
        "text": "        if (!doctorFound) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "if"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": "!"
          },
          {
            "t": "id",
            "s": "doctorFound"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 236,
        "text": "            throw runtime_error(\"Booking failed: Doctor ID \" + docId + \" not found.\");",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "throw"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "runtime_error"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "str",
            "s": "\"Booking failed: Doctor ID \""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "docId"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\" not found.\""
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 237,
        "text": "        }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 238,
        "text": "        if (!doctorAvailable) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "if"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": "!"
          },
          {
            "t": "id",
            "s": "doctorAvailable"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 239,
        "text": "            throw runtime_error(\"Booking failed: Doctor is currently marked as Unavailable.\");",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "throw"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "runtime_error"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "str",
            "s": "\"Booking failed: Doctor is currently marked as Unavailable.\""
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 240,
        "text": "        }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 241,
        "text": "",
        "tokens": []
      },
      {
        "num": 242,
        "text": "        // Prevent duplicate doctor/date/time slots",
        "tokens": [
          {
            "t": "cmt",
            "s": "        // Prevent duplicate doctor/date/time slots"
          }
        ]
      },
      {
        "num": 243,
        "text": "        for (const auto& a : appointments) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "for"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "auto"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "a"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "appointments"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 244,
        "text": "            if (a.getDoctorId() == docId && a.getDate() == date && a.getTimeSlot() == timeSlot) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "if"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "a"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "getDoctorId"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "docId"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "a"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "getDate"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "date"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "a"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "getTimeSlot"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "timeSlot"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 245,
        "text": "                throw runtime_error(\"Booking conflict: Doctor already has an appointment at \" + timeSlot + \" on \" + date + \".\");",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "throw"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "runtime_error"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "str",
            "s": "\"Booking conflict: Doctor already has an appointment at \""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "timeSlot"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\" on \""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "date"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\".\""
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 246,
        "text": "            }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 247,
        "text": "        }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 248,
        "text": "",
        "tokens": []
      },
      {
        "num": 249,
        "text": "        string apptId = \"APT-\" + to_string(nextApptCounter++);",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "apptId"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"APT-\""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "to_string"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "nextApptCounter"
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 250,
        "text": "        appointments.emplace_back(apptId, patId, docId, date, timeSlot);",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "appointments"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "emplace_back"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "apptId"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patId"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "docId"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "date"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "timeSlot"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 251,
        "text": "        return apptId;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "apptId"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 252,
        "text": "    }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 253,
        "text": "",
        "tokens": []
      },
      {
        "num": 254,
        "text": "    double generateBill(const string& apptId) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "double"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "generateBill"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "string"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "apptId"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 255,
        "text": "        Appointment* targetAppt = nullptr;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "Appointment"
          },
          {
            "t": "op",
            "s": "*"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "targetAppt"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "nullptr"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 256,
        "text": "        for (auto& a : appointments) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "for"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "auto"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "a"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "appointments"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 257,
        "text": "            if (a.getAppointmentId() == apptId) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "if"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "a"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "getAppointmentId"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "apptId"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 258,
        "text": "                targetAppt = &a;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "targetAppt"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "id",
            "s": "a"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 259,
        "text": "                break;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "break"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 260,
        "text": "            }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 261,
        "text": "        }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 262,
        "text": "",
        "tokens": []
      },
      {
        "num": 263,
        "text": "        if (!targetAppt) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "if"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": "!"
          },
          {
            "t": "id",
            "s": "targetAppt"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 264,
        "text": "            throw runtime_error(\"Bill generation failed: Appointment ID \" + apptId + \" not found.\");",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "throw"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "runtime_error"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "str",
            "s": "\"Bill generation failed: Appointment ID \""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "apptId"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "+"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\" not found.\""
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 265,
        "text": "        }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 266,
        "text": "        if (targetAppt->getIsBilled()) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "if"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "targetAppt"
          },
          {
            "t": "op",
            "s": "-"
          },
          {
            "t": "op",
            "s": ">"
          },
          {
            "t": "fn",
            "s": "getIsBilled"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 267,
        "text": "            throw runtime_error(\"Bill generation failed: Appointment already billed.\");",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "throw"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "runtime_error"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "str",
            "s": "\"Bill generation failed: Appointment already billed.\""
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 268,
        "text": "        }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 269,
        "text": "",
        "tokens": []
      },
      {
        "num": 270,
        "text": "        // Find patient and compute polymorphic bill",
        "tokens": [
          {
            "t": "cmt",
            "s": "        // Find patient and compute polymorphic bill"
          }
        ]
      },
      {
        "num": 271,
        "text": "        for (const auto& p : patients) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "for"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "auto"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "p"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": ":"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patients"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 272,
        "text": "            if (p->getId() == targetAppt->getPatientId()) {",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "if"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "p"
          },
          {
            "t": "op",
            "s": "-"
          },
          {
            "t": "op",
            "s": ">"
          },
          {
            "t": "fn",
            "s": "getId"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "targetAppt"
          },
          {
            "t": "op",
            "s": "-"
          },
          {
            "t": "op",
            "s": ">"
          },
          {
            "t": "fn",
            "s": "getPatientId"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 273,
        "text": "                double amount = p->calculateBill(); // Polymorphic dispatch",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "double"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "amount"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "="
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "p"
          },
          {
            "t": "op",
            "s": "-"
          },
          {
            "t": "op",
            "s": ">"
          },
          {
            "t": "fn",
            "s": "calculateBill"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "cmt",
            "s": "// Polymorphic dispatch"
          }
        ]
      },
      {
        "num": 274,
        "text": "                targetAppt->markBilled(amount);",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "targetAppt"
          },
          {
            "t": "op",
            "s": "-"
          },
          {
            "t": "op",
            "s": ">"
          },
          {
            "t": "fn",
            "s": "markBilled"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "id",
            "s": "amount"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 275,
        "text": "                return amount;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "amount"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 276,
        "text": "            }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 277,
        "text": "        }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 278,
        "text": "",
        "tokens": []
      },
      {
        "num": 279,
        "text": "        throw runtime_error(\"Bill generation failed: Associated patient record missing.\");",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "throw"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "runtime_error"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "str",
            "s": "\"Bill generation failed: Associated patient record missing.\""
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 280,
        "text": "    }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 281,
        "text": "",
        "tokens": []
      },
      {
        "num": 282,
        "text": "    const vector<Doctor>& getDoctors() const { return doctors; }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "vector<Doctor>"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "getDoctors"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "doctors"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 283,
        "text": "    const vector<shared_ptr<Patient>>& getPatients() const { return patients; }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "vector<shared_ptr<Patient>>"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "getPatients"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "patients"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 284,
        "text": "    const vector<Appointment>& getAppointments() const { return appointments; }",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "vector<Appointment>"
          },
          {
            "t": "op",
            "s": "&"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "getAppointments"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "const"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "appointments"
          },
          {
            "t": "op",
            "s": ";"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 285,
        "text": "};",
        "tokens": [
          {
            "t": "op",
            "s": "}"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 286,
        "text": "",
        "tokens": []
      }
    ]
  },
  {
    "id": "main-menu",
    "title": "7. Main Menu",
    "oopConcept": "Program Controller & Driver",
    "description": "Initializes hospital state, seeds sample records, and prints academic demonstration overview.",
    "startLine": 287,
    "endLine": 314,
    "lines": [
      {
        "num": 287,
        "text": "// ==========================================",
        "tokens": [
          {
            "t": "cmt",
            "s": "// =========================================="
          }
        ]
      },
      {
        "num": 288,
        "text": "// 7. MAIN MENU (Interactive Driver Program)",
        "tokens": [
          {
            "t": "cmt",
            "s": "// 7. MAIN MENU (Interactive Driver Program)"
          }
        ]
      },
      {
        "num": 289,
        "text": "// ==========================================",
        "tokens": [
          {
            "t": "cmt",
            "s": "// =========================================="
          }
        ]
      },
      {
        "num": 290,
        "text": "int main() {",
        "tokens": [
          {
            "t": "kw",
            "s": "int"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "fn",
            "s": "main"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "{"
          }
        ]
      },
      {
        "num": 291,
        "text": "    HospitalSystem hospital;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "tp",
            "s": "HospitalSystem"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "hospital"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 292,
        "text": "",
        "tokens": []
      },
      {
        "num": 293,
        "text": "    // Seed default sample data for academic demonstration",
        "tokens": [
          {
            "t": "cmt",
            "s": "    // Seed default sample data for academic demonstration"
          }
        ]
      },
      {
        "num": 294,
        "text": "    hospital.addDoctor(Doctor(\"DOC-101\", \"Dr. Sarah Sharma\", 42, \"Cardiology\", true));",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "hospital"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "addDoctor"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "tp",
            "s": "Doctor"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "str",
            "s": "\"DOC-101\""
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"Dr. Sarah Sharma\""
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "num",
            "s": "42"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"Cardiology\""
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "true"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 295,
        "text": "    hospital.addDoctor(Doctor(\"DOC-102\", \"Dr. Rajesh Rao\", 48, \"Neurology\", true));",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "hospital"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "addDoctor"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "tp",
            "s": "Doctor"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "str",
            "s": "\"DOC-102\""
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"Dr. Rajesh Rao\""
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "num",
            "s": "48"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"Neurology\""
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "true"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 296,
        "text": "    hospital.addDoctor(Doctor(\"DOC-103\", \"Dr. Anita Desai\", 36, \"Pediatrics\", false));",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "hospital"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "addDoctor"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "tp",
            "s": "Doctor"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "str",
            "s": "\"DOC-103\""
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"Dr. Anita Desai\""
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "num",
            "s": "36"
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"Pediatrics\""
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "false"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 297,
        "text": "",
        "tokens": []
      },
      {
        "num": 298,
        "text": "    hospital.registerPatient(make_shared<GeneralPatient>(\"PAT-201\", \"Aakash Patel\", 34));",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "hospital"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "registerPatient"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "make_shared"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "id",
            "s": "GeneralPatient>"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "str",
            "s": "\"PAT-201\""
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"Aakash Patel\""
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "num",
            "s": "34"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 299,
        "text": "    hospital.registerPatient(make_shared<SeniorPatient>(\"PAT-202\", \"Savitri Devi\", 68));",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "hospital"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "registerPatient"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "make_shared"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "id",
            "s": "SeniorPatient>"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "str",
            "s": "\"PAT-202\""
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"Savitri Devi\""
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "num",
            "s": "68"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 300,
        "text": "    hospital.registerPatient(make_shared<EmergencyPatient>(\"PAT-203\", \"Rohan Mehta\", 27));",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "hospital"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "registerPatient"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "kw",
            "s": "make_shared"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "id",
            "s": "EmergencyPatient>"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "str",
            "s": "\"PAT-203\""
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"Rohan Mehta\""
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "num",
            "s": "27"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 301,
        "text": "",
        "tokens": []
      },
      {
        "num": 302,
        "text": "    hospital.bookAppointment(\"PAT-201\", \"DOC-101\", \"2026-10-25\", \"10:00 AM\");",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "hospital"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "bookAppointment"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "str",
            "s": "\"PAT-201\""
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"DOC-101\""
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"2026-10-25\""
          },
          {
            "t": "op",
            "s": ","
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"10:00 AM\""
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 303,
        "text": "",
        "tokens": []
      },
      {
        "num": 304,
        "text": "    cout << \"======================================================\" << endl;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "cout"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"======================================================\""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "endl"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 305,
        "text": "    cout << \"   CarePulse - Hospital Management & C++ Simulator    \" << endl;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "cout"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"   CarePulse - Hospital Management & C++ Simulator    \""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "endl"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 306,
        "text": "    cout << \"======================================================\" << endl;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "cout"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"======================================================\""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "endl"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 307,
        "text": "    cout << \"Hospital system initialized with default OOP records.\" << endl;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "cout"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"Hospital system initialized with default OOP records.\""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "endl"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 308,
        "text": "    cout << \"Doctors: \" << hospital.getDoctors().size()",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "cout"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\"Doctors: \""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "hospital"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "getDoctors"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "id",
            "s": "size"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          }
        ]
      },
      {
        "num": 309,
        "text": "         << \" | Patients: \" << hospital.getPatients().size()",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\" | Patients: \""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "hospital"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "getPatients"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "id",
            "s": "size"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          }
        ]
      },
      {
        "num": 310,
        "text": "         << \" | Appointments: \" << hospital.getAppointments().size() << endl;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "str",
            "s": "\" | Appointments: \""
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "hospital"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "fn",
            "s": "getAppointments"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": "."
          },
          {
            "t": "id",
            "s": "size"
          },
          {
            "t": "op",
            "s": "("
          },
          {
            "t": "op",
            "s": ")"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": "<"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "id",
            "s": "endl"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 311,
        "text": "",
        "tokens": []
      },
      {
        "num": 312,
        "text": "    return 0;",
        "tokens": [
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "kw",
            "s": "return"
          },
          {
            "t": "op",
            "s": " "
          },
          {
            "t": "num",
            "s": "0"
          },
          {
            "t": "op",
            "s": ";"
          }
        ]
      },
      {
        "num": 313,
        "text": "}",
        "tokens": [
          {
            "t": "op",
            "s": "}"
          }
        ]
      },
      {
        "num": 314,
        "text": "",
        "tokens": []
      }
    ]
  }
];


// Rich Explanations Mapped to Exact carepulse_system.cpp Lines & OOP Concepts
const EXPLANATIONS_DB = {
  "person-constructor": {
    sectionId: "person-class",
    highlightLine: 21,
    selectedCode: `Person(string personId, string personName, int personAge)\n    : id(personId), name(personName), age(personAge) {}`,
    whatItDoes: "Initializes a Person object using a member initializer list to bind the person's unique identifier, full name, and age upon creation.",
    whyItMatters: "Member initializer lists are faster and safer than body assignments in C++. It guarantees immutable initialization before any constructor body execution, avoiding default construction overhead.",
    oopConcept: "Constructors & Member Initialization",
    oopConceptBadge: "Encapsulation",
    whereUsed: "Base foundation for both Doctor and Patient entities across the hospital registry.",
    simFeatureTarget: "patients",
    practicalExample: `Person p1("ID-99", "Tejal Aher", 21);\ncout << p1.getName(); // Output: Tejal Aher`,
    deepDive: "In C++, initialization lists directly call the member type constructors. For protected members like id, this guarantees consistent encapsulation while allowing derived classes (Doctor, Patient) to reuse the initialization logic cleanly."
  },
  "doctor-class": {
    sectionId: "doctor-class",
    highlightLine: 40,
    selectedCode: `class Doctor : public Person {\nprivate:\n    string specialization;\n    bool isAvailable;\n...\nDoctor(string docId, string docName, int docAge, string spec, bool avail = true)\n    : Person(docId, docName, docAge), specialization(spec), isAvailable(avail) {}`,
    whatItDoes: "Derives Doctor from the Person base class, adding doctor-specific attributes like medical specialization and availability status.",
    whyItMatters: "Demonstrates code reuse via Single Inheritance. The Doctor class inherits id, name, and age from Person without duplicating code, while adding private attributes.",
    oopConcept: "Single Inheritance",
    oopConceptBadge: "Inheritance",
    whereUsed: "Hospital Doctors Management Screen and Doctor Availability status toggle.",
    simFeatureTarget: "doctors",
    practicalExample: `Doctor d1("DOC-101", "Dr. Sarah Sharma", 42, "Cardiology", true);\nd1.setAvailability(false); // Doctor becomes unavailable for bookings`,
    deepDive: "Public inheritance represents an 'IS-A' relationship. A Doctor IS-A Person. All public/protected members of Person remain accessible according to inheritance access specifiers."
  },
  "patient-abstract": {
    sectionId: "patient-class",
    highlightLine: 68,
    selectedCode: `virtual string getCategory() const = 0;   // Pure virtual function\nvirtual double calculateBill() const = 0; // Polymorphic bill calculation`,
    whatItDoes: "Declares pure virtual functions = 0, making Patient an Abstract Base Class that cannot be instantiated directly without concrete derived categories.",
    whyItMatters: "Enforces a contract on all hospital patient types (General, Senior, Emergency) so each category MUST implement its own custom billing and categorization logic.",
    oopConcept: "Abstract Classes & Pure Virtual Functions",
    oopConceptBadge: "Polymorphism",
    whereUsed: "Used by the Hospital Billing Engine to polymorphically calculate fees without knowing concrete patient sub-types at compile time.",
    simFeatureTarget: "billing",
    practicalExample: `// Patient p; // COMPILE ERROR: Cannot instantiate abstract class!\nshared_ptr<Patient> p = make_shared<GeneralPatient>("PAT-201", "Aakash", 34); // OK!`,
    deepDive: "When a class has at least one pure virtual function, the C++ compiler builds a vtable (virtual method table) with null pointers for pure entries, preventing direct object allocation."
  },
  "patient-senior": {
    sectionId: "patient-categories",
    highlightLine: 98,
    selectedCode: `if (patAge < 60) {\n    throw invalid_argument("Senior patient must be 60 years or older.");\n}\n...\ndouble calculateBill() const override {\n    return 500.0 * 0.90; // 10% Senior Discount -> ₹450\n}`,
    whatItDoes: "Validates minimum age eligibility (>= 60) throwing an exception on invalid data, and overrides calculateBill() to provide an academic 10% senior concession.",
    whyItMatters: "Combines business rule validation with runtime polymorphism. Senior patients automatically receive discounted billing across the hospital system.",
    oopConcept: "Polymorphic Method Overriding & Validation",
    oopConceptBadge: "Polymorphism",
    whereUsed: "Patient Registration Modal (Senior category validation) and Billing computation.",
    simFeatureTarget: "patients",
    practicalExample: `SeniorPatient sp("PAT-202", "Savitri Devi", 68);\ncout << "Fee: ₹" << sp.calculateBill(); // Output: Fee: ₹450.00`,
    deepDive: "Dynamic dispatch via virtual tables ensures that when a Patient* pointer invokes calculateBill(), the SeniorPatient implementation is resolved at runtime."
  },
  "appointment-slot": {
    sectionId: "appointment-class",
    highlightLine: 153,
    selectedCode: `void markBilled(double amount) {\n    if (isBilled) {\n        throw runtime_error("Appointment " + appointmentId + " is already billed.");\n    }\n    isBilled = true;\n    billedAmount = amount;\n}`,
    whatItDoes: "Protects appointment billing integrity by asserting that an appointment can only be billed once, preventing double billing anomalies.",
    whyItMatters: "Demonstrates state encapsulation and business invariant protection through exception safety.",
    oopConcept: "Encapsulation & Exception Safety",
    oopConceptBadge: "Encapsulation",
    whereUsed: "Billing Screen when an appointment is selected and invoice generated.",
    simFeatureTarget: "billing",
    practicalExample: `appt.markBilled(450.0); // Marks billed\n// appt.markBilled(450.0); // Throws runtime_error: Appointment already billed!`,
    deepDive: "Encapsulation ensures that external callers cannot directly modify isBilled = false or tamper with billedAmount from outside the class."
  },
  "hospital-conflict": {
    sectionId: "hospital-system",
    highlightLine: 243,
    selectedCode: `for (const auto& a : appointments) {\n    if (a.getDoctorId() == docId && a.getDate() == date && a.getTimeSlot() == timeSlot) {\n        throw runtime_error("Booking conflict: Doctor already has an appointment at " + timeSlot + " on " + date + ".");\n    }\n}`,
    whatItDoes: "Scans active appointments vector to verify slot availability before booking, throwing a runtime exception if a doctor is double booked.",
    whyItMatters: "Centralizes hospital operational invariants and demonstrates how C++ exception handling prevents schedule collisions.",
    oopConcept: "Composition & Exception Handling",
    oopConceptBadge: "Exception Handling",
    whereUsed: "Book Appointment modal and conflict detection trigger.",
    simFeatureTarget: "appointments",
    practicalExample: `try {\n    hospital.bookAppointment("P1", "DOC-101", "2026-10-25", "10:00 AM");\n    hospital.bookAppointment("P2", "DOC-101", "2026-10-25", "10:00 AM"); // Throws!\n} catch (const exception& e) { cout << e.what(); }`,
    deepDive: "Composition allows the HospitalSystem class to manage collections of Doctors, Patients, and Appointments using STL containers with full ownership and lifecycle management."
  },
  "polymorphic-billing": {
    sectionId: "hospital-system",
    highlightLine: 271,
    selectedCode: `for (const auto& p : patients) {\n    if (p->getId() == targetAppt->getPatientId()) {\n        double amount = p->calculateBill(); // Polymorphic dispatch\n        targetAppt->markBilled(amount);\n        return amount;\n    }\n}`,
    whatItDoes: "Invokes calculateBill() on a base Patient* pointer, which dynamically executes GeneralPatient, SeniorPatient, or EmergencyPatient methods.",
    whyItMatters: "This is the classic textbook OOP example of Runtime Polymorphism. The billing function does not need multiple if/else checks for patient types.",
    oopConcept: "Runtime Polymorphism (Virtual Dispatch)",
    oopConceptBadge: "Polymorphism",
    whereUsed: "Billing Screen -> Generate Bill workflow.",
    simFeatureTarget: "billing",
    practicalExample: `shared_ptr<Patient> p = make_shared<EmergencyPatient>("P3", "Rohan", 27);\ndouble bill = p->calculateBill(); // Evaluates to ₹800.00 polymorphically!\n`,
    deepDive: "Virtual function calls have minimal overhead (vptr dereference) and provide the Open/Closed Principle: you can add a PediatricPatient class without touching the billing calculation function!"
  }
};

