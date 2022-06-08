/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserInvitationResponseData } from "./UserInvitationResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * User invitation as returned by the API.
 */
export class UserInvitationResponse {
  /**
   * Object of a user invitation returned by the API.
   */
  "data"?: UserInvitationResponseData;

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
      type: "UserInvitationResponseData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserInvitationResponse.attributeTypeMap;
  }

  public constructor() {}
}
