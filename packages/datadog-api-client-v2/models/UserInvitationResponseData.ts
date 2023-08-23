/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserInvitationDataAttributes } from "./UserInvitationDataAttributes";
import { UserInvitationRelationships } from "./UserInvitationRelationships";
import { UserInvitationsType } from "./UserInvitationsType";

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
   * Relationships data for user invitation.
   */
  "relationships"?: UserInvitationRelationships;
  /**
   * User invitations type.
   */
  "type"?: UserInvitationsType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "UserInvitationDataAttributes",
    },
    id: {
      type: "string",
    },
    relationships: {
      type: "UserInvitationRelationships",
    },
    type: {
      type: "UserInvitationsType",
    },
  };
}
