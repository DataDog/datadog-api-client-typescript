/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BulkMuteFindingsRequestMetaFindings } from "./BulkMuteFindingsRequestMetaFindings";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Meta object containing the findings to be updated.
 */
export class BulkMuteFindingsRequestMeta {
  /**
   * Array of findings.
   */
  "findings"?: Array<BulkMuteFindingsRequestMetaFindings>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    findings: {
      baseName: "findings",
      type: "Array<BulkMuteFindingsRequestMetaFindings>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return BulkMuteFindingsRequestMeta.attributeTypeMap;
  }

  public constructor() {}
}
