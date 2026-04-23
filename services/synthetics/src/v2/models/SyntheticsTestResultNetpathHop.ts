import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A single hop along a network path.
 */
export class SyntheticsTestResultNetpathHop {
  /**
   * Resolved hostname of the hop.
   */
  "hostname"?: string;
  /**
   * IP address of the hop.
   */
  "ipAddress"?: string;
  /**
   * Whether this hop was reachable.
   */
  "reachable"?: boolean;
  /**
   * Round-trip time to this hop in milliseconds.
   */
  "rtt"?: number;
  /**
   * Time-to-live value of the probe packet at this hop.
   */
  "ttl"?: number;
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
    hostname: {
      baseName: "hostname",
      type: "string",
    },
    ipAddress: {
      baseName: "ip_address",
      type: "string",
    },
    reachable: {
      baseName: "reachable",
      type: "boolean",
    },
    rtt: {
      baseName: "rtt",
      type: "number",
      format: "double",
    },
    ttl: {
      baseName: "ttl",
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
    return SyntheticsTestResultNetpathHop.attributeTypeMap;
  }

  public constructor() {}
}
