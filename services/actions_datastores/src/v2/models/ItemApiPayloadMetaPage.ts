import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination information for a collection of datastore items.
 */
export class ItemApiPayloadMetaPage {
  /**
   * Whether there are additional pages of items beyond the current page.
   */
  "hasMore"?: boolean;
  /**
   * The total number of items in the datastore, ignoring any filters.
   */
  "totalCount"?: number;
  /**
   * The total number of items that match the current filter criteria.
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
    hasMore: {
      baseName: "hasMore",
      type: "boolean",
    },
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
    return ItemApiPayloadMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
