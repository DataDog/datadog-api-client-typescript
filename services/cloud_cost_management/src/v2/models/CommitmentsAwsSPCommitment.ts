import { AttributeTypeMap } from "@datadog/datadog-api-client";

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
   * The payment option for the Savings Plan.
   */
  "purchaseOption": string;
  /**
   * The Savings Plan type.
   */
  "savingsPlanType": string;
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
    purchaseOption: {
      baseName: "purchase_option",
      type: "string",
      required: true,
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
    return CommitmentsAwsSPCommitment.attributeTypeMap;
  }

  public constructor() {}
}
