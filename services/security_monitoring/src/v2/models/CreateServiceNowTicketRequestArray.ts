import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateServiceNowTicketRequestData } from "./CreateServiceNowTicketRequestData";

/**
 * List of requests to create ServiceNow tickets for security findings.
 */
export class CreateServiceNowTicketRequestArray {
  /**
   * Array of ServiceNow ticket creation request data objects.
   */
  "data": Array<CreateServiceNowTicketRequestData>;
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
      type: "Array<CreateServiceNowTicketRequestData>",
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
    return CreateServiceNowTicketRequestArray.attributeTypeMap;
  }

  public constructor() {}
}
