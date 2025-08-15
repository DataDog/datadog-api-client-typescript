/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ShiftDataRelationshipsUserData } from "./ShiftDataRelationshipsUserData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines the relationship between a shift and the user who is working that shift.
 */
export class ShiftDataRelationshipsUser {
  /**
   * Represents a reference to the user assigned to this shift, containing the user's ID and resource type.
   */
  "data": ShiftDataRelationshipsUserData;

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
    data: {
      baseName: "data",
      type: "ShiftDataRelationshipsUserData",
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
    return ShiftDataRelationshipsUser.attributeTypeMap;
  }

  public constructor() {}
}
