/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ToplistWidgetFlatType } from "./ToplistWidgetFlatType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Top list widget flat display.
 */
export class ToplistWidgetFlat {
  /**
   * Top list widget flat display type.
   */
  "type": ToplistWidgetFlatType;

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
      type: "ToplistWidgetFlatType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ToplistWidgetFlat.attributeTypeMap;
  }

  public constructor() {}
}
