import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating an email subscription.
 */
export class IncidentStatuspageSubscriptionDataAttributesRequest {
  /**
   * The email address to subscribe.
   */
  "email": string;
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
    return IncidentStatuspageSubscriptionDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
