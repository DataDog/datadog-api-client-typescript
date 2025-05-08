/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ShiftDataAttributes } from "./ShiftDataAttributes";
import { ShiftDataRelationships } from "./ShiftDataRelationships";
import { ShiftDataType } from "./ShiftDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `ShiftData` object.
 */
export class ShiftData {
  /**
   * The definition of `ShiftDataAttributes` object.
   */
  "attributes"?: ShiftDataAttributes;
  /**
   * The `ShiftData` `id`.
   */
  "id"?: string;
  /**
   * The definition of `ShiftDataRelationships` object.
   */
  "relationships"?: ShiftDataRelationships;
  /**
   * Indicates that the resource is of type 'shifts'.
   */
  "type": ShiftDataType;

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
      type: "ShiftDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "ShiftDataRelationships",
    },
    type: {
      baseName: "type",
      type: "ShiftDataType",
      required: true,
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
    return ShiftData.attributeTypeMap;
  }

  public constructor() {}
}
