/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetSort } from "./WidgetSort";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Sort configuration for network queries.
 */
export class SankeyNetworkQuerySort {
  /**
   * Field to sort by.
   */
  "field"?: string;
  /**
   * Widget sorting methods.
   */
  "order"?: WidgetSort;

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
    field: {
      baseName: "field",
      type: "string",
    },
    order: {
      baseName: "order",
      type: "WidgetSort",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SankeyNetworkQuerySort.attributeTypeMap;
  }

  public constructor() {}
}
