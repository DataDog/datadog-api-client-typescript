/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetRelationshipItem } from "./WidgetRelationshipItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships of the widget resource.
 */
export class WidgetRelationships {
  /**
   * A JSON:API relationship to a user.
   */
  "createdBy"?: WidgetRelationshipItem;
  /**
   * A JSON:API relationship to a user.
   */
  "modifiedBy"?: WidgetRelationshipItem;

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
    createdBy: {
      baseName: "created_by",
      type: "WidgetRelationshipItem",
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "WidgetRelationshipItem",
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
    return WidgetRelationships.attributeTypeMap;
  }

  public constructor() {}
}
