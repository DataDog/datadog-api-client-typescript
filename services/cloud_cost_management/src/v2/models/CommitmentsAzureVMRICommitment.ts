import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsAzureVMRIStatus } from "./CommitmentsAzureVMRIStatus";

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
   * The Azure product of the reservation. Omitted when it cannot be classified.
   */
  "product"?: string;
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
   * The commitment term in whole months. Omitted when the term is unknown.
   */
  "termLengthMonths"?: number;
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
    product: {
      baseName: "product",
      type: "string",
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
    return CommitmentsAzureVMRICommitment.attributeTypeMap;
  }

  public constructor() {}
}
