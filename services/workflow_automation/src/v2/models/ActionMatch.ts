import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class ActionMatch {
  /**
   * The fully qualified name of the action.
   */
  "actionFqn": string;
  /**
   * The description of the action.
   */
  "description": string;
  /**
   * The relevance score of the match.
   */
  "score": number;
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
    actionFqn: {
      baseName: "actionFqn",
      type: "string",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    score: {
      baseName: "score",
      type: "number",
      required: true,
      format: "double",
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
    return ActionMatch.attributeTypeMap;
  }

  public constructor() {}
}
