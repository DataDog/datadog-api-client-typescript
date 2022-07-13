/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Authentication part of the secrets.
 */
export class SyntheticsPrivateLocationSecretsAuthentication {
  /**
   * Access key for the private location.
   */
  "id"?: string;
  /**
   * Secret access key for the private location.
   */
  "key"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
    },
    key: {
      baseName: "key",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsPrivateLocationSecretsAuthentication.attributeTypeMap;
  }

  public constructor() {}
}
