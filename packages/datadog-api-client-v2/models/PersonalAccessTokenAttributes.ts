/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a personal access token.
 */
export class PersonalAccessTokenAttributes {
  /**
   * Creation date of the personal access token.
   */
  "createdAt"?: Date;
  /**
   * Expiration date of the personal access token.
   */
  "expiresAt"?: Date;
  /**
   * Date the personal access token was last used.
   */
  "lastUsedAt"?: Date;
  /**
   * Date of last modification of the personal access token.
   */
  "modifiedAt"?: Date;
  /**
   * Name of the personal access token.
   */
  "name"?: string;
  /**
   * The public portion of the personal access token.
   */
  "publicPortion"?: string;
  /**
   * Array of scopes granted to the personal access token.
   */
  "scopes"?: Array<string>;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    expiresAt: {
      baseName: "expires_at",
      type: "Date",
      format: "date-time",
    },
    lastUsedAt: {
      baseName: "last_used_at",
      type: "Date",
      format: "date-time",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    publicPortion: {
      baseName: "public_portion",
      type: "string",
    },
    scopes: {
      baseName: "scopes",
      type: "Array<string>",
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
    return PersonalAccessTokenAttributes.attributeTypeMap;
  }

  public constructor() {}
}
