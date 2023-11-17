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
   * Unix timestamp in nanoseconds when the deployment finished. It should not be older than 3 hours.
   */
  "finishedAt"?: number;
  /**
   * Git info for DORA Metrics events.
   */
  "git"?: DORAGitInfo;
  /**
   * Incident ID
   */
  "id"?: string;
  /**
   * Incident name.
   */
  "name"?: string;
  /**
   * Service name from a service available in the Service Catalog.
   */
  "service": string;
  /**
   * Incident severity.
   */
  "severity"?: string;
  /**
   * Unix timestamp in nanoseconds when the deployment started.
   */
  "startedAt": number;
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
    service: {
      baseName: "service",
      type: "string",
      required: true,
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
