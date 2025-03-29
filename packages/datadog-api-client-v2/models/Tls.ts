/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `Tls` object.
 */
export class Tls {
  /**
   * The `Tls` `ca_file`.
   */
  "caFile"?: string;
  /**
   * The `Tls` `crt_file`.
   */
  "crtFile": string;
  /**
   * The `Tls` `key_file`.
   */
  "keyFile"?: string;

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
    caFile: {
      baseName: "ca_file",
      type: "string",
    },
    crtFile: {
      baseName: "crt_file",
      type: "string",
      required: true,
    },
    keyFile: {
      baseName: "key_file",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return Tls.attributeTypeMap;
  }

  public constructor() {}
}
