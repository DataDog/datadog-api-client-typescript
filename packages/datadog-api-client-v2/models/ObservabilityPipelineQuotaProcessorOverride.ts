/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineFieldValue } from "./ObservabilityPipelineFieldValue";
import { ObservabilityPipelineQuotaProcessorLimit } from "./ObservabilityPipelineQuotaProcessorLimit";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines a custom quota limit that applies to specific log events based on matching field values.
 */
export class ObservabilityPipelineQuotaProcessorOverride {
  /**
   * A list of field matchers used to apply a specific override. If an event matches all listed key-value pairs, the corresponding override limit is enforced.
   */
  "fields": Array<ObservabilityPipelineFieldValue>;
  /**
   * The maximum amount of data or number of events allowed before the quota is enforced. Can be specified in bytes or events.
   */
  "limit": ObservabilityPipelineQuotaProcessorLimit;

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
      type: "Array<ObservabilityPipelineFieldValue>",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "ObservabilityPipelineQuotaProcessorLimit",
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
    return ObservabilityPipelineQuotaProcessorOverride.attributeTypeMap;
  }

  public constructor() {}
}
