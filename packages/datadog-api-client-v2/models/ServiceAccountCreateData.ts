/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceAccountCreateAttributes } from "./ServiceAccountCreateAttributes";
import { UserRelationships } from "./UserRelationships";
import { UsersType } from "./UsersType";

import { AttributeTypeMap } from "../util";

/**
 * Object to create a service account User.
 */
export class ServiceAccountCreateData {
  /**
   * Attributes of the created user.
   */
  "attributes": ServiceAccountCreateAttributes;
  /**
   * Relationships of the user object.
   */
  "relationships"?: UserRelationships;
  /**
   * Users resource type.
   */
  "type": UsersType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "ServiceAccountCreateAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "UserRelationships",
    },
    type: {
      baseName: "type",
      type: "UsersType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceAccountCreateData.attributeTypeMap;
  }

  public constructor() {}
}
