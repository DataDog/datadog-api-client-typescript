/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToUser } from "./RelationshipToUser";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Relationships data for user invitation.
 */
export class UserInvitationRelationships {
  /**
   * Relationship to user.
   */
  "user": RelationshipToUser;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    user: {
      baseName: "user",
      type: "RelationshipToUser",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserInvitationRelationships.attributeTypeMap;
  }

  public constructor() {}
}
