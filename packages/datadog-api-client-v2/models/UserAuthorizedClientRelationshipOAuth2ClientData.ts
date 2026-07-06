/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserAuthorizedClientRelationshipOAuth2ClientDataType } from "./UserAuthorizedClientRelationshipOAuth2ClientDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data identifying the OAuth2 client that was authorized.
 */
export class UserAuthorizedClientRelationshipOAuth2ClientData {
  /**
   * The ID of the OAuth2 client.
   */
  "id": string;
  /**
   * OAuth2 client resource type.
   */
  "type": UserAuthorizedClientRelationshipOAuth2ClientDataType;

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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UserAuthorizedClientRelationshipOAuth2ClientDataType",
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
    return UserAuthorizedClientRelationshipOAuth2ClientData.attributeTypeMap;
  }

  public constructor() {}
}
