#!/bin/bash

API="http://localhost:4741"
URL_PATH="/sprint"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "sprint": {
      "name": "'"${NAME}"'",
      "timeframe": "'"${TIMEFRAME}"'",
      "objectives": "'"${OBJECTIVES}"'"
    }
  }'

echo
