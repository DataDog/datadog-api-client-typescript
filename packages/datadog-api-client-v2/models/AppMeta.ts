/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata of an app.
 */
export class AppMeta {
  /**
   * Timestamp of when the app was created.
   */
  "createdAt"?: Date;
  /**
   * Timestamp of when the app was deleted.
   */
  "deletedAt"?: Date;
  /**
   * The Datadog organization ID that owns the app.
   */
  "orgId"?: number;
  /**
   * Timestamp of when the app was last updated.
   */
  "updatedAt"?: Date;
  /**
   * Whether the app was updated since it was last published. Published apps are pinned to a specific version and do not automatically update when the app is updated.
   */
  "updatedSinceDeployment"?: boolean;
  /**
   * The ID of the user who created the app.
   */
  "userId"?: number;
  /**
   * The name (or email address) of the user who created the app.
   */
  "userName"?: string;
  /**
   * The UUID of the user who created the app.
   */
  "userUuid"?: string;
  /**
   * The version number of the app. This starts at 1 and increments with each update.
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    deletedAt: {
      baseName: "deleted_at",
      type: "Date",
      format: "date-time",
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      format: "int64",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
    },
    updatedSinceDeployment: {
      baseName: "updated_since_deployment",
      type: "boolean",
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AppMeta.attributeTypeMap;
  }

  public constructor() {}
}
