import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A router along the traceroute path.
 */
export class SyntheticsTestResultRouter {
  /**
   * IP address of the router.
   */
  "ip"?: string;
  /**
   * Resolved hostname of the router.
   */
  "resolvedHost"?: string;
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
    ip: {
      baseName: "ip",
      type: "string",
    },
    resolvedHost: {
      baseName: "resolved_host",
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
    return SyntheticsTestResultRouter.attributeTypeMap;
  }

  public constructor() {}
}
