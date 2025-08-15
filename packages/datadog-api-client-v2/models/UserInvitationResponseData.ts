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
    attributes: {
      baseName: "attributes",
      type: "UserInvitationDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "UserInvitationRelationships",
    },
    type: {
      baseName: "type",
      type: "UserInvitationsType",
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
    return UserInvitationResponseData.attributeTypeMap;
  }

  public constructor() {}
}
