/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringBatchMigrationData } from "./SecurityMonitoringBatchMigrationData";
import { SecurityMonitoringBatchMigrationListMeta } from "./SecurityMonitoringBatchMigrationListMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a page of batch migrations.
 */
export class SecurityMonitoringBatchMigrationsListResponse {
  /**
   * The batch migrations.
   */
  "data": Array<SecurityMonitoringBatchMigrationData>;
  /**
   * Metadata of a list response.
   */
  "meta": SecurityMonitoringBatchMigrationListMeta;

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
    data: {
      baseName: "data",
      type: "Array<SecurityMonitoringBatchMigrationData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "SecurityMonitoringBatchMigrationListMeta",
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
    return SecurityMonitoringBatchMigrationsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
