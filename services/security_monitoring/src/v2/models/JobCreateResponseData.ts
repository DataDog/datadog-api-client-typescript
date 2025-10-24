import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ThreatHuntingJobDataType } from "./ThreatHuntingJobDataType";

/**
 * The definition of `JobCreateResponseData` object.
 */
export class JobCreateResponseData {
  /**
   * ID of the created job.
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
    return JobCreateResponseData.attributeTypeMap;
  }

  public constructor() {}
}
