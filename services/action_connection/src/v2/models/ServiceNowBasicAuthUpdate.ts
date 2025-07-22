import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceNowBasicAuthType } from "./ServiceNowBasicAuthType";

/**
 * The definition of the `ServiceNowBasicAuth` object.
 */
export class ServiceNowBasicAuthUpdate {
  /**
   * The `ServiceNowBasicAuthUpdate` `instance`.
   */
  "instance"?: string;
  /**
   * The `ServiceNowBasicAuthUpdate` `password`.
   */
  "password"?: string;
  /**
   * The definition of the `ServiceNowBasicAuth` object.
   */
  "type": ServiceNowBasicAuthType;
  /**
   * The `ServiceNowBasicAuthUpdate` `username`.
   */
  "username"?: string;
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
    instance: {
      baseName: "instance",
      type: "string",
    },
    password: {
      baseName: "password",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ServiceNowBasicAuthType",
      required: true,
    },
    username: {
      baseName: "username",
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
    return ServiceNowBasicAuthUpdate.attributeTypeMap;
  }

  public constructor() {}
}
