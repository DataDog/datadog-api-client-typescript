import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An integration detected on the agent but not necessarily configured.
 */
export class FleetDetectedIntegration {
  /**
   * Escaped integration name.
   */
  "escapedName"?: string;
  /**
   * Integration prefix identifier.
   */
  "prefix"?: string;
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
    escapedName: {
      baseName: "escaped_name",
      type: "string",
    },
    prefix: {
      baseName: "prefix",
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
    return FleetDetectedIntegration.attributeTypeMap;
  }

  public constructor() {}
}
