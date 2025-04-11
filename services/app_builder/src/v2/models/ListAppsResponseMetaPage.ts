import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Information on the total number of apps, to be used for pagination.
 */
export class ListAppsResponseMetaPage {
  /**
   * The total number of apps under the Datadog organization, disregarding any filters applied.
   */
  "totalCount"?: number;
  /**
   * The total number of apps that match the specified filters.
   */
  "totalFilteredCount"?: number;
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
    totalCount: {
      baseName: "totalCount",
      type: "number",
      format: "int64",
    },
    totalFilteredCount: {
      baseName: "totalFilteredCount",
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
    return ListAppsResponseMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
