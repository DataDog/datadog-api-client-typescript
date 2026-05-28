/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AccessTokenOwnerType } from "./AccessTokenOwnerType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship to the access token's owner.
 */
export class RelationshipToAccessTokenOwnerData {
  /**
   * A unique identifier that represents the owner.
   */
  "id": string;
  /**
   * Owner resource type. Either a user or a service account.
   */
  "type": AccessTokenOwnerType;

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
      type: "AccessTokenOwnerType",
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
    return RelationshipToAccessTokenOwnerData.attributeTypeMap;
  }

  public constructor() {}
}
