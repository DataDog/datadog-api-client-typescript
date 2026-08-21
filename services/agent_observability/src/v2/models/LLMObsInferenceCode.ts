import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A generated code snippet for running an inference request programmatically.
 */
export class LLMObsInferenceCode {
  /**
   * The generated code content.
   */
  "code": string;
  /**
   * Unique identifier for the code snippet.
   */
  "id": string;
  /**
   * The programming language or SDK type of the code snippet.
   */
  "type": string;
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
    code: {
      baseName: "code",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
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
    return LLMObsInferenceCode.attributeTypeMap;
  }

  public constructor() {}
}
