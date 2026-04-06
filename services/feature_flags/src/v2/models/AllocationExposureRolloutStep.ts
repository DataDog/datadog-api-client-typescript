import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Exposure progression step details.
 */
export class AllocationExposureRolloutStep {
  /**
   * The progressive rollout ID this step belongs to.
   */
  "allocationExposureScheduleId": string;
  /**
   * The timestamp when the progression step was created.
   */
  "createdAt": Date;
  /**
   * The exposure ratio for this step.
   */
  "exposureRatio": number;
  /**
   * Logical index grouping related steps.
   */
  "groupedStepIndex": number;
  /**
   * The unique identifier of the progression step.
   */
  "id": string;
  /**
   * Step duration in milliseconds.
   */
  "intervalMs"?: number;
  /**
   * Whether this step represents a pause record.
   */
  "isPauseRecord": boolean;
  /**
   * Sort order for the progression step.
   */
  "orderPosition": number;
  /**
   * The timestamp when the progression step was last updated.
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
    allocationExposureScheduleId: {
      baseName: "allocation_exposure_schedule_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    exposureRatio: {
      baseName: "exposure_ratio",
      type: "number",
      required: true,
      format: "double",
    },
    groupedStepIndex: {
      baseName: "grouped_step_index",
      type: "number",
      required: true,
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    intervalMs: {
      baseName: "interval_ms",
      type: "number",
      format: "int64",
    },
    isPauseRecord: {
      baseName: "is_pause_record",
      type: "boolean",
      required: true,
    },
    orderPosition: {
      baseName: "order_position",
      type: "number",
      required: true,
      format: "int64",
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
    return AllocationExposureRolloutStep.attributeTypeMap;
  }

  public constructor() {}
}
