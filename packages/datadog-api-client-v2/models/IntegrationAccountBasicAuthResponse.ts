/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IntegrationAccountBasicAuthType } from "./IntegrationAccountBasicAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The basic authentication method and username configured on the account.
 */
export class IntegrationAccountBasicAuthResponse {
  /**
   * The authentication method type.
   */
  "authType": IntegrationAccountBasicAuthType;
  /**
   * Non-secret username or public identifier for the credential pair.
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
    authType: {
      baseName: "auth_type",
      type: "IntegrationAccountBasicAuthType",
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
    return IntegrationAccountBasicAuthResponse.attributeTypeMap;
  }

  public constructor() {}
}
