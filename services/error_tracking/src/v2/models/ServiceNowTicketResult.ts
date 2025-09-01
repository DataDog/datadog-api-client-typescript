import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * ServiceNow ticket information
 */
export class ServiceNowTicketResult {
  /**
   * Link to the Incident created on ServiceNow
   */
  "sysTargetLink"?: string;
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
    sysTargetLink: {
      baseName: "sys_target_link",
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
    return ServiceNowTicketResult.attributeTypeMap;
  }

  public constructor() {}
}
