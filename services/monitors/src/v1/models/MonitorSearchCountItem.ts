import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A facet item.
 */
export class MonitorSearchCountItem {
  /**
   * The number of found monitors with the listed value.
   */
  "count"?: number;
  /**
   * The facet value.
   */
  "name"?: any;
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
    count: {
      baseName: "count",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "any",
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
    return MonitorSearchCountItem.attributeTypeMap;
  }

  public constructor() {}
}
