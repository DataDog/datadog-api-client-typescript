import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the created restriction query.
 */
export class RestrictionQueryCreateAttributes {
  /**
   * The restriction query.
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
    return RestrictionQueryCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
