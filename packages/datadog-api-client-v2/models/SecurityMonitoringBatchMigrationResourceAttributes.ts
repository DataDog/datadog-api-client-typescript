/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringBatchMigrationResourceInputType } from "./SecurityMonitoringBatchMigrationResourceInputType";
import { SecurityMonitoringBatchMigrationResourceStatus } from "./SecurityMonitoringBatchMigrationResourceStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a batch migration resource.
 */
export class SecurityMonitoringBatchMigrationResourceAttributes {
  /**
   * The UUID of the batch migration that contains the resource.
   */
  "batchId": string;
  /**
   * The creation date of the resource, in RFC 3339 format.
   */
  "createdAt": Date;
  /**
   * The UUID of the user or service account who created the resource.
   */
  "createdBy"?: string;
  /**
   * The description of the resource.
   */
  "description"?: string;
  /**
   * The source query or natural language description to translate.
   */
  "input": string;
  /**
   * The type of the source rule: `spl` for a Splunk SPL search or saved search definition,
   * `natural_language` for a plain-English description of the behavior to detect, or `kql`
   * for a Microsoft KQL query. SPL inputs must be self-contained, with search macros expanded.
   */
  "inputType": SecurityMonitoringBatchMigrationResourceInputType;
  /**
   * The last update date of the resource, in RFC 3339 format.
   */
  "lastUpdatedAt": Date;
  /**
   * The UUID of the user or service account who last updated the resource,
   * or the name of a system actor.
   */
  "lastUpdatedBy"?: string;
  /**
   * The name of the resource.
   */
  "name": string;
  /**
   * The translation output. When the resource is `completed`, a Cloud SIEM detection rule
   * definition in the same format as the create detection rule API. When the resource is
   * `failed`, an object with an `error` describing the failure, with `kind` set to
   * `translation_error` or `internal_error`, and optional `type` and `message`. Otherwise, null.
   */
  "output": { [key: string]: any } | null;
  /**
   * The type of the translation output. Currently always `siem_rule`.
   */
  "outputType": string;
  /**
   * The ID of the Cloud SIEM detection rule created when the resource was published.
   */
  "ruleId"?: string;
  /**
   * The status of a batch migration resource. `completed` resources have a translation in
   * `output` that is ready to be published. `duplicate` is reserved for future duplicate rule
   * detection.
   */
  "status": SecurityMonitoringBatchMigrationResourceStatus;

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
    batchId: {
      baseName: "batchId",
      type: "string",
      required: true,
      format: "uuid",
    },
    createdAt: {
      baseName: "createdAt",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "createdBy",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    input: {
      baseName: "input",
      type: "string",
      required: true,
    },
    inputType: {
      baseName: "inputType",
      type: "SecurityMonitoringBatchMigrationResourceInputType",
      required: true,
    },
    lastUpdatedAt: {
      baseName: "lastUpdatedAt",
      type: "Date",
      required: true,
      format: "date-time",
    },
    lastUpdatedBy: {
      baseName: "lastUpdatedBy",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    output: {
      baseName: "output",
      type: "{ [key: string]: any; }",
      required: true,
    },
    outputType: {
      baseName: "outputType",
      type: "string",
      required: true,
    },
    ruleId: {
      baseName: "ruleId",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "SecurityMonitoringBatchMigrationResourceStatus",
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
    return SecurityMonitoringBatchMigrationResourceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
