import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `ItemApiPayloadMetaPage` object.
 */
export class ItemApiPayloadMetaPage {
  /**
   * The `ItemApiPayloadMeta` `hasMore`.
   */
  "hasMore"?: boolean;
  /**
   * The `ItemApiPayloadMeta` `totalCount`.
   */
  "totalCount"?: number;
  /**
   * The `ItemApiPayloadMeta` `totalFilteredCount`.
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
