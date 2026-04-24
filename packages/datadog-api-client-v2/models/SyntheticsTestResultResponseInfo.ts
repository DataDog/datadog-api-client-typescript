/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestResultCdnProviderInfo } from "./SyntheticsTestResultCdnProviderInfo";
import { SyntheticsTestResultDnsRecord } from "./SyntheticsTestResultDnsRecord";
import { SyntheticsTestResultHealthCheck } from "./SyntheticsTestResultHealthCheck";
import { SyntheticsTestResultRedirect } from "./SyntheticsTestResultRedirect";
import { SyntheticsTestResultWebSocketClose } from "./SyntheticsTestResultWebSocketClose";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Details of the response received during the test execution.
 */
export class SyntheticsTestResultResponseInfo {
  /**
   * Body of the response.
   */
  "body"?: string;
  /**
   * Compressed representation of the response body.
   */
  "bodyCompressed"?: string;
  /**
   * Hashes computed over the response body.
   */
  "bodyHashes"?: string;
  /**
   * Size of the response body in bytes.
   */
  "bodySize"?: number;
  /**
   * Cache-related response headers.
   */
  "cacheHeaders"?: { [key: string]: string };
  /**
   * CDN provider details inferred from response headers.
   */
  "cdn"?: SyntheticsTestResultCdnProviderInfo;
  /**
   * WebSocket close frame information for WebSocket test responses.
   */
  "close"?: SyntheticsTestResultWebSocketClose;
  /**
   * Compressed representation of the response message.
   */
  "compressedMessage"?: string;
  /**
   * Response headers.
   */
  "headers"?: { [key: string]: any };
  /**
   * Health check information returned from a gRPC health check call.
   */
  "healthcheck"?: SyntheticsTestResultHealthCheck;
  /**
   * HTTP version of the response.
   */
  "httpVersion"?: string;
  /**
   * Whether the response body was truncated.
   */
  "isBodyTruncated"?: boolean;
  /**
   * Whether the response message was truncated.
   */
  "isMessageTruncated"?: boolean;
  /**
   * Message received in the response (for WebSocket/TCP/UDP tests).
   */
  "message"?: string;
  /**
   * Additional metadata returned with the response.
   */
  "metadata"?: { [key: string]: string };
  /**
   * DNS records returned in the response (DNS tests only).
   */
  "records"?: Array<SyntheticsTestResultDnsRecord>;
  /**
   * Redirect hops encountered while performing the request.
   */
  "redirects"?: Array<SyntheticsTestResultRedirect>;
  /**
   * HTTP status code of the response.
   */
  "statusCode"?: number;

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
    body: {
      baseName: "body",
      type: "string",
    },
    bodyCompressed: {
      baseName: "body_compressed",
      type: "string",
    },
    bodyHashes: {
      baseName: "body_hashes",
      type: "string",
    },
    bodySize: {
      baseName: "body_size",
      type: "number",
      format: "int64",
    },
    cacheHeaders: {
      baseName: "cache_headers",
      type: "{ [key: string]: string; }",
    },
    cdn: {
      baseName: "cdn",
      type: "SyntheticsTestResultCdnProviderInfo",
    },
    close: {
      baseName: "close",
      type: "SyntheticsTestResultWebSocketClose",
    },
    compressedMessage: {
      baseName: "compressed_message",
      type: "string",
    },
    headers: {
      baseName: "headers",
      type: "{ [key: string]: any; }",
    },
    healthcheck: {
      baseName: "healthcheck",
      type: "SyntheticsTestResultHealthCheck",
    },
    httpVersion: {
      baseName: "http_version",
      type: "string",
    },
    isBodyTruncated: {
      baseName: "is_body_truncated",
      type: "boolean",
    },
    isMessageTruncated: {
      baseName: "is_message_truncated",
      type: "boolean",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    metadata: {
      baseName: "metadata",
      type: "{ [key: string]: string; }",
    },
    records: {
      baseName: "records",
      type: "Array<SyntheticsTestResultDnsRecord>",
    },
    redirects: {
      baseName: "redirects",
      type: "Array<SyntheticsTestResultRedirect>",
    },
    statusCode: {
      baseName: "status_code",
      type: "number",
      format: "int64",
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
    return SyntheticsTestResultResponseInfo.attributeTypeMap;
  }

  public constructor() {}
}
