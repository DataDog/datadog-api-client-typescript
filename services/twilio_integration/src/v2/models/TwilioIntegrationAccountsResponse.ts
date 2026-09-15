import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TwilioIntegrationAccountResponseData } from "./TwilioIntegrationAccountResponseData";

/**
 * Response payload for a list of Twilio integration accounts.
 */
export class TwilioIntegrationAccountsResponse {
  /**
   * List of Twilio integration accounts.
   */
  "data": Array<TwilioIntegrationAccountResponseData>;
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
      type: "Array<TwilioIntegrationAccountResponseData>",
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
    return TwilioIntegrationAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
