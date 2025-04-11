import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The connection group to use for an action query.
 */
export class ActionQuerySpecConnectionGroup {
  /**
   * The ID of the connection group.
   */
  "id"?: string;
  /**
   * The tags of the connection group.
   */
  "tags"?: Array<string>;
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
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    tags: {
      baseName: "tags",
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
    return ActionQuerySpecConnectionGroup.attributeTypeMap;
  }

  public constructor() {}
}
