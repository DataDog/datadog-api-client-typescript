import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Rollout step request payload.
 */
export class ExposureRolloutStepRequest {
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
  "id"?: string;
  /**
   * Step duration in milliseconds.
   */
  "intervalMs"?: number;
  /**
   * Whether this step represents a pause record.
   */
  "isPauseRecord": boolean;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ExposureRolloutStepRequest.attributeTypeMap;
  }

  public constructor() {}
}
