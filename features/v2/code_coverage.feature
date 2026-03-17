@endpoint(code-coverage) @endpoint(code-coverage-v2)
Feature: Code Coverage
  Retrieve and analyze code coverage data from Code Coverage. See the [Code
  Coverage page](https://docs.datadoghq.com/code_coverage/) for more
  information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "CodeCoverage" API

  @generated @skip
  Scenario: Get code coverage summary for a branch returns "Bad Request" response
    Given operation "GetCodeCoverageBranchSummary" enabled
    And new "GetCodeCoverageBranchSummary" request
    And body with value {"data": {"attributes": {"branch": "prod", "repository_id": "github.com/datadog/shopist"}, "type": "ci_app_coverage_branch_summary_request"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get code coverage summary for a branch returns "Not Found" response
    Given operation "GetCodeCoverageBranchSummary" enabled
    And new "GetCodeCoverageBranchSummary" request
    And body with value {"data": {"attributes": {"branch": "prod", "repository_id": "github.com/datadog/shopist"}, "type": "ci_app_coverage_branch_summary_request"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get code coverage summary for a branch returns "OK" response
    Given operation "GetCodeCoverageBranchSummary" enabled
    And new "GetCodeCoverageBranchSummary" request
    And body with value {"data": {"attributes": {"branch": "prod", "repository_id": "github.com/datadog/shopist"}, "type": "ci_app_coverage_branch_summary_request"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get code coverage summary for a commit returns "Bad Request" response
    Given operation "GetCodeCoverageCommitSummary" enabled
    And new "GetCodeCoverageCommitSummary" request
    And body with value {"data": {"attributes": {"commit_sha": "66adc9350f2cc9b250b69abddab733dd55e1a588", "repository_id": "github.com/datadog/shopist"}, "type": "ci_app_coverage_commit_summary_request"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get code coverage summary for a commit returns "Not Found" response
    Given operation "GetCodeCoverageCommitSummary" enabled
    And new "GetCodeCoverageCommitSummary" request
    And body with value {"data": {"attributes": {"commit_sha": "66adc9350f2cc9b250b69abddab733dd55e1a588", "repository_id": "github.com/datadog/shopist"}, "type": "ci_app_coverage_commit_summary_request"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get code coverage summary for a commit returns "OK" response
    Given operation "GetCodeCoverageCommitSummary" enabled
    And new "GetCodeCoverageCommitSummary" request
    And body with value {"data": {"attributes": {"commit_sha": "66adc9350f2cc9b250b69abddab733dd55e1a588", "repository_id": "github.com/datadog/shopist"}, "type": "ci_app_coverage_commit_summary_request"}}
    When the request is sent
    Then the response status is 200 OK
