import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORAGitInfo } from "./DORAGitInfo";

/**
 * The attributes of the deployment event.
 */
export class DORADeploymentObjectAttributes {
  /**
   * A list of user-defined tags. The tags must follow the `key:value` pattern. Up to 100 may be added per event.
   */
  "customTags"?: Array<string>;
  /**
   * Environment name to where the service was deployed.
   */
  "env"?: string;
  /**
   * Unix timestamp when the deployment finished.
   */
  "finishedAt": number;
  /**
   * Git info for DORA Metrics events.
   */
  "git"?: DORAGitInfo;
  /**
   * Service name.
   */
  "service": string;
  /**
   * Unix timestamp when the deployment started.
   */
  "startedAt": number;
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
      required: true,
      format: "int64",
    },
    git: {
      baseName: "git",
      type: "DORAGitInfo",
    },
    service: {
      baseName: "service",
      type: "string",
      required: true,
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
    return DORADeploymentObjectAttributes.attributeTypeMap;
  }

  public constructor() {}
}
