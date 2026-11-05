import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceNowBasicAuthInstance } from "./ServiceNowBasicAuthInstance";
import { ServiceNowBasicAuthPassword } from "./ServiceNowBasicAuthPassword";
import { ServiceNowBasicAuthType } from "./ServiceNowBasicAuthType";
import { ServiceNowBasicAuthUsername } from "./ServiceNowBasicAuthUsername";

/**
 * The definition of the `ServiceNowBasicAuth` object.
 */
export class ServiceNowBasicAuth {
  /**
   * The `ServiceNowBasicAuth` `instance`.
   */
  "instance": ServiceNowBasicAuthInstance;
  /**
   * The `ServiceNowBasicAuth` `password`.
   */
  "password": ServiceNowBasicAuthPassword;
  /**
   * The definition of the `ServiceNowBasicAuth` object.
   */
  "type": ServiceNowBasicAuthType;
  /**
   * The `ServiceNowBasicAuth` `username`.
   */
  "username": ServiceNowBasicAuthUsername;
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
      type: "ServiceNowBasicAuthInstance",
      required: true,
    },
    password: {
      baseName: "password",
      type: "ServiceNowBasicAuthPassword",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ServiceNowBasicAuthType",
      required: true,
    },
    username: {
      baseName: "username",
      type: "ServiceNowBasicAuthUsername",
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
    return ServiceNowBasicAuth.attributeTypeMap;
  }

  public constructor() {}
}
