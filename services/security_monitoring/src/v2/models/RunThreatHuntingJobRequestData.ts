import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RunThreatHuntingJobRequestAttributes } from "./RunThreatHuntingJobRequestAttributes";
import { RunThreatHuntingJobRequestDataType } from "./RunThreatHuntingJobRequestDataType";

/**
 * Data for running a threat hunting job request.
 */
export class RunThreatHuntingJobRequestData {
  /**
   * Run a threat hunting job request.
   */
  "attributes"?: RunThreatHuntingJobRequestAttributes;
  /**
   * Type of data.
   */
  "type"?: RunThreatHuntingJobRequestDataType;
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
      type: "RunThreatHuntingJobRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "RunThreatHuntingJobRequestDataType",
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
    return RunThreatHuntingJobRequestData.attributeTypeMap;
  }

  public constructor() {}
}
