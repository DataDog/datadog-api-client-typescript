import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for a Container Image Group.
 */
export class ContainerImageGroupAttributes {
  /**
   * Number of Container Images in the group.
   */
  "count"?: number;
  /**
   * Name of the Container Image group.
   */
  "name"?: string;
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
    name: {
      baseName: "name",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "any",
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
    return ContainerImageGroupAttributes.attributeTypeMap;
  }

  public constructor() {}
}
