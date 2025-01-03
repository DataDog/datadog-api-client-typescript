/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `DeploymentMeta` object.
 */
export class DeploymentMeta {
  /**
   * The `DeploymentMeta` `created_at`.
   */
  "createdAt"?: string;
  /**
   * The `DeploymentMeta` `user_id`.
   */
  "userId"?: number;
  /**
   * The `DeploymentMeta` `user_name`.
   */
  "userName"?: string;
  /**
   * The `DeploymentMeta` `user_uuid`.
   */
  "userUuid"?: string;

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DeploymentMeta.attributeTypeMap;
  }

  public constructor() {}
}
