/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Unit } from "./Unit";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata for the resulting numerical values.
 */
export class ScalarMeta {
  /**
   * Detailed information about the unit.
   * First element describes the "primary unit" (for example, `bytes` in `bytes per second`).
   * The second element describes the "per unit" (for example, `second` in `bytes per second`).
   * If the second element is not present, the API returns null.
   */
  "unit"?: Array<Unit | null>;

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
    unit: {
      baseName: "unit",
      type: "Array<Unit>",
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
    return ScalarMeta.attributeTypeMap;
  }

  public constructor() {}
}
