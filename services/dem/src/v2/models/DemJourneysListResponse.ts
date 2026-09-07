import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DemJourneyResponseData } from "./DemJourneyResponseData";

/**
 * Response body for a list of DEM journeys.
 */
export class DemJourneysListResponse {
  /**
   * List of DEM journey data objects.
   */
  "data": Array<DemJourneyResponseData>;
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
      type: "Array<DemJourneyResponseData>",
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
    return DemJourneysListResponse.attributeTypeMap;
  }

  public constructor() {}
}
