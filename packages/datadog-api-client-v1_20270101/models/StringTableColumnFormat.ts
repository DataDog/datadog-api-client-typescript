/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StringTableColumnFormatMode } from "./StringTableColumnFormatMode";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class StringTableColumnFormat {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "mode": StringTableColumnFormatMode;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    mode: {
      baseName: "mode",
      type: "StringTableColumnFormatMode",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StringTableColumnFormat.attributeTypeMap;
  }

  public constructor() {}
}
