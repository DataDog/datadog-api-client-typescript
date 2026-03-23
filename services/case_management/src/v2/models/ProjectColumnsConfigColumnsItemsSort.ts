import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Sort configuration for a project board column.
 */
export class ProjectColumnsConfigColumnsItemsSort {
  /**
   * Whether to sort in ascending order.
   */
  "ascending"?: boolean;
  /**
   * The sort priority order for this column.
   */
  "priority"?: number;
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
    ascending: {
      baseName: "ascending",
      type: "boolean",
    },
    priority: {
      baseName: "priority",
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
    return ProjectColumnsConfigColumnsItemsSort.attributeTypeMap;
  }

  public constructor() {}
}
