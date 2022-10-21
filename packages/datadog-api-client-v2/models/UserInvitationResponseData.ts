/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserInvitationDataAttributes } from "./UserInvitationDataAttributes";
import { UserInvitationsType } from "./UserInvitationsType";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object of a user invitation returned by the API.
 */
export class UserInvitationResponseData {
  /**
   * Attributes of a user invitation.
   */
  "attributes"?: UserInvitationDataAttributes;
  /**
   * ID of the user invitation.
   */
  "id"?: string;
  /**
   * User invitations type.
   */
  "type"?: UserInvitationsType;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "UserInvitationDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UserInvitationsType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserInvitationResponseData.attributeTypeMap;
  }

  public constructor() {}
}
