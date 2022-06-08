/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBrowserVariableType } from "./SyntheticsBrowserVariableType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object defining a variable that can be used in your browser test.
 * Learn more in the [Browser test Actions documentation](https://docs.datadoghq.com/synthetics/browser_tests/actions#variable).
 */
export class SyntheticsBrowserVariable {
  /**
   * Example for the variable.
   */
  "example"?: string;
  /**
   * ID for the variable. Global variables require an ID.
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
   * Type of browser test variable.
   */
  "type": SyntheticsBrowserVariableType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

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
    type: {
      baseName: "type",
      type: "SyntheticsBrowserVariableType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsBrowserVariable.attributeTypeMap;
  }

  public constructor() {}
}
