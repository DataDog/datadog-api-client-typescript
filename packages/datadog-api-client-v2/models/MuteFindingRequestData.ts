/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FindingType } from "./FindingType";
import { MuteFindingRequestAttributes } from "./MuteFindingRequestAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object containing the new mute properties of the finding.
 */
export class MuteFindingRequestData {
  /**
   * The mute properties to be updated.
   */
  "attributes": MuteFindingRequestAttributes;
  /**
   * The unique ID for this finding.
   */
  "id": string;
  /**
   * The JSON:API type for findings.
   */
  "type": FindingType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "MuteFindingRequestAttributes",
      required: true,
    },
    id: {
      type: "string",
      required: true,
    },
    type: {
      type: "FindingType",
      required: true,
    },
  };
}
