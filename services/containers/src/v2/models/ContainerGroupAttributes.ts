import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for a container group.
 */
export class ContainerGroupAttributes {
  /**
   * Number of containers in the group.
   */
  "count"?: number;
  /**
   * Tags from the group name parsed in key/value format.
   */
  "tags"?: any;
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
    tags: {
      baseName: "tags",
      type: "any",
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
    return ContainerGroupAttributes.attributeTypeMap;
  }

  public constructor() {}
}
