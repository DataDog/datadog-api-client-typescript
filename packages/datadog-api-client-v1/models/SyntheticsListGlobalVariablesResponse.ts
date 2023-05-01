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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsListGlobalVariablesResponse.attributeTypeMap;
  }

  public constructor() {}
}
