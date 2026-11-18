import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * How reference table rows are matched to entities.
 */
export class SegmentReferenceTableJoinCondition {
  /**
   * Reference table column that holds the entity ID.
   */
  "columnName": string;
  /**
   * Facet that identifies the entity, such as `@usr.id`.
   */
  "facet"?: string;
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
    return SegmentReferenceTableJoinCondition.attributeTypeMap;
  }

  public constructor() {}
}
