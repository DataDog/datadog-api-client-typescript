/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestResultAssertionResult } from "./SyntheticsTestResultAssertionResult";
import { SyntheticsTestResultBucketKeys } from "./SyntheticsTestResultBucketKeys";
import { SyntheticsTestResultCertificate } from "./SyntheticsTestResultCertificate";
import { SyntheticsTestResultDnsResolution } from "./SyntheticsTestResultDnsResolution";
import { SyntheticsTestResultFailure } from "./SyntheticsTestResultFailure";
import { SyntheticsTestResultHandshake } from "./SyntheticsTestResultHandshake";
import { SyntheticsTestResultNetpath } from "./SyntheticsTestResultNetpath";
import { SyntheticsTestResultNetstats } from "./SyntheticsTestResultNetstats";
import { SyntheticsTestResultOCSPResponse } from "./SyntheticsTestResultOCSPResponse";
import { SyntheticsTestResultRequestInfo } from "./SyntheticsTestResultRequestInfo";
import { SyntheticsTestResultResponseInfo } from "./SyntheticsTestResultResponseInfo";
import { SyntheticsTestResultRunType } from "./SyntheticsTestResultRunType";
import { SyntheticsTestResultStatus } from "./SyntheticsTestResultStatus";
import { SyntheticsTestResultStep } from "./SyntheticsTestResultStep";
import { SyntheticsTestResultTrace } from "./SyntheticsTestResultTrace";
import { SyntheticsTestResultTracerouteHop } from "./SyntheticsTestResultTracerouteHop";
import { SyntheticsTestResultTurn } from "./SyntheticsTestResultTurn";
import { SyntheticsTestResultVariables } from "./SyntheticsTestResultVariables";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Full result details for a Synthetic test execution.
 */
export class SyntheticsTestResultDetail {
  /**
   * Assertion results produced by the test.
   */
  "assertions"?: Array<SyntheticsTestResultAssertionResult>;
  /**
   * Storage bucket keys for artifacts produced during a step or test.
   */
  "bucketKeys"?: SyntheticsTestResultBucketKeys;
  /**
   * gRPC call type (for example, `unary`, `healthCheck`, or `reflection`).
   */
  "callType"?: string;
  /**
   * SSL/TLS certificate information returned from an SSL test.
   */
  "cert"?: SyntheticsTestResultCertificate;
  /**
   * Compressed JSON descriptor for the test (internal format).
   */
  "compressedJsonDescriptor"?: string;
  /**
   * Compressed representation of the test steps (internal format).
   */
  "compressedSteps"?: string;
  /**
   * Outcome of the connection attempt (for example, `established`, `refused`).
   */
  "connectionOutcome"?: string;
  /**
   * DNS resolution details recorded during the test execution.
   */
  "dnsResolution"?: SyntheticsTestResultDnsResolution;
  /**
   * Duration of the test execution (in milliseconds).
   */
  "duration"?: number;
  /**
   * Whether the test exited early because a step marked with `exitIfSucceed` passed.
   */
  "exitedOnStepSuccess"?: boolean;
  /**
   * Details about the failure of a Synthetic test.
   */
  "failure"?: SyntheticsTestResultFailure;
  /**
   * Timestamp of when the test finished (in milliseconds).
   */
  "finishedAt"?: number;
  /**
   * Handshake request and response for protocol-level tests.
   */
  "handshake"?: SyntheticsTestResultHandshake;
  /**
   * The unique identifier for this result.
   */
  "id"?: string;
  /**
   * The initial result ID before any retries.
   */
  "initialId"?: string;
  /**
   * Whether this result is from a fast retry.
   */
  "isFastRetry"?: boolean;
  /**
   * Whether this result is from the last retry.
   */
  "isLastRetry"?: boolean;
  /**
   * Network Path test result capturing the path between source and destination.
   */
  "netpath"?: SyntheticsTestResultNetpath;
  /**
   * Aggregated network statistics from the test execution.
   */
  "netstats"?: SyntheticsTestResultNetstats;
  /**
   * OCSP response received while validating a certificate.
   */
  "ocsp"?: SyntheticsTestResultOCSPResponse;
  /**
   * A network probe result, used for traceroute hops and ping summaries.
   */
  "ping"?: SyntheticsTestResultTracerouteHop;
  /**
   * Number of emails received during the test (email tests).
   */
  "receivedEmailCount"?: number;
  /**
   * Message received from the target (for WebSocket/TCP/UDP tests).
   */
  "receivedMessage"?: string;
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
   * Message sent to the target (for WebSocket/TCP/UDP tests).
   */
  "sentMessage"?: string;
  /**
   * Start URL for the test (browser tests).
   */
  "startUrl"?: string;
  /**
   * Timestamp of when the test started (in milliseconds).
   */
  "startedAt"?: number;
  /**
   * Status of a Synthetic test result.
   */
  "status"?: SyntheticsTestResultStatus;
  /**
   * Step results (for browser, mobile, and multistep API tests).
   */
  "steps"?: Array<SyntheticsTestResultStep>;
  /**
   * Time to interactive in milliseconds (browser tests).
   */
  "timeToInteractive"?: number;
  /**
   * Timing breakdown of the test request phases (for example, DNS, TCP, TLS, first byte).
   */
  "timings"?: { [key: string]: any };
  /**
   * Trace identifiers associated with a Synthetic test result.
   */
  "trace"?: SyntheticsTestResultTrace;
  /**
   * Traceroute hop results (for network tests).
   */
  "traceroute"?: Array<SyntheticsTestResultTracerouteHop>;
  /**
   * Timestamp of when the test was triggered (in milliseconds).
   */
  "triggeredAt"?: number;
  /**
   * Whether the test was executed through a tunnel.
   */
  "tunnel"?: boolean;
  /**
   * Turns executed by a goal-based browser test.
   */
  "turns"?: Array<SyntheticsTestResultTurn>;
  /**
   * Whether the test runner was unhealthy at the time of execution.
   */
  "unhealthy"?: boolean;
  /**
   * Variables captured during a test step.
   */
  "variables"?: SyntheticsTestResultVariables;

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
    bucketKeys: {
      baseName: "bucket_keys",
      type: "SyntheticsTestResultBucketKeys",
    },
    callType: {
      baseName: "call_type",
      type: "string",
    },
    cert: {
      baseName: "cert",
      type: "SyntheticsTestResultCertificate",
    },
    compressedJsonDescriptor: {
      baseName: "compressed_json_descriptor",
      type: "string",
    },
    compressedSteps: {
      baseName: "compressed_steps",
      type: "string",
    },
    connectionOutcome: {
      baseName: "connection_outcome",
      type: "string",
    },
    dnsResolution: {
      baseName: "dns_resolution",
      type: "SyntheticsTestResultDnsResolution",
    },
    duration: {
      baseName: "duration",
      type: "number",
      format: "double",
    },
    exitedOnStepSuccess: {
      baseName: "exited_on_step_success",
      type: "boolean",
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
    handshake: {
      baseName: "handshake",
      type: "SyntheticsTestResultHandshake",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    initialId: {
      baseName: "initial_id",
      type: "string",
    },
    isFastRetry: {
      baseName: "is_fast_retry",
      type: "boolean",
    },
    isLastRetry: {
      baseName: "is_last_retry",
      type: "boolean",
    },
    netpath: {
      baseName: "netpath",
      type: "SyntheticsTestResultNetpath",
    },
    netstats: {
      baseName: "netstats",
      type: "SyntheticsTestResultNetstats",
    },
    ocsp: {
      baseName: "ocsp",
      type: "SyntheticsTestResultOCSPResponse",
    },
    ping: {
      baseName: "ping",
      type: "SyntheticsTestResultTracerouteHop",
    },
    receivedEmailCount: {
      baseName: "received_email_count",
      type: "number",
      format: "int64",
    },
    receivedMessage: {
      baseName: "received_message",
      type: "string",
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
    sentMessage: {
      baseName: "sent_message",
      type: "string",
    },
    startUrl: {
      baseName: "start_url",
      type: "string",
    },
    startedAt: {
      baseName: "started_at",
      type: "number",
      format: "int64",
    },
    status: {
      baseName: "status",
      type: "SyntheticsTestResultStatus",
    },
    steps: {
      baseName: "steps",
      type: "Array<SyntheticsTestResultStep>",
    },
    timeToInteractive: {
      baseName: "time_to_interactive",
      type: "number",
      format: "int64",
    },
    timings: {
      baseName: "timings",
      type: "{ [key: string]: any; }",
    },
    trace: {
      baseName: "trace",
      type: "SyntheticsTestResultTrace",
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
    turns: {
      baseName: "turns",
      type: "Array<SyntheticsTestResultTurn>",
    },
    unhealthy: {
      baseName: "unhealthy",
      type: "boolean",
    },
    variables: {
      baseName: "variables",
      type: "SyntheticsTestResultVariables",
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
    return SyntheticsTestResultDetail.attributeTypeMap;
  }

  public constructor() {}
}
