import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a ServiceNow business service
 */
export class ServiceNowBusinessServiceAttributes {
  /**
   * The ID of the ServiceNow instance
   */
  "instanceId": string;
  /**
   * The name of the business service
   */
  "serviceName": string;
  /**
   * The system ID of the business service in ServiceNow
   */
  "serviceSysId": string;
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
    instanceId: {
      baseName: "instance_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    serviceName: {
      baseName: "service_name",
      type: "string",
      required: true,
    },
    serviceSysId: {
      baseName: "service_sys_id",
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
    return ServiceNowBusinessServiceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
