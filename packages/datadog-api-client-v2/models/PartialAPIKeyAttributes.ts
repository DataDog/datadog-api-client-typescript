/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a partial API key.
 */
export class PartialAPIKeyAttributes {
  /**
   * The category of the API key.
   */
  "category"?: string;
  /**
   * Creation date of the API key.
   */
  "createdAt"?: string;
  /**
   * The last four characters of the API key.
   */
  "last4"?: string;
  /**
   * Date the API key was last modified.
   */
  "modifiedAt"?: string;
  /**
   * Name of the API key.
   */
  "name"?: string;
  /**
   * The remote config read enabled status.
   */
  "remoteConfigReadEnabled"?: boolean;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    category: {
      baseName: "category",
      type: "string",
    },
    createdAt: {
      baseName: "created_at",
      type: "string",
    },
    last4: {
      baseName: "last4",
      type: "string",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    remoteConfigReadEnabled: {
      baseName: "remote_config_read_enabled",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PartialAPIKeyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
