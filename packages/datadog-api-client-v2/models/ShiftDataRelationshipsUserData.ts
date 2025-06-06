/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ShiftDataRelationshipsUserDataType } from "./ShiftDataRelationshipsUserDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents a reference to the user assigned to this shift, containing the user's ID and resource type.
 */
export class ShiftDataRelationshipsUserData {
  /**
   * Specifies the unique identifier of the user.
   */
  "id": string;
  /**
   * Indicates that the related resource is of type 'users'.
   */
  "type": ShiftDataRelationshipsUserDataType;

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
      required: true,
    },
    type: {
      baseName: "type",
      type: "ShiftDataRelationshipsUserDataType",
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
    return ShiftDataRelationshipsUserData.attributeTypeMap;
  }

  public constructor() {}
}
