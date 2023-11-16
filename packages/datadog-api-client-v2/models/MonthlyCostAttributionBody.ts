/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostAttributionType } from "./CostAttributionType";
import { MonthlyCostAttributionAttributes } from "./MonthlyCostAttributionAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Cost data.
 */
export class MonthlyCostAttributionBody {
  /**
   * Cost Attribution by Tag for a given organization.
   */
  "attributes"?: MonthlyCostAttributionAttributes;
  /**
   * Unique ID of the response.
   */
  "id"?: string;
  /**
   * Type of cost attribution data.
   */
  "type"?: CostAttributionType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "MonthlyCostAttributionAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CostAttributionType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonthlyCostAttributionBody.attributeTypeMap;
  }

  public constructor() {}
}
