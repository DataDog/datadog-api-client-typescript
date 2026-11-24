import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityAgentOutreachMode } from "./SecurityAgentOutreachMode";

/**
 * Attributes of a mode-only policy update.
 */
export class SecurityAgentOutreachModeAttributes {
  /**
   * The organization's outreach mode. `off` disables user outreach. `manual` only sends outreach an analyst
   * triggers. `automated` auto-sends automated interviews for rules with outreach enabled, to users whose email
   * domain is allowed.
   */
  "mode": SecurityAgentOutreachMode;
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
    mode: {
      baseName: "mode",
      type: "SecurityAgentOutreachMode",
      required: true,
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
    return SecurityAgentOutreachModeAttributes.attributeTypeMap;
  }

  public constructor() {}
}
