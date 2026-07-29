import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentPageUUIDDataResponse } from "./IncidentPageUUIDDataResponse";

/**
 * Response with a page UUID.
 */
export class IncidentPageUUIDResponse {
  /**
   * Page UUID data in a response.
   */
  "data": IncidentPageUUIDDataResponse;
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
      type: "IncidentPageUUIDDataResponse",
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
    return IncidentPageUUIDResponse.attributeTypeMap;
  }

  public constructor() {}
}
