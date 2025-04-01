/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GithubWebhookTrigger } from "./GithubWebhookTrigger";
import { StartStepNamesItem } from "./StartStepNamesItem";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Schema for a GitHub webhook-based trigger.
*/
export class GithubWebhookTriggerWrapper {
  /**
   * Trigger a workflow from a GitHub webhook. To trigger a workflow from GitHub, you must set a `webhookSecret`. In your GitHub Webhook Settings, set the Payload URL to "base_url"/api/v2/workflows/"workflow_id"/webhook?orgId="org_id", select application/json for the content type, and be highly recommend enabling SSL verification for security. The workflow must be published.
  */
  "githubWebhookTrigger": GithubWebhookTrigger;
  /**
   * A list of steps that run first after a trigger fires.
  */
  "startStepNames"?: Array<string>;

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
    "githubWebhookTrigger": {
      "baseName": "githubWebhookTrigger",
      "type": "GithubWebhookTrigger",
      "required": true,
    },
    "startStepNames": {
      "baseName": "startStepNames",
      "type": "Array<string>",
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




    return GithubWebhookTriggerWrapper.attributeTypeMap;

  }

  public constructor() {











  }
}









