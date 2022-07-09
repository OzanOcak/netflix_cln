### https://stackoverflow.com/questions/53237293/react-evironment-variables-env-return-undefined

1. the variable should be prefixed with REACT*APP*

eg: REACT_APP_WEBSITE_NAME=hello

2. You need to restart the server to reflect the changes.

3. Make sure you have the .env file in your root folder(same place where you have your package.json) and NOT in your src folder.
