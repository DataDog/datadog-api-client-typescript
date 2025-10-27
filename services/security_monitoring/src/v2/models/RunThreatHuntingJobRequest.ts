import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RunThreatHuntingJobRequestData } from "./RunThreatHuntingJobRequestData";

/**
 * Run a threat hunting job request.
 */
export class RunThreatHuntingJobRequest {
  /**
   * Data for running a threat hunting job request.
   */
  "data"?: RunThreatHuntingJobRequestData;
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
      type: "RunThreatHuntingJobRequestData",
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
    return RunThreatHuntingJobRequest.attributeTypeMap;
  }

  public constructor() {}
}
