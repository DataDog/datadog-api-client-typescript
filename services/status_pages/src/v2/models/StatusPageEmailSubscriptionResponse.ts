import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageEmailSubscriptionResponseData } from "./StatusPageEmailSubscriptionResponseData";

/**
 * Response containing a single email subscription.
 */
export class StatusPageEmailSubscriptionResponse {
  /**
   * Email subscription data from a response.
   */
  "data": StatusPageEmailSubscriptionResponseData;
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
      type: "StatusPageEmailSubscriptionResponseData",
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
    return StatusPageEmailSubscriptionResponse.attributeTypeMap;
  }

  public constructor() {}
}
