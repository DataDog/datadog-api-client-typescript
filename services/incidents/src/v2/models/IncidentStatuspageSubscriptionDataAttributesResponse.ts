import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of an email subscription.
 */
export class IncidentStatuspageSubscriptionDataAttributesResponse {
  /**
   * Whether the subscription has been confirmed.
   */
  "confirmed": boolean;
  /**
   * Timestamp when the subscription was created.
   */
  "createdAt": Date;
  /**
   * The subscribed email address.
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
    confirmed: {
      baseName: "confirmed",
      type: "boolean",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
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
    return IncidentStatuspageSubscriptionDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
