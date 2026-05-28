/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OverviewItemDataAttributes } from "./OverviewItemDataAttributes";
import { OverviewItemDataType } from "./OverviewItemDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single tile entry in the End User Device Monitoring overview response.
 */
export class OverviewItemData {
  /**
   * Attributes of a single tile in the End User Device Monitoring overview dashboard.
   */
  "attributes"?: OverviewItemDataAttributes;
  /**
   * Unique identifier of the overview tile.
   */
  "id": string;
  /**
   * Overview items resource type.
   */
  "type": OverviewItemDataType;

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
      type: "OverviewItemDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OverviewItemDataType",
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
    return OverviewItemData.attributeTypeMap;
  }

  public constructor() {}
}
