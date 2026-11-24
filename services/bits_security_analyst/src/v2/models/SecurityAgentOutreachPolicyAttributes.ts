import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityAgentOutreachMode } from "./SecurityAgentOutreachMode";
import { SecurityAgentOutreachRule } from "./SecurityAgentOutreachRule";

/**
 * Attributes of the organization's outreach policy.
 */
export class SecurityAgentOutreachPolicyAttributes {
  /**
   * Email domains user outreach can be sent to, at most 20. `null` when none are allowed.
   */
  "allowedDomains"?: Array<string>;
  /**
   * The organization's outreach mode. `off` disables user outreach. `manual` only sends outreach an analyst
   * triggers. `automated` auto-sends automated interviews for rules with outreach enabled, to users whose email
   * domain is allowed.
   */
  "mode": SecurityAgentOutreachMode;
  /**
   * The stored per-rule automation state, including rules that are explicitly disabled. `null` when the
   * organization has no stored rule state.
   */
  "rules"?: Array<SecurityAgentOutreachRule>;
  /**
   * Domains the caller could allow next: their own email domain when it is not allowed yet and is not a
   * consumer mailbox provider. Read-only, never stored. `null` when there is no suggestion.
   */
  "suggestedDomains"?: Array<string>;
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
    allowedDomains: {
      baseName: "allowed_domains",
      type: "Array<string>",
    },
    mode: {
      baseName: "mode",
      type: "SecurityAgentOutreachMode",
      required: true,
    },
    rules: {
      baseName: "rules",
      type: "Array<SecurityAgentOutreachRule>",
    },
    suggestedDomains: {
      baseName: "suggested_domains",
      type: "Array<string>",
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
    return SecurityAgentOutreachPolicyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
