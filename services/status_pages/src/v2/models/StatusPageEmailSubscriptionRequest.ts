import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageEmailSubscriptionRequestData } from "./StatusPageEmailSubscriptionRequestData";

/**
 * Request to create an email subscription.
 */
export class StatusPageEmailSubscriptionRequest {
  /**
   * Email subscription data for a request.
   */
  "data": StatusPageEmailSubscriptionRequestData;
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
      type: "StatusPageEmailSubscriptionRequestData",
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
    return StatusPageEmailSubscriptionRequest.attributeTypeMap;
  }

  public constructor() {}
}
