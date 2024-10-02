/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsMobileTestBindingItemsRole } from "./SyntheticsMobileTestBindingItemsRole";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing the binding used for a mobile test.
 */
export class SyntheticsMobileTestBindingItems {
  /**
   * List of principals for a mobile test binding.
   */
  "principals"?: Array<string>;
  /**
   * The definition of `SyntheticsMobileTestBindingItemsRole` object.
   */
  "role"?: SyntheticsMobileTestBindingItemsRole;

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
    principals: {
      baseName: "principals",
      type: "Array<string>",
    },
    role: {
      baseName: "role",
      type: "SyntheticsMobileTestBindingItemsRole",
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
    return SyntheticsMobileTestBindingItems.attributeTypeMap;
  }

  public constructor() {}
}
