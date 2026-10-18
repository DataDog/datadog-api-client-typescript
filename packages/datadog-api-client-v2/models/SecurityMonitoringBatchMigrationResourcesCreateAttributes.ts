/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringBatchMigrationResourceCreateItem } from "./SecurityMonitoringBatchMigrationResourceCreateItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the resources to add to a batch migration.
 */
export class SecurityMonitoringBatchMigrationResourcesCreateAttributes {
  /**
   * The resources to add. From 1 to 1000 resources.
   */
  "resources": Array<SecurityMonitoringBatchMigrationResourceCreateItem>;

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
    resources: {
      baseName: "resources",
      type: "Array<SecurityMonitoringBatchMigrationResourceCreateItem>",
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
    return SecurityMonitoringBatchMigrationResourcesCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
