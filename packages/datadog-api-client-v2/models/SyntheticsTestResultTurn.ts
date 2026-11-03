/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestResultBucketKeys } from "./SyntheticsTestResultBucketKeys";
import { SyntheticsTestResultTurnStep } from "./SyntheticsTestResultTurnStep";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
