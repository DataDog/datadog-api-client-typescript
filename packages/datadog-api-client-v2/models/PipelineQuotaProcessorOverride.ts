/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PipelineFieldValue } from "./PipelineFieldValue";
import { PipelineQuotaProcessorLimit } from "./PipelineQuotaProcessorLimit";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines a custom quota limit that applies to specific log events based on matching field values.
 */
export class PipelineQuotaProcessorOverride {
  /**
   * A list of field matchers used to apply a specific override. If an event matches all listed key-value pairs, the corresponding override limit is enforced.
   */
  "fields": Array<PipelineFieldValue>;
  /**
   * The maximum amount of data or number of events allowed before the quota is enforced. Can be specified in bytes or events.
   */
  "limit": PipelineQuotaProcessorLimit;

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
    fields: {
      baseName: "fields",
      type: "Array<PipelineFieldValue>",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "PipelineQuotaProcessorLimit",
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
    return PipelineQuotaProcessorOverride.attributeTypeMap;
  }

  public constructor() {}
}
