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
   * Number of milliseconds to wait between inputs in a TYPE_TEXT step type.
   */
  "delay"?: number;
  /**
   * The direction of the scroll for a SCROLL_TO_ELEMENT step type.
   */
  "direction"?: SyntheticsMobileStepParamsDirection;
  /**
   * Information about the element used for a step.
   */
  "element"?: SyntheticsMobileStepParamsElement;
  /**
   * Boolean to change the state of the wifi for a TOGGLE_WIFI step type.
   */
  "enable"?: boolean;
  /**
   * Maximum number of scrolls to do for a SCROLL_TO_ELEMENT step type.
   */
  "maxScrolls"?: number;
  /**
   * List of positions for the FLICK step type. The maximum is 10 flicks per step
   */
  "positions"?: Array<SyntheticsMobileStepParamsPositionsItems>;
  /**
   * Public Id of the test to be played as part of a PLAY_SUBTEST step type.
   */
  "subtestPublicId"?: string;
  /**
   * Values used in the step. Used in multiple step types.
   */
  "value"?: string;
  /**
   * Variable object for EXTRACT_VARIABLE step type.
   */
  "variable"?: SyntheticsMobileStepParamsVariable;
  /**
   * Boolean to signal if `Enter` should be pressed at the end of the TYPE_TEXT step type.
   */
  "withEnter"?: boolean;
  /**
   * Amount to scroll by on the `x` axis for a SCROLL step type.
   */
  "x"?: number;
  /**
   * Amount to scroll by on the `y` axis for a SCROLL step type.
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
