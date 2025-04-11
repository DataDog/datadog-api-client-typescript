import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `ConnectionGroup` object.
 */
export class ConnectionGroup {
  /**
   * The `ConnectionGroup` `connectionGroupId`.
   */
  "connectionGroupId": string;
  /**
   * The `ConnectionGroup` `label`.
   */
  "label": string;
  /**
   * The `ConnectionGroup` `tags`.
   */
  "tags": Array<string>;
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
    connectionGroupId: {
      baseName: "connectionGroupId",
      type: "string",
      required: true,
    },
    label: {
      baseName: "label",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
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
    return ConnectionGroup.attributeTypeMap;
  }

  public constructor() {}
}
