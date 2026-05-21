import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentStatuspageSubscriptionDataRequest } from "./IncidentStatuspageSubscriptionDataRequest";

/**
 * Request to create an email subscription.
 */
export class IncidentStatuspageSubscriptionRequest {
  /**
   * Subscription data for a request.
   */
  "data": IncidentStatuspageSubscriptionDataRequest;
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
    data: {
      baseName: "data",
      type: "IncidentStatuspageSubscriptionDataRequest",
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
    return IncidentStatuspageSubscriptionRequest.attributeTypeMap;
  }

  public constructor() {}
}
