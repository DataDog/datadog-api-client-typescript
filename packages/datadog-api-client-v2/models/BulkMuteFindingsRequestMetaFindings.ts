/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Finding object containing the finding information.
 */
export class BulkMuteFindingsRequestMetaFindings {
  /**
   * The unique ID for this finding.
   */
  "findingId"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    findingId: {
      baseName: "finding_id",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return BulkMuteFindingsRequestMetaFindings.attributeTypeMap;
  }

  public constructor() {}
}
