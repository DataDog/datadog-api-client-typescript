import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceNowBasicAuthType } from "./ServiceNowBasicAuthType";

/**
 * The definition of the `ServiceNowBasicAuth` object.
 */
export class ServiceNowBasicAuth {
  /**
   * The `ServiceNowBasicAuth` `instance`.
   */
  "instance": string;
  /**
   * The `ServiceNowBasicAuth` `password`.
   */
  "password": string;
  /**
   * The definition of the `ServiceNowBasicAuth` object.
   */
  "type": ServiceNowBasicAuthType;
  /**
   * The `ServiceNowBasicAuth` `username`.
   */
  "username": string;
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
      required: true,
    },
    password: {
      baseName: "password",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ServiceNowBasicAuthType",
      required: true,
    },
    username: {
      baseName: "username",
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
    return ServiceNowBasicAuth.attributeTypeMap;
  }

  public constructor() {}
}
