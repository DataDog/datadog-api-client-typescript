import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScalarColumnTypeGroup } from "./ScalarColumnTypeGroup";

/**
 * A column containing the tag keys and values in a group.
 */
export class GroupScalarColumn {
  /**
   * The name of the tag key or group.
   */
  "name"?: string;
  /**
   * The type of column present for groups.
   */
  "type"?: ScalarColumnTypeGroup;
  /**
   * The array of tag values for each group found for the results of the formulas or queries.
   */
  "values"?: Array<Array<string>>;
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
    type: {
      baseName: "type",
      type: "ScalarColumnTypeGroup",
    },
    values: {
      baseName: "values",
      type: "Array<Array<string>>",
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
    return GroupScalarColumn.attributeTypeMap;
  }

  public constructor() {}
}
