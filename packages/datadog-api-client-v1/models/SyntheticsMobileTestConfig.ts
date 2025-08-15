/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsConfigVariable } from "./SyntheticsConfigVariable";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration object for a Synthetic mobile test.
 */
export class SyntheticsMobileTestConfig {
  /**
   * Initial application arguments for a mobile test.
   */
  "initialApplicationArguments"?: { [key: string]: string };
  /**
   * Array of variables used for the test steps.
   */
  "variables"?: Array<SyntheticsConfigVariable>;

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
    initialApplicationArguments: {
      baseName: "initialApplicationArguments",
      type: "{ [key: string]: string; }",
    },
    variables: {
      baseName: "variables",
      type: "Array<SyntheticsConfigVariable>",
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
    return SyntheticsMobileTestConfig.attributeTypeMap;
  }

  public constructor() {}
}
