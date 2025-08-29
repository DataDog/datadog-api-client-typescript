import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Case3rdPartyTicketStatus } from "./Case3rdPartyTicketStatus";
import { ServiceNowTicketResult } from "./ServiceNowTicketResult";

/**
 * ServiceNow ticket attached to case
 */
export class ServiceNowTicket {
  /**
   * ServiceNow ticket information
   */
  "result"?: ServiceNowTicketResult;
  /**
   * Case status
   */
  "status"?: Case3rdPartyTicketStatus;
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
    result: {
      baseName: "result",
      type: "ServiceNowTicketResult",
    },
    status: {
      baseName: "status",
      type: "Case3rdPartyTicketStatus",
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
    return ServiceNowTicket.attributeTypeMap;
  }

  public constructor() {}
}
