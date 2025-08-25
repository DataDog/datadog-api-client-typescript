/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DORACustomTagsItem } from "./DORACustomTagsItem";
import { DORAGitInfo } from "./DORAGitInfo";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes to create a DORA deployment event.
*/
export class DORADeploymentRequestAttributes {
  /**
   * A list of user-defined tags. The tags must follow the `key:value` pattern. Up to 100 may be added per event.
  */
  "customTags"?: Array<string>;
  /**
   * Environment name to where the service was deployed.
  */
  "env"?: string;
  /**
   * Unix timestamp when the deployment finished. It must be in nanoseconds, milliseconds, or seconds, and it should not be older than 1 hour.
  */
  "finishedAt": number;
  /**
   * Git info for DORA Metrics events.
  */
  "git"?: DORAGitInfo;
  /**
   * Deployment ID.
  */
  "id"?: string;
  /**
   * Service name.
  */
  "service": string;
  /**
   * Unix timestamp when the deployment started. It must be in nanoseconds, milliseconds, or seconds.
  */
  "startedAt": number;
  /**
   * Name of the team owning the deployed service. If not provided, this is automatically populated with the team associated with the service in the Service Catalog.
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
    "customTags": {
      "baseName": "custom_tags",
      "type": "Array<string>",
    },
    "env": {
      "baseName": "env",
      "type": "string",
    },
    "finishedAt": {
      "baseName": "finished_at",
      "type": "number",
      "required": true,
      "format": "int64",
    },
    "git": {
      "baseName": "git",
      "type": "DORAGitInfo",
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "service": {
      "baseName": "service",
      "type": "string",
      "required": true,
    },
    "startedAt": {
      "baseName": "started_at",
      "type": "number",
      "required": true,
      "format": "int64",
    },
    "team": {
      "baseName": "team",
      "type": "string",
    },
    "version": {
      "baseName": "version",
      "type": "string",
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




    return DORADeploymentRequestAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









