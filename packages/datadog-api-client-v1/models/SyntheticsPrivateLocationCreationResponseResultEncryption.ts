/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Public key for the result encryption.
 */
export class SyntheticsPrivateLocationCreationResponseResultEncryption {
  /**
   * Fingerprint for the encryption key.
   */
  "id"?: string;
  /**
   * Public key for result encryption.
   */
  "key"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

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
    return SyntheticsPrivateLocationCreationResponseResultEncryption.attributeTypeMap;
  }

  public constructor() {}
}
