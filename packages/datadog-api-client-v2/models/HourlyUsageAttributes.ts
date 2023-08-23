/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HourlyUsageMeasurement } from "./HourlyUsageMeasurement";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of hourly usage for a product family for an org for a time period.
 */
export class HourlyUsageAttributes {
  /**
   * List of the measured usage values for the product family for the org for the time period.
   */
  "measurements"?: Array<HourlyUsageMeasurement>;
  /**
   * The organization name.
   */
  "orgName"?: string;
  /**
   * The product for which usage is being reported.
   */
  "productFamily"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;
  /**
   * The region of the Datadog instance that the organization belongs to.
   */
  "region"?: string;
  /**
   * Datetime in ISO-8601 format, UTC. The hour for the usage.
   */
  "timestamp"?: Date;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    measurements: {
      type: "Array<HourlyUsageMeasurement>",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    productFamily: {
      baseName: "product_family",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    region: {
      type: "string",
    },
    timestamp: {
      type: "Date",
      format: "date-time",
    },
  };
}
