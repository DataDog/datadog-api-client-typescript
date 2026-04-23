import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Destination endpoint of a network path measurement.
 */
export class SyntheticsTestResultNetpathDestination {
  /**
   * Hostname of the destination.
   */
  "hostname"?: string;
  /**
   * IP address of the destination.
   */
  "ipAddress"?: string;
  /**
   * Port of the destination service.
   */
  "port"?: number;
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
    port: {
      baseName: "port",
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
    return SyntheticsTestResultNetpathDestination.attributeTypeMap;
  }

  public constructor() {}
}
