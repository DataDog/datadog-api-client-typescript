/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppCIError } from "./CIAppCIError";
import { CIAppGitInfo } from "./CIAppGitInfo";
import { CIAppHostInfo } from "./CIAppHostInfo";
import { CIAppPipelineEventMetricsItem } from "./CIAppPipelineEventMetricsItem";
import { CIAppPipelineEventParentPipeline } from "./CIAppPipelineEventParentPipeline";
import { CIAppPipelineEventPipelineLevel } from "./CIAppPipelineEventPipelineLevel";
import { CIAppPipelineEventPipelineStatus } from "./CIAppPipelineEventPipelineStatus";
import { CIAppPipelineEventPreviousPipeline } from "./CIAppPipelineEventPreviousPipeline";
import { CIAppPipelineEventTagsItem } from "./CIAppPipelineEventTagsItem";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Details of a finished pipeline.
*/
export class CIAppPipelineEventFinishedPipeline {
  /**
   * Time when the pipeline run finished. It cannot be older than 18 hours in the past from the current time. The time format must be RFC3339.
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
   * Whether or not the pipeline was triggered manually by the user.
  */
  "isManual"?: boolean;
  /**
   * Whether or not the pipeline was resumed after being blocked.
  */
  "isResumed"?: boolean;
  /**
   * Used to distinguish between pipelines, stages, jobs, and steps.
  */
  "level": CIAppPipelineEventPipelineLevel;
  /**
   * A list of user-defined metrics. The metrics must follow the `key:value` pattern and the value must be numeric.
  */
  "metrics"?: Array<string>;
  /**
   * Name of the pipeline. All pipeline runs for the builds should have the same name.
  */
  "name": string;
  /**
   * Contains information of the host running the pipeline, stage, job, or step.
  */
  "node"?: CIAppHostInfo;
  /**
   * A map of key-value parameters or environment variables that were defined for the pipeline.
  */
  "parameters"?: { [key: string]: string; };
  /**
   * If the pipeline is triggered as child of another pipeline, this should contain the details of the parent pipeline.
  */
  "parentPipeline"?: CIAppPipelineEventParentPipeline;
  /**
   * Whether or not the pipeline was a partial retry of a previous attempt. A partial retry is one
   * which only runs a subset of the original jobs.
  */
  "partialRetry": boolean;
  /**
   * Any ID used in the provider to identify the pipeline run even if it is not unique across retries.
   * If the `pipeline_id` is unique, then both `unique_id` and `pipeline_id` can be set to the same value.
  */
  "pipelineId"?: string;
  /**
   * If the pipeline is a retry, this should contain the details of the previous attempt.
  */
  "previousAttempt"?: CIAppPipelineEventPreviousPipeline;
  /**
   * The queue time in milliseconds, if applicable.
  */
  "queueTime"?: number;
  /**
   * Time when the pipeline run started (it should not include any queue time). The time format must be RFC3339.
  */
  "start": Date;
  /**
   * The final status of the pipeline.
  */
  "status": CIAppPipelineEventPipelineStatus;
  /**
   * A list of user-defined tags. The tags must follow the `key:value` pattern.
  */
  "tags"?: Array<string>;
  /**
   * UUID of the pipeline run. The ID has to be unique across retries and pipelines,
   * including partial retries.
  */
  "uniqueId": string;
  /**
   * The URL to look at the pipeline in the CI provider UI.
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
    "end": {
      "baseName": "end",
      "type": "Date",
      "required": true,
      "format": "date-time",
    },
    "error": {
      "baseName": "error",
      "type": "CIAppCIError",
    },
    "git": {
      "baseName": "git",
      "type": "CIAppGitInfo",
    },
    "isManual": {
      "baseName": "is_manual",
      "type": "boolean",
    },
    "isResumed": {
      "baseName": "is_resumed",
      "type": "boolean",
    },
    "level": {
      "baseName": "level",
      "type": "CIAppPipelineEventPipelineLevel",
      "required": true,
    },
    "metrics": {
      "baseName": "metrics",
      "type": "Array<string>",
    },
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
    },
    "node": {
      "baseName": "node",
      "type": "CIAppHostInfo",
    },
    "parameters": {
      "baseName": "parameters",
      "type": "{ [key: string]: string; }",
    },
    "parentPipeline": {
      "baseName": "parent_pipeline",
      "type": "CIAppPipelineEventParentPipeline",
    },
    "partialRetry": {
      "baseName": "partial_retry",
      "type": "boolean",
      "required": true,
    },
    "pipelineId": {
      "baseName": "pipeline_id",
      "type": "string",
    },
    "previousAttempt": {
      "baseName": "previous_attempt",
      "type": "CIAppPipelineEventPreviousPipeline",
    },
    "queueTime": {
      "baseName": "queue_time",
      "type": "number",
      "format": "int64",
    },
    "start": {
      "baseName": "start",
      "type": "Date",
      "required": true,
      "format": "date-time",
    },
    "status": {
      "baseName": "status",
      "type": "CIAppPipelineEventPipelineStatus",
      "required": true,
    },
    "tags": {
      "baseName": "tags",
      "type": "Array<string>",
    },
    "uniqueId": {
      "baseName": "unique_id",
      "type": "string",
      "required": true,
    },
    "url": {
      "baseName": "url",
      "type": "string",
      "required": true,
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return CIAppPipelineEventFinishedPipeline.attributeTypeMap;

  }

  public constructor() {











  }
}









