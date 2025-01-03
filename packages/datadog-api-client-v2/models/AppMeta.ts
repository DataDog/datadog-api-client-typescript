/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `AppMeta` object.
 */
export class AppMeta {
  /**
   * The `AppMeta` `created_at`.
   */
  "createdAt"?: string;
  /**
   * The `AppMeta` `deleted_at`.
   */
  "deletedAt"?: string;
  /**
   * The `AppMeta` `org_id`.
   */
  "orgId"?: number;
  /**
   * The `AppMeta` `run_as_user`.
   */
  "runAsUser"?: string;
  /**
   * The `AppMeta` `updated_at`.
   */
  "updatedAt"?: string;
  /**
   * The `AppMeta` `updated_since_deployment`.
   */
  "updatedSinceDeployment"?: boolean;
  /**
   * The `AppMeta` `user_id`.
   */
  "userId"?: number;
  /**
   * The `AppMeta` `user_name`.
   */
  "userName"?: string;
  /**
   * The `AppMeta` `user_uuid`.
   */
  "userUuid"?: string;
  /**
   * The `AppMeta` `version`.
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
      type: "string",
    },
    deletedAt: {
      baseName: "deleted_at",
      type: "string",
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      format: "int64",
    },
    runAsUser: {
      baseName: "run_as_user",
      type: "string",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "string",
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
