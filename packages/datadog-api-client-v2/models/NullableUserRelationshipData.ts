/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserResourceType } from "./UserResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship to user object.
 */
export class NullableUserRelationshipData {
  /**
   * A unique identifier that represents the user.
   */
  "id": string;
  /**
   * User resource type.
   */
  "type": UserResourceType;

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
      type: "UserResourceType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NullableUserRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
