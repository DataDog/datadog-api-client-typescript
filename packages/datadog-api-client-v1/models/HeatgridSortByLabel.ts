/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatgridSortByLabelProperty } from "./HeatgridSortByLabelProperty";
import { HeatgridSortOrder } from "./HeatgridSortOrder";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Sort rows by their group labels.
 */
export class HeatgridSortByLabel {
  /**
   * Sort direction.
   */
  "order": HeatgridSortOrder;
  /**
   * Sort by label.
   */
  "property": HeatgridSortByLabelProperty;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    order: {
      baseName: "order",
      type: "HeatgridSortOrder",
      required: true,
    },
    property: {
      baseName: "property",
      type: "HeatgridSortByLabelProperty",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridSortByLabel.attributeTypeMap;
  }

  public constructor() {}
}
