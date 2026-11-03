/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestResultFileRef } from "./SyntheticsTestResultFileRef";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Details of the outgoing request made during the test execution.
 */
export class SyntheticsTestResultRequestInfo {
  /**
   * Whether insecure certificates are allowed for this request.
   */
  "allowInsecure"?: boolean;
  /**
   * Body sent with the request.
   */
  "body"?: string;
  /**
   * gRPC call type (for example, `unary`, `healthCheck`, or `reflection`).
   */
  "callType"?: string;
  /**
   * Destination service for a Network Path test.
   */
  "destinationService"?: string;
  /**
   * DNS server used to resolve the target host.
   */
  "dnsServer"?: string;
  /**
   * Port of the DNS server used for resolution.
   */
  "dnsServerPort"?: number;
  /**
   * Number of end-to-end probe queries issued.
   */
  "e2eQueries"?: number;
  /**
   * Files attached to the request.
   */
  "files"?: Array<SyntheticsTestResultFileRef>;
  /**
   * Headers sent with the request.
   */
  "headers"?: { [key: string]: any };
  /**
   * Host targeted by the request.
   */
  "host"?: string;
  /**
   * Maximum TTL for network probe packets.
   */
  "maxTtl"?: number;
  /**
   * Message sent with the request (for WebSocket/TCP/UDP tests).
   */
  "message"?: string;
  /**
   * HTTP method used for the request.
   */
  "method"?: string;
  /**
   * Whether the response body was not saved.
   */
  "noSavingResponseBody"?: boolean;
  /**
   * Port targeted by the request. Can be a number or a string variable reference.
   */
  "port"?: any;
  /**
   * Service name targeted by the request (for gRPC tests).
   */
  "service"?: string;
  /**
   * Source service for a Network Path test.
   */
  "sourceService"?: string;
  /**
   * Request timeout in milliseconds.
   */
  "timeout"?: number;
  /**
   * Name of the MCP tool called (MCP tests only).
   */
  "toolName"?: string;
  /**
   * Number of traceroute probe queries issued.
   */
  "tracerouteQueries"?: number;
  /**
   * URL targeted by the request.
   */
  "url"?: string;

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
    allowInsecure: {
      baseName: "allow_insecure",
      type: "boolean",
    },
    body: {
      baseName: "body",
      type: "string",
    },
    callType: {
      baseName: "call_type",
      type: "string",
    },
    destinationService: {
      baseName: "destination_service",
      type: "string",
    },
    dnsServer: {
      baseName: "dns_server",
      type: "string",
    },
    dnsServerPort: {
      baseName: "dns_server_port",
      type: "number",
      format: "int64",
    },
    e2eQueries: {
      baseName: "e2e_queries",
      type: "number",
      format: "int64",
    },
    files: {
      baseName: "files",
      type: "Array<SyntheticsTestResultFileRef>",
    },
    headers: {
      baseName: "headers",
      type: "{ [key: string]: any; }",
    },
    host: {
      baseName: "host",
      type: "string",
    },
    maxTtl: {
      baseName: "max_ttl",
      type: "number",
      format: "int64",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    method: {
      baseName: "method",
      type: "string",
    },
    noSavingResponseBody: {
      baseName: "no_saving_response_body",
      type: "boolean",
    },
    port: {
      baseName: "port",
      type: "any",
    },
    service: {
      baseName: "service",
      type: "string",
    },
    sourceService: {
      baseName: "source_service",
      type: "string",
    },
    timeout: {
      baseName: "timeout",
      type: "number",
      format: "int64",
    },
    toolName: {
      baseName: "tool_name",
      type: "string",
    },
    tracerouteQueries: {
      baseName: "traceroute_queries",
      type: "number",
      format: "int64",
    },
    url: {
      baseName: "url",
      type: "string",
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
    return SyntheticsTestResultRequestInfo.attributeTypeMap;
  }

  public constructor() {}
}
