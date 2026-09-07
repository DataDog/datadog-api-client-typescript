import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DemJourneyResponseAttributes } from "./DemJourneyResponseAttributes";
import { DemJourneyType } from "./DemJourneyType";

/**
 * Data object in a DEM journey response.
 */
export class DemJourneyResponseData {
  /**
   * Attributes returned in a DEM journey response.
   */
  "attributes": DemJourneyResponseAttributes;
  /**
   * The unique identifier of the DEM journey.
   */
  "id": string;
  /**
   * The type identifier for DEM journeys.
   */
  "type": DemJourneyType;
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
    attributes: {
      baseName: "attributes",
      type: "DemJourneyResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DemJourneyType",
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
    return DemJourneyResponseData.attributeTypeMap;
  }

  public constructor() {}
}
