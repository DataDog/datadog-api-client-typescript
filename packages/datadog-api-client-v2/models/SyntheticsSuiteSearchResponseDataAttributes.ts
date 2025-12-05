/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsSuite } from "./SyntheticsSuite";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Synthetics suite search response data attributes
 */
export class SyntheticsSuiteSearchResponseDataAttributes {
  "suites"?: Array<SyntheticsSuite>;
  "total"?: number;

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
    suites: {
      baseName: "suites",
      type: "Array<SyntheticsSuite>",
    },
    total: {
      baseName: "total",
      type: "number",
      format: "int32",
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
    return SyntheticsSuiteSearchResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
