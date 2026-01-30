import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class WorkflowFavoriteRequestAttributes {
  /**
   * Whether to mark the workflow as favorite (true) or unfavorite (false)
   */
  "favorite": boolean;
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
    favorite: {
      baseName: "favorite",
      type: "boolean",
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
    return WorkflowFavoriteRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
