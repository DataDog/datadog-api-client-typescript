import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * AWS EC2 Reserved Instance commitment details.
 */
export class CommitmentsAwsEC2RICommitment {
  /**
   * The availability zone of the reservation.
   */
  "availabilityZone"?: string;
  /**
   * The unique identifier of the Reserved Instance.
   */
  "commitmentId": string;
  /**
   * The expiration date of the commitment.
   */
  "expirationDate"?: string;
  /**
   * The EC2 instance type.
   */
  "instanceType": string;
  /**
   * The number of Normalized Capacity Units.
   */
  "numberOfNfus"?: number;
  /**
   * The number of reserved instances.
   */
  "numberOfReservations"?: number;
  /**
   * The offering class of the Reserved Instance.
   */
  "offeringClass": string;
  /**
   * The operating system of the Reserved Instance.
   */
  "operatingSystem": string;
  /**
   * The payment option for the Reserved Instance.
   */
  "purchaseOption": string;
  /**
   * The AWS region of the Reserved Instance.
   */
  "region": string;
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
    availabilityZone: {
      baseName: "availability_zone",
      type: "string",
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
    numberOfNfus: {
      baseName: "number_of_nfus",
      type: "number",
      format: "double",
    },
    numberOfReservations: {
      baseName: "number_of_reservations",
      type: "number",
      format: "double",
    },
    offeringClass: {
      baseName: "offering_class",
      type: "string",
      required: true,
    },
    operatingSystem: {
      baseName: "operating_system",
      type: "string",
      required: true,
    },
    purchaseOption: {
      baseName: "purchase_option",
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
    return CommitmentsAwsEC2RICommitment.attributeTypeMap;
  }

  public constructor() {}
}
