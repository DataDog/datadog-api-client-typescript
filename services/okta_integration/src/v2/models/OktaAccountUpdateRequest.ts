import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OktaAccountUpdateRequestData } from "./OktaAccountUpdateRequestData";

/**
 * Payload schema when updating an Okta account.
 */
export class OktaAccountUpdateRequest {
  /**
   * Data object for updating an Okta account.
   */
  "data": OktaAccountUpdateRequestData;
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
      type: "OktaAccountUpdateRequestData",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OktaAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
