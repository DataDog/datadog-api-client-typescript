import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the monitor identified by the downtime.
 */
export class DowntimeMonitorIncludedAttributes {
  /**
   * The name of the monitor identified by the downtime.
   */
  "name"?: string;
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
    name: {
      baseName: "name",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DowntimeMonitorIncludedAttributes.attributeTypeMap;
  }

  public constructor() {}
}
