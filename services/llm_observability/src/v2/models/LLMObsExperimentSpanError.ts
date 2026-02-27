import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Error details for an experiment span.
 */
export class LLMObsExperimentSpanError {
  /**
   * Error message.
   */
  "message"?: string;
  /**
   * Stack trace of the error.
   */
  "stack"?: string;
  /**
   * Type or class of the error.
   */
  "type"?: string;
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
    message: {
      baseName: "message",
      type: "string",
    },
    stack: {
      baseName: "stack",
      type: "string",
    },
    type: {
      baseName: "type",
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
    return LLMObsExperimentSpanError.attributeTypeMap;
  }

  public constructor() {}
}
