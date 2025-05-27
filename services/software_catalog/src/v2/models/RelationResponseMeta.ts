import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Relation response metadata.
 */
export class RelationResponseMeta {
  /**
   * Total relations count.
   */
  "count"?: number;
  /**
   * Total included data count.
   */
  "includeCount"?: number;
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
    count: {
      baseName: "count",
      type: "number",
      format: "int64",
    },
    includeCount: {
      baseName: "includeCount",
      type: "number",
      format: "int64",
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
    return RelationResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
