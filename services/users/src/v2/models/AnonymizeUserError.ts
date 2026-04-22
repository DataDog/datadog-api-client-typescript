import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Error encountered when anonymizing a specific user.
 */
export class AnonymizeUserError {
  /**
   * Error message describing why anonymization failed.
   */
  "error": string;
  /**
   * UUID of the user that failed to be anonymized.
   */
  "userId": string;
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
    error: {
      baseName: "error",
      type: "string",
      required: true,
    },
    userId: {
      baseName: "user_id",
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
    return AnonymizeUserError.attributeTypeMap;
  }

  public constructor() {}
}
