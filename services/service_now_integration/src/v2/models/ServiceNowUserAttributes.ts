import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a ServiceNow user
 */
export class ServiceNowUserAttributes {
  /**
   * The email address of the user
   */
  "email": string;
  /**
   * The full name of the user
   */
  "fullName"?: string;
  /**
   * The ID of the ServiceNow instance
   */
  "instanceId": string;
  /**
   * The username of the ServiceNow user
   */
  "userName": string;
  /**
   * The system ID of the user in ServiceNow
   */
  "userSysId": string;
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
    email: {
      baseName: "email",
      type: "string",
      required: true,
    },
    fullName: {
      baseName: "full_name",
      type: "string",
    },
    instanceId: {
      baseName: "instance_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    userName: {
      baseName: "user_name",
      type: "string",
      required: true,
    },
    userSysId: {
      baseName: "user_sys_id",
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
    return ServiceNowUserAttributes.attributeTypeMap;
  }

  public constructor() {}
}
