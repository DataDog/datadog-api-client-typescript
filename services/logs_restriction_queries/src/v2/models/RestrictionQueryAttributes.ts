import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the restriction query.
 */
export class RestrictionQueryAttributes {
  /**
   * Creation time of the restriction query.
   */
  "createdAt"?: Date;
  /**
   * Time of last restriction query modification.
   */
  "modifiedAt"?: Date;
  /**
   * The query that defines the restriction. Only the content matching the query can be returned.
   */
  "restrictionQuery"?: string;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    restrictionQuery: {
      baseName: "restriction_query",
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
    return RestrictionQueryAttributes.attributeTypeMap;
  }

  public constructor() {}
}
