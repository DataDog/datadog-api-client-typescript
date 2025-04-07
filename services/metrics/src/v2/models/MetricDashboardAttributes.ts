import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes related to the dashboard, including title, popularity, and url.
 */
export class MetricDashboardAttributes {
  /**
   * Value from 0 to 5 that ranks popularity of the dashboard.
   */
  "popularity"?: number;
  /**
   * Title of the asset.
   */
  "title"?: string;
  /**
   * URL path of the asset.
   */
  "url"?: string;
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
    popularity: {
      baseName: "popularity",
      type: "number",
      format: "double",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    url: {
      baseName: "url",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricDashboardAttributes.attributeTypeMap;
  }

  public constructor() {}
}
