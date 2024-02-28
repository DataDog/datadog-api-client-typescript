/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppCIError } from "./CIAppCIError";
import { CIAppGitInfo } from "./CIAppGitInfo";
import { CIAppHostInfo } from "./CIAppHostInfo";
import { CIAppPipelineEventStepLevel } from "./CIAppPipelineEventStepLevel";
import { CIAppPipelineEventStepStatus } from "./CIAppPipelineEventStepStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Details of a CI step.
 */
export class CIAppPipelineEventStep {
  /**
   * Time when the step run finished. The time format must be RFC3339.
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
   * UUID for the step. It has to be unique within each pipeline execution.
   */
  "id": string;
  /**
   * The parent job UUID (if applicable).
   */
  "jobId"?: string;
  /**
   * The parent job name (if applicable).
   */
  "jobName"?: string;
  /**
   * Used to distinguish between pipelines, stages, jobs and steps.
   */
  "level": CIAppPipelineEventStepLevel;
  /**
   * A list of user-defined metrics. The metrics must follow the `key:value` pattern and the value must be numeric.
   */
  "metrics"?: Array<string>;
  /**
   * The name for the step.
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
   * The parent stage UUID (if applicable).
   */
  "stageId"?: string;
  /**
   * The parent stage name (if applicable).
   */
  "stageName"?: string;
  /**
   * Time when the step run started. The time format must be RFC3339.
   */
  "start": Date;
  /**
   * The final status of the step.
   */
  "status": CIAppPipelineEventStepStatus;
  /**
   * A list of user-defined tags. The tags must follow the `key:value` pattern.
   */
  "tags"?: Array<string>;
  /**
   * The URL to look at the step in the CI provider UI.
   */
  "url"?: string;

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
    jobId: {
      baseName: "job_id",
      type: "string",
    },
    jobName: {
      baseName: "job_name",
      type: "string",
    },
    level: {
      baseName: "level",
      type: "CIAppPipelineEventStepLevel",
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
    stageId: {
      baseName: "stage_id",
      type: "string",
    },
    stageName: {
      baseName: "stage_name",
      type: "string",
    },
    start: {
      baseName: "start",
      type: "Date",
      required: true,
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "CIAppPipelineEventStepStatus",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    url: {
      baseName: "url",
      type: "string",
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
    return CIAppPipelineEventStep.attributeTypeMap;
  }

  public constructor() {}
}
