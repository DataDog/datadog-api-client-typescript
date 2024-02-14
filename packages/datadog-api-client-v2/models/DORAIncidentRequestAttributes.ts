/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DORAGitInfo } from "./DORAGitInfo";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes to create a DORA incident event.
 */
export class DORAIncidentRequestAttributes {
  /**
   * Environment name that was impacted by the incident.
   */
  "env"?: string;
  /**
   * Unix timestamp in nanoseconds when the incident finished. It should not be older than 3 hours.
   */
  "finishedAt"?: number;
  /**
   * Git info for DORA Metrics events.
   */
  "git"?: DORAGitInfo;
  /**
   * Incident ID. Required to update a previously sent incident.
   */
  "id"?: string;
  /**
   * Incident name.
   */
  "name"?: string;
  /**
   * Service names impacted by the incident. If possible, use names registered in the Service Catalog. Required when the team field is not provided.
   */
  "services"?: Array<string>;
  /**
   * Incident severity.
   */
  "severity"?: string;
  /**
   * Unix timestamp in nanoseconds when the incident started.
   */
  "startedAt": number;
  /**
   * Name of the team owning the services impacted. If possible, use team handles registered in Datadog. Required when the services field is not provided.
   */
  "team"?: string;
  /**
   * Version to correlate with [APM Deployment Tracking](https://docs.datadoghq.com/tracing/services/deployment_tracking/).
   */
  "version"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    env: {
      baseName: "env",
      type: "string",
    },
    finishedAt: {
      baseName: "finished_at",
      type: "number",
      format: "int64",
    },
    git: {
      baseName: "git",
      type: "DORAGitInfo",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    services: {
      baseName: "services",
      type: "Array<string>",
    },
    severity: {
      baseName: "severity",
      type: "string",
    },
    startedAt: {
      baseName: "started_at",
      type: "number",
      required: true,
      format: "int64",
    },
    team: {
      baseName: "team",
      type: "string",
    },
    version: {
      baseName: "version",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DORAIncidentRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
