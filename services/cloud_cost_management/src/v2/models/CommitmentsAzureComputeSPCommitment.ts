import { AttributeTypeMap } from "@datadog/datadog-api-client";

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
   * The Azure Savings Plan type, `Compute` or `Database`, based on the product order name. Omitted when
   * the type can't be classified.
   */
  "savingsPlanType"?: string;
  /**
   * The start date of the commitment.
   */
  "startDate"?: string;
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
    committedSpendPerHour: {
      baseName: "committed_spend_per_hour",
      type: "number",
      format: "double",
    },
    expirationDate: {
      baseName: "expiration_date",
      type: "string",
    },
    savingsPlanType: {
      baseName: "savings_plan_type",
      type: "string",
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
    return CommitmentsAzureComputeSPCommitment.attributeTypeMap;
  }

  public constructor() {}
}
