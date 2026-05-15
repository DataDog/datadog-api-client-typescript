/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostOrchestrator } from "./CostOrchestrator";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * List of container orchestrators detected in Cloud Cost Management data for the requested period.
 */
export class CostOrchestratorsResponse {
  /**
   * List of detected container orchestrators.
   */
  "data": Array<CostOrchestrator>;

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
      type: "Array<CostOrchestrator>",
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
    return CostOrchestratorsResponse.attributeTypeMap;
  }

  public constructor() {}
}
