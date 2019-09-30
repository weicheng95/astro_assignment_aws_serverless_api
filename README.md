
# Astro Reward Assigment
## Introduction
### This assignment using lambda and serverless for API, S3 for static web hosting.
- Backend:  node.js, postgresql, sequelize
- Frontend: vue.js, vue-router, vuex
- cloud services: serverless, lambda, s3, RDS

## Installation - Backend
#### Deploying a serverless REST API with Node.js, AWS Lambda, API Gateway and PostgreSQL

1. Installing the Serverless Framework CLI `npm install -g serverless`
2. use `serverless` command to create a new project.
3. before we get start, go to aws console and find IAM service, add a new user with following role:
> - AmazonRDSFullAccess
> - AWSLambdaFullAccess
> - IAMFullAccess
> - AmazonAPIGatewayAdministrator
4. use this command to setup aws authentication `serverless config credentials --provider aws --key <your_access_key> --secret <your_secret_key>`, this command will create a folder `.aws` and a file  `credentials` in your pc root **[ in mac will be /users/<your_name>/.aws/credentials ]**.
5. create a postgres RDS in your AWS, you can use **pgAdmin** login to your database.
6. I'm using **Sequelize** which is an ORM (Object/Relational Mapper), provides easy access to PostgreSQL databases by mapping database entries to objects.
7. Sequelize do provide cli tool `npm install --save sequelize-cli` to install it.
8. Some common used sequelize cli commands:
    **generate model**
    `sequelize model:generate --name User --attributes name:string,email:string`
    **db migrate**
    `sequelize db:migrate`
    **undo migration**
    `db:migrate:undo:all --to <your_migration_file>.js`
    **generate empty seed file**
    `sequelize seed:generate --name User`
    **run seed**
    `db:seed`
9.	 all source already uploaded to github, feel free to check it https://github.com/weicheng95/astro_assignment_aws_serverless_api


## Description - Backend
this lambda contains three main components, which is rewards, vendor, and uploadfile. 
here are all the endpoints: 

    Root Endpoint: https://no5ywgxhsi.execute-api.ap-southeast-1.amazonaws.com/dev/
    GET /reward/{id}
    GET /rewards
    POST /reward
    PUT /reward
    DELETE /reward/{id}
    POST /reward/redeem
    POST /reward/redeem/check
    GET /rewardtypes
    GET /vendor/{id}
    GET /vendors
    POST /vendor
    PUT /vendor
    DELETE /vendor/{id}
    POST /file

- the difficulty in this part is upload file, aws limit the file size pass as parameter to serverless function which only allow maximum 5mb of file.
- To solve file size problem, I have to use **getSignedUrl** function from **aws-sdk** package to generate an encrypted url, pass it to front-end, and let admin upload file/image through the encrypted link.

## Testing - Backend
1. `npm install serverless-offline`
2. add this to serverless.yaml 
    ````
    plugins: 
     - serverless-offline
    ````

3. run `serverless offline` to deploy locally.

## Installation - Frontend
To boost up the development speed, vue provide cli tool to do configuration for your project.

1. install vue-cli `npm -i -g @vue/cli`
2. create a new project `vue create <your_project_name>`
3. main package using in this project : **eslint, vue-router, vuex, bulma.**
4. Everything is following astro.reward.com.my including UI design, workflow.
5. All static assets are come from astro.reward.com.my, including logo.
6. this project is hosting at aws s3, feel free to check it. http://astro-reward-assignment.s3-website-ap-southeast-1.amazonaws.com
7. to access CMS page, go to this route http://astro-reward-assignment.s3-website-ap-southeast-1.amazonaws.com/Admin
> using below user to login
    ID: 901010055555	accountNumber: 1234567890
    ID: 801010055555	accountNumber: 3333333333
8. source code available at https://github.com/weicheng95/astro_reward_assignment_website


## Conclusion

This assignment is not complete yet due to lack of time. 
Here are some missing features:
    - reward sorting
    - flash sale
    - vendor qrcode generate.
