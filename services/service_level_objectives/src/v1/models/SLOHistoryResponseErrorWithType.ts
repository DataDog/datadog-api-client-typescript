import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An object describing the error with error type and error message.
 */
export class SLOHistoryResponseErrorWithType {
  /**
   * A message with more details about the error.
   */
  "errorMessage": string;
  /**
   * Type of the error.
   */
  "errorType": string;
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
    errorMessage: {
      baseName: "error_message",
      type: "string",
      required: true,
    },
    errorType: {
      baseName: "error_type",
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
    return SLOHistoryResponseErrorWithType.attributeTypeMap;
  }

  public constructor() {}
}
