import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestResultBucketKeys } from "./SyntheticsTestResultBucketKeys";
import { SyntheticsTestResultTurnStep } from "./SyntheticsTestResultTurnStep";

/**
 * A turn in a goal-based browser test, grouping steps and reasoning.
 */
export class SyntheticsTestResultTurn {
  /**
   * Storage bucket keys for artifacts produced during a step or test.
   */
  "bucketKeys"?: SyntheticsTestResultBucketKeys;
  /**
   * Name of the turn.
   */
  "name"?: string;
  /**
   * Agent reasoning produced for this turn.
   */
  "reasoning"?: string;
  /**
   * Status of the turn (for example, `passed`, `failed`).
   */
  "status"?: string;
  /**
   * Steps executed during the turn.
   */
  "steps"?: Array<SyntheticsTestResultTurnStep>;
  /**
   * Unix timestamp (ms) of when the turn finished.
   */
  "turnFinishedAt"?: number;
  /**
   * Unix timestamp (ms) of when the turn started.
   */
  "turnStartedAt"?: number;
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
    bucketKeys: {
      baseName: "bucket_keys",
      type: "SyntheticsTestResultBucketKeys",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    reasoning: {
      baseName: "reasoning",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    steps: {
      baseName: "steps",
      type: "Array<SyntheticsTestResultTurnStep>",
    },
    turnFinishedAt: {
      baseName: "turn_finished_at",
      type: "number",
      format: "int64",
    },
    turnStartedAt: {
      baseName: "turn_started_at",
      type: "number",
      format: "int64",
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
    return SyntheticsTestResultTurn.attributeTypeMap;
  }

  public constructor() {}
}
