import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AttachServiceNowTicketRequestData } from "./AttachServiceNowTicketRequestData";

/**
 * Request for attaching security findings to a ServiceNow ticket.
 */
export class AttachServiceNowTicketRequest {
  /**
   * Data of the ServiceNow ticket to attach security findings to.
   */
  "data": AttachServiceNowTicketRequestData;
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
      type: "AttachServiceNowTicketRequestData",
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
    return AttachServiceNowTicketRequest.attributeTypeMap;
  }

  public constructor() {}
}
