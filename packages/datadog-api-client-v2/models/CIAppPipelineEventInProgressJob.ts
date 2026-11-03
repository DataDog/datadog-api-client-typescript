/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppCIError } from "./CIAppCIError";
import { CIAppGitInfo } from "./CIAppGitInfo";
import { CIAppHostInfo } from "./CIAppHostInfo";
import { CIAppPipelineEventJobInProgressStatus } from "./CIAppPipelineEventJobInProgressStatus";
import { CIAppPipelineEventJobLevel } from "./CIAppPipelineEventJobLevel";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Details of a running CI job.
 */
export class CIAppPipelineEventInProgressJob {
  /**
   * A list of job IDs that this job depends on.
   */
  "dependencies"?: Array<string>;
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
   * The UUID for the job. It must match the ID of the corresponding finished job.
   */
  "id": string;
  /**
   * Used to distinguish between pipelines, stages, jobs, and steps.
   */
  "level": CIAppPipelineEventJobLevel;
  /**
   * A list of user-defined metrics. The metrics must follow the `key:value` pattern and the value must be numeric.
   */
  "metrics"?: Array<string>;
  /**
   * The name for the job.
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
   * The parent stage UUID (if applicable).
   */
  "stageId"?: string;
  /**
   * The parent stage name (if applicable).
   */
  "stageName"?: string;
  /**
   * Time when the job run instance started (it should not include any queue time).
   * The time format must be RFC3339.
   */
  "start": Date;
  /**
   * The in-progress status of the job.
   */
  "status": CIAppPipelineEventJobInProgressStatus;
  /**
   * A list of user-defined tags. The tags must follow the `key:value` pattern.
   */
  "tags"?: Array<string>;
  /**
   * The URL to look at the job in the CI provider UI.
   */
  "url": string;

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
      type: "CIAppPipelineEventJobLevel",
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
      type: "CIAppPipelineEventJobInProgressStatus",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    url: {
      baseName: "url",
      type: "string",
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
    return CIAppPipelineEventInProgressJob.attributeTypeMap;
  }

  public constructor() {}
}
