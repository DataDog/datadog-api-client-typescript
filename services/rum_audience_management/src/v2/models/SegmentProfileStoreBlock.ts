import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Selects users or accounts by their profile attributes.
 */
export class SegmentProfileStoreBlock {
  /**
   * Name of the block, used in `combination`.
   */
  "name"?: string;
  /**
   * Profile attribute query.
   */
  "query": string;
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
    query: {
      baseName: "query",
      type: "string",
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
    return SegmentProfileStoreBlock.attributeTypeMap;
  }

  public constructor() {}
}
