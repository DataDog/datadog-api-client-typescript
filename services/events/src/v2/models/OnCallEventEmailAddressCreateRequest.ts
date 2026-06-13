import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallEventEmailAddressCreateData } from "./OnCallEventEmailAddressCreateData";

/**
 * Request body for creating an on-call event email address.
 */
export class OnCallEventEmailAddressCreateRequest {
  /**
   * Data for creating an on-call event email address.
   */
  "data": OnCallEventEmailAddressCreateData;
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
      type: "OnCallEventEmailAddressCreateData",
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
    return OnCallEventEmailAddressCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
