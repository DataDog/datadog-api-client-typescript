import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata for facets response.
 */
export class ListFacetsResponseMeta {
  /**
   * Total number of entities.
   */
  "totalEntities": number;
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
    totalEntities: {
      baseName: "total_entities",
      type: "number",
      required: true,
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
    return ListFacetsResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
