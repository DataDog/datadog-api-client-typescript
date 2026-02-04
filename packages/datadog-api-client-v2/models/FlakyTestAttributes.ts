/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FlakyTestAttributesFlakyState } from "./FlakyTestAttributesFlakyState";
import { FlakyTestHistory } from "./FlakyTestHistory";
import { FlakyTestPipelineStats } from "./FlakyTestPipelineStats";
import { FlakyTestRunMetadata } from "./FlakyTestRunMetadata";
import { FlakyTestStats } from "./FlakyTestStats";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a flaky test.
 */
export class FlakyTestAttributes {
  /**
   * Unique identifier for the attempt to fix this flaky test. Use this ID in the Git commit message in order to trigger the attempt to fix workflow.
   *
   * When the workflow is triggered the test is automatically retried by the tracer a certain number of configurable times. When all retries pass, the test is automatically marked as fixed in Flaky Test Management.
   * Test runs are tagged with @test.test_management.attempt_to_fix_passed and @test.test_management.is_attempt_to_fix when the attempt to fix workflow is triggered.
   */
  "attemptToFixId"?: string;
  /**
   * The name of the test's code owners as inferred from the repository configuration.
   */
  "codeowners"?: Array<string>;
  /**
   * List of environments where this test has been flaky.
   */
  "envs"?: Array<string>;
  /**
   * The branch name where the test exhibited flakiness for the first time.
   */
  "firstFlakedBranch"?: string;
  /**
   * The commit SHA where the test exhibited flakiness for the first time.
   */
  "firstFlakedSha"?: string;
  /**
   * Unix timestamp when the test exhibited flakiness for the first time.
   */
  "firstFlakedTs"?: number;
  /**
   * The category of a flaky test.
   */
  "flakyCategory"?: string;
  /**
   * The current state of the flaky test.
   */
  "flakyState"?: FlakyTestAttributesFlakyState;
  /**
   * Chronological history of status changes for this flaky test, ordered from most recent to oldest.
   * Includes state transitions like new -> quarantined -> fixed, along with the associated commit SHA when available.
   */
  "history"?: Array<FlakyTestHistory>;
  /**
   * The branch name where the test exhibited flakiness for the last time.
   */
  "lastFlakedBranch"?: string;
  /**
   * The commit SHA where the test exhibited flakiness for the last time.
   */
  "lastFlakedSha"?: string;
  /**
   * Unix timestamp when the test exhibited flakiness for the last time.
   */
  "lastFlakedTs"?: number;
  /**
   * The name of the test module. The definition of module changes slightly per language:
   * - In .NET, a test module groups every test that is run under the same unit test project.
   * - In Swift, a test module groups every test that is run for a given bundle.
   * - In JavaScript, the test modules map one-to-one to test sessions.
   * - In Java, a test module groups every test that is run by the same Maven Surefire/Failsafe or Gradle Test task execution.
   * - In Python, a test module groups every test that is run under the same `.py` file as part of a test suite, which is typically managed by a framework like `unittest` or `pytest`.
   * - In Ruby, a test module groups every test that is run within the same test file, which is typically managed by a framework like `RSpec` or `Minitest`.
   */
  "module"?: string;
  /**
   * The test name. A concise name for a test case. Defined in the test itself.
   */
  "name"?: string;
  /**
   * CI pipeline related statistics for the flaky test. This information is only available if test runs are associated with CI pipeline events from CI Visibility.
   */
  "pipelineStats"?: FlakyTestPipelineStats;
  /**
   * List of test service names where this test has been flaky.
   *
   * A test service is a group of tests associated with a project or repository. It contains all the individual tests for your code, optionally organized into test suites, which are like folders for your tests.
   */
  "services"?: Array<string>;
  /**
   * The name of the test suite. A group of tests exercising the same unit of code depending on your language and testing framework.
   */
  "suite"?: string;
  /**
   * Metadata about the latest failed test run of the flaky test.
   */
  "testRunMetadata"?: FlakyTestRunMetadata;
  /**
   * Test statistics for the flaky test.
   */
  "testStats"?: FlakyTestStats;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attemptToFixId: {
      baseName: "attempt_to_fix_id",
      type: "string",
    },
    codeowners: {
      baseName: "codeowners",
      type: "Array<string>",
    },
    envs: {
      baseName: "envs",
      type: "Array<string>",
    },
    firstFlakedBranch: {
      baseName: "first_flaked_branch",
      type: "string",
    },
    firstFlakedSha: {
      baseName: "first_flaked_sha",
      type: "string",
    },
    firstFlakedTs: {
      baseName: "first_flaked_ts",
      type: "number",
      format: "int64",
    },
    flakyCategory: {
      baseName: "flaky_category",
      type: "string",
    },
    flakyState: {
      baseName: "flaky_state",
      type: "FlakyTestAttributesFlakyState",
    },
    history: {
      baseName: "history",
      type: "Array<FlakyTestHistory>",
    },
    lastFlakedBranch: {
      baseName: "last_flaked_branch",
      type: "string",
    },
    lastFlakedSha: {
      baseName: "last_flaked_sha",
      type: "string",
    },
    lastFlakedTs: {
      baseName: "last_flaked_ts",
      type: "number",
      format: "int64",
    },
    module: {
      baseName: "module",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    pipelineStats: {
      baseName: "pipeline_stats",
      type: "FlakyTestPipelineStats",
    },
    services: {
      baseName: "services",
      type: "Array<string>",
    },
    suite: {
      baseName: "suite",
      type: "string",
    },
    testRunMetadata: {
      baseName: "test_run_metadata",
      type: "FlakyTestRunMetadata",
    },
    testStats: {
      baseName: "test_stats",
      type: "FlakyTestStats",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FlakyTestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
