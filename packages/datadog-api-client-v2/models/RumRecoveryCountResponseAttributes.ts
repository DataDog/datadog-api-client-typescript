/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Approximate recoverable count.
 */
export class RumRecoveryCountResponseAttributes {
  /**
   * Estimated distinct recoverable sessions not already retained in hot storage. The full estimate is returned without capping it at max_recoverable_sessions.
   */
  "estimatedCount": Int64;
  /**
   * Configured maximum estimated recoverable sessions per batch (100,000 by default). Estimates equal to this value are accepted at creation.
   */
  "maxRecoverableSessions": Int64;

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
    estimatedCount: {
      baseName: "estimated_count",
      type: "number",
      required: true,
      format: "int64",
    },
    maxRecoverableSessions: {
      baseName: "max_recoverable_sessions",
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
    return RumRecoveryCountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
