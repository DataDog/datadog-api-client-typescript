import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The join condition for a reference table query block.
 */
export class RumSegmentReferenceTableJoinCondition {
  /**
   * The reference table column to join on.
   */
  "columnName": string;
  /**
   * The RUM facet to join on.
   */
  "facet": string;
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
    columnName: {
      baseName: "column_name",
      type: "string",
      required: true,
    },
    facet: {
      baseName: "facet",
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
    return RumSegmentReferenceTableJoinCondition.attributeTypeMap;
  }

  public constructor() {}
}
