/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestResultAssertionResult } from "./SyntheticsTestResultAssertionResult";
import { SyntheticsTestResultBounds } from "./SyntheticsTestResultBounds";
import { SyntheticsTestResultBrowserError } from "./SyntheticsTestResultBrowserError";
import { SyntheticsTestResultBucketKeys } from "./SyntheticsTestResultBucketKeys";
import { SyntheticsTestResultCdnResource } from "./SyntheticsTestResultCdnResource";
import { SyntheticsTestResultFailure } from "./SyntheticsTestResultFailure";
import { SyntheticsTestResultRequestInfo } from "./SyntheticsTestResultRequestInfo";
import { SyntheticsTestResultResponseInfo } from "./SyntheticsTestResultResponseInfo";
import { SyntheticsTestResultRumContext } from "./SyntheticsTestResultRumContext";
import { SyntheticsTestResultStepAssertionResult } from "./SyntheticsTestResultStepAssertionResult";
import { SyntheticsTestResultStepElementUpdates } from "./SyntheticsTestResultStepElementUpdates";
import { SyntheticsTestResultSubStep } from "./SyntheticsTestResultSubStep";
import { SyntheticsTestResultSubTest } from "./SyntheticsTestResultSubTest";
import { SyntheticsTestResultTab } from "./SyntheticsTestResultTab";
import { SyntheticsTestResultVariable } from "./SyntheticsTestResultVariable";
import { SyntheticsTestResultVariables } from "./SyntheticsTestResultVariables";
import { SyntheticsTestResultVitalsMetrics } from "./SyntheticsTestResultVitalsMetrics";
import { SyntheticsTestResultWarning } from "./SyntheticsTestResultWarning";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A step result from a browser, mobile, or multistep API test.
 */
export class SyntheticsTestResultStep {
  /**
   * Whether the test continues when this step fails.
   */
  "allowFailure"?: boolean;
  /**
   * Inner API test definition for browser `runApiTest` steps.
   */
  "apiTest"?: { [key: string]: any };
  /**
   * Assertion result for a browser or mobile step.
   */
  "assertionResult"?: SyntheticsTestResultStepAssertionResult;
  /**
   * Assertion results produced by the step.
   */
  "assertions"?: Array<SyntheticsTestResultAssertionResult>;
  /**
   * URLs of requests blocked during the step.
   */
  "blockedRequestsUrls"?: Array<string>;
  /**
   * Bounding box of an element on the page.
   */
  "bounds"?: SyntheticsTestResultBounds;
  /**
   * Browser errors captured during the step.
   */
  "browserErrors"?: Array<SyntheticsTestResultBrowserError>;
  /**
   * Storage bucket keys for artifacts produced during a step or test.
   */
  "bucketKeys"?: SyntheticsTestResultBucketKeys;
  /**
   * CDN resources encountered during the step.
   */
  "cdnResources"?: Array<SyntheticsTestResultCdnResource>;
  /**
   * Click type performed in a browser step.
   */
  "clickType"?: string;
  /**
   * Compressed JSON descriptor for the step (internal format).
   */
  "compressedJsonDescriptor"?: string;
  /**
   * Request configuration executed by this step (API test steps).
   */
  "config"?: { [key: string]: any };
  /**
   * Human-readable description of the step.
   */
  "description"?: string;
  /**
   * Duration of the step in milliseconds.
   */
  "duration"?: number;
  /**
   * Description of the element interacted with by the step.
   */
  "elementDescription"?: string;
  /**
   * Element locator updates produced during a step.
   */
  "elementUpdates"?: SyntheticsTestResultStepElementUpdates;
  /**
   * A variable used or extracted during a test.
   */
  "extractedValue"?: SyntheticsTestResultVariable;
  /**
   * Details about the failure of a Synthetic test.
   */
  "failure"?: SyntheticsTestResultFailure;
  /**
   * HTTP results produced by an MCP step.
   */
  "httpResults"?: Array<SyntheticsTestResultAssertionResult>;
  /**
   * Identifier of the step.
   */
  "id"?: string;
  /**
   * Whether this step is critical for the test outcome.
   */
  "isCritical"?: boolean;
  /**
   * Whether the step uses a custom JavaScript assertion.
   */
  "javascriptCustomAssertionCode"?: boolean;
  /**
   * Time taken to locate the element in milliseconds.
   */
  "locateElementDuration"?: number;
  /**
   * Name of the step.
   */
  "name"?: string;
  /**
   * Details of the outgoing request made during the test execution.
   */
  "request"?: SyntheticsTestResultRequestInfo;
  /**
   * Details of the response received during the test execution.
   */
  "response"?: SyntheticsTestResultResponseInfo;
  /**
   * Retry results for the step.
   */
  "retries"?: Array<SyntheticsTestResultStep>;
  /**
   * Number of times this step was retried.
   */
  "retryCount"?: number;
  /**
   * RUM application context associated with a step or sub-test.
   */
  "rumContext"?: SyntheticsTestResultRumContext;
  /**
   * Unix timestamp (ms) of when the step started.
   */
  "startedAt"?: number;
  /**
   * Status of the step (for example, `passed`, `failed`).
   */
  "status"?: string;
  /**
   * Information about a sub-step in a nested test execution.
   */
  "subStep"?: SyntheticsTestResultSubStep;
  /**
   * Information about a sub-test played from a parent browser test.
   */
  "subTest"?: SyntheticsTestResultSubTest;
  /**
   * Subtype of the step.
   */
  "subtype"?: string;
  /**
   * Browser tabs involved in the step.
   */
  "tabs"?: Array<SyntheticsTestResultTab>;
  /**
   * Timing breakdown of the step execution.
   */
  "timings"?: { [key: string]: any };
  /**
   * Whether the step was executed through a Synthetics tunnel.
   */
  "tunnel"?: boolean;
  /**
   * Type of the step (for example, `click`, `assertElementContent`, `runApiTest`).
   */
  "type"?: string;
  /**
   * URL associated with the step (for navigation steps).
   */
  "url"?: string;
  /**
   * Step value. Its type depends on the step type.
   */
  "value"?: any;
  /**
   * Variables captured during a test step.
   */
  "variables"?: SyntheticsTestResultVariables;
  /**
   * Web vitals metrics captured during the step.
   */
  "vitalsMetrics"?: Array<SyntheticsTestResultVitalsMetrics>;
  /**
   * Warnings emitted during the step.
   */
  "warnings"?: Array<SyntheticsTestResultWarning>;

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
    allowFailure: {
      baseName: "allow_failure",
      type: "boolean",
    },
    apiTest: {
      baseName: "api_test",
      type: "{ [key: string]: any; }",
    },
    assertionResult: {
      baseName: "assertion_result",
      type: "SyntheticsTestResultStepAssertionResult",
    },
    assertions: {
      baseName: "assertions",
      type: "Array<SyntheticsTestResultAssertionResult>",
    },
    blockedRequestsUrls: {
      baseName: "blocked_requests_urls",
      type: "Array<string>",
    },
    bounds: {
      baseName: "bounds",
      type: "SyntheticsTestResultBounds",
    },
    browserErrors: {
      baseName: "browser_errors",
      type: "Array<SyntheticsTestResultBrowserError>",
    },
    bucketKeys: {
      baseName: "bucket_keys",
      type: "SyntheticsTestResultBucketKeys",
    },
    cdnResources: {
      baseName: "cdn_resources",
      type: "Array<SyntheticsTestResultCdnResource>",
    },
    clickType: {
      baseName: "click_type",
      type: "string",
    },
    compressedJsonDescriptor: {
      baseName: "compressed_json_descriptor",
      type: "string",
    },
    config: {
      baseName: "config",
      type: "{ [key: string]: any; }",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    duration: {
      baseName: "duration",
      type: "number",
      format: "double",
    },
    elementDescription: {
      baseName: "element_description",
      type: "string",
    },
    elementUpdates: {
      baseName: "element_updates",
      type: "SyntheticsTestResultStepElementUpdates",
    },
    extractedValue: {
      baseName: "extracted_value",
      type: "SyntheticsTestResultVariable",
    },
    failure: {
      baseName: "failure",
      type: "SyntheticsTestResultFailure",
    },
    httpResults: {
      baseName: "http_results",
      type: "Array<SyntheticsTestResultAssertionResult>",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    isCritical: {
      baseName: "is_critical",
      type: "boolean",
    },
    javascriptCustomAssertionCode: {
      baseName: "javascript_custom_assertion_code",
      type: "boolean",
    },
    locateElementDuration: {
      baseName: "locate_element_duration",
      type: "number",
      format: "double",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    request: {
      baseName: "request",
      type: "SyntheticsTestResultRequestInfo",
    },
    response: {
      baseName: "response",
      type: "SyntheticsTestResultResponseInfo",
    },
    retries: {
      baseName: "retries",
      type: "Array<SyntheticsTestResultStep>",
    },
    retryCount: {
      baseName: "retry_count",
      type: "number",
      format: "int64",
    },
    rumContext: {
      baseName: "rum_context",
      type: "SyntheticsTestResultRumContext",
    },
    startedAt: {
      baseName: "started_at",
      type: "number",
      format: "int64",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    subStep: {
      baseName: "sub_step",
      type: "SyntheticsTestResultSubStep",
    },
    subTest: {
      baseName: "sub_test",
      type: "SyntheticsTestResultSubTest",
    },
    subtype: {
      baseName: "subtype",
      type: "string",
    },
    tabs: {
      baseName: "tabs",
      type: "Array<SyntheticsTestResultTab>",
    },
    timings: {
      baseName: "timings",
      type: "{ [key: string]: any; }",
    },
    tunnel: {
      baseName: "tunnel",
      type: "boolean",
    },
    type: {
      baseName: "type",
      type: "string",
    },
    url: {
      baseName: "url",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "any",
    },
    variables: {
      baseName: "variables",
      type: "SyntheticsTestResultVariables",
    },
    vitalsMetrics: {
      baseName: "vitals_metrics",
      type: "Array<SyntheticsTestResultVitalsMetrics>",
    },
    warnings: {
      baseName: "warnings",
      type: "Array<SyntheticsTestResultWarning>",
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
    return SyntheticsTestResultStep.attributeTypeMap;
  }

  public constructor() {}
}
