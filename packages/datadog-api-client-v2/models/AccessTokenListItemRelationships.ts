/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToAccessTokenOwner } from "./RelationshipToAccessTokenOwner";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Resources related to the access token entry in the mixed list response.
 */
export class AccessTokenListItemRelationships {
  /**
   * Relationship to the access token's owner.
   */
  "ownedBy"?: RelationshipToAccessTokenOwner;

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
    ownedBy: {
      baseName: "owned_by",
      type: "RelationshipToAccessTokenOwner",
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
    return AccessTokenListItemRelationships.attributeTypeMap;
  }

  public constructor() {}
}
