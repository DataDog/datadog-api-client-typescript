/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatgridTextFormatReplaceAllType } from "./HeatgridTextFormatReplaceAllType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Replace the entire matching group label.
 */
export class HeatgridTextFormatReplaceAll {
  /**
   * Replace the entire matching group label.
   */
  "type": HeatgridTextFormatReplaceAllType;
  /**
   * Replacement string.
   */
  "_with": string;

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
      type: "HeatgridTextFormatReplaceAllType",
      required: true,
    },
    _with: {
      baseName: "with",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridTextFormatReplaceAll.attributeTypeMap;
  }

  public constructor() {}
}
