import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TriggerRateLimit } from "./TriggerRateLimit";

/**
 * Trigger a workflow from a GitHub webhook. To trigger a workflow from GitHub, you must set a `webhookSecret`. In your GitHub Webhook Settings, set the Payload URL to "base_url"/api/v2/workflows/"workflow_id"/webhook?orgId="org_id", select application/json for the content type, and be highly recommend enabling SSL verification for security. The workflow must be published.
 */
export class GithubWebhookTrigger {
  /**
   * Defines a rate limit for a trigger.
   */
  "rateLimit"?: TriggerRateLimit;
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
    rateLimit: {
      baseName: "rateLimit",
      type: "TriggerRateLimit",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GithubWebhookTrigger.attributeTypeMap;
  }

  public constructor() {}
}
