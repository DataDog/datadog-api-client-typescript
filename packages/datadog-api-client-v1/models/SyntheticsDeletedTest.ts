/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing a deleted Synthetic test ID with the associated
 * deletion timestamp.
 */
export class SyntheticsDeletedTest {
  /**
   * Deletion timestamp of the Synthetic test ID.
   */
  "deletedAt"?: Date;
  /**
   * The Synthetic test ID deleted.
   */
  "publicId"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    deletedAt: {
      baseName: "deleted_at",
      type: "Date",
      format: "date-time",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsDeletedTest.attributeTypeMap;
  }

  public constructor() {}
}
