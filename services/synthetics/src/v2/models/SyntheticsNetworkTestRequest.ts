import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsNetworkTestRequestTCPMethod } from "./SyntheticsNetworkTestRequestTCPMethod";

/**
 * Object describing the request for a Network Path test.
 */
export class SyntheticsNetworkTestRequest {
  /**
   * An optional label displayed for the destination host in the Network Path visualization.
   */
  "destinationService"?: string;
  /**
   * The number of packets sent to probe the destination to measure packet loss, latency and jitter.
   */
  "e2eQueries": number;
  /**
   * Host name to query.
   */
  "host": string;
  /**
   * The maximum time-to-live (max number of hops) used in outgoing probe packets.
   */
  "maxTtl": number;
  /**
   * For TCP or UDP tests, the port to use when performing the test.
   * If not set on a UDP test, a random port is assigned, which may affect the results.
   */
  "port"?: number;
  /**
   * An optional label displayed for the source host in the Network Path visualization.
   */
  "sourceService"?: string;
  /**
   * For TCP tests, the TCP traceroute strategy.
   */
  "tcpMethod"?: SyntheticsNetworkTestRequestTCPMethod;
  /**
   * Timeout in seconds.
   */
  "timeout"?: number;
  /**
   * The number of traceroute path tracings.
   */
  "tracerouteQueries": number;
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
    destinationService: {
      baseName: "destination_service",
      type: "string",
    },
    e2eQueries: {
      baseName: "e2e_queries",
      type: "number",
      required: true,
      format: "int64",
    },
    host: {
      baseName: "host",
      type: "string",
      required: true,
    },
    maxTtl: {
      baseName: "max_ttl",
      type: "number",
      required: true,
      format: "int64",
    },
    port: {
      baseName: "port",
      type: "number",
      format: "int64",
    },
    sourceService: {
      baseName: "source_service",
      type: "string",
    },
    tcpMethod: {
      baseName: "tcp_method",
      type: "SyntheticsNetworkTestRequestTCPMethod",
    },
    timeout: {
      baseName: "timeout",
      type: "number",
      format: "int64",
    },
    tracerouteQueries: {
      baseName: "traceroute_queries",
      type: "number",
      required: true,
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
    return SyntheticsNetworkTestRequest.attributeTypeMap;
  }

  public constructor() {}
}
