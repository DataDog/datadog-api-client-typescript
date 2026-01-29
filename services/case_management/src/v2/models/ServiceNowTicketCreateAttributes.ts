import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * ServiceNow ticket creation attributes
 */
export class ServiceNowTicketCreateAttributes {
  /**
   * ServiceNow assignment group
   */
  "assignmentGroup"?: string;
  /**
   * ServiceNow instance name
   */
  "instanceName": string;
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
    assignmentGroup: {
      baseName: "assignment_group",
      type: "string",
    },
    instanceName: {
      baseName: "instance_name",
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
    return ServiceNowTicketCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
