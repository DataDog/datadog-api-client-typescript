/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsMobileStepParamsPositionPositionsItems } from "./SyntheticsMobileStepParamsPositionPositionsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `SyntheticsMobileStepParamsPosition` object.
 */
export class SyntheticsMobileStepParamsPosition {
  /**
   * The `position` `positions`.
   */
  "positions"?: Array<SyntheticsMobileStepParamsPositionPositionsItems>;

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
    positions: {
      baseName: "positions",
      type: "Array<SyntheticsMobileStepParamsPositionPositionsItems>",
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
    return SyntheticsMobileStepParamsPosition.attributeTypeMap;
  }

  public constructor() {}
}
