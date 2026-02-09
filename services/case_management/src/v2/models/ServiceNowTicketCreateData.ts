import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceNowTicketCreateAttributes } from "./ServiceNowTicketCreateAttributes";
import { ServiceNowTicketResourceType } from "./ServiceNowTicketResourceType";

/**
 * ServiceNow ticket creation data
 */
export class ServiceNowTicketCreateData {
  /**
   * ServiceNow ticket creation attributes
   */
  "attributes": ServiceNowTicketCreateAttributes;
  /**
   * ServiceNow ticket resource type
   */
  "type": ServiceNowTicketResourceType;
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
      type: "ServiceNowTicketCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ServiceNowTicketResourceType",
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
    return ServiceNowTicketCreateData.attributeTypeMap;
  }

  public constructor() {}
}
