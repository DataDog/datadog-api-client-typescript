/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TwilioIntegrationAccountBasicAuthType } from "./TwilioIntegrationAccountBasicAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Username and password authentication. Only the fields provided are changed; omit `password` to keep the stored one.
 */
export class TwilioIntegrationAccountBasicAuthUpdate {
  /**
   * The authentication method type.
   */
  "authType": TwilioIntegrationAccountBasicAuthType;
  /**
   * Secret password or private key.
   */
  "password"?: string;
  /**
   * Non-secret username or public identifier for the credential pair.
   */
  "username"?: string;

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
      type: "TwilioIntegrationAccountBasicAuthType",
      required: true,
    },
    password: {
      baseName: "password",
      type: "string",
    },
    username: {
      baseName: "username",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TwilioIntegrationAccountBasicAuthUpdate.attributeTypeMap;
  }

  public constructor() {}
}
