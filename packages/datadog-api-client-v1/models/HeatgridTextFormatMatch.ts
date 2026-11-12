/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatgridTextFormatMatchType } from "./HeatgridTextFormatMatchType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Match a group label against a string.
 */
export class HeatgridTextFormatMatch {
  /**
   * Comparison used to match a group label.
   */
  "type": HeatgridTextFormatMatchType;
  /**
   * String to compare with the group label.
   */
  "value": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "HeatgridTextFormatMatchType",
      required: true,
    },
    value: {
      baseName: "value",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridTextFormatMatch.attributeTypeMap;
  }

  public constructor() {}
}
