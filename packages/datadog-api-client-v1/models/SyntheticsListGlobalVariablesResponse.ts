/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsGlobalVariable } from "./SyntheticsGlobalVariable";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing an array of Synthetic global variables.
 */
export class SyntheticsListGlobalVariablesResponse {
  /**
   * Array of Synthetic global variables.
   */
  "variables"?: Array<SyntheticsGlobalVariable>;

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
    variables: {
      baseName: "variables",
      type: "Array<SyntheticsGlobalVariable>",
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
    return SyntheticsListGlobalVariablesResponse.attributeTypeMap;
  }

  public constructor() {}
}
