/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS ElastiCache Reserved Instance commitment details.
 */
export class CommitmentsAwsElasticacheRICommitment {
  /**
   * The cache engine type of the Reserved Instance.
   */
  "cacheEngine": string;
  /**
   * The unique identifier of the Reserved Instance.
   */
  "commitmentId": string;
  /**
   * The expiration date of the commitment.
   */
  "expirationDate"?: string;
  /**
   * The ElastiCache instance type.
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
    cacheEngine: {
      baseName: "cache_engine",
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
    return CommitmentsAwsElasticacheRICommitment.attributeTypeMap;
  }

  public constructor() {}
}
