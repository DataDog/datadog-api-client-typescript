import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentStatuspageSubscriptionDataResponse } from "./IncidentStatuspageSubscriptionDataResponse";

/**
 * Response with a single email subscription.
 */
export class IncidentStatuspageSubscriptionResponse {
  /**
   * Email subscription data in a response.
   */
  "data": IncidentStatuspageSubscriptionDataResponse;
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
      type: "IncidentStatuspageSubscriptionDataResponse",
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
    return IncidentStatuspageSubscriptionResponse.attributeTypeMap;
  }

  public constructor() {}
}
