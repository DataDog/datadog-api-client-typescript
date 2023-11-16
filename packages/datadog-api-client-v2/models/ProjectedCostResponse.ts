/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProjectedCost } from "./ProjectedCost";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Projected Cost response.
 */
export class ProjectedCostResponse {
  /**
   * Response containing Projected Cost.
   */
  "data"?: Array<ProjectedCost>;

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
      type: "Array<ProjectedCost>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProjectedCostResponse.attributeTypeMap;
  }

  public constructor() {}
}
