import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Filter applied to occurrence counts when building a Product Analytics audience.
 */
export class ProductAnalyticsAudienceOccurrenceFilter {
  /**
   * The comparison operator used for the occurrence filter (for example: `gt`, `lt`, `eq`).
   */
  "operator"?: string;
  /**
   * The threshold value to compare occurrence counts against.
   */
  "value"?: string;
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
    operator: {
      baseName: "operator",
      type: "string",
    },
    value: {
      baseName: "value",
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
    return ProductAnalyticsAudienceOccurrenceFilter.attributeTypeMap;
  }

  public constructor() {}
}
