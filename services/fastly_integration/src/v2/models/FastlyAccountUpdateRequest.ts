import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FastlyAccountUpdateRequestData } from "./FastlyAccountUpdateRequestData";

/**
 * Payload schema when updating a Fastly account.
 */
export class FastlyAccountUpdateRequest {
  /**
   * Data object for updating a Fastly account.
   */
  "data": FastlyAccountUpdateRequestData;
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
      type: "FastlyAccountUpdateRequestData",
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
    return FastlyAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
