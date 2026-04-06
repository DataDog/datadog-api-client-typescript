import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AllocationExposureGuardrailTrigger } from "./AllocationExposureGuardrailTrigger";
import { AllocationExposureRolloutStep } from "./AllocationExposureRolloutStep";
import { RolloutOptions } from "./RolloutOptions";

/**
 * Progressive release details for a targeting rule allocation.
 */
export class AllocationExposureSchedule {
  /**
   * The absolute UTC start time for this schedule.
   */
  "absoluteStartTime"?: Date;
  /**
   * The targeting rule allocation ID this progressive rollout belongs to.
   */
  "allocationId": string;
  /**
   * The control variant ID used for experiment comparisons.
   */
  "controlVariantId"?: string;
  /**
   * The timestamp when the schedule was created.
   */
  "createdAt": Date;
  /**
   * Last guardrail action triggered for this schedule.
   */
  "guardrailTriggeredAction"?: string;
  /**
   * Guardrail trigger records for this schedule.
   */
  "guardrailTriggers": Array<AllocationExposureGuardrailTrigger>;
  /**
   * The unique identifier of the progressive rollout.
   */
  "id"?: string;
  /**
   * Applied progression options for a progressive rollout.
   */
  "rolloutOptions": RolloutOptions;
  /**
   * Ordered progression steps for exposure.
   */
  "rolloutSteps": Array<AllocationExposureRolloutStep>;
  /**
   * The timestamp when the schedule was last updated.
   */
  "updatedAt": Date;
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
    allocationId: {
      baseName: "allocation_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    controlVariantId: {
      baseName: "control_variant_id",
      type: "string",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    guardrailTriggeredAction: {
      baseName: "guardrail_triggered_action",
      type: "string",
    },
    guardrailTriggers: {
      baseName: "guardrail_triggers",
      type: "Array<AllocationExposureGuardrailTrigger>",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    rolloutOptions: {
      baseName: "rollout_options",
      type: "RolloutOptions",
      required: true,
    },
    rolloutSteps: {
      baseName: "rollout_steps",
      type: "Array<AllocationExposureRolloutStep>",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return AllocationExposureSchedule.attributeTypeMap;
  }

  public constructor() {}
}
