import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FastlyServiceData } from "./FastlyServiceData";

/**
 * Payload schema for Fastly service requests.
 */
export class FastlyServiceRequest {
  /**
   * Data object for Fastly service requests.
   */
  "data": FastlyServiceData;
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
      type: "FastlyServiceData",
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
    return FastlyServiceRequest.attributeTypeMap;
  }

  public constructor() {}
}
