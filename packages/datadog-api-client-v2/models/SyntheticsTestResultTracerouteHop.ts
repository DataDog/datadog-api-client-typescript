/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestResultNetworkLatency } from "./SyntheticsTestResultNetworkLatency";
import { SyntheticsTestResultRouter } from "./SyntheticsTestResultRouter";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A network probe result, used for traceroute hops and ping summaries.
 */
export class SyntheticsTestResultTracerouteHop {
  /**
   * Target hostname.
   */
  "host"?: string;
  /**
   * Latency statistics for a network probe.
   */
  "latency"?: SyntheticsTestResultNetworkLatency;
  /**
   * Percentage of probe packets lost.
   */
  "packetLossPercentage"?: number;
  /**
   * Size of each probe packet in bytes.
   */
  "packetSize"?: number;
  /**
   * Number of probe packets received.
   */
  "packetsReceived"?: number;
  /**
   * Number of probe packets sent.
   */
  "packetsSent"?: number;
  /**
   * Resolved IP address for the target.
   */
  "resolvedIp"?: string;
  /**
   * List of intermediate routers for the traceroute.
   */
  "routers"?: Array<SyntheticsTestResultRouter>;

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
    host: {
      baseName: "host",
      type: "string",
    },
    latency: {
      baseName: "latency",
      type: "SyntheticsTestResultNetworkLatency",
    },
    packetLossPercentage: {
      baseName: "packet_loss_percentage",
      type: "number",
      format: "double",
    },
    packetSize: {
      baseName: "packet_size",
      type: "number",
      format: "int64",
    },
    packetsReceived: {
      baseName: "packets_received",
      type: "number",
      format: "int64",
    },
    packetsSent: {
      baseName: "packets_sent",
      type: "number",
      format: "int64",
    },
    resolvedIp: {
      baseName: "resolved_ip",
      type: "string",
    },
    routers: {
      baseName: "routers",
      type: "Array<SyntheticsTestResultRouter>",
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
    return SyntheticsTestResultTracerouteHop.attributeTypeMap;
  }

  public constructor() {}
}
