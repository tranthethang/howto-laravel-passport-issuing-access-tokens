API
---
1. Install packages
    ```shell
    composer install
    ```
2. Copy file .env.example => .env
3. Create DB and config DB Connection in .env file.
4. 
    ```shell
    php artisan key:generate
    ```
5. 
    ```shell
    php artisan migrate:refresh --seed
    ```
6. 
    ```shell
    php artisan passport:keys
    ```
7. 
    ```shell    
    php artisan passport:client
    ```
8. 
    ```shell    
    yarn install
    ```
9. 
    ```shell    
    yarn build
    ```
