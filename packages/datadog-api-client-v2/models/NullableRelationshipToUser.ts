/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NullableRelationshipToUserData } from "./NullableRelationshipToUserData";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Relationship to user.
 */
export class NullableRelationshipToUser {
  /**
   * Relationship to user object.
   */
  "data": NullableRelationshipToUserData | null;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "NullableRelationshipToUserData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NullableRelationshipToUser.attributeTypeMap;
  }

  public constructor() {}
}
