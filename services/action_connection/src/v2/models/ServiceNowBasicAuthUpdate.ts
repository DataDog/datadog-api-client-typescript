import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceNowBasicAuthType } from "./ServiceNowBasicAuthType";
import { ServiceNowBasicAuthUpdateInstance } from "./ServiceNowBasicAuthUpdateInstance";
import { ServiceNowBasicAuthUpdatePassword } from "./ServiceNowBasicAuthUpdatePassword";
import { ServiceNowBasicAuthUpdateUsername } from "./ServiceNowBasicAuthUpdateUsername";

/**
 * The definition of the `ServiceNowBasicAuth` object.
 */
export class ServiceNowBasicAuthUpdate {
  /**
   * The `ServiceNowBasicAuthUpdate` `instance`.
   */
  "instance"?: ServiceNowBasicAuthUpdateInstance;
  /**
   * The `ServiceNowBasicAuthUpdate` `password`.
   */
  "password"?: ServiceNowBasicAuthUpdatePassword;
  /**
   * The definition of the `ServiceNowBasicAuth` object.
   */
  "type": ServiceNowBasicAuthType;
  /**
   * The `ServiceNowBasicAuthUpdate` `username`.
   */
  "username"?: ServiceNowBasicAuthUpdateUsername;
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
      type: "ServiceNowBasicAuthUpdateInstance",
    },
    password: {
      baseName: "password",
      type: "ServiceNowBasicAuthUpdatePassword",
    },
    type: {
      baseName: "type",
      type: "ServiceNowBasicAuthType",
      required: true,
    },
    username: {
      baseName: "username",
      type: "ServiceNowBasicAuthUpdateUsername",
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
