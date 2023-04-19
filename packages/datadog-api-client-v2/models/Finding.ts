/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FindingAttributes } from "./FindingAttributes";
import { FindingType } from "./FindingType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single finding without message and resource configuration.
 */
export class Finding {
  /**
   * The JSON:API attributes of the finding.
   */
  "attributes"?: FindingAttributes;
  /**
   * The unique ID for this finding.
   */
  "id"?: string;
  /**
   * The JSON:API type for findings.
   */
  "type"?: FindingType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "FindingAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "FindingType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return Finding.attributeTypeMap;
  }

  public constructor() {}
}
