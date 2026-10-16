/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringBatchMigrationResourceCreateItem } from "./SecurityMonitoringBatchMigrationResourceCreateItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the batch migration to create.
 */
export class SecurityMonitoringBatchMigrationCreateAttributes {
  /**
   * The description of the batch migration.
   */
  "description"?: string;
  /**
   * The name of the batch migration.
   */
  "name"?: string;
  /**
   * The initial resources of the batch migration. From 1 to 100 resources.
   */
  "resources": Array<SecurityMonitoringBatchMigrationResourceCreateItem>;
  /**
   * Tags of the batch migration. Up to 50 tags, each up to 256 characters.
   */
  "tags"?: Array<string>;

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
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    resources: {
      baseName: "resources",
      type: "Array<SecurityMonitoringBatchMigrationResourceCreateItem>",
      required: true,
    },
    tags: {
      baseName: "tags",
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
    return SecurityMonitoringBatchMigrationCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
