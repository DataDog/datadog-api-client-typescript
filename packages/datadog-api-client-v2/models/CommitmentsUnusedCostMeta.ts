/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata reporting that the cost data lacks the unused costs of some commitments, as with Azure exports
 * scoped below the billing profile. Utilization is then overstated, and realized savings and effective
 * savings rate are upper bounds. Omitted when the unused costs are available.
 */
export class CommitmentsUnusedCostMeta {
  /**
   * Whether the cost data lacks the unused costs of some commitments.
   */
  "unusedCostUnavailable"?: boolean;

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
    unusedCostUnavailable: {
      baseName: "unused_cost_unavailable",
      type: "boolean",
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
    return CommitmentsUnusedCostMeta.attributeTypeMap;
  }

  public constructor() {}
}
