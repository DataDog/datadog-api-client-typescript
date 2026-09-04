import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DemJourneyCreateData } from "./DemJourneyCreateData";

/**
 * Request body for creating or updating a DEM journey.
 */
export class DemJourneyCreateRequest {
  /**
   * Data object for a DEM journey create or update request.
   */
  "data": DemJourneyCreateData;
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
      type: "DemJourneyCreateData",
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
    return DemJourneyCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
