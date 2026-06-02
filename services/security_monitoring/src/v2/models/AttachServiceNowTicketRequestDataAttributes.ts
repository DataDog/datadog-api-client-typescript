import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the ServiceNow ticket to attach security findings to.
 */
export class AttachServiceNowTicketRequestDataAttributes {
  /**
   * URL of the ServiceNow incident to attach security findings to. Must be a service-now.com URL pointing to an incident record.
   */
  "servicenowTicketUrl": string;
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
    servicenowTicketUrl: {
      baseName: "servicenow_ticket_url",
      type: "string",
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
    return AttachServiceNowTicketRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
