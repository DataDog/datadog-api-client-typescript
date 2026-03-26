import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata about the search results.
 */
export class WidgetSearchMeta {
  /**
   * Total number of widgets created by anyone.
   */
  "createdByAnyoneTotal"?: number;
  /**
   * Total number of widgets created by the current user.
   */
  "createdByYouTotal"?: number;
  /**
   * Total number of widgets favorited by the current user.
   */
  "favoritedByYouTotal"?: number;
  /**
   * Total number of widgets matching the current filter criteria.
   */
  "filteredTotal"?: number;
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
    createdByAnyoneTotal: {
      baseName: "created_by_anyone_total",
      type: "number",
      format: "int64",
    },
    createdByYouTotal: {
      baseName: "created_by_you_total",
      type: "number",
      format: "int64",
    },
    favoritedByYouTotal: {
      baseName: "favorited_by_you_total",
      type: "number",
      format: "int64",
    },
    filteredTotal: {
      baseName: "filtered_total",
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
    return WidgetSearchMeta.attributeTypeMap;
  }

  public constructor() {}
}
