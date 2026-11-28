/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NumberFormatUnitCustomType } from "./NumberFormatUnitCustomType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class NumberFormatUnitCustom {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "label": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": NumberFormatUnitCustomType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    label: {
      baseName: "label",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NumberFormatUnitCustomType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NumberFormatUnitCustom.attributeTypeMap;
  }

  public constructor() {}
}
