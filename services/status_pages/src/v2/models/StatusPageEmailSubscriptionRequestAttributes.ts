import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The email subscription attributes for a request.
 */
export class StatusPageEmailSubscriptionRequestAttributes {
  /**
   * The email address to subscribe.
   */
  "emailAddress": string;
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
    emailAddress: {
      baseName: "email_address",
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
    return StatusPageEmailSubscriptionRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
