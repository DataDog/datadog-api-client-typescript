import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestResultAssertionResult } from "./SyntheticsTestResultAssertionResult";
import { SyntheticsTestResultCertificate } from "./SyntheticsTestResultCertificate";
import { SyntheticsTestResultFailure } from "./SyntheticsTestResultFailure";
import { SyntheticsTestResultRequestInfo } from "./SyntheticsTestResultRequestInfo";
import { SyntheticsTestResultResponseInfo } from "./SyntheticsTestResultResponseInfo";
import { SyntheticsTestResultRunType } from "./SyntheticsTestResultRunType";
import { SyntheticsTestResultStep } from "./SyntheticsTestResultStep";
import { SyntheticsTestResultTracerouteHop } from "./SyntheticsTestResultTracerouteHop";

/**
 * Detailed result data for the fast test run. The exact shape of nested fields
 * (`request`, `response`, `assertions`, etc.) depends on the test subtype.
 */
export class SyntheticsFastTestResultDetail {
  /**
   * Results of each assertion evaluated during the test.
   */
  "assertions"?: Array<SyntheticsTestResultAssertionResult>;
  /**
   * gRPC call type (for example, `unary`, `healthCheck`, or `reflection`).
   */
  "callType"?: string;
  /**
   * SSL/TLS certificate information returned from an SSL test.
   */
  "cert"?: SyntheticsTestResultCertificate;
  /**
   * Total duration of the test in milliseconds.
   */
  "duration"?: number;
  /**
   * Details about the failure of a Synthetic test.
   */
  "failure"?: SyntheticsTestResultFailure;
  /**
   * Unix timestamp (ms) of when the test finished.
   */
  "finishedAt"?: number;
  /**
   * The result ID. Set to the fast test UUID because no persistent result ID exists for fast tests.
   */
  "id"?: string;
  /**
   * Whether this result is from an automatic fast retry.
   */
  "isFastRetry"?: boolean;
  /**
   * Details of the outgoing request made during the test execution.
   */
  "request"?: SyntheticsTestResultRequestInfo;
  /**
   * IP address resolved for the target host.
   */
  "resolvedIp"?: string;
  /**
   * Details of the response received during the test execution.
   */
  "response"?: SyntheticsTestResultResponseInfo;
  /**
   * The type of run for a Synthetic test result.
   */
  "runType"?: SyntheticsTestResultRunType;
  /**
   * Unix timestamp (ms) of when the test started.
   */
  "startedAt"?: number;
  /**
   * Status of the test result (`passed` or `failed`).
   */
  "status"?: string;
  /**
   * Step results for multistep API tests.
   */
  "steps"?: Array<SyntheticsTestResultStep>;
  /**
   * Timing breakdown of the test request phases (for example, DNS, TCP, TLS, first byte).
   */
  "timings"?: { [key: string]: any };
  /**
   * Traceroute hop results, present for ICMP and TCP tests.
   */
  "traceroute"?: Array<SyntheticsTestResultTracerouteHop>;
  /**
   * Unix timestamp (ms) of when the test was triggered.
   */
  "triggeredAt"?: number;
  /**
   * Whether the test was run through a Synthetics tunnel.
   */
  "tunnel"?: boolean;
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
    assertions: {
      baseName: "assertions",
      type: "Array<SyntheticsTestResultAssertionResult>",
    },
    callType: {
      baseName: "call_type",
      type: "string",
    },
    cert: {
      baseName: "cert",
      type: "SyntheticsTestResultCertificate",
    },
    duration: {
      baseName: "duration",
      type: "number",
      format: "double",
    },
    failure: {
      baseName: "failure",
      type: "SyntheticsTestResultFailure",
    },
    finishedAt: {
      baseName: "finished_at",
      type: "number",
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    isFastRetry: {
      baseName: "is_fast_retry",
      type: "boolean",
    },
    request: {
      baseName: "request",
      type: "SyntheticsTestResultRequestInfo",
    },
    resolvedIp: {
      baseName: "resolved_ip",
      type: "string",
    },
    response: {
      baseName: "response",
      type: "SyntheticsTestResultResponseInfo",
    },
    runType: {
      baseName: "run_type",
      type: "SyntheticsTestResultRunType",
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
    steps: {
      baseName: "steps",
      type: "Array<SyntheticsTestResultStep>",
    },
    timings: {
      baseName: "timings",
      type: "{ [key: string]: any; }",
    },
    traceroute: {
      baseName: "traceroute",
      type: "Array<SyntheticsTestResultTracerouteHop>",
    },
    triggeredAt: {
      baseName: "triggered_at",
      type: "number",
      format: "int64",
    },
    tunnel: {
      baseName: "tunnel",
      type: "boolean",
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
    return SyntheticsFastTestResultDetail.attributeTypeMap;
  }

  public constructor() {}
}
