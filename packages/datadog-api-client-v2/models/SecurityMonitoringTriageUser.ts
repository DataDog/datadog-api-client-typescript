/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object representing a given user entity.
 */
export class SecurityMonitoringTriageUser {
  /**
   * The handle for this user account.
   */
  "handle"?: string;
  /**
   * Numerical ID assigned by Datadog to this user account.
   */
  "id"?: number;
  /**
   * The name for this user account.
   */
  "name"?: string;
  /**
   * UUID assigned by Datadog to this user account.
   */
  "uuid": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    handle: {
      baseName: "handle",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    uuid: {
      baseName: "uuid",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringTriageUser.attributeTypeMap;
  }

  public constructor() {}
}
