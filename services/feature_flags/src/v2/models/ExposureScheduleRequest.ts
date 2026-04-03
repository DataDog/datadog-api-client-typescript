import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExposureRolloutStepRequest } from "./ExposureRolloutStepRequest";
import { RolloutOptionsRequest } from "./RolloutOptionsRequest";

/**
 * Progressive release request payload.
 */
export class ExposureScheduleRequest {
  /**
   * The absolute UTC start time for this schedule.
   */
  "absoluteStartTime"?: Date;
  /**
   * The control variant ID used for experiment comparisons.
   */
  "controlVariantId"?: string;
  /**
   * The control variant key used during creation workflows.
   */
  "controlVariantKey"?: string;
  /**
   * The unique identifier of the progressive rollout.
   */
  "id"?: string;
  /**
   * Rollout options request payload.
   */
  "rolloutOptions": RolloutOptionsRequest;
  /**
   * Ordered progression steps for exposure.
   */
  "rolloutSteps": Array<ExposureRolloutStepRequest>;
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
    absoluteStartTime: {
      baseName: "absolute_start_time",
      type: "Date",
      format: "date-time",
    },
    controlVariantId: {
      baseName: "control_variant_id",
      type: "string",
    },
    controlVariantKey: {
      baseName: "control_variant_key",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    rolloutOptions: {
      baseName: "rollout_options",
      type: "RolloutOptionsRequest",
      required: true,
    },
    rolloutSteps: {
      baseName: "rollout_steps",
      type: "Array<ExposureRolloutStepRequest>",
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
    return ExposureScheduleRequest.attributeTypeMap;
  }

  public constructor() {}
}
