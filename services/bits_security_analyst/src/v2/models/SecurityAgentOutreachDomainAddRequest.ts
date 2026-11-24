import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityAgentOutreachDomainAddRequestData } from "./SecurityAgentOutreachDomainAddRequestData";

/**
 * Request to add one allowed email domain.
 */
export class SecurityAgentOutreachDomainAddRequest {
  /**
   * The email domain to allow.
   */
  "data": SecurityAgentOutreachDomainAddRequestData;
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
    data: {
      baseName: "data",
      type: "SecurityAgentOutreachDomainAddRequestData",
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
    return SecurityAgentOutreachDomainAddRequest.attributeTypeMap;
  }

  public constructor() {}
}
