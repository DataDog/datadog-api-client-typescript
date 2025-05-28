/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DORAGitInfo } from "./DORAGitInfo";

import { HttpFile } from "../../datadog-api-client-common/http/http";

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
   * Unix timestamp when the incident finished. It must be in nanoseconds, milliseconds, or seconds, and it should not be older than 1 hour.
  */
  "finishedAt"?: number;
  /**
   * Git info for DORA Metrics events.
  */
  "git"?: DORAGitInfo;
  /**
   * Incident ID. Must have at least 16 characters. Required to update a previously sent incident.
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
   * Unix timestamp when the incident started. It must be in nanoseconds, milliseconds, or seconds.
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
    "env": {
      "baseName": "env",
      "type": "string",
    },
    "finishedAt": {
      "baseName": "finished_at",
      "type": "number",
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
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "services": {
      "baseName": "services",
      "type": "Array<string>",
    },
    "severity": {
      "baseName": "severity",
      "type": "string",
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




    return DORAIncidentRequestAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









