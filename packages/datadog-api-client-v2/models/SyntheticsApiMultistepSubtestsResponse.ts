/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsApiMultistepSubtestData } from "./SyntheticsApiMultistepSubtestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the list of available subtests for an API multistep test.
 */
export class SyntheticsApiMultistepSubtestsResponse {
  /**
   * List of API tests that can be added as subtests.
   */
  "data"?: Array<SyntheticsApiMultistepSubtestData>;

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
    data: {
      baseName: "data",
      type: "Array<SyntheticsApiMultistepSubtestData>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsApiMultistepSubtestsResponse.attributeTypeMap;
  }

  public constructor() {}
}
