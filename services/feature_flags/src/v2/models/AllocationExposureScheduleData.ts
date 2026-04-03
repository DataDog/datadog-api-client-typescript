import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AllocationExposureSchedule } from "./AllocationExposureSchedule";
import { AllocationExposureScheduleDataType } from "./AllocationExposureScheduleDataType";

/**
 * Data wrapper for progressive rollout schedule responses.
 */
export class AllocationExposureScheduleData {
  /**
   * Progressive release details for a targeting rule allocation.
   */
  "attributes": AllocationExposureSchedule;
  /**
   * The unique identifier of the progressive rollout.
   */
  "id": string;
  /**
   * The resource type for progressive rollout schedules.
   */
  "type": AllocationExposureScheduleDataType;
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
      type: "AllocationExposureSchedule",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "AllocationExposureScheduleDataType",
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
    return AllocationExposureScheduleData.attributeTypeMap;
  }

  public constructor() {}
}
