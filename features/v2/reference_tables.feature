@endpoint(reference-tables) @endpoint(reference-tables-v2)
Feature: Reference Tables
  View and manage Reference Tables in your organization.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "ReferenceTables" API

  @generated @skip
  Scenario: Batch rows query returns "Bad Request" response
    Given new "BatchRowsQuery" request
    And body with value {"data": {"attributes": {"row_ids": ["row_id_1", "row_id_2"], "table_id": "00000000-0000-0000-0000-000000000000"}, "type": "reference-tables-batch-rows-query"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Batch rows query returns "Not Found" response
    Given new "BatchRowsQuery" request
    And body with value {"data": {"attributes": {"row_ids": ["row_id_1", "row_id_2"], "table_id": "00000000-0000-0000-0000-000000000000"}, "type": "reference-tables-batch-rows-query"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Batch rows query returns "Successfully retrieved rows. Some or all requested rows were found. Response includes found rows in the included section." response
    Given new "BatchRowsQuery" request
    And body with value {"data": {"attributes": {"row_ids": ["row_id_1", "row_id_2"], "table_id": "00000000-0000-0000-0000-000000000000"}, "type": "reference-tables-batch-rows-query"}}
    When the request is sent
    Then the response status is 200 Successfully retrieved rows. Some or all requested rows were found. Response includes found rows in the included section.

  @generated @skip
  Scenario: Create reference table returns "Bad Request" response
    Given new "CreateReferenceTable" request
    And body with value {"data": {"attributes": {"file_metadata": {"access_details": {"aws_detail": {"aws_account_id": "123456789000", "aws_bucket_name": "example-data-bucket", "file_path": "reference-tables/users.csv"}, "azure_detail": {"azure_client_id": "aaaaaaaa-1111-2222-3333-bbbbbbbbbbbb", "azure_container_name": "reference-data", "azure_storage_account_name": "examplestorageaccount", "azure_tenant_id": "cccccccc-4444-5555-6666-dddddddddddd", "file_path": "tables/users.csv"}, "gcp_detail": {"file_path": "data/reference_tables/users.csv", "gcp_bucket_name": "example-data-bucket", "gcp_project_id": "example-gcp-project-12345", "gcp_service_account_email": "example-service@example-gcp-project-12345.iam.gserviceaccount.com"}}, "sync_enabled": false}, "schema": {"fields": [{"name": "field_1", "type": "STRING"}], "primary_keys": ["field_1"]}, "source": "LOCAL_FILE", "table_name": "table_1", "tags": ["tag_1", "tag_2"]}, "type": "reference_table"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create reference table returns "Created" response
    Given new "CreateReferenceTable" request
    And body with value {"data": {"attributes": {"file_metadata": {"access_details": {"aws_detail": {"aws_account_id": "123456789000", "aws_bucket_name": "example-data-bucket", "file_path": "reference-tables/users.csv"}, "azure_detail": {"azure_client_id": "aaaaaaaa-1111-2222-3333-bbbbbbbbbbbb", "azure_container_name": "reference-data", "azure_storage_account_name": "examplestorageaccount", "azure_tenant_id": "cccccccc-4444-5555-6666-dddddddddddd", "file_path": "tables/users.csv"}, "gcp_detail": {"file_path": "data/reference_tables/users.csv", "gcp_bucket_name": "example-data-bucket", "gcp_project_id": "example-gcp-project-12345", "gcp_service_account_email": "example-service@example-gcp-project-12345.iam.gserviceaccount.com"}}, "sync_enabled": false}, "schema": {"fields": [{"name": "field_1", "type": "STRING"}], "primary_keys": ["field_1"]}, "source": "LOCAL_FILE", "table_name": "table_1", "tags": ["tag_1", "tag_2"]}, "type": "reference_table"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Create reference table upload returns "Bad Request" response
    Given new "CreateReferenceTableUpload" request
    And body with value {"data": {"attributes": {"headers": ["product_id", "product_name", "price"], "part_count": 3, "part_size": 10000000, "table_name": "my_products_table"}, "type": "upload"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create reference table upload returns "Created" response
    Given new "CreateReferenceTableUpload" request
    And body with value {"data": {"attributes": {"headers": ["product_id", "product_name", "price"], "part_count": 3, "part_size": 10000000, "table_name": "my_products_table"}, "type": "upload"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Delete rows returns "Bad Request" response
    Given new "DeleteRows" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": [{"id": "primary_key_value", "type": "row"}]}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete rows returns "Not Found" response
    Given new "DeleteRows" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": [{"id": "primary_key_value", "type": "row"}]}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete rows returns "Rows deleted successfully" response
    Given new "DeleteRows" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": [{"id": "primary_key_value", "type": "row"}]}
    When the request is sent
    Then the response status is 200 Rows deleted successfully

  @generated @skip
  Scenario: Delete table returns "Not Found" response
    Given new "DeleteTable" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete table returns "OK" response
    Given new "DeleteTable" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get rows by id returns "Not Found" response
    Given new "GetRowsByID" request
    And request contains "id" parameter from "REPLACE.ME"
    And request contains "row_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get rows by id returns "Some or all requested rows were found." response
    Given new "GetRowsByID" request
    And request contains "id" parameter from "REPLACE.ME"
    And request contains "row_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 Some or all requested rows were found.

  @generated @skip
  Scenario: Get table returns "Not Found" response
    Given new "GetTable" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get table returns "OK" response
    Given new "GetTable" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List tables returns "OK" response
    Given new "ListTables" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update reference table returns "Bad Request" response
    Given new "UpdateReferenceTable" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "this is a cloud table generated via a cloud bucket sync", "file_metadata": {"access_details": {"aws_detail": {"aws_account_id": "test-account-id", "aws_bucket_name": "test-bucket", "file_path": "test_rt.csv"}}, "sync_enabled": true}, "schema": {"fields": [{"name": "id", "type": "INT32"}, {"name": "name", "type": "STRING"}], "primary_keys": ["id"]}, "tags": ["test_tag"]}, "type": "reference_table"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update reference table returns "OK" response
    Given new "UpdateReferenceTable" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "this is a cloud table generated via a cloud bucket sync", "file_metadata": {"access_details": {"aws_detail": {"aws_account_id": "test-account-id", "aws_bucket_name": "test-bucket", "file_path": "test_rt.csv"}}, "sync_enabled": true}, "schema": {"fields": [{"name": "id", "type": "INT32"}, {"name": "name", "type": "STRING"}], "primary_keys": ["id"]}, "tags": ["test_tag"]}, "type": "reference_table"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Upsert rows returns "Bad Request" response
    Given new "UpsertRows" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": [{"attributes": {"values": {}}, "id": "primary_key_value", "type": "row"}]}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Upsert rows returns "Not Found" response
    Given new "UpsertRows" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": [{"attributes": {"values": {}}, "id": "primary_key_value", "type": "row"}]}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Upsert rows returns "Rows created or updated successfully" response
    Given new "UpsertRows" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": [{"attributes": {"values": {}}, "id": "primary_key_value", "type": "row"}]}
    When the request is sent
    Then the response status is 200 Rows created or updated successfully
