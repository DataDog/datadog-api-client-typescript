/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StegadographyWidgetAttributes } from "./StegadographyWidgetAttributes";
import { StegadographyWidgetType } from "./StegadographyWidgetType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single watermarked widget resource recovered from an image.
 */
export class StegadographyWidget {
  /**
   * Attributes of a watermarked widget recovered from an image.
   */
  "attributes": StegadographyWidgetAttributes;
  /**
   * Composite identifier formed from the organization ID and watermark, separated by a colon.
   */
  "id": string;
  /**
   * Stegadography widget resource type.
   */
  "type": StegadographyWidgetType;

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
      type: "StegadographyWidgetAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StegadographyWidgetType",
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
    return StegadographyWidget.attributeTypeMap;
  }

  public constructor() {}
}
