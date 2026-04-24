import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestResultNetstatsHops } from "./SyntheticsTestResultNetstatsHops";
import { SyntheticsTestResultNetworkLatency } from "./SyntheticsTestResultNetworkLatency";

/**
 * Aggregated network statistics from the test execution.
 */
export class SyntheticsTestResultNetstats {
  /**
   * Statistics about the number of hops for a network test.
   */
  "hops"?: SyntheticsTestResultNetstatsHops;
  /**
   * Network jitter in milliseconds.
   */
  "jitter"?: number;
  /**
   * Latency statistics for a network probe.
   */
  "latency"?: SyntheticsTestResultNetworkLatency;
  /**
   * Percentage of probe packets lost.
   */
  "packetLossPercentage"?: number;
  /**
   * Number of probe packets received.
   */
  "packetsReceived"?: number;
  /**
   * Number of probe packets sent.
   */
  "packetsSent"?: number;
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
    hops: {
      baseName: "hops",
      type: "SyntheticsTestResultNetstatsHops",
    },
    jitter: {
      baseName: "jitter",
      type: "number",
      format: "double",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTestResultNetstats.attributeTypeMap;
  }

  public constructor() {}
}
