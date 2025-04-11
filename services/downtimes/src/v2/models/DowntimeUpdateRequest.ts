import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DowntimeUpdateRequestData } from "./DowntimeUpdateRequestData";

/**
 * Request for editing a downtime.
 */
export class DowntimeUpdateRequest {
  /**
   * Object to update a downtime.
   */
  "data": DowntimeUpdateRequestData;
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
      type: "DowntimeUpdateRequestData",
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
    return DowntimeUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
