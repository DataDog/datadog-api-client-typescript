import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FindingServiceNowTicketResult } from "./FindingServiceNowTicketResult";

/**
 * ServiceNow ticket associated with the case.
 */
export class FindingServiceNowTicket {
  /**
   * Result of the ServiceNow ticket creation or attachment.
   */
  "result"?: FindingServiceNowTicketResult;
  /**
   * Status of the ServiceNow ticket operation. Can be "COMPLETED" if successful, or "FAILED" if the operation failed.
   */
  "status"?: string;
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
      type: "FindingServiceNowTicketResult",
    },
    status: {
      baseName: "status",
      type: "string",
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
    return FindingServiceNowTicket.attributeTypeMap;
  }

  public constructor() {}
}
