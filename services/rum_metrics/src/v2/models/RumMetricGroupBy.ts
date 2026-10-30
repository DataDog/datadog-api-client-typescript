import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A group by rule.
 */
export class RumMetricGroupBy {
  /**
   * The path of the RUM event attribute to group the metric by.
   */
  "path": string;
  /**
   * Name of the tag that gets created on the metric. By default, `path` is used as the tag name.
   * It must be at most 200 characters long, start with a letter, and contain only lowercase letters, digits, underscores, hyphens, colons, periods, and slashes.
   */
  "tagName"?: string;
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
    path: {
      baseName: "path",
      type: "string",
      required: true,
    },
    tagName: {
      baseName: "tag_name",
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
    return RumMetricGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
