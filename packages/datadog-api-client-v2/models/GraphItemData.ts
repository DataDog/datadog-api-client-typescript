/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GraphItemDataAttributes } from "./GraphItemDataAttributes";
import { GraphItemDataType } from "./GraphItemDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single grouping entry in the End User Device Monitoring graph response.
 */
export class GraphItemData {
  /**
   * Attributes of a single grouping in the End User Device Monitoring graph response.
   */
  "attributes"?: GraphItemDataAttributes;
  /**
   * Unique identifier of the grouping, derived from the grouping column.
   */
  "id": string;
  /**
   * Graph items resource type.
   */
  "type": GraphItemDataType;

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
    attributes: {
      baseName: "attributes",
      type: "GraphItemDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GraphItemDataType",
      required: true,
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
    return GraphItemData.attributeTypeMap;
  }

  public constructor() {}
}
