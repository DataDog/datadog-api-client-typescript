import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORAGitInfo } from "./DORAGitInfo";

/**
 * The attributes of the incident event.
 */
export class DORAIncidentObjectAttributes {
  /**
   * A list of user-defined tags. The tags must follow the `key:value` pattern. Up to 100 may be added per event.
   */
  "customTags"?: Array<string>;
  /**
   * Environment name that was impacted by the incident.
   */
  "env"?: string;
  /**
   * Unix timestamp when the incident finished.
   */
  "finishedAt"?: number;
  /**
   * Git info for DORA Metrics events.
   */
  "git"?: DORAGitInfo;
  /**
   * Incident name.
   */
  "name"?: string;
  /**
   * Service names impacted by the incident.
   */
  "services"?: Array<string>;
  /**
   * Incident severity.
   */
  "severity"?: string;
  /**
   * Unix timestamp when the incident started.
   */
  "startedAt": number;
  /**
   * Name of the team owning the services impacted.
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
    return DORAIncidentObjectAttributes.attributeTypeMap;
  }

  public constructor() {}
}
