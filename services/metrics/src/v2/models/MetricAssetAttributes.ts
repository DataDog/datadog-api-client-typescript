import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Assets related to the object, including title, url, and tags.
 */
export class MetricAssetAttributes {
  /**
   * List of tag keys used across all assets containing this metric.
   */
  "tags"?: Array<string>;
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
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricAssetAttributes.attributeTypeMap;
  }

  public constructor() {}
}
