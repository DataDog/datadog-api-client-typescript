import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TriggerRateLimit } from "./TriggerRateLimit";

/**
 * Trigger a workflow from an On-Call Page or On-Call Handover. For automatic triggering a handle must be configured and the workflow must be published.
 */
export class OnCallTrigger {
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
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OnCallTrigger.attributeTypeMap;
  }

  public constructor() {}
}
