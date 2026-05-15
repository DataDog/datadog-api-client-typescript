/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CommitmentsAzureVMRIStatus } from "./CommitmentsAzureVMRIStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Azure Virtual Machine Reserved Instance commitment details.
 */
export class CommitmentsAzureVMRICommitment {
  /**
   * The display name of the Azure reservation.
   */
  "benefitName": string;
  /**
   * The unique identifier of the Reserved Instance.
   */
  "commitmentId": string;
  /**
   * The expiration date of the commitment.
   */
  "expirationDate"?: string;
  /**
   * The Azure VM instance type.
   */
  "instanceType": string;
  /**
   * The Azure meter sub-category for the reservation.
   */
  "meterSubCategory": string;
  /**
   * The Azure region of the Reserved Instance.
   */
  "region": string;
  /**
   * The start date of the commitment.
   */
  "startDate"?: string;
  /**
   * Status of an Azure VM Reserved Instance.
   */
  "status": CommitmentsAzureVMRIStatus;
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
    expirationDate: {
      baseName: "expiration_date",
      type: "string",
    },
    instanceType: {
      baseName: "instance_type",
      type: "string",
      required: true,
    },
    meterSubCategory: {
      baseName: "meter_sub_category",
      type: "string",
      required: true,
    },
    region: {
      baseName: "region",
      type: "string",
      required: true,
    },
    startDate: {
      baseName: "start_date",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "CommitmentsAzureVMRIStatus",
      required: true,
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
    return CommitmentsAzureVMRICommitment.attributeTypeMap;
  }

  public constructor() {}
}
