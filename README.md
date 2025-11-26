.NET Commands:

- create project: dotnet new webapi -n TaskApi

- Add Entity Framework(if using a database, it's the nuggets):
  dotnet add package Microsoft.EntityFrameworkCore.SqlServer
  dotnet add package Microsoft.EntityFrameworkCore.Tools
  dotnet add package Microsoft.EntityFrameworkCore.Design
  dotnet add package Microsoft.EntityFrameworkCore
  I used version 9

- Migrations (if using EF):
  dotnet ef migrations add Init
  dotnet ef database update

Angular Commands:
  - Create angular project: ng new tasks-app
  - Serve the project: ng serve
  - Generate components: ng generate component TaskItemComponent --skip-tests
  - Generate service: ng g s services/task --skip-tests
  - Install Angular packages (if not already): npm install

    
