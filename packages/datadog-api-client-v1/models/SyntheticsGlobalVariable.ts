/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsGlobalVariableAttributes } from "./SyntheticsGlobalVariableAttributes";
import { SyntheticsGlobalVariableParseTestOptions } from "./SyntheticsGlobalVariableParseTestOptions";
import { SyntheticsGlobalVariableValue } from "./SyntheticsGlobalVariableValue";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Synthetics global variable.
 */
export class SyntheticsGlobalVariable {
  /**
   * Attributes of the global variable.
   */
  "attributes"?: SyntheticsGlobalVariableAttributes;
  /**
   * Description of the global variable.
   */
  "description": string;
  /**
   * Unique identifier of the global variable.
   */
  "id"?: string;
  /**
   * Name of the global variable. Unique across Synthetics global variables.
   */
  "name": string;
  /**
   * Parser options to use for retrieving a Synthetics global variable from a Synthetics Test. Used in conjunction with `parse_test_public_id`.
   */
  "parseTestOptions"?: SyntheticsGlobalVariableParseTestOptions;
  /**
   * A Synthetic test ID to use as a test to generate the variable value.
   */
  "parseTestPublicId"?: string;
  /**
   * Tags of the global variable.
   */
  "tags": Array<string>;
  /**
   * Value of the global variable.
   */
  "value": SyntheticsGlobalVariableValue;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "SyntheticsGlobalVariableAttributes",
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
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
    parseTestOptions: {
      baseName: "parse_test_options",
      type: "SyntheticsGlobalVariableParseTestOptions",
    },
    parseTestPublicId: {
      baseName: "parse_test_public_id",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
    value: {
      baseName: "value",
      type: "SyntheticsGlobalVariableValue",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsGlobalVariable.attributeTypeMap;
  }

  public constructor() {}
}
