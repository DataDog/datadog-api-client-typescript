import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentHandleDataResponse } from "./IncidentHandleDataResponse";
import { IncidentHandleIncludedItemResponse } from "./IncidentHandleIncludedItemResponse";

/**
 * Response payload for a single incident handle, including the handle data and related resources.
 */
export class IncidentHandleResponse {
  /**
   * Data object representing an incident handle in a response.
   */
  "data": IncidentHandleDataResponse;
  /**
   * Included related resources
   */
  "included"?: Array<IncidentHandleIncludedItemResponse>;
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
      type: "IncidentHandleDataResponse",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentHandleIncludedItemResponse>",
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
    return IncidentHandleResponse.attributeTypeMap;
  }

  public constructor() {}
}
