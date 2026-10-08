/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OverrideRelationshipsUserData } from "./OverrideRelationshipsUserData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines the relationship between an override and one of its associated users.
 */
export class OverrideRelationshipsUser {
  /**
   * A reference to a user, containing the user's ID and resource type.
   */
  "data": OverrideRelationshipsUserData;

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
      type: "OverrideRelationshipsUserData",
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
    return OverrideRelationshipsUser.attributeTypeMap;
  }

  public constructor() {}
}
