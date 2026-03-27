/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetAttributes } from "./WidgetAttributes";
import { WidgetRelationships } from "./WidgetRelationships";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A widget resource object.
 */
export class WidgetData {
  /**
   * Attributes of a widget resource.
   */
  "attributes": WidgetAttributes;
  /**
   * The unique identifier of the widget.
   */
  "id": string;
  /**
   * Relationships of the widget resource.
   */
  "relationships"?: WidgetRelationships;
  /**
   * Widgets resource type.
   */
  "type": string;

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
      type: "WidgetAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "WidgetRelationships",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return WidgetData.attributeTypeMap;
  }

  public constructor() {}
}
