/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChargebackBreakdown } from "./ChargebackBreakdown";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Cost attributes data.
 */
export class CostByOrgAttributes {
  /**
   * List of charges data reported for the requested month.
   */
  "charges"?: Array<ChargebackBreakdown>;
  /**
   * The month requested.
   */
  "date"?: Date;
  /**
   * The organization name.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;
  /**
   * The total cost of products for the month.
   */
  "totalCost"?: number;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    charges: {
      baseName: "charges",
      type: "Array<ChargebackBreakdown>",
    },
    date: {
      baseName: "date",
      type: "Date",
      format: "date-time",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    totalCost: {
      baseName: "total_cost",
      type: "number",
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CostByOrgAttributes.attributeTypeMap;
  }

  public constructor() {}
}
