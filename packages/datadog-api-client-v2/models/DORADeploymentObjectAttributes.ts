/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DORADeploymentAveragedMetrics } from "./DORADeploymentAveragedMetrics";
import { DORADeploymentRemediation } from "./DORADeploymentRemediation";
import { DORAGitInfoResponse } from "./DORAGitInfoResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of the deployment event.
 */
export class DORADeploymentObjectAttributes {
  /**
   * AI-assisted development metrics aggregated across the commits and pull requests included in the deployment.
   */
  "ai"?: { [key: string]: any };
  /**
   * Averaged DORA and delivery metrics computed across the commits and pull requests included in the deployment.
   */
  "averagedMetrics"?: DORADeploymentAveragedMetrics;
  /**
   * Whether the deployment is flagged as a change failure.
   */
  "changeFailure"?: boolean;
  /**
   * The list of commits included in the deployment.
   */
  "commits"?: Array<{ [key: string]: any }>;
  /**
   * The time when the deployment event was recorded.
   */
  "createdAt"?: Date;
  /**
   * A map of custom metadata associated with the deployment.
   */
  "custom"?: { [key: string]: any };
  /**
   * A list of user-defined tags. The tags must follow the `key:value` pattern. Up to 100 may be added per event.
   */
  "customTags"?: Array<string>;
  /**
   * The type of the deployment.
   */
  "deploymentType"?: string;
  /**
   * The duration of the deployment.
   */
  "duration"?: number;
  /**
   * Environment name to where the service was deployed.
   */
  "env"?: string;
  /**
   * The time when the deployment finished.
   */
  "finishedAt"?: Date;
  /**
   * Git info returned by DORA Metrics events.
   */
  "git"?: DORAGitInfoResponse;
  /**
   * The number of commits associated with the deployment.
   */
  "numberOfCommits"?: number;
  /**
   * The number of pull requests associated with the deployment.
   */
  "numberOfPullRequests"?: number;
  /**
   * The list of pull requests included in the deployment.
   */
  "pullRequests"?: Array<{ [key: string]: any }>;
  /**
   * The recovery time, in seconds, for a deployment flagged as a change failure.
   */
  "recoveryTimeSec"?: number;
  /**
   * Remediation details for a deployment that was flagged as a change failure.
   */
  "remediation"?: DORADeploymentRemediation;
  /**
   * Service name.
   */
  "service": string;
  /**
   * The source of the deployment event.
   */
  "source"?: string;
  /**
   * The time when the deployment started.
   */
  "startedAt": Date;
  /**
   * Name of the team owning the deployed service.
   */
  "team"?: string;
  /**
   * Version to correlate with APM Deployment Tracking.
   */
  "version"?: string;

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
    ai: {
      baseName: "ai",
      type: "{ [key: string]: any; }",
    },
    averagedMetrics: {
      baseName: "averaged_metrics",
      type: "DORADeploymentAveragedMetrics",
    },
    changeFailure: {
      baseName: "change_failure",
      type: "boolean",
    },
    commits: {
      baseName: "commits",
      type: "Array<{ [key: string]: any; }>",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    custom: {
      baseName: "custom",
      type: "{ [key: string]: any; }",
    },
    customTags: {
      baseName: "custom_tags",
      type: "Array<string>",
    },
    deploymentType: {
      baseName: "deployment_type",
      type: "string",
    },
    duration: {
      baseName: "duration",
      type: "number",
      format: "int64",
    },
    env: {
      baseName: "env",
      type: "string",
    },
    finishedAt: {
      baseName: "finished_at",
      type: "Date",
      format: "date-time",
    },
    git: {
      baseName: "git",
      type: "DORAGitInfoResponse",
    },
    numberOfCommits: {
      baseName: "number_of_commits",
      type: "number",
      format: "int64",
    },
    numberOfPullRequests: {
      baseName: "number_of_pull_requests",
      type: "number",
      format: "int64",
    },
    pullRequests: {
      baseName: "pull_requests",
      type: "Array<{ [key: string]: any; }>",
    },
    recoveryTimeSec: {
      baseName: "recovery_time_sec",
      type: "number",
      format: "int64",
    },
    remediation: {
      baseName: "remediation",
      type: "DORADeploymentRemediation",
    },
    service: {
      baseName: "service",
      type: "string",
      required: true,
    },
    source: {
      baseName: "source",
      type: "string",
    },
    startedAt: {
      baseName: "started_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    team: {
      baseName: "team",
      type: "string",
    },
    version: {
      baseName: "version",
      type: "string",
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
    return DORADeploymentObjectAttributes.attributeTypeMap;
  }

  public constructor() {}
}
