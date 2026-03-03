import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageEmailSubscriptionRequestData } from "./StatusPageEmailSubscriptionRequestData";

/**
 * Request to import multiple email subscriptions.
 */
export class StatusPageEmailSubscriptionsRequest {
  /**
   * List of email subscriptions to import.
   */
  "data": Array<StatusPageEmailSubscriptionRequestData>;
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
      type: "Array<StatusPageEmailSubscriptionRequestData>",
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
    return StatusPageEmailSubscriptionsRequest.attributeTypeMap;
  }

  public constructor() {}
}
