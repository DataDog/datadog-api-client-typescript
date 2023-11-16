/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChargebackBreakdown } from "./ChargebackBreakdown";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Projected Cost attributes data.
 */
export class ProjectedCostAttributes {
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
   * The total projected cost of products for the month.
   */
  "projectedTotalCost"?: number;
  /**
   * The organization public ID.
   */
  "publicId"?: string;
  /**
   * The region of the Datadog instance that the organization belongs to.
   */
  "region"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

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
    projectedTotalCost: {
      baseName: "projected_total_cost",
      type: "number",
      format: "double",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    region: {
      baseName: "region",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProjectedCostAttributes.attributeTypeMap;
  }

  public constructor() {}
}
