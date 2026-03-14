import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProjectColumnsConfigColumnsItemsSort } from "./ProjectColumnsConfigColumnsItemsSort";

/**
 * Configuration for a single column in a project board view
 */
export class ProjectColumnsConfigColumnsItems {
  /**
   * Sort configuration for a project board column
   */
  "sort"?: ProjectColumnsConfigColumnsItemsSort;
  /**
   * The field used to sort items in this column
   */
  "sortField"?: string;
  /**
   * The type of column
   */
  "type"?: string;
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
    sort: {
      baseName: "sort",
      type: "ProjectColumnsConfigColumnsItemsSort",
    },
    sortField: {
      baseName: "sort_field",
      type: "string",
    },
    type: {
      baseName: "type",
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
    return ProjectColumnsConfigColumnsItems.attributeTypeMap;
  }

  public constructor() {}
}
