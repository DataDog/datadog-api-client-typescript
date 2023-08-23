/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostByOrgAttributes } from "./CostByOrgAttributes";
import { CostByOrgType } from "./CostByOrgType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Cost data.
 */
export class CostByOrg {
  /**
   * Cost attributes data.
   */
  "attributes"?: CostByOrgAttributes;
  /**
   * Unique ID of the response.
   */
  "id"?: string;
  /**
   * Type of cost data.
   */
  "type"?: CostByOrgType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "CostByOrgAttributes",
    },
    id: {
      type: "string",
    },
    type: {
      type: "CostByOrgType",
    },
  };
}
