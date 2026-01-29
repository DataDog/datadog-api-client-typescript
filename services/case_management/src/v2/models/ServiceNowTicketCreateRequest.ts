import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceNowTicketCreateData } from "./ServiceNowTicketCreateData";

/**
 * ServiceNow ticket creation request
 */
export class ServiceNowTicketCreateRequest {
  /**
   * ServiceNow ticket creation data
   */
  "data": ServiceNowTicketCreateData;
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
      type: "ServiceNowTicketCreateData",
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
    return ServiceNowTicketCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
