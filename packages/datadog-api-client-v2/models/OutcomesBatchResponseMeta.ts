/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata pertaining to the bulk operation.
 */
export class OutcomesBatchResponseMeta {
  /**
   * Total number of scorecard results received during the bulk operation.
   */
  "totalReceived"?: number;
  /**
   * Total number of scorecard results modified during the bulk operation.
   */
  "totalUpdated"?: number;

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
    totalReceived: {
      baseName: "total_received",
      type: "number",
      format: "int64",
    },
    totalUpdated: {
      baseName: "total_updated",
      type: "number",
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
    return OutcomesBatchResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
