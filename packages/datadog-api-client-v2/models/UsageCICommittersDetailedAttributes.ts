/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response containing CI Committers Detailed attributes for specified organization.
 */
export class UsageCICommittersDetailedAttributes {
  /**
   * The organization name.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;
  /**
   * The region of the organization.
   */
  "region"?: string;
  /**
   * Shows the hour of the usage.
   */
  "timestamp"?: Date;
  /**
   * The usage type associated with the commit.
   */
  "usageType"?: string;
  /**
   * The user email of CI committer.
   */
  "userEmail"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    region: {
      baseName: "region",
      type: "string",
    },
    timestamp: {
      baseName: "timestamp",
      type: "Date",
      format: "date-time",
    },
    usageType: {
      baseName: "usage_type",
      type: "string",
    },
    userEmail: {
      baseName: "user_email",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageCICommittersDetailedAttributes.attributeTypeMap;
  }

  public constructor() {}
}
