import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a ServiceNow instance
 */
export class ServiceNowInstanceAttributes {
  /**
   * The name of the ServiceNow instance
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
    return ServiceNowInstanceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
