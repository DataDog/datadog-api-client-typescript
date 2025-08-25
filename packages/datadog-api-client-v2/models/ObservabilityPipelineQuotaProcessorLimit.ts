/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineQuotaProcessorLimitEnforceType } from "./ObservabilityPipelineQuotaProcessorLimitEnforceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The maximum amount of data or number of events allowed before the quota is enforced. Can be specified in bytes or events.
 */
export class ObservabilityPipelineQuotaProcessorLimit {
  /**
   * Unit for quota enforcement in bytes for data size or events for count.
   */
  "enforce": ObservabilityPipelineQuotaProcessorLimitEnforceType;
  /**
   * The limit for quota enforcement.
   */
  "limit": number;

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
    enforce: {
      baseName: "enforce",
      type: "ObservabilityPipelineQuotaProcessorLimitEnforceType",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      required: true,
      format: "int64",
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
    return ObservabilityPipelineQuotaProcessorLimit.attributeTypeMap;
  }

  public constructor() {}
}
