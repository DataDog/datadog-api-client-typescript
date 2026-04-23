import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * DNS resolution details recorded during the test execution.
 */
export class SyntheticsTestResultDnsResolution {
  /**
   * DNS resolution attempts made during the test.
   */
  "attempts"?: Array<{ [key: string]: string }>;
  /**
   * Resolved IP address for the target host.
   */
  "resolvedIp"?: string;
  /**
   * Resolved port for the target service.
   */
  "resolvedPort"?: string;
  /**
   * DNS server used for the resolution.
   */
  "server"?: string;
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
    attempts: {
      baseName: "attempts",
      type: "Array<{ [key: string]: string; }>",
    },
    resolvedIp: {
      baseName: "resolved_ip",
      type: "string",
    },
    resolvedPort: {
      baseName: "resolved_port",
      type: "string",
    },
    server: {
      baseName: "server",
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
    return SyntheticsTestResultDnsResolution.attributeTypeMap;
  }

  public constructor() {}
}
