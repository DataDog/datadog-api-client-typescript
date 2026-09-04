import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DemBatchGetJourneysData } from "./DemBatchGetJourneysData";

/**
 * Request body for retrieving DEM journeys by test suite IDs.
 */
export class DemBatchGetJourneysRequest {
  /**
   * Data object for a batch get journeys request.
   */
  "data": DemBatchGetJourneysData;
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
      type: "DemBatchGetJourneysData",
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
    return DemBatchGetJourneysRequest.attributeTypeMap;
  }

  public constructor() {}
}
