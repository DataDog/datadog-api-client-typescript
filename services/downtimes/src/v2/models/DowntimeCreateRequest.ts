import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DowntimeCreateRequestData } from "./DowntimeCreateRequestData";

/**
 * Request for creating a downtime.
 */
export class DowntimeCreateRequest {
  /**
   * Object to create a downtime.
   */
  "data": DowntimeCreateRequestData;
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
      type: "DowntimeCreateRequestData",
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
    return DowntimeCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
