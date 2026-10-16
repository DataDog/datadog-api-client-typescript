/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the batch migration to update. At least one attribute is required.
 */
export class SecurityMonitoringBatchMigrationUpdateAttributes {
  /**
   * The description of the batch migration.
   */
  "description"?: string;
  /**
   * The name of the batch migration.
   */
  "name"?: string;
  /**
   * Tags of the batch migration. Up to 50 tags, each up to 256 characters.
   */
  "tags"?: Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringBatchMigrationUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
