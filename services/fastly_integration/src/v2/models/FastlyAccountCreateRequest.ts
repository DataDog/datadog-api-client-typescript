import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FastlyAccountCreateRequestData } from "./FastlyAccountCreateRequestData";

/**
 * Payload schema when adding a Fastly account.
 */
export class FastlyAccountCreateRequest {
  /**
   * Data object for creating a Fastly account.
   */
  "data": FastlyAccountCreateRequestData;
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
      type: "FastlyAccountCreateRequestData",
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
    return FastlyAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
