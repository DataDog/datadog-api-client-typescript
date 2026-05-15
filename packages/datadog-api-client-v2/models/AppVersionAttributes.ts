/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes describing an app version.
 */
export class AppVersionAttributes {
  /**
   * The ID of the app this version belongs to.
   */
  "appId"?: string;
  /**
   * Timestamp of when the version was created.
   */
  "createdAt"?: Date;
  /**
   * Whether this version has ever been published.
   */
  "hasEverBeenPublished"?: boolean;
  /**
   * The optional human-readable name of the version.
   */
  "name"?: string;
  /**
   * Timestamp of when the version was last updated.
   */
  "updatedAt"?: Date;
  /**
   * The ID of the user who created the version.
   */
  "userId"?: number;
  /**
   * The name (or email) of the user who created the version.
   */
  "userName"?: string;
  /**
   * The UUID of the user who created the version.
   */
  "userUuid"?: string;
  /**
   * The version number of the app, starting at 1.
   */
  "version"?: number;

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
    appId: {
      baseName: "app_id",
      type: "string",
      format: "uuid",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    hasEverBeenPublished: {
      baseName: "has_ever_been_published",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
    },
    userId: {
      baseName: "user_id",
      type: "number",
      format: "int64",
    },
    userName: {
      baseName: "user_name",
      type: "string",
    },
    userUuid: {
      baseName: "user_uuid",
      type: "string",
      format: "uuid",
    },
    version: {
      baseName: "version",
      type: "number",
      format: "int64",
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
    return AppVersionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
