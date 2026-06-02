import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateServiceNowTicketRequestDataAttributes } from "./CreateServiceNowTicketRequestDataAttributes";
import { CreateServiceNowTicketRequestDataRelationships } from "./CreateServiceNowTicketRequestDataRelationships";
import { ServiceNowTicketsDataType } from "./ServiceNowTicketsDataType";

/**
 * Data of the ServiceNow ticket to create.
 */
export class CreateServiceNowTicketRequestData {
  /**
   * Attributes of the ServiceNow ticket to create.
   */
  "attributes"?: CreateServiceNowTicketRequestDataAttributes;
  /**
   * Relationships of the ServiceNow ticket to create.
   */
  "relationships": CreateServiceNowTicketRequestDataRelationships;
  /**
   * ServiceNow tickets resource type.
   */
  "type": ServiceNowTicketsDataType;
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
      type: "CreateServiceNowTicketRequestDataAttributes",
    },
    relationships: {
      baseName: "relationships",
      type: "CreateServiceNowTicketRequestDataRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ServiceNowTicketsDataType",
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
    return CreateServiceNowTicketRequestData.attributeTypeMap;
  }

  public constructor() {}
}
