import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A group by rule.
 */
export class SpansMetricResponseGroupBy {
  /**
   * The path to the value the span-based metric will be aggregated over.
   */
  "path"?: string;
  /**
   * Eventual name of the tag that gets created. By default, the path attribute is used as the tag name.
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
    },
    tagName: {
      baseName: "tag_name",
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
    return SpansMetricResponseGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
