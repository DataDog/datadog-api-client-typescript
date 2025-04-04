/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LayerRelationshipsMembersDataItemsType } from "./LayerRelationshipsMembersDataItemsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents a single member object in a layer's `members` array, referencing
 * a unique Datadog user ID.
 */
export class LayerRelationshipsMembersDataItems {
  /**
   * The unique user ID of the layer member.
   */
  "id"?: string;
  /**
   * Members resource type.
   */
  "type"?: LayerRelationshipsMembersDataItemsType;

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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "LayerRelationshipsMembersDataItemsType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LayerRelationshipsMembersDataItems.attributeTypeMap;
  }

  public constructor() {}
}
