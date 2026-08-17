/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Progress information for a single step of a patterns run.
 */
export class LLMObsPatternsActivityProgress {
  /**
   * Name of the step.
   */
  "name": string;
  /**
   * Number of completed work items.
   */
  "nbCompleted"?: number;
  /**
   * Timestamp when the step started. Null if the step has not started.
   */
  "startedAt"?: Date;
  /**
   * Status of the step.
   */
  "status": string;
  /**
   * Label of the current sub-step.
   */
  "subStep"?: string;
  /**
   * Total number of work items.
   */
  "target"?: number;

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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    nbCompleted: {
      baseName: "nb_completed",
      type: "number",
      format: "int64",
    },
    startedAt: {
      baseName: "started_at",
      type: "Date",
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "string",
      required: true,
    },
    subStep: {
      baseName: "sub_step",
      type: "string",
    },
    target: {
      baseName: "target",
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
    return LLMObsPatternsActivityProgress.attributeTypeMap;
  }

  public constructor() {}
}
