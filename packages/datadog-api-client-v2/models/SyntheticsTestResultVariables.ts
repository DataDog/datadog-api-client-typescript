/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestResultVariable } from "./SyntheticsTestResultVariable";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Variables captured during a test step.
 */
export class SyntheticsTestResultVariables {
  /**
   * Variables defined in the test configuration.
   */
  "config"?: Array<SyntheticsTestResultVariable>;
  /**
   * Variables extracted during the test execution.
   */
  "extracted"?: Array<SyntheticsTestResultVariable>;

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
    config: {
      baseName: "config",
      type: "Array<SyntheticsTestResultVariable>",
    },
    extracted: {
      baseName: "extracted",
      type: "Array<SyntheticsTestResultVariable>",
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
    return SyntheticsTestResultVariables.attributeTypeMap;
  }

  public constructor() {}
}
