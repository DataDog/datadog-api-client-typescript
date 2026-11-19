import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityAgentInvestigationCreateAttributes } from "./SecurityAgentInvestigationCreateAttributes";
import { SecurityAgentInvestigationType } from "./SecurityAgentInvestigationType";

/**
 * The investigation to start.
 */
export class SecurityAgentInvestigationCreateData {
  /**
   * Attributes of the investigation to start.
   */
  "attributes": SecurityAgentInvestigationCreateAttributes;
  /**
   * Type of the investigation resource.
   */
  "type": SecurityAgentInvestigationType;
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
      type: "SecurityAgentInvestigationCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityAgentInvestigationType",
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
    return SecurityAgentInvestigationCreateData.attributeTypeMap;
  }

  public constructor() {}
}
