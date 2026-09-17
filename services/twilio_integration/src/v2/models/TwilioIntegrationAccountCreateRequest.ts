import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TwilioIntegrationAccountCreateData } from "./TwilioIntegrationAccountCreateData";

/**
 * Request payload to create a Twilio integration account.
 */
export class TwilioIntegrationAccountCreateRequest {
  /**
   * Data envelope for creating a Twilio integration account.
   */
  "data": TwilioIntegrationAccountCreateData;
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
      type: "TwilioIntegrationAccountCreateData",
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
    return TwilioIntegrationAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
