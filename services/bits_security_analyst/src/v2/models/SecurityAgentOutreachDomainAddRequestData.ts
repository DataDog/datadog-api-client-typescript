import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityAgentOutreachDomainAddRequestDataAttributes } from "./SecurityAgentOutreachDomainAddRequestDataAttributes";
import { SecurityAgentOutreachDomainAddType } from "./SecurityAgentOutreachDomainAddType";

/**
 * The email domain to allow.
 */
export class SecurityAgentOutreachDomainAddRequestData {
  /**
   * The email domain to allow.
   */
  "attributes": SecurityAgentOutreachDomainAddRequestDataAttributes;
  /**
   * Type of an allowed outreach domain add request.
   */
  "type": SecurityAgentOutreachDomainAddType;
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
      type: "SecurityAgentOutreachDomainAddRequestDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityAgentOutreachDomainAddType",
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
    return SecurityAgentOutreachDomainAddRequestData.attributeTypeMap;
  }

  public constructor() {}
}
