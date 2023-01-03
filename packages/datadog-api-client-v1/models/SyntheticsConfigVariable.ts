/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsConfigVariableType } from "./SyntheticsConfigVariableType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object defining a variable that can be used in your test configuration.
 */
export class SyntheticsConfigVariable {
  /**
   * Example for the variable.
   */
  "example"?: string;
  /**
   * ID of the variable for global variables.
   */
  "id"?: string;
  /**
   * Name of the variable.
   */
  "name": string;
  /**
   * Pattern of the variable.
   */
  "pattern"?: string;
  /**
   * Whether the value of this variable will be obfuscated in test results.
   */
  "secure"?: boolean;
  /**
   * Type of the configuration variable.
   */
  "type": SyntheticsConfigVariableType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    example: {
      baseName: "example",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    pattern: {
      baseName: "pattern",
      type: "string",
    },
    secure: {
      baseName: "secure",
      type: "boolean",
    },
    type: {
      baseName: "type",
      type: "SyntheticsConfigVariableType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsConfigVariable.attributeTypeMap;
  }

  public constructor() {}
}
