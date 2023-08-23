/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FindingType } from "./FindingType";
import { MuteFindingResponseAttributes } from "./MuteFindingResponseAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object containing the updated finding.
 */
export class MuteFindingResponseData {
  /**
   * The JSON:API attributes of the finding.
   */
  "attributes"?: MuteFindingResponseAttributes;
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
      type: "MuteFindingResponseAttributes",
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
}
