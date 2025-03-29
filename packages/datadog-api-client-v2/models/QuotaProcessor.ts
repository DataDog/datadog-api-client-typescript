/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { QuotaLimit } from "./QuotaLimit";
import { QuotaProcessorOverride } from "./QuotaProcessorOverride";
import { QuotaProcessorType } from "./QuotaProcessorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The Quota Processor measures logging traffic for logs that match a specified filter. When the configured daily quota is met, the processor can drop or alert.
 */
export class QuotaProcessor {
  /**
   * The `QuotaProcessor` `drop_events`.
   */
  "dropEvents": boolean;
  /**
   * Unique identifier.
   */
  "id": string;
  /**
   * The `QuotaProcessor` `ignore_when_missing_partitions`.
   */
  "ignoreWhenMissingPartitions"?: boolean;
  /**
   * The `QuotaProcessor` `inputs`.
   */
  "inputs": Array<string>;
  /**
   * Unified definition of `QuotaLimit` object.
   */
  "limit": QuotaLimit;
  /**
   * The `QuotaProcessor` `name`.
   */
  "name": string;
  /**
   * The `QuotaProcessor` `overrides`.
   */
  "overrides"?: Array<QuotaProcessorOverride>;
  /**
   * The `QuotaProcessor` `partition_fields`.
   */
  "partitionFields"?: Array<string>;
  /**
   * The definition of `QuotaProcessorType` object.
   */
  "type": QuotaProcessorType;

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
    dropEvents: {
      baseName: "drop_events",
      type: "boolean",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    ignoreWhenMissingPartitions: {
      baseName: "ignore_when_missing_partitions",
      type: "boolean",
    },
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "QuotaLimit",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    overrides: {
      baseName: "overrides",
      type: "Array<QuotaProcessorOverride>",
    },
    partitionFields: {
      baseName: "partition_fields",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "QuotaProcessorType",
      required: true,
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
    return QuotaProcessor.attributeTypeMap;
  }

  public constructor() {}
}
