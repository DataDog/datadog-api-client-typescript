/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * The number of resources of a batch migration in each status.
 */
export class SecurityMonitoringBatchMigrationResourceStatusCounts {
  /**
   * Number of resources whose translation was canceled.
   */
  "canceled": Int64;
  /**
   * Number of resources translated and ready to be published.
   */
  "completed": Int64;
  /**
   * Number of resources identified as duplicates of an existing rule. Reserved for future use.
   */
  "duplicate": Int64;
  /**
   * Number of resources whose translation failed.
   */
  "failed": Int64;
  /**
   * Number of resources being translated.
   */
  "inProgress": Int64;
  /**
   * Number of resources waiting to be translated.
   */
  "pending": Int64;
  /**
   * Number of resources published as Cloud SIEM detection rules.
   */
  "published": Int64;
  /**
   * Number of resources being published.
   */
  "publishing": Int64;

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
    canceled: {
      baseName: "canceled",
      type: "number",
      required: true,
      format: "int64",
    },
    completed: {
      baseName: "completed",
      type: "number",
      required: true,
      format: "int64",
    },
    duplicate: {
      baseName: "duplicate",
      type: "number",
      required: true,
      format: "int64",
    },
    failed: {
      baseName: "failed",
      type: "number",
      required: true,
      format: "int64",
    },
    inProgress: {
      baseName: "inProgress",
      type: "number",
      required: true,
      format: "int64",
    },
    pending: {
      baseName: "pending",
      type: "number",
      required: true,
      format: "int64",
    },
    published: {
      baseName: "published",
      type: "number",
      required: true,
      format: "int64",
    },
    publishing: {
      baseName: "publishing",
      type: "number",
      required: true,
      format: "int64",
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
    return SecurityMonitoringBatchMigrationResourceStatusCounts.attributeTypeMap;
  }

  public constructor() {}
}
