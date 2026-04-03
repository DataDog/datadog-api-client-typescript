/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AllocationDataRequest } from "./AllocationDataRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request to overwrite targeting rules (allocations) for a feature flag in an environment.
 */
export class OverwriteAllocationsRequest {
  /**
   * Targeting rules (allocations) to replace existing ones with.
   */
  "data": Array<AllocationDataRequest>;

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
    data: {
      baseName: "data",
      type: "Array<AllocationDataRequest>",
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
    return OverwriteAllocationsRequest.attributeTypeMap;
  }

  public constructor() {}
}
