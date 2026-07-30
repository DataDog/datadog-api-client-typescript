import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TwilioAccountUpdateData } from "./TwilioAccountUpdateData";

/**
 * Request payload to update a Twilio integration account as a partial merge.
 */
export class TwilioAccountUpdateRequest {
  /**
   * Data envelope for updating a Twilio integration account.
   */
  "data": TwilioAccountUpdateData;
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
      type: "TwilioAccountUpdateData",
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
    return TwilioAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
