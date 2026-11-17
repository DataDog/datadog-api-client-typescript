import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityAgentOutreachRulesUpdateAttributes } from "./SecurityAgentOutreachRulesUpdateAttributes";
import { SecurityAgentOutreachRulesUpdateType } from "./SecurityAgentOutreachRulesUpdateType";

/**
 * The rules to upsert.
 */
export class SecurityAgentOutreachRulesUpdateRequestData {
  /**
   * Attributes of an outreach policy rules update request.
   */
  "attributes": SecurityAgentOutreachRulesUpdateAttributes;
  /**
   * Type of an outreach policy rules update request.
   */
  "type": SecurityAgentOutreachRulesUpdateType;
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
    attributes: {
      baseName: "attributes",
      type: "SecurityAgentOutreachRulesUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityAgentOutreachRulesUpdateType",
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
    return SecurityAgentOutreachRulesUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
