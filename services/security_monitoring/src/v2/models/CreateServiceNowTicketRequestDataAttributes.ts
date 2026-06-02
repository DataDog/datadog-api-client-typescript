import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CasePriority } from "./CasePriority";

/**
 * Attributes of the ServiceNow ticket to create.
 */
export class CreateServiceNowTicketRequestDataAttributes {
  /**
   * Unique identifier of the Datadog user assigned to the case backing the ServiceNow ticket.
   */
  "assigneeId"?: string;
  /**
   * Description of the ServiceNow ticket. If not provided, the description will be automatically generated.
   */
  "description"?: string;
  /**
   * Case priority
   */
  "priority"?: CasePriority;
  /**
   * Title of the ServiceNow ticket. If not provided, the title will be automatically generated.
   */
  "title"?: string;
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
    assigneeId: {
      baseName: "assignee_id",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    priority: {
      baseName: "priority",
      type: "CasePriority",
    },
    title: {
      baseName: "title",
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
    return CreateServiceNowTicketRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
