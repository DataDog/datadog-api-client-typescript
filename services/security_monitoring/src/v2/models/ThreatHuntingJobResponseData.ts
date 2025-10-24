import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ThreatHuntingJobDataType } from "./ThreatHuntingJobDataType";
import { ThreatHuntingJobResponseAttributes } from "./ThreatHuntingJobResponseAttributes";

/**
 * Threat hunting job response data.
 */
export class ThreatHuntingJobResponseData {
  /**
   * Threat hunting job attributes.
   */
  "attributes"?: ThreatHuntingJobResponseAttributes;
  /**
   * ID of the job.
   */
  "id"?: string;
  /**
   * Type of payload.
   */
  "type"?: ThreatHuntingJobDataType;
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
      type: "ThreatHuntingJobResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ThreatHuntingJobDataType",
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
    return ThreatHuntingJobResponseData.attributeTypeMap;
  }

  public constructor() {}
}
