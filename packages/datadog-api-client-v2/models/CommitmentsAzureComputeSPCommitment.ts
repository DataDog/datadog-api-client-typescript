/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Azure Compute Savings Plan commitment details.
 */
export class CommitmentsAzureComputeSPCommitment {
  /**
   * The display name of the Azure Savings Plan.
   */
  "benefitName": string;
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
   * The start date of the commitment.
   */
  "startDate"?: string;
  /**
   * The term length in years.
   */
  "termLength"?: number;
  /**
   * The utilization percentage of the commitment.
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
    benefitName: {
      baseName: "benefit_name",
      type: "string",
      required: true,
    },
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
    startDate: {
      baseName: "start_date",
      type: "string",
    },
    termLength: {
      baseName: "term_length",
      type: "number",
      format: "double",
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
    return CommitmentsAzureComputeSPCommitment.attributeTypeMap;
  }

  public constructor() {}
}
