/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringBatchMigrationPublishedResourceStatus } from "./SecurityMonitoringBatchMigrationPublishedResourceStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the publication outcome of a batch migration resource.
 */
export class SecurityMonitoringBatchMigrationPublishedResourceAttributes {
  /**
   * The reason why the resource could not be published.
   */
  "error"?: string;
  /**
   * The ID of the created Cloud SIEM detection rule.
   */
  "ruleId"?: string;
  /**
   * The outcome of publishing a batch migration resource.
   */
  "status": SecurityMonitoringBatchMigrationPublishedResourceStatus;

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
    error: {
      baseName: "error",
      type: "string",
    },
    ruleId: {
      baseName: "ruleId",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "SecurityMonitoringBatchMigrationPublishedResourceStatus",
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
    return SecurityMonitoringBatchMigrationPublishedResourceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
