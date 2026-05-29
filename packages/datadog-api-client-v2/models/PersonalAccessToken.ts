/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PersonalAccessTokenAttributes } from "./PersonalAccessTokenAttributes";
import { PersonalAccessTokenRelationships } from "./PersonalAccessTokenRelationships";
import { PersonalAccessTokensType } from "./PersonalAccessTokensType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Datadog access token.
 */
export class PersonalAccessToken {
  /**
   * Attributes of an access token.
   */
  "attributes"?: PersonalAccessTokenAttributes;
  /**
   * ID of the access token.
   */
  "id"?: string;
  /**
   * Resources related to the access token.
   */
  "relationships"?: PersonalAccessTokenRelationships;
  /**
   * Personal access tokens resource type.
   */
  "type"?: PersonalAccessTokensType;

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
      type: "PersonalAccessTokenAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "PersonalAccessTokenRelationships",
    },
    type: {
      baseName: "type",
      type: "PersonalAccessTokensType",
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
    return PersonalAccessToken.attributeTypeMap;
  }

  public constructor() {}
}
