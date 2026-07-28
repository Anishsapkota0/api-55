# api-55
 
## Backend server side program 
- API (Application Programming Interface)
  - Endpoints (Url -- request receiving endpoints)

## Setup - Server Ready
  - core nodejs
  - Express (framework)

## Node Project 
  - `package.json`

## Dependency / Module / Package / Library / Plugin
  - Managed by package manager. (npm,pnpm,yarn,bun,deno)
  - 3 Types 
    a. Dependency
      - required by current project only
      - Install command (pnpm) `pmpm <i> <packageName>` or `pnpm add <packageName`
    b. Dev Dependency
      - required for the current project but only during the development phase
      - Install command (pnpm) `pmpm <i> <packageName> -D` or `pnpm  i --save-dev <packageName`
    c. Global dependency
      - which is required to all or many projects
      - Install command (pnpm) `pmpm <i> <packageName> -g` or `pnpm i --save-global <packageName`

## CRUD Opwearions
  - Create 
    - post 
  - Read
    - get
  - Update
    - put/patch
  - Delete
   - delete

## HTTP Response
  - Success
    - 2xx -> 200 (OK, success). ,201(CREATED),  204(NO_CONTENT)
  - Redirection
    - 3xx -> 301 (Permanent_Redirect), 302(FOUND), 304(NOT_MODIFIED)
  - client side errors
    - 4xx -> 400(BAD_REQUEST), 401(UNAUTHORIZED), 403(ACCESS_DENIED), 404(NOT_FOUND), 405(METHOD_NOT_ALLOWED), 408(REQUEST_TIMEOUT), 413(TOO_LARGE_CONTENT), 422(UNPROCESSAVLE_ENTITY), 429(TOO_MANY_REQUEST)
  - Server side errors
    - 5xx -> 500(INTERNAL_SERVER_ERROR), 502(BAD_GATEWAY), 503(SERVICE_UNAVAILABLE), 504(GATEWAY_TIMEOUT)

## Solid Principles of software development
  - single Responsibility principle
    - function, class, variables, objects should only have a single responsibility
  - Open-close Principle
    - Open to expansion but close to modification
  - Liskov-Substitute Principle
    - while substuting some service or function, the impact should not be harming
  - Interface - segregation Principle
    - Breakdown or segregate the data interface
  - Dependency Inversion Principle
    - load inversion for the dependency


## Features
- Portfolio Website
  - Auth Features
    - Login
    - Register
    - Activate
    - Forget Password
    - Reset Password
    - Logout
    - Dashboard Access
  
  - Profile
    - CRUD
  
  - banner
  - brand 
  - category
  - product
  - user 
  - order
  - transaction
  - chat

## MVC Pattern 
  - 3 tire architecture
  - Data Layer/ database layer
  - application/logical/business layer
  - Presentation/view layer

- View <====> Request to application Layer <====> Data layer process (Query)
- Reactjs <====> (Nodejs + Expressjs.  API/BE/SERVER) <====> Database (MongoDb, PostgreSQL)
- View <====> controller <====> Model

- JSON (view) <====> BE server 

## Operations
  - create 
    - post
  - Read 
    - get
  - Update 
    - put/patch 
  - Delete
    -delete

