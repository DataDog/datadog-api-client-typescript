import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORAGitInfo } from "./DORAGitInfo";

/**
 * Attributes to create a DORA failure event.
 */
export class DORAFailureRequestAttributes {
  /**
   * A list of user-defined tags. The tags must follow the `key:value` pattern. Up to 100 may be added per event.
   */
  "customTags"?: Array<string>;
  /**
   * Environment name that was impacted by the failure.
   */
  "env"?: string;
  /**
   * Unix timestamp when the failure finished. It must be in nanoseconds, milliseconds, or seconds, and it should not be older than 1 hour.
   */
  "finishedAt"?: number;
  /**
   * Git info for DORA Metrics events.
   */
  "git"?: DORAGitInfo;
  /**
   * Failure ID. Must have at least 16 characters. Required to update a previously sent failure.
   */
  "id"?: string;
  /**
   * Failure name.
   */
  "name"?: string;
  /**
   * Service names impacted by the failure. If possible, use names registered in the Service Catalog. Required when the team field is not provided.
   */
  "services"?: Array<string>;
  /**
   * Failure severity.
   */
  "severity"?: string;
  /**
   * Unix timestamp when the failure started. It must be in nanoseconds, milliseconds, or seconds.
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
    customTags: {
      baseName: "custom_tags",
      type: "Array<string>",
    },
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DORAFailureRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
