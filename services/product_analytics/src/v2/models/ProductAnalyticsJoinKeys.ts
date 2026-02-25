import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Join key configuration for correlating events.
 */
export class ProductAnalyticsJoinKeys {
  /**
   * The primary join key facet.
   */
  "primary"?: string;
  /**
   * Secondary join key facets.
   */
  "secondary"?: Array<string>;
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
    primary: {
      baseName: "primary",
      type: "string",
    },
    secondary: {
      baseName: "secondary",
      type: "Array<string>",
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
    return ProductAnalyticsJoinKeys.attributeTypeMap;
  }

  public constructor() {}
}
