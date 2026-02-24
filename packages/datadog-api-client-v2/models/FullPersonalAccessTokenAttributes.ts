/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a personal access token including the secret key value.
 * This is only returned when creating a new token.
 */
export class FullPersonalAccessTokenAttributes {
  /**
   * Creation timestamp of the personal access token.
   */
  "createdAt": Date;
  /**
   * Expiration timestamp of the personal access token.
   */
  "expiresAt": Date;
  /**
   * The secret token value. This is only returned when creating a new personal
   * access token and cannot be retrieved later.
   */
  "key": string;
  /**
   * Last modification timestamp of the personal access token.
   */
  "modifiedAt"?: Date;
  /**
   * Name of the personal access token.
   */
  "name": string;
  /**
   * Array of scopes granted to the personal access token. These define what
   * permissions the token has.
   */
  "scopes": Array<string>;

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
      required: true,
      format: "date-time",
    },
    expiresAt: {
      baseName: "expires_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    key: {
      baseName: "key",
      type: "string",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    scopes: {
      baseName: "scopes",
      type: "Array<string>",
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
    return FullPersonalAccessTokenAttributes.attributeTypeMap;
  }

  public constructor() {}
}
