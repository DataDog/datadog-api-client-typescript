/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsCheckType } from "./SyntheticsCheckType";
import { SyntheticsMobileStepParamsDirection } from "./SyntheticsMobileStepParamsDirection";
import { SyntheticsMobileStepParamsElement } from "./SyntheticsMobileStepParamsElement";
import { SyntheticsMobileStepParamsPositionsItems } from "./SyntheticsMobileStepParamsPositionsItems";
import { SyntheticsMobileStepParamsVariable } from "./SyntheticsMobileStepParamsVariable";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The parameters of a mobile step.
 */
export class SyntheticsMobileStepParams {
  /**
   * Type of assertion to apply in an API test.
   */
  "check"?: SyntheticsCheckType;
  /**
   * The `SyntheticsMobileStepParams` `delay`.
   */
  "delay"?: number;
  /**
   * The definition of `SyntheticsMobileStepParamsDirection` object.
   */
  "direction"?: SyntheticsMobileStepParamsDirection;
  /**
   * The definition of `SyntheticsMobileStepParamsElement` object.
   */
  "element"?: SyntheticsMobileStepParamsElement;
  /**
   * The `SyntheticsMobileStepParams` `enable`.
   */
  "enable"?: boolean;
  /**
   * The `SyntheticsMobileStepParams` `maxScrolls`.
   */
  "maxScrolls"?: number;
  /**
   * The definition of `SyntheticsMobileStepParamsPositions` object.
   */
  "positions"?: Array<SyntheticsMobileStepParamsPositionsItems>;
  /**
   * The `SyntheticsMobileStepParams` `subtestPublicId`.
   */
  "subtestPublicId"?: string;
  /**
   * The `SyntheticsMobileStepParams` `value`.
   */
  "value"?: string;
  /**
   * The definition of `SyntheticsMobileStepParamsVariable` object.
   */
  "variable"?: SyntheticsMobileStepParamsVariable;
  /**
   * The `SyntheticsMobileStepParams` `withEnter`.
   */
  "withEnter"?: boolean;
  /**
   * The `SyntheticsMobileStepParams` `x`.
   */
  "x"?: number;
  /**
   * The `SyntheticsMobileStepParams` `y`.
   */
  "y"?: number;

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
    check: {
      baseName: "check",
      type: "SyntheticsCheckType",
    },
    delay: {
      baseName: "delay",
      type: "number",
      format: "int64",
    },
    direction: {
      baseName: "direction",
      type: "SyntheticsMobileStepParamsDirection",
    },
    element: {
      baseName: "element",
      type: "SyntheticsMobileStepParamsElement",
    },
    enable: {
      baseName: "enable",
      type: "boolean",
    },
    maxScrolls: {
      baseName: "maxScrolls",
      type: "number",
      format: "int64",
    },
    positions: {
      baseName: "positions",
      type: "Array<SyntheticsMobileStepParamsPositionsItems>",
    },
    subtestPublicId: {
      baseName: "subtestPublicId",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "string",
    },
    variable: {
      baseName: "variable",
      type: "SyntheticsMobileStepParamsVariable",
    },
    withEnter: {
      baseName: "withEnter",
      type: "boolean",
    },
    x: {
      baseName: "x",
      type: "number",
      format: "int64",
    },
    y: {
      baseName: "y",
      type: "number",
      format: "int64",
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
    return SyntheticsMobileStepParams.attributeTypeMap;
  }

  public constructor() {}
}
