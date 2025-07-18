/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBasicAuthWebType } from "./SyntheticsBasicAuthWebType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object to handle basic authentication when performing the test.
 */
export class SyntheticsBasicAuthWeb {
  /**
   * Password to use for the basic authentication.
   */
  "password"?: string;
  /**
   * The type of basic authentication to use when performing the test.
   */
  "type"?: SyntheticsBasicAuthWebType;
  /**
   * Username to use for the basic authentication.
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
    password: {
      baseName: "password",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SyntheticsBasicAuthWebType",
    },
    username: {
      baseName: "username",
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
    return SyntheticsBasicAuthWeb.attributeTypeMap;
  }

  public constructor() {}
}
