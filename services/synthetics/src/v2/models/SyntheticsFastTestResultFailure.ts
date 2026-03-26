import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Failure details if the fast test did not pass.
 */
export class SyntheticsFastTestResultFailure {
  /**
   * Error code identifying the failure type.
   */
  "code"?: string;
  /**
   * Human-readable description of the failure.
   */
  "message"?: string;
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
    },
    message: {
      baseName: "message",
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
    return SyntheticsFastTestResultFailure.attributeTypeMap;
  }

  public constructor() {}
}
