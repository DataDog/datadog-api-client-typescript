/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NumberFormatUnitCanonicalType } from "./NumberFormatUnitCanonicalType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class NumberFormatUnitCanonical {
  /**
   * Datadog canonical unit identifier, for example byte or second.
   */
  "perUnitName"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": NumberFormatUnitCanonicalType;
  /**
   * Datadog canonical unit identifier, for example byte or second.
   */
  "unitName"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    perUnitName: {
      baseName: "per_unit_name",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "NumberFormatUnitCanonicalType",
      required: true,
    },
    unitName: {
      baseName: "unit_name",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NumberFormatUnitCanonical.attributeTypeMap;
  }

  public constructor() {}
}
