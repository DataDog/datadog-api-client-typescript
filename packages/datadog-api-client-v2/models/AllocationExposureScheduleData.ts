/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AllocationExposureSchedule } from "./AllocationExposureSchedule";
import { AllocationExposureScheduleDataType } from "./AllocationExposureScheduleDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
