/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToUserData } from "./RelationshipToUserData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship to user.
 */
export class RelationshipToUser {
  /**
   * Relationship to user object.
   */
  "data": RelationshipToUserData;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "RelationshipToUserData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToUser.attributeTypeMap;
  }

  public constructor() {}
}
