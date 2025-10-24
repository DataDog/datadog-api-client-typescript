import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConvertJobResultsToSignalsData } from "./ConvertJobResultsToSignalsData";

/**
 * Request for converting threat hunting job results to signals.
 */
export class ConvertJobResultsToSignalsRequest {
  /**
   * Data for converting threat hunting job results to signals.
   */
  "data"?: ConvertJobResultsToSignalsData;
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
      type: "ConvertJobResultsToSignalsData",
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
    return ConvertJobResultsToSignalsRequest.attributeTypeMap;
  }

  public constructor() {}
}
