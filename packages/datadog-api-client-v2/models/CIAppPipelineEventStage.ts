/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppCIError } from "./CIAppCIError";
import { CIAppGitInfo } from "./CIAppGitInfo";
import { CIAppHostInfo } from "./CIAppHostInfo";
import { CIAppPipelineEventStageLevel } from "./CIAppPipelineEventStageLevel";
import { CIAppPipelineEventStageStatus } from "./CIAppPipelineEventStageStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Details of a CI stage.
 */
export class CIAppPipelineEventStage {
  /**
   * A list of stage IDs that this stage depends on.
   */
  "dependencies"?: Array<string>;
  /**
   * Time when the stage run finished. The time format must be RFC3339.
   */
  "end": Date;
  /**
   * Contains information of the CI error.
   */
  "error"?: CIAppCIError;
  /**
   * If pipelines are triggered due to actions to a Git repository, then all payloads must contain this.
   * Note that either `tag` or `branch` has to be provided, but not both.
   */
  "git"?: CIAppGitInfo;
  /**
   * UUID for the stage. It has to be unique at least in the pipeline scope.
   */
  "id": string;
  /**
   * Used to distinguish between pipelines, stages, jobs and steps.
   */
  "level": CIAppPipelineEventStageLevel;
  /**
   * A list of user-defined metrics. The metrics must follow the `key:value` pattern and the value must be numeric.
   */
  "metrics"?: Array<string>;
  /**
   * The name for the stage.
   */
  "name": string;
  /**
   * Contains information of the host running the pipeline, stage, job, or step.
   */
  "node"?: CIAppHostInfo;
  /**
   * A map of key-value parameters or environment variables that were defined for the pipeline.
   */
  "parameters"?: { [key: string]: string };
  /**
   * The parent pipeline name.
   */
  "pipelineName": string;
  /**
   * The parent pipeline UUID.
   */
  "pipelineUniqueId": string;
  /**
   * The queue time in milliseconds, if applicable.
   */
  "queueTime"?: number;
  /**
   * Time when the stage run started (it should not include any queue time). The time format must be RFC3339.
   */
  "start": Date;
  /**
   * The final status of the stage.
   */
  "status": CIAppPipelineEventStageStatus;
  /**
   * A list of user-defined tags. The tags must follow the `key:value` pattern.
   */
  "tags"?: Array<string>;

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
    dependencies: {
      baseName: "dependencies",
      type: "Array<string>",
    },
    end: {
      baseName: "end",
      type: "Date",
      required: true,
      format: "date-time",
    },
    error: {
      baseName: "error",
      type: "CIAppCIError",
    },
    git: {
      baseName: "git",
      type: "CIAppGitInfo",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    level: {
      baseName: "level",
      type: "CIAppPipelineEventStageLevel",
      required: true,
    },
    metrics: {
      baseName: "metrics",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    node: {
      baseName: "node",
      type: "CIAppHostInfo",
    },
    parameters: {
      baseName: "parameters",
      type: "{ [key: string]: string; }",
    },
    pipelineName: {
      baseName: "pipeline_name",
      type: "string",
      required: true,
    },
    pipelineUniqueId: {
      baseName: "pipeline_unique_id",
      type: "string",
      required: true,
    },
    queueTime: {
      baseName: "queue_time",
      type: "number",
      format: "int64",
    },
    start: {
      baseName: "start",
      type: "Date",
      required: true,
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "CIAppPipelineEventStageStatus",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CIAppPipelineEventStage.attributeTypeMap;
  }

  public constructor() {}
}
