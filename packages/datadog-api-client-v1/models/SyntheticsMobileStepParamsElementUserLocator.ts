/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsMobileStepParamsElementUserLocatorValuesItems } from "./SyntheticsMobileStepParamsElementUserLocatorValuesItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * User locator to find the element.
 */
export class SyntheticsMobileStepParamsElementUserLocator {
  /**
   * Whether if the the test should fail if the element cannot be found.
   */
  "failTestOnCannotLocate"?: boolean;
  /**
   * Values of the user locator.
   */
  "values"?: Array<SyntheticsMobileStepParamsElementUserLocatorValuesItems>;

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
    failTestOnCannotLocate: {
      baseName: "failTestOnCannotLocate",
      type: "boolean",
    },
    values: {
      baseName: "values",
      type: "Array<SyntheticsMobileStepParamsElementUserLocatorValuesItems>",
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
    return SyntheticsMobileStepParamsElementUserLocator.attributeTypeMap;
  }

  public constructor() {}
}
