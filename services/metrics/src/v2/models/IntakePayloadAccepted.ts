import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The payload accepted for intake.
 */
export class IntakePayloadAccepted {
  /**
   * A list of errors.
   */
  "errors"?: Array<string>;
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
    errors: {
      baseName: "errors",
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
    return IntakePayloadAccepted.attributeTypeMap;
  }

  public constructor() {}
}
