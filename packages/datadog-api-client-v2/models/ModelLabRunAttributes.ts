/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ModelLabMetricSummary } from "./ModelLabMetricSummary";
import { ModelLabRunParam } from "./ModelLabRunParam";
import { ModelLabRunStatus } from "./ModelLabRunStatus";
import { ModelLabTag } from "./ModelLabTag";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a Model Lab run.
 */
export class ModelLabRunAttributes {
  /**
   * The date and time the run completed.
   */
  "completedAt"?: Date;
  /**
   * The date and time the run was created.
   */
  "createdAt": Date;
  /**
   * The date and time the run was soft-deleted.
   */
  "deletedAt"?: Date;
  /**
   * Whether a descendant run matched the applied filters.
   */
  "descendantMatch": boolean;
  /**
   * A description of the run.
   */
  "description": string;
  /**
   * The duration of the run in seconds.
   */
  "duration"?: number;
  /**
   * An optional external URL associated with the run.
   */
  "externalUrl"?: string;
  /**
   * Whether the run has child runs.
   */
  "hasChildren": boolean;
  /**
   * Whether the run is pinned by the current user.
   */
  "isPinned": boolean;
  /**
   * Summary statistics for metrics recorded during the run.
   */
  "metricSummaries": Array<ModelLabMetricSummary>;
  /**
   * The MLflow artifact storage location for this run.
   */
  "mlflowArtifactLocation": string;
  /**
   * The name of the run.
   */
  "name": string;
  /**
   * The UUID of the run owner.
   */
  "ownerId"?: string;
  /**
   * The list of parameters used for the run.
   */
  "params": Array<ModelLabRunParam> | null;
  /**
   * The ID of the project this run belongs to.
   */
  "projectId": number;
  /**
   * The date and time the run started.
   */
  "startedAt": Date;
  /**
   * The status of a Model Lab run.
   */
  "status": ModelLabRunStatus;
  /**
   * The list of tags associated with the run.
   */
  "tags": Array<ModelLabTag>;
  /**
   * The date and time the run was last updated.
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
    completedAt: {
      baseName: "completed_at",
      type: "Date",
      format: "date-time",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    deletedAt: {
      baseName: "deleted_at",
      type: "Date",
      format: "date-time",
    },
    descendantMatch: {
      baseName: "descendant_match",
      type: "boolean",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    duration: {
      baseName: "duration",
      type: "number",
      format: "double",
    },
    externalUrl: {
      baseName: "external_url",
      type: "string",
    },
    hasChildren: {
      baseName: "has_children",
      type: "boolean",
      required: true,
    },
    isPinned: {
      baseName: "is_pinned",
      type: "boolean",
      required: true,
    },
    metricSummaries: {
      baseName: "metric_summaries",
      type: "Array<ModelLabMetricSummary>",
      required: true,
    },
    mlflowArtifactLocation: {
      baseName: "mlflow_artifact_location",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    ownerId: {
      baseName: "owner_id",
      type: "string",
    },
    params: {
      baseName: "params",
      type: "Array<ModelLabRunParam>",
      required: true,
    },
    projectId: {
      baseName: "project_id",
      type: "number",
      required: true,
      format: "int64",
    },
    startedAt: {
      baseName: "started_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "ModelLabRunStatus",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<ModelLabTag>",
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
    return ModelLabRunAttributes.attributeTypeMap;
  }

  public constructor() {}
}
