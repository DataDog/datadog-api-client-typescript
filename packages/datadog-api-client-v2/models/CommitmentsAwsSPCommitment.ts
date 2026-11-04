/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * AWS Savings Plan commitment details.
 */
export class CommitmentsAwsSPCommitment {
  /**
   * The unique identifier of the Savings Plan.
   */
  "commitmentId": string;
  /**
   * The hourly committed spend for the Savings Plan.
   */
  "committedSpendPerHour"?: number;
  /**
   * The expiration date of the commitment.
   */
  "expirationDate"?: string;
  /**
   * The EC2 instance family covered by the Savings Plan. Returned only for EC2 Instance Savings Plans.
   */
  "instanceTypeFamily"?: string;
  /**
   * The payment option for the Savings Plan.
   */
  "purchaseOption": string;
  /**
   * The AWS region covered by the Savings Plan. Returned only for EC2 Instance Savings Plans.
   */
  "region"?: string;
  /**
   * The Savings Plan type.
   */
  "savingsPlanType": string;
  /**
   * The start date of the commitment.
   */
  "startDate"?: string;
  /**
   * The commitment term in whole months. Omitted when the term is unknown.
   */
  "termLengthMonths"?: Int64;
  /**
   * The utilization percentage of the commitment, from 0 to 100.
   */
  "utilization"?: number;

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
    commitmentId: {
      baseName: "commitment_id",
      type: "string",
      required: true,
    },
    committedSpendPerHour: {
      baseName: "committed_spend_per_hour",
      type: "number",
      format: "double",
    },
    expirationDate: {
      baseName: "expiration_date",
      type: "string",
    },
    instanceTypeFamily: {
      baseName: "instance_type_family",
      type: "string",
    },
    purchaseOption: {
      baseName: "purchase_option",
      type: "string",
      required: true,
    },
    region: {
      baseName: "region",
      type: "string",
    },
    savingsPlanType: {
      baseName: "savings_plan_type",
      type: "string",
      required: true,
    },
    startDate: {
      baseName: "start_date",
      type: "string",
    },
    termLengthMonths: {
      baseName: "term_length_months",
      type: "number",
      format: "int64",
    },
    utilization: {
      baseName: "utilization",
      type: "number",
      format: "double",
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
    return CommitmentsAwsSPCommitment.attributeTypeMap;
  }

  public constructor() {}
}
