import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A Datadog user associated with a custom evaluator configuration.
 */
export class LLMObsCustomEvalConfigUser {
  /**
   * Email address of the user.
   */
  "email"?: string;
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
    email: {
      baseName: "email",
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
    return LLMObsCustomEvalConfigUser.attributeTypeMap;
  }

  public constructor() {}
}
