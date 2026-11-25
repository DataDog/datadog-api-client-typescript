import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A set of principals the downtime runs as.
 */
export class DowntimeRunAsItem {
  /**
   * The principal the downtime runs as. Only one user is supported.
   */
  "principals": [string];
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
    principals: {
      baseName: "principals",
      type: "[string]",
      required: true,
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
    return DowntimeRunAsItem.attributeTypeMap;
  }

  public constructor() {}
}
