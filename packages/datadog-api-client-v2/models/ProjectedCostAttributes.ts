/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChargebackBreakdown } from "./ChargebackBreakdown";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Projected Cost attributes data.
*/
export class ProjectedCostAttributes {
  /**
   * The account name.
  */
  "accountName"?: string;
  /**
   * The account public ID.
  */
  "accountPublicId"?: string;
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
    "accountName": {
      "baseName": "account_name",
      "type": "string",
    },
    "accountPublicId": {
      "baseName": "account_public_id",
      "type": "string",
    },
    "charges": {
      "baseName": "charges",
      "type": "Array<ChargebackBreakdown>",
    },
    "date": {
      "baseName": "date",
      "type": "Date",
      "format": "date-time",
    },
    "orgName": {
      "baseName": "org_name",
      "type": "string",
    },
    "projectedTotalCost": {
      "baseName": "projected_total_cost",
      "type": "number",
      "format": "double",
    },
    "publicId": {
      "baseName": "public_id",
      "type": "string",
    },
    "region": {
      "baseName": "region",
      "type": "string",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return ProjectedCostAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









