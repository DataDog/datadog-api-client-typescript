import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Entity metadata.
 */
export class EntityResponseMeta {
  /**
   * Total entities count.
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
