import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RunHistoricalJobRequestData } from "./RunHistoricalJobRequestData";

/**
 * Run a historical job request.
 */
export class RunHistoricalJobRequest {
  /**
   * Data for running a historical job request.
   */
  "data"?: RunHistoricalJobRequestData;
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
      type: "RunHistoricalJobRequestData",
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
    return RunHistoricalJobRequest.attributeTypeMap;
  }

  public constructor() {}
}
