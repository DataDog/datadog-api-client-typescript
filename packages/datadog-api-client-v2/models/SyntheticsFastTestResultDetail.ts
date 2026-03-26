/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsFastTestResultFailure } from "./SyntheticsFastTestResultFailure";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Detailed result data for the fast test run. The exact shape of nested fields
 * (`request`, `response`, `assertions`, etc.) depends on the test subtype.
 */
export class SyntheticsFastTestResultDetail {
  /**
   * Results of each assertion evaluated during the test.
   */
  "assertions"?: Array<{ [key: string]: any }>;
  /**
   * gRPC call type (for example, `unary`, `healthCheck`, or `reflection`).
   */
  "callType"?: string;
  /**
   * TLS certificate details, present for SSL tests.
   */
  "cert"?: { [key: string]: any };
  /**
   * Total duration of the test in milliseconds.
   */
  "duration"?: number;
  /**
   * Failure details if the fast test did not pass.
   */
  "failure"?: SyntheticsFastTestResultFailure;
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
   * Details of the outgoing request made during the test.
   */
  "request"?: { [key: string]: any };
  /**
   * IP address resolved for the target host.
   */
  "resolvedIp"?: string;
  /**
   * Details of the response received during the test.
   */
  "response"?: { [key: string]: any };
  /**
   * Run type indicating how this test was triggered (for example, `fast`).
   */
  "runType"?: string;
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
  "steps"?: Array<{ [key: string]: any }>;
  /**
   * Timing breakdown of the test request phases (for example, DNS, TCP, TLS, first byte).
   */
  "timings"?: { [key: string]: any };
  /**
   * Traceroute hop results, present for ICMP and TCP tests.
   */
  "traceroute"?: Array<{ [key: string]: any }>;
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
      type: "Array<{ [key: string]: any; }>",
    },
    callType: {
      baseName: "call_type",
      type: "string",
    },
    cert: {
      baseName: "cert",
      type: "{ [key: string]: any; }",
    },
    duration: {
      baseName: "duration",
      type: "number",
      format: "double",
    },
    failure: {
      baseName: "failure",
      type: "SyntheticsFastTestResultFailure",
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
      type: "{ [key: string]: any; }",
    },
    resolvedIp: {
      baseName: "resolved_ip",
      type: "string",
    },
    response: {
      baseName: "response",
      type: "{ [key: string]: any; }",
    },
    runType: {
      baseName: "run_type",
      type: "string",
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
      type: "Array<{ [key: string]: any; }>",
    },
    timings: {
      baseName: "timings",
      type: "{ [key: string]: any; }",
    },
    traceroute: {
      baseName: "traceroute",
      type: "Array<{ [key: string]: any; }>",
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
