/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NumberFormatUnit } from "./NumberFormatUnit";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Display options for a value column.
 */
export class TopologyMapInlineNodeValueColumnMeta {
  /**
   * Number format unit.
   */
  "unit"?: NumberFormatUnit;

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
      type: "NumberFormatUnit",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TopologyMapInlineNodeValueColumnMeta.attributeTypeMap;
  }

  public constructor() {}
}
